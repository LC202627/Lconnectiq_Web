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
import { ROUTE_META } from "@/lib/seo";

export { LINKEDIN_URL } from "@/lib/seo";

// Per-route title / description live in src/lib/seo.js (shared with the
// client-side <RouteMeta />), so they stay independent of visual page copy.
const COMPONENTS = {
  "/": Home,
  "/services": Services,
  "/portfolio": Portfolio,
  "/about": About,
  "/contact": Contact,
  "/privacy": Privacy,
  "/terms": Terms,
};

export const ROUTES = Object.fromEntries(
  Object.entries(COMPONENTS).map(([path, Component]) => [path, { Component, ...ROUTE_META[path] }])
);

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
