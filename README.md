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

## Deployment (Cloudflare Workers + static assets)

Configured in [`wrangler.jsonc`](wrangler.jsonc). The build output in `./dist` is
served as static assets with SPA fallback; the entry Worker
[`worker/index.js`](worker/index.js) handles `/api/*` and passes everything else
through to the assets.

Cloudflare's connected build runs `npm run build` then `wrangler deploy`
(same as `npm run deploy` locally).

## Contact form (Resend)

`POST /api/inquiry` (in [`worker/inquiry.js`](worker/inquiry.js)) emails the
inquiry via [Resend](https://resend.com).

**Setup:**

1. Create a Resend account and verify the `lconnectiq.com` domain (add the DNS
   records Resend gives you in Cloudflare DNS).
2. Create a Resend API key.
3. In the Cloudflare dashboard → this Worker → **Settings → Variables and Secrets**:
   - `RESEND_API_KEY` (secret) — the Resend API key
   - `INQUIRY_FROM` — a verified sender, e.g. `LConnectiQ <inquiries@lconnectiq.com>`
   - `INQUIRY_TO` (optional) — recipient, defaults to `lc@lconnectiq.com`

**Test locally** (`wrangler` is a dev dependency):

```bash
cp .dev.vars.example .dev.vars   # fill in a real RESEND_API_KEY
npm run dev:cf                    # builds, then serves assets + worker
```

Then submit the form at the printed URL.

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
