// Generates static HTML snapshots of every public marketing route, using the
// site's real React components (via SSR), for crawlers that don't execute
// JavaScript (most AI assistants' web-browsing tools, many bot crawlers, and
// link-preview unfurlers). Human visitors are unaffected — they still get the
// normal client-rendered SPA from dist/index.html.
//
// Run via `npm run build:prerender` (chains: client build -> ssr build -> this script).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SITE_URL = "https://lconnectiq.com";

async function main() {
  const { ROUTES, render } = await import(
    pathToFileURL(path.join(ROOT, "dist-server", "entry-server.js")).href
  );

  const shell = await readFile(path.join(ROOT, "dist", "index.html"), "utf8");
  const outDir = path.join(ROOT, "dist", "bot-snapshots");
  await mkdir(outDir, { recursive: true });

  const slugFor = (route) => (route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-"));

  for (const [route] of Object.entries(ROUTES)) {
    const { html, title, description } = render(route);
    const canonical = `${SITE_URL}${route === "/" ? "" : route}`;

    const jsonLd =
      route === "/"
        ? `<script type="application/ld+json">${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "LConnectiQ",
            url: SITE_URL,
            description,
            areaServed: "US-FL",
            slogan: "Leadership. Intelligence. Connection.",
            makesOffer: [
              "Construction Document Management",
              "Remote Project Engineering & Project Coordination Support",
              "Procore Administration & Construction Technology Support",
              "BIM, CAD & Drafting Support",
              "Project Controls, Reporting & Data Management",
              "Workflow & Process Improvement",
            ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
          })}</script>`
        : "";

    let page = shell
      .replace(/<title>.*<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(/\s*<meta\s[^>]*name="description"[^>]*\/?>\n?/, "")
      .replace(/\s*<link\s[^>]*rel="canonical"[^>]*\/?>\n?/, "")
      .replace(/\s*<meta\s[^>]*property="og:[^"]*"[^>]*\/?>\n?/g, "")
      .replace(/\s*<meta\s[^>]*name="twitter:card"[^>]*\/?>\n?/, "")
      .replace(
        "</head>",
        `  <meta name="description" content="${escapeHtml(description)}" />\n` +
          `  <link rel="canonical" href="${canonical}" />\n` +
          `  <meta property="og:site_name" content="LConnectiQ" />\n` +
          `  <meta property="og:title" content="${escapeHtml(title)}" />\n` +
          `  <meta property="og:description" content="${escapeHtml(description)}" />\n` +
          `  <meta property="og:url" content="${canonical}" />\n` +
          `  <meta property="og:type" content="website" />\n` +
          `  <meta name="twitter:card" content="summary" />\n` +
          `  ${jsonLd}\n` +
          `</head>`
      )
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const slug = slugFor(route);
    await writeFile(path.join(outDir, `${slug}.html`), page, "utf8");
    console.log(`Prerendered ${route} -> bot-snapshots/${slug}.html (${page.length} bytes)`);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
