import { handleInquiry } from "./inquiry.js";

/**
 * Entry Worker. Serves the API routes; everything else falls through to the
 * static assets in ./dist (with SPA fallback configured in wrangler.jsonc).
 *
 * Two additions on top of the original routing:
 *
 * 1. Dynamic rendering for crawlers: this is a client-rendered SPA (the
 *    shipped dist/index.html is an empty <div id="root">). Search engines
 *    that execute JS (Googlebot) can usually still see the content, but most
 *    AI browsing tools and simpler crawlers (GPTBot, ClaudeBot,
 *    PerplexityBot, link-preview unfurlers, etc.) do not run JavaScript at
 *    all and would otherwise see a blank page. Known bot user agents get
 *    served a pre-rendered static HTML snapshot (built from the real page
 *    components at build time — see scripts/prerender.mjs) instead. Human
 *    visitors are completely unaffected; they always get the normal SPA.
 *    This is the standard "dynamic rendering" pattern and is not cloaking:
 *    bots see the same real content a human eventually sees, just rendered
 *    ahead of time instead of client-side.
 *
 * 2. Security headers are applied to every response, for every visitor.
 */

// Routes that have a prerendered snapshot, and the slug used for its file
// name under dist/_prerendered/ (must match scripts/prerender.mjs).
const PRERENDERED_ROUTES = {
  "/": "home",
  "/services": "services",
  "/portfolio": "portfolio",
  "/about": "about",
  "/contact": "contact",
  "/privacy": "privacy",
  "/terms": "terms",
};

// Known search engine and AI-assistant crawlers/browsing tools. Conservative
// allow-list approach: only recognized bots get the prerendered snapshot;
// everyone else (all real browsers) gets the standard SPA.
const BOT_UA_RE =
  /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|TelegramBot|WhatsApp|Applebot|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|CCBot|Google-Extended|Bytespider|Amazonbot|SemrushBot|AhrefsBot|MJ12bot/i;

// Security headers applied to every response, for every visitor.
// CSP notes:
//  - script-src allows the one inline analytics snippet the base44 build
//    plugin injects into index.html, pinned by hash rather than
//    'unsafe-inline'. If a future rebuild changes that snippet's exact
//    content, this hash must be regenerated — run:
//      node scripts/print-csp-hash.mjs
//  - style-src allows 'unsafe-inline' because the UI (Tailwind + Framer
//    Motion) relies heavily on inline style="" attributes; this is a much
//    lower-severity relaxation than allowing inline scripts.
const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' https://static.cloudflareinsights.com 'sha256-LAIceAChXOudW58wuh+bo1yGHkS+iQDP+13YZkC8HMA='",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https://media.base44.com https://static.wixstatic.com",
    "media-src 'self' https://media.base44.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://static.cloudflareinsights.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

function withSecurityHeaders(response) {
  const res = new Response(response.body, response);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    res.headers.set(key, value);
  }
  res.headers.set("X-Deploy-Marker", "diag-8483d89-plus1");
  return res;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/inquiry") {
      if (request.method !== "POST") {
        return withSecurityHeaders(new Response("Method Not Allowed", { status: 405 }));
      }
      return withSecurityHeaders(await handleInquiry(request, env));
    }

    const ua = request.headers.get("user-agent") || "";
    const slug = PRERENDERED_ROUTES[url.pathname];
    if (slug && BOT_UA_RE.test(ua)) {
      // A clean, header-free GET — deliberately not cloning the inbound
      // request, so no conditional (If-None-Match / If-Modified-Since) or
      // Range headers from the original request can make the ASSETS binding
      // return a non-200 (e.g. 304/206) for what must always be a full,
      // fresh snapshot body.
      const snapshotUrl = new URL(`/_prerendered/${slug}.html`, url);
      const snapshot = await env.ASSETS.fetch(new Request(snapshotUrl.href, { method: "GET" }));
      console.log("bot-prerender", { pathname: url.pathname, ua, snapshotStatus: snapshot.status });
      if (snapshot.ok) {
        const res = withSecurityHeaders(
          new Response(snapshot.body, {
            status: 200,
            headers: { "content-type": "text/html; charset=utf-8" },
          })
        );
        res.headers.set("X-Debug-Snapshot", `hit:${snapshot.status}`);
        return res;
      }
      const res = withSecurityHeaders(await env.ASSETS.fetch(request));
      res.headers.set("X-Debug-Snapshot", `miss:${snapshot.status}:${slug}`);
      return res;
    }

    return withSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
