import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import SiteLayout from "@/components/layout/SiteLayout";

// Per-route metadata used for <title> / <meta name="description">. Kept here
// (not inferred from JSX) so it stays in Claude's/your control independent of
// visual copy changes on the page itself.
export const ROUTES = {
  "/": {
    Component: Home,
    title: "LConnectiQ | AI-Enabled Construction Support Services",
    description:
      "LConnectiQ is a construction back-office and workflow support company serving the AEC industry: document management, remote project engineering, Procore administration, BIM & CAD support, AI productivity services, and workflow automation.",
  },
  "/services": {
    Component: Services,
    title: "Services | LConnectiQ",
    description:
      "Construction Document Management, Remote Project Engineering, Procore & Construction Technology Administration, BIM/CAD & Drafting Support, Project Controls & Reporting, and Workflow & Process Improvement.",
  },
  "/portfolio": {
    Component: Portfolio,
    title: "Portfolio | LConnectiQ",
    description:
      "Verified, authorized portfolio samples from LConnectiQ's construction document management and project engineering support work.",
  },
  "/about": {
    Component: About,
    title: "About | LConnectiQ",
    description:
      "LConnectiQ is a Florida-based construction back-office and workflow support company serving the AEC industry, positioned as a neutral project coordination and document control layer.",
  },
  "/contact": {
    Component: Contact,
    title: "Contact | LConnectiQ",
    description: "Get in touch with LConnectiQ for construction back-office and workflow support services.",
  },
  "/privacy": {
    Component: Privacy,
    title: "Privacy Policy | LConnectiQ",
    description: "LConnectiQ's privacy policy.",
  },
  "/terms": {
    Component: Terms,
    title: "Terms of Service | LConnectiQ",
    description: "LConnectiQ's terms of service.",
  },
};

/**
 * Renders a single public route to a static HTML string using the app's real
 * components. No auth, no live data fetching, no client-only providers —
 * every route registered here is verified static content (see build notes).
 */
export function render(pathname) {
  const entry = ROUTES[pathname];
  if (!entry) return null;

  const { Component, title, description } = entry;

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={pathname}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path={pathname} element={<Component />} />
        </Route>
      </Routes>
    </StaticRouter>
  );

  return { html, title, description };
}

export function renderProject(slug, item) {
  const pathname = `/portfolio/${slug}`;
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={pathname}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </StaticRouter>
  );
  return {
    html,
    title: `${item?.title ?? "Project"} | LConnectiQ Portfolio`,
    description: item?.summary ?? "LConnectiQ portfolio project detail.",
  };
}
