// Single source of truth for per-route SEO metadata. Used by the prerender
// step (entry-server.jsx / scripts/prerender.mjs) and by the client-side
// <RouteMeta /> component, so humans, Googlebot and link unfurlers all see the
// same title / description / canonical for a given URL.

export const SITE_URL = "https://lconnectiq.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ROUTE_META = {
  "/": {
    title: "LConnectiQ | Construction Back-Office & Workflow Support",
    description:
      "LConnectiQ is a construction back-office and workflow support company serving the AEC industry: construction document management, remote project engineering, Procore and construction technology, BIM, CAD and drafting, project controls and reporting, and workflow and process improvement.",
  },
  "/services": {
    title: "Services | LConnectiQ",
    description:
      "Construction Document Management, Remote Project Engineering, Procore & Construction Technology Administration, BIM/CAD & Drafting Support, Project Controls & Reporting, and Workflow & Process Improvement.",
  },
  "/portfolio": {
    title: "Portfolio | LConnectiQ",
    description:
      "Examples of BIM, CAD, construction documentation and project engineering support from LConnectiQ.",
  },
  "/about": {
    title: "About LConnectiQ | Construction Back-Office Support",
    description:
      "LConnectiQ is a Florida-based construction back-office and workflow support company serving the AEC industry, positioned as a neutral project coordination and document control layer.",
  },
  "/contact": {
    title: "Contact | LConnectiQ",
    description: "Get in touch with LConnectiQ for construction back-office and workflow support services.",
  },
  "/privacy": {
    title: "Privacy Policy | LConnectiQ",
    description: "LConnectiQ's privacy policy.",
  },
  "/terms": {
    title: "Terms of Service | LConnectiQ",
    description: "LConnectiQ's terms of service.",
  },
};

export const NOT_FOUND_META = {
  title: "Page not found | LConnectiQ",
  description: "This page doesn't exist. Head back to the LConnectiQ home page or start a project.",
};

export const normalizePath = (pathname) => {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
};

export const canonicalFor = (pathname) => {
  const p = normalizePath(pathname);
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
};
