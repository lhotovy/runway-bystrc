import crypto from "node:crypto";
import { Agent } from "@cursor/sdk";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const RECENT_TRIGGER_TTL_MS = 15 * 60 * 1000;
const DEFAULT_REPO_URL = "https://github.com/lhotovy/runway-bystrc.git";
const DEFAULT_BASE_BRANCH = "master";

type AsanaWebhookEvent = {
  action?: string;
  resource?: {
    gid?: string;
    resource_type?: string;
    name?: string;
  };
};

type AsanaWebhookPayload = {
  events?: AsanaWebhookEvent[];
};

type AsanaTaskMembership = {
  project?: {
    gid?: string;
    name?: string;
  };
  section?: {
    gid?: string;
    name?: string;
  };
};

type AsanaTaskResponse = {
  data?: {
    gid?: string;
    name?: string;
    notes?: string;
    html_notes?: string;
    permalink_url?: string;
    memberships?: AsanaTaskMembership[];
  };
};

type AsanaAttachmentResponse = {
  data?: Array<{
    gid?: string;
    name?: string;
    resource_subtype?: string;
    download_url?: string | null;
    permanent_url?: string | null;
    view_url?: string | null;
    host?: string | null;
  }>;
};

type PreparedTaskSummary = {
  taskGid: string;
  taskName: string | null;
  taskNotes: string | null;
  taskHtmlNotes: string | null;
  permalinkUrl: string | null;
  memberships: Array<{
    projectGid: string | null;
    projectName: string | null;
    sectionGid: string | null;
    sectionName: string | null;
  }>;
  attachmentCount: number;
  attachments: Array<{
    gid: string | null;
    name: string | null;
    resourceSubtype: string | null;
    downloadUrl: string | null;
    permanentUrl: string | null;
    viewUrl: string | null;
    host: string | null;
  }>;
  matchesTriggerSection: boolean;
  triggerAccepted: boolean;
  recentlyTriggered: boolean;
};

type AgentLaunchResult =
  | {
      status: "disabled";
      reason: string;
    }
  | {
      status: "started";
      agentId: string;
      runId: string;
    }
  | {
      status: "error";
      error: string;
    };

declare global {
  var asanaRecentTriggers: Map<string, number> | undefined;
}

function verifyAsanaSignature(rawBody: string, signature: string, secret: string) {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("hex");

  const provided = Buffer.from(signature, "utf8");
  const expected = Buffer.from(expectedSignature, "utf8");

  if (provided.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(provided, expected);
}

function getRecentTriggerStore() {
  if (!globalThis.asanaRecentTriggers) {
    globalThis.asanaRecentTriggers = new Map<string, number>();
  }

  return globalThis.asanaRecentTriggers;
}

function isRecentlyTriggered(taskGid: string) {
  const store = getRecentTriggerStore();
  const now = Date.now();

  for (const [storedTaskGid, timestamp] of Array.from(store.entries())) {
    if (now - timestamp > RECENT_TRIGGER_TTL_MS) {
      store.delete(storedTaskGid);
    }
  }

  const previousTimestamp = store.get(taskGid);

  if (!previousTimestamp) {
    return false;
  }

  return now - previousTimestamp <= RECENT_TRIGGER_TTL_MS;
}

function markTriggered(taskGid: string) {
  getRecentTriggerStore().set(taskGid, Date.now());
}

function buildAgentPrompt(task: PreparedTaskSummary) {
  const attachmentLines =
    task.attachments.length > 0
      ? task.attachments
          .map((attachment, index) => {
            const usableUrl = attachment.downloadUrl ?? attachment.viewUrl ?? attachment.permanentUrl;

            return [
              `${index + 1}. ${attachment.name ?? "Unnamed attachment"}`,
              `   - type: ${attachment.resourceSubtype ?? "unknown"}`,
              `   - url: ${usableUrl ?? "unavailable"}`,
            ].join("\n");
          })
          .join("\n")
      : "None";

  return `You are updating the Runway Bystrc website repository from an Asana content request.

Repository guidance:
- This is a bilingual Czech/English website.
- If the task only provides Czech copy, create English translations that match the existing tone and structure.
- Prefer updating existing content data files such as src/data/activities.tsx and src/data/staticPages/*.
- Place or update image assets under public/.
- If you use an attached image, download it from the provided URL and convert it to webp before wiring it into the site.
- Keep changes scoped to the task.
- If the request is ambiguous, do not guess broadly; make the smallest safe change or stop without unrelated edits.

Required workflow:
1. Inspect the repository to determine the correct content location.
2. Apply the requested content change.
3. Run pnpm lint.
4. Run pnpm build.
5. Create a pull request summarizing the change and reference the Asana task URL in the PR body.

Asana task:
- Task ID: ${task.taskGid}
- Title: ${task.taskName ?? "Untitled"}
- URL: ${task.permalinkUrl ?? "Unavailable"}

Task notes:
${task.taskNotes ?? "(empty)"}

Attachments:
${attachmentLines}
`;
}

async function launchCursorAgent(task: PreparedTaskSummary): Promise<AgentLaunchResult> {
  const triggerEnabled = process.env.ASANA_ENABLE_AGENT_TRIGGER === "true";

  if (!triggerEnabled) {
    return {
      status: "disabled",
      reason: "ASANA_ENABLE_AGENT_TRIGGER is not set to true",
    };
  }

  const apiKey = process.env.CURSOR_API_KEY;

  if (!apiKey) {
    return {
      status: "disabled",
      reason: "CURSOR_API_KEY is not configured",
    };
  }

  const repoUrl = process.env.CURSOR_REPO_URL ?? DEFAULT_REPO_URL;
  const baseBranch = process.env.CURSOR_BASE_BRANCH ?? DEFAULT_BASE_BRANCH;
  const modelId = process.env.CURSOR_MODEL_ID ?? "composer-2.5";
  const agent = await Agent.create({
    apiKey,
    name: `Asana ${task.taskGid}`,
    model: { id: modelId },
    cloud: {
      repos: [
        {
          url: repoUrl,
          startingRef: baseBranch,
        },
      ],
      autoCreatePR: true,
      skipReviewerRequest: true,
    },
    idempotencyKey: `asana-agent-${task.taskGid}`,
  });

  try {
    const run = await agent.send(buildAgentPrompt(task), {
      idempotencyKey: `asana-run-${task.taskGid}`,
    });

    return {
      status: "started",
      agentId: agent.agentId,
      runId: run.id,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Cursor launch error";

    return {
      status: "error",
      error: message,
    };
  } finally {
    await agent[Symbol.asyncDispose]();
  }
}

async function fetchAsanaTask(taskGid: string, token: string) {
  const params = new URLSearchParams({
    opt_fields: [
      "gid",
      "name",
      "notes",
      "html_notes",
      "permalink_url",
      "memberships.project.gid",
      "memberships.project.name",
      "memberships.section.gid",
      "memberships.section.name",
    ].join(","),
  });

  const response = await fetch(`https://app.asana.com/api/1.0/tasks/${taskGid}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch task ${taskGid}: ${response.status} ${errorText}`);
  }

  return response.json() as Promise<AsanaTaskResponse>;
}

async function fetchAsanaAttachments(taskGid: string, token: string) {
  const params = new URLSearchParams({
    opt_fields: [
      "gid",
      "name",
      "resource_subtype",
      "download_url",
      "permanent_url",
      "view_url",
      "host",
    ].join(","),
  });

  const response = await fetch(
    `https://app.asana.com/api/1.0/tasks/${taskGid}/attachments?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch attachments for task ${taskGid}: ${response.status} ${errorText}`);
  }

  return response.json() as Promise<AsanaAttachmentResponse>;
}

export async function POST(request: NextRequest) {
  const hookSecret = request.headers.get("x-hook-secret");

  // During webhook creation, Asana sends a handshake request that must echo
  // the same secret header back in a 200/204 response.
  if (hookSecret) {
    console.log("[asana-webhook] Handshake received");

    return new NextResponse(null, {
      status: 204,
      headers: {
        "X-Hook-Secret": hookSecret,
      },
    });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-hook-signature");
  const configuredSecret = process.env.ASANA_WEBHOOK_SECRET;

  if (configuredSecret) {
    if (!signature || !verifyAsanaSignature(rawBody, signature, configuredSecret)) {
      console.warn("[asana-webhook] Invalid signature");

      return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
    }
  } else {
    console.warn("[asana-webhook] ASANA_WEBHOOK_SECRET is not configured; skipping signature verification");
  }

  let payload: unknown = null;

  try {
    payload = rawBody ? JSON.parse(rawBody) : null;
  } catch (error) {
    console.error("[asana-webhook] Failed to parse payload", error);

    return NextResponse.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  console.log("[asana-webhook] Event received", payload);

  const asanaToken = process.env.ASANA_PAT;

  if (!asanaToken) {
    console.warn("[asana-webhook] ASANA_PAT is not configured; skipping task lookup");

    return NextResponse.json({
      ok: true,
      message: "Webhook received",
    });
  }

  const triggerSectionGid = process.env.ASANA_TRIGGER_SECTION_GID;
  const events = Array.isArray((payload as AsanaWebhookPayload)?.events)
    ? (payload as AsanaWebhookPayload).events ?? []
    : [];

  const taskGids = Array.from(
    new Set(
      events
        .filter((event) => event.resource?.resource_type === "task" && event.resource.gid)
        .map((event) => event.resource?.gid as string)
    )
  );

  if (taskGids.length === 0) {
    console.log("[asana-webhook] No task events found in payload");

    return NextResponse.json({
      ok: true,
      message: "Webhook received",
    });
  }

  const taskSummaries = await Promise.all(
    taskGids.map(async (taskGid) => {
      try {
        const taskResponse = await fetchAsanaTask(taskGid, asanaToken);
        const task = taskResponse.data;
        const memberships = task?.memberships ?? [];
        const matchingMembership = triggerSectionGid
          ? memberships.find((membership) => membership.section?.gid === triggerSectionGid)
          : null;
        const recentlyTriggered = triggerSectionGid ? isRecentlyTriggered(taskGid) : false;
        const triggerAccepted = Boolean(matchingMembership) && !recentlyTriggered;
        const attachmentResponse = Boolean(matchingMembership) || !triggerSectionGid
          ? await fetchAsanaAttachments(taskGid, asanaToken)
          : null;
        const attachments = attachmentResponse?.data ?? [];
        const normalizedAttachments = attachments.map((attachment) => ({
          gid: attachment.gid ?? null,
          name: attachment.name ?? null,
          resourceSubtype: attachment.resource_subtype ?? null,
          downloadUrl: attachment.download_url ?? null,
          permanentUrl: attachment.permanent_url ?? null,
          viewUrl: attachment.view_url ?? null,
          host: attachment.host ?? null,
        }));

        const summary: PreparedTaskSummary = {
          taskGid,
          taskName: task?.name ?? null,
          taskNotes: task?.notes ?? null,
          taskHtmlNotes: task?.html_notes ?? null,
          permalinkUrl: task?.permalink_url ?? null,
          memberships: memberships.map((membership) => ({
            projectGid: membership.project?.gid ?? null,
            projectName: membership.project?.name ?? null,
            sectionGid: membership.section?.gid ?? null,
            sectionName: membership.section?.name ?? null,
          })),
          attachmentCount: normalizedAttachments.length,
          attachments: normalizedAttachments,
          matchesTriggerSection: Boolean(matchingMembership),
          triggerAccepted,
          recentlyTriggered,
        };

        if (triggerSectionGid) {
          console.log("[asana-webhook] Task trigger check", summary);
        } else {
          console.log("[asana-webhook] Task memberships", summary);
        }

        if (triggerAccepted) {
          console.log("[asana-webhook] Trigger accepted", {
            taskGid,
            taskName: task?.name ?? null,
            permalinkUrl: task?.permalink_url ?? null,
            attachmentCount: normalizedAttachments.length,
          });
          console.log("[asana-webhook] Trigger payload", {
            taskGid,
            taskName: task?.name ?? null,
            taskNotes: task?.notes ?? null,
            attachments: normalizedAttachments,
          });

          const agentLaunch = await launchCursorAgent(summary);

          if (agentLaunch.status === "started") {
            markTriggered(taskGid);
            console.log("[asana-webhook] Agent launched", agentLaunch);
          } else if (agentLaunch.status === "disabled") {
            console.warn("[asana-webhook] Agent launch skipped", agentLaunch);
          } else {
            console.error("[asana-webhook] Agent launch failed", agentLaunch);
          }

          return {
            ...summary,
            agentLaunch,
          };
        } else if (Boolean(matchingMembership) && recentlyTriggered) {
          console.log("[asana-webhook] Trigger suppressed as duplicate", {
            taskGid,
            taskName: task?.name ?? null,
          });
        }

        return {
          ...summary,
          agentLaunch: {
            status: "disabled",
            reason: triggerAccepted ? "Agent launch not attempted" : "Trigger not accepted",
          } as AgentLaunchResult,
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown task lookup error";
        console.error("[asana-webhook] Task lookup failed", { taskGid, message });

        return {
          taskGid,
          error: message,
        };
      }
    })
  );

  return NextResponse.json({
    ok: true,
    message: "Webhook received",
    taskCount: taskGids.length,
    taskSummaries,
  });
}
