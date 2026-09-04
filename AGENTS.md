# AGENTS.md

## Project Context

This is the LConnectiQ marketing site, maintained by Lymnea Group LLC. Treat it as user-owned
application code, keep changes focused on the user's request, and preserve existing
project conventions.

Start with `README.md` for local setup, environment variables, and the build workflow.

## Key Files

- `src/`: frontend application source.
- `src/api/base44Client.js`: frontend SDK client (hosted backend).
- `vite.config.js`: Vite config and plugin setup.
- `.env.local`: local-only environment values; never commit secrets.

## Working Notes

- Use `npm run dev` for local frontend work against the hosted backend.
- Reuse the existing SDK client and Vite plugin patterns before adding new integration paths.
- Run the relevant checks from `package.json` (`npm run lint`, `npm run typecheck`) before finishing code changes.
