# LYMNEA

The LConnectiQ marketing site, maintained by Lymnea Group LLC.

## Prerequisites

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.

## Run Locally

Start the frontend dev server from the project root:

```bash
npm run dev
```

Open the local URL printed by Vite.

## Environment

For frontend-only development against the hosted backend, create or update `.env.local` in the project root:

```bash
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-app-url
```

`VITE_BASE44_APP_ID` identifies the app. `VITE_BASE44_APP_BASE_URL` tells the Vite plugin where to send local `/api` requests — point it at the deployed app URL to use the hosted backend.

## Contact form (Cloudflare Pages + Resend)

The contact form posts to the Cloudflare Pages Function at
[`functions/api/inquiry.js`](functions/api/inquiry.js), which emails the inquiry
via [Resend](https://resend.com). No backend is involved beyond that.

**Setup:**

1. Create a Resend account and verify the `lconnectiq.com` domain (add the DNS
   records Resend gives you in Cloudflare DNS).
2. Create a Resend API key.
3. In Cloudflare Pages → your project → **Settings → Variables and Secrets**, add:
   - `RESEND_API_KEY` (secret) — the Resend API key
   - `INQUIRY_FROM` — a verified sender, e.g. `LConnectiQ <inquiries@lconnectiq.com>`
   - `INQUIRY_TO` (optional) — recipient, defaults to `lc@lconnectiq.com`
4. Build command `npm run build`, output directory `dist`.

**Test locally** (`wrangler` is a dev dependency):

```bash
cp .dev.vars.example .dev.vars   # fill in a real RESEND_API_KEY
npm run dev:cf                    # builds, then serves dist + functions
```

Then submit the form at the printed URL. If a stale `wrangler` process is bound
to the port, start it on another port (`npx wrangler pages dev --port 8791`).

## Build

```bash
npm run build
```

The production bundle is written to `./dist`.

## Checks

```bash
npm run lint
npm run typecheck
```
