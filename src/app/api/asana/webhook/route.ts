import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

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

  return NextResponse.json({
    ok: true,
    message: "Webhook received",
  });
}
