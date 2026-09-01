const SUBSCRIBE_PATH = "/api/subscribe";
const UNSUBSCRIBE_PATH = "/unsubscribe";
const CMF_GUIDE_PATH = "/cmfguide26";
const CMF_REGISTRATION_PATH = "/cmfregistration26";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_EMAIL_LENGTH = 254;
const MAX_TURNSTILE_TOKEN_LENGTH = 2048;
const MAX_REQUEST_BODY_LENGTH = 16_384;

const REDIRECTS: Record<string, string> = {
  [CMF_GUIDE_PATH]: "https://drive.google.com/file/d/1D_PRjzyvvJWSNQOdUhf0WyL6Cc5cDLUe/view?usp=sharing",
  [CMF_REGISTRATION_PATH]: "https://forms.gle/5cMib5YH6YWZsSi69",
};

type SubscribePayload = {
  email: string;
  turnstileToken: string;
};

type SubscribeResponse = {
  success: boolean;
  error?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function jsonResponse(body: SubscribeResponse, status = 200, allow?: string) {
  const headers = new Headers({
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8",
    "x-content-type-options": "nosniff",
  });

  if (allow) {
    headers.set("allow", allow);
  }

  return new Response(JSON.stringify(body), { status, headers });
}

function isSameOrigin(request: Request, url: URL) {
  const origin = request.headers.get("origin");
  return origin === null || origin === url.origin;
}

function isValidEmail(email: string) {
  return (
    email.length > 0 &&
    email.length <= MAX_EMAIL_LENGTH &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

async function parseSubscribePayload(request: Request): Promise<SubscribePayload | null> {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return null;
  }

  try {
    const body = await request.text();
    if (body.length > MAX_REQUEST_BODY_LENGTH) {
      return null;
    }

    const payload: unknown = JSON.parse(body);
    if (!isRecord(payload)) {
      return null;
    }

    const { email, turnstileToken } = payload;
    if (
      typeof email !== "string" ||
      typeof turnstileToken !== "string" ||
      turnstileToken.length === 0 ||
      turnstileToken.length > MAX_TURNSTILE_TOKEN_LENGTH
    ) {
      return null;
    }

    return { email, turnstileToken };
  } catch {
    return null;
  }
}

function isTurnstileSuccess(value: unknown): value is { success: true } {
  return isRecord(value) && value.success === true;
}

async function verifyTurnstile(request: Request, token: string, secret: string) {
  if (!secret) {
    return false;
  }

  const formData = new URLSearchParams({
    response: token,
    secret,
  });
  const remoteIp = request.headers.get("cf-connecting-ip");
  if (remoteIp) {
    formData.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      body: formData,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      method: "POST",
    });

    if (!response.ok) {
      return false;
    }

    return isTurnstileSuccess((await response.json()) as unknown);
  } catch {
    return false;
  }
}

async function handleSubscribe(request: Request, env: Env, url: URL) {
  if (request.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed." }, 405, "POST");
  }

  if (!isSameOrigin(request, url)) {
    return jsonResponse({ success: false, error: "Request not allowed." }, 403);
  }

  const payload = await parseSubscribePayload(request);
  if (!payload) {
    return jsonResponse({ success: false, error: "Request could not be processed." }, 400);
  }

  const email = payload.email.trim().toLowerCase();
  if (!isValidEmail(email)) {
    return jsonResponse({ success: false, error: "Request could not be processed." }, 400);
  }

  if (!(await verifyTurnstile(request, payload.turnstileToken, env.TURNSTILE_SECRET))) {
    return jsonResponse({ success: false, error: "Verification failed. Please try again." }, 400);
  }

  try {
    await env.DB.prepare(
      `INSERT INTO subscribers (id, email, subscribed)
       VALUES (?, ?, 1)
       ON CONFLICT(email) DO UPDATE SET subscribed = 1`,
    )
      .bind(crypto.randomUUID(), email)
      .run();
  } catch {
    console.error("D1 subscription write failed.");
    return jsonResponse(
      { success: false, error: "Unable to subscribe right now. Please try again later." },
      500,
    );
  }

  return jsonResponse({ success: true });
}

function decodeHex(value: string) {
  if (!/^[\da-f]{64}$/i.test(value)) {
    return null;
  }

  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

async function signSubscriberId(subscriberId: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  return new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(subscriberId)),
  );
}

function htmlResponse(message: string, status = 200) {
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Cascade Math</title></head><body><main><h1>${message}</h1><p>You can close this page.</p></main></body></html>`,
    {
      headers: {
        "cache-control": "no-store",
        "content-type": "text/html; charset=utf-8",
        "x-content-type-options": "nosniff",
      },
      status,
    },
  );
}

async function handleUnsubscribe(request: Request, env: Env, url: URL) {
  if (request.method !== "GET") {
    return htmlResponse("Method not allowed.", 405);
  }

  const subscriberId = url.searchParams.get("id");
  const signature = url.searchParams.get("sig");
  if (!subscriberId || subscriberId.length > 128 || !signature) {
    return htmlResponse("This unsubscribe link is not valid.", 400);
  }

  if (!env.UNSUBSCRIBE_SECRET) {
    return htmlResponse("This unsubscribe link is not available right now.", 503);
  }

  const expectedSignature = await signSubscriberId(subscriberId, env.UNSUBSCRIBE_SECRET);
  const providedSignature = decodeHex(signature);
  if (!providedSignature || !constantTimeEqual(expectedSignature, providedSignature)) {
    return htmlResponse("This unsubscribe link is not valid.", 400);
  }

  try {
    await env.DB.prepare("UPDATE subscribers SET subscribed = 0 WHERE id = ?")
      .bind(subscriberId)
      .run();
  } catch {
    console.error("D1 unsubscribe write failed.");
    return htmlResponse("Unable to update your subscription right now.", 500);
  }

  return htmlResponse("You have been unsubscribed from Cascade Math updates.");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === SUBSCRIBE_PATH) {
      return handleSubscribe(request, env, url);
    }

    if (url.pathname.startsWith("/api/")) {
      return jsonResponse({ success: false, error: "Not found." }, 404);
    }

    if (url.pathname === UNSUBSCRIBE_PATH) {
      return handleUnsubscribe(request, env, url);
    }

    const redirectTarget = REDIRECTS[url.pathname];
    if (redirectTarget) {
      return Response.redirect(redirectTarget, 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
