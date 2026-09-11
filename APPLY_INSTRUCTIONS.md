# LConnectiQ website — visibility & security changes

## What this does

1. **Crawler visibility (the main problem):** your site is a client-rendered
   React SPA — the HTML that ships to the browser is just `<div id="root">`,
   empty until JavaScript runs. Google can usually still render it, but most
   AI browsing tools (ChatGPT, Perplexity, and Claude's own web tools) and
   many bots do **not** run JavaScript, so they were seeing a blank page.
   These changes add a build step that renders your real page components to
   static HTML ahead of time, and a small addition to your existing
   Cloudflare Worker that serves that static HTML to known crawlers —
   while every human visitor still gets the exact same interactive SPA as
   before, completely unchanged.

2. **Security headers:** every response (to bots and humans alike) now gets
   a Content-Security-Policy, HSTS, X-Frame-Options, Referrer-Policy, and
   Permissions-Policy, tuned to the actual external resources your site
   uses (Cloudflare Insights, Google Fonts, media.base44.com) — not a
   generic template that would break something.

3. **robots.txt / sitemap.xml / meta tags:** basic discoverability files
   plus real `<title>`, description, Open Graph, and JSON-LD schema markup
   instead of a bare title tag.

## Files in this package

| File | Status | What it does |
|---|---|---|
| `src/entry-server.jsx` | New | Renders each real page component to a static HTML string (server-side) |
| `scripts/prerender.mjs` | New | Build script — generates `dist/_prerendered/*.html` snapshots for all 7 public routes |
| `scripts/print-csp-hash.mjs` | New | Helper — regenerates the CSP hash if you ever see a console CSP error after a rebuild |
| `worker/index.js` | **Replaces** your existing file | Adds bot-detection + snapshot serving, and security headers on every response |
| `public/robots.txt` | New | Allows crawlers, points to sitemap |
| `public/sitemap.xml` | New | Lists all 7 public routes |
| `index.html` | **Replaces** your existing file | Adds real title/description/OG tags to the base shell (was just `<title>LConnectiQ</title>`) |
| `package.json` | **Replaces** your existing file | Adds the `build:prerender` script chain; updates `deploy`/`dev:cf` to use it |

## How to apply

1. Copy these files into the matching paths in your repo (`Lconnectiq_Web`),
   overwriting `worker/index.js`, `index.html`, and `package.json`.
   - If you've made other edits to `worker/index.js` since I pulled the
     repo, diff before overwriting — I only added the bot-detection block
     and the security-headers wrapper; the existing `/api/inquiry` handling
     is untouched.
2. Install (nothing new to add — no new dependencies were introduced):
   ```
   npm install
   ```
3. Build and deploy using the new script instead of the old one:
   ```
   npm run deploy
   ```
   (This now runs: client build → SSR build → prerender script → `wrangler deploy`,
   instead of just `vite build && wrangler deploy`.)

## Verifying it worked

After deploying, test as a crawler would (real browsers are unaffected and
will look identical to before):

```bash
curl -A "Googlebot" https://lconnectiq.com/ | grep -o '<title>.*</title>'
curl -A "GPTBot" https://lconnectiq.com/services | grep -o '<title>.*</title>'
```

You should see the real page title, not just `<title>LConnectiQ</title>`.
You can also paste `https://lconnectiq.com/` into
https://search.google.com/test/rich-results to confirm the JSON-LD schema
is being read (test with a "Googlebot" fetch, since rich-results always
renders JS — the real proof point is the `curl -A` test above).

## What I could NOT do (needs your Cloudflare account access)

I don't have login access to your Cloudflare dashboard, so these are
manual steps on your end:

- **Bot Fight Mode / Super Bot Fight Mode** (Security → Bots) — helps block
  malicious bots without affecting the legitimate crawlers this change
  is designed to let through
- **WAF managed rules** (Security → WAF) — turn on Cloudflare's managed
  ruleset if not already on
- **Rate limiting** on `/api/inquiry` — prevents abuse of your contact
  form endpoint specifically
- **DNSSEC** (DNS → Settings) — confirm it's enabled for lconnectiq.com
- **Always Use HTTPS** and **Automatic HTTPS Rewrites** (SSL/TLS) — confirm
  both are on
- Confirm the `RESEND_API_KEY` environment variable is set as a Worker
  **secret** (not a plain variable) in Settings → Variables, if it isn't
  already

## Known limitation worth knowing about

The CSP allows one inline `<script>` by its exact cryptographic hash — the
analytics snippet your `@base44/vite-plugin` injects at build time. If a
future Base44 platform update changes that snippet's content, the hash
will stop matching and your browser console will show a CSP violation
(the script will just silently not run — nothing else breaks). If that
happens, run `npm run print-csp-hash` after a fresh build and swap the new
hash into the `script-src` line in `worker/index.js`.
