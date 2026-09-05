import { handleInquiry } from "./inquiry.js";

/**
 * Entry Worker. Serves the API routes; everything else falls through to the
 * static assets in ./dist (with SPA fallback configured in wrangler.jsonc).
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/inquiry") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }
      return handleInquiry(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
