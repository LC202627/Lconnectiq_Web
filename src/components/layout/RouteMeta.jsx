import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectBySlug } from "@/components/portfolio/portfolioData";
import { ROUTE_META, NOT_FOUND_META, OG_IMAGE, canonicalFor, normalizePath } from "@/lib/seo";

function setTag(selector, create, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

const meta = (attr, key, content) => {
  const el = setTag(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute("content", content);
};

/**
 * Keeps <title>, description, canonical and social tags in sync with the
 * current route for client-side navigation and for crawlers that run JS.
 * Unknown paths get the "not found" title and a noindex robots tag.
 */
export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const project = /^\/portfolio\/([^/]+)$/.exec(path);
    const item = project ? getProjectBySlug(decodeURIComponent(project[1])) : null;
    const known = item
      ? { title: `${item.title} | LConnectiQ Portfolio`, description: item.summary }
      : ROUTE_META[path];
    const { title, description } = known ?? NOT_FOUND_META;
    const canonical = canonicalFor(path);

    document.title = title;
    meta("name", "description", description);
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", canonical);
    meta("property", "og:type", "website");
    meta("property", "og:site_name", "LConnectiQ");
    meta("property", "og:image", OG_IMAGE);
    meta("property", "og:image:width", "1200");
    meta("property", "og:image:height", "630");
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:image", OG_IMAGE);

    const link = setTag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    link.setAttribute("href", canonical);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (known) {
      robots?.remove();
    } else {
      meta("name", "robots", "noindex");
    }
  }, [pathname]);

  return null;
}
