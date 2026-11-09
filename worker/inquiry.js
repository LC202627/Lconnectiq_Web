/**
 * Contact form handler: receives the inquiry and emails it via Resend.
 *
 * Environment variables (Cloudflare dashboard > Settings > Variables,
 * or .dev.vars for local `wrangler dev`):
 *   RESEND_API_KEY   Resend API key (secret)
 *   INQUIRY_FROM     verified sender, e.g. "LConnectiQ <inquiries@lconnectiq.com>"
 *   INQUIRY_TO       recipient (optional, defaults to lc@lconnectiq.com)
 *   TURNSTILE_SECRET_KEY  Cloudflare Turnstile secret (secret). When set, every
 *                    inquiry must carry a valid `turnstile_token`. When unset,
 *                    the check is skipped (so the form still works before
 *                    Turnstile is configured). Pair with VITE_TURNSTILE_SITE_KEY
 *                    at build time so the widget appears on the form.
 */

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(token, secret, ip) {
  if (!token || typeof token !== "string" || token.length > 2048) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
    if (!res.ok) return false;
    const out = await res.json();
    return out.success === true;
  } catch (err) {
    console.error("inquiry: Turnstile verify failed", err);
    return false;
  }
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function handleInquiry(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof data.company_url === "string" && data.company_url.trim() !== "") {
    return json({ ok: true });
  }

  const first = String(data.first_name || "").trim();
  const last = String(data.last_name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const company = String(data.company || "").trim();
  const service = String(data.service || "").trim();

  if (!first || !last || !message || !EMAIL_RE.test(email)) {
    return json({ error: "Missing or invalid fields" }, 400);
  }
  if (
    first.length > 100 ||
    last.length > 100 ||
    email.length > 200 ||
    company.length > 200 ||
    service.length > 200 ||
    message.length > 5000
  ) {
    return json({ error: "One or more fields are too long" }, 400);
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const ok = await verifyTurnstile(
      data.turnstile_token,
      env.TURNSTILE_SECRET_KEY,
      request.headers.get("CF-Connecting-IP")
    );
    if (!ok) {
      return json({ error: "Verification failed. Please try again." }, 400);
    }
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.INQUIRY_FROM;
  if (!apiKey || !from) {
    console.error("inquiry: RESEND_API_KEY or INQUIRY_FROM not configured");
    return json({ error: "Email is not configured" }, 500);
  }
  const to = env.INQUIRY_TO || "lc@lconnectiq.com";

  const text = [
    `Name: ${first} ${last}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Service: ${service || "Not specified"}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New project inquiry: ${first} ${last}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("inquiry: Resend responded", res.status, detail);
    return json({ error: "Could not send the inquiry" }, 502);
  }

  return json({ ok: true });
}
