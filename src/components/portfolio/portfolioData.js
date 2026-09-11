// Portfolio publication control
//
// No project, image, location, deliverable, or client-related portfolio claim may be
// published until its source, ownership/publication rights, sanitization, factual
// accuracy, and release authorization are documented under the current LConnectiQ
// document-control process. Controlled portfolio samples remain in REVIEW and are
// not effective for external publication until approved.

export const PORTFOLIO_ITEMS = [];

export const getProjectBySlug = (slug) =>
  PORTFOLIO_ITEMS.find((p) => p.slug === slug);
