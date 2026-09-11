// Prints the sha256 CSP hash for the inline <script type="module"> block
// that the @base44/vite-plugin injects into dist/index.html at build time.
// Run this after `npm run build` if worker/index.js ever starts rejecting
// that script (check DevTools console for a CSP violation on page load),
// and paste the printed value into the script-src directive.
import { readFile } from "node:fs/promises";
import crypto from "node:crypto";

const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const match = html.match(/<script type="module">\n([\s\S]*?)\n<\/script>/);
if (!match) {
  console.error("No inline <script type=\"module\"> block found in dist/index.html — nothing to hash.");
  process.exit(1);
}
const hash = crypto.createHash("sha256").update(match[1], "utf8").digest("base64");
console.log(`sha256-${hash}`);
