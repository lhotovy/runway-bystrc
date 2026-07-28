import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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
    permalink_url?: string;
    memberships?: AsanaTaskMembership[];
  };
};

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

async function fetchAsanaTask(taskGid: string, token: string) {
  const params = new URLSearchParams({
    opt_fields: [
      "gid",
      "name",
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

        const summary = {
          taskGid,
          taskName: task?.name ?? null,
          permalinkUrl: task?.permalink_url ?? null,
          memberships: memberships.map((membership) => ({
            projectGid: membership.project?.gid ?? null,
            projectName: membership.project?.name ?? null,
            sectionGid: membership.section?.gid ?? null,
            sectionName: membership.section?.name ?? null,
          })),
          matchesTriggerSection: Boolean(matchingMembership),
        };

        if (triggerSectionGid) {
          console.log("[asana-webhook] Task trigger check", summary);
        } else {
          console.log("[asana-webhook] Task memberships", summary);
        }

        return summary;
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
