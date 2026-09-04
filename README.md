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
