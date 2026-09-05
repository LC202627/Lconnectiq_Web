/**
 * Cloudflare Pages Function: POST /api/inquiry
 *
 * Receives the contact form and emails it via Resend.
 *
 * Required environment variables (Cloudflare Pages > Settings > Variables,
 * and .dev.vars for local `wrangler pages dev`):
 *   RESEND_API_KEY   Resend API key (secret)
 *   INQUIRY_FROM     verified sender, e.g. "LConnectiQ <inquiries@lconnectiq.com>"
 * Optional:
 *   INQUIRY_TO       recipient (defaults to lc@lconnectiq.com)
 */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

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
