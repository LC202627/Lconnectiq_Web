// Interface audit data for LConnectiQ, screen-by-screen review.
// Balanced across Design & Brand and UX & Usability.

export const REPORT_META = {
  title: "Interface Report",
  focus: "Design & brand + UX & usability (equal weight)",
  date: "September 2026",
  overall: 4.0,
  screensReviewed: 6,
};

export const SUMMARY_METRICS = [
  { value: "6", label: "Screens reviewed" },
  { value: "4.0", label: "Overall score / 5" },
  { value: "2", label: "Bugs found" },
  { value: "9", label: "Priority fixes" },
];

export const TOP_PRIORITIES = [
  {
    n: "01",
    title: "Fix the en-dash rendering on Services",
    detail:
      "“Years 3&ndash;5” prints the literal text “&ndash;” instead of an en-dash because React does not decode HTML entities in plain text. Replace with “Years 3 to 5”.",
  },
  {
    n: "02",
    title: "Resolve the tagline inconsistency",
    detail:
      "“Leadership. Intelligence. Connection.” was removed from the CTA band and contact page but still appears as the Home hero headline. Either restore it site-wide or replace it with a single benefit-led headline.",
  },
  {
    n: "03",
    title: "Make Settings reachable on desktop",
    detail:
      "Settings is in the mobile bottom bar but not in the header or footer. Desktop users have no path to /settings. Add a discreet account link to the header or footer.",
  },
  {
    n: "04",
    title: "Add scroll offset for in-page anchors",
    detail:
      "The hero “Explore services” button jumps to #services-teaser, but the fixed header overlaps the target. Add scroll-margin-top to anchored sections.",
  },
  {
    n: "05",
    title: "Clean up invalid Tailwind classes",
    detail:
      "About sections use py-6.5 and pt-4.5, which are not valid Tailwind scales and are dead code (overridden by arbitrary px values). Remove them for clarity.",
  },
  {
    n: "06",
    title: "Add a reduced-motion guard to the hero video",
    detail:
      "The autoplay drone video has no poster, no captions, and no prefers-reduced-motion fallback. Add a poster image and honor reduced-motion preferences.",
  },
  {
    n: "07",
    title: "Add a portfolio category filter",
    detail:
      "All seven projects render in one flat list. Sector filter chips (residential / commercial / institutional) would shorten scanning and signal breadth.",
  },
  {
    n: "08",
    title: "Add an inline contact success state",
    detail:
      "On submit the form clears and the button flips to “Inquiry sent ✓”, but the form still shows. Replace the form with a dedicated confirmation panel for a clearer close.",
  },
  {
    n: "09",
    title: "Let users edit their profile",
    detail:
      "Settings is read-only. Expose updateMe for full_name so members can correct their name instead of seeing the “LConnectiQ member” fallback.",
  },
];

export const SCREENS = [
  {
    name: "Home",
    route: "/",
    score: 4.3,
    purpose:
      "Landing screen. Establish the value proposition and route visitors to services and contact.",
    design: {
      strengths: [
        "Aerospace hero holds together: drone video, gold grid overlay, and radial mask give a strong high-tech first impression.",
        "Navy/gold palette and Instrument Serif headings are consistent across hero, stats, and teaser.",
        "Stats band is restrained and legible, count-up animation, gold rule, tabular numerals.",
      ],
      issues: [
        "Hero headline still reads “Leadership. Intelligence. Connection.”, inconsistent with the site-wide decision to drop the tagline.",
        "H1 is Instrument Serif pushed to font-extrabold uppercase, a heavy combination that can read stodgy for a “technology” brand.",
        "On mobile the video is hidden (sm:block), so small screens get a plain navy block, the tech visual is lost where most traffic lands.",
      ],
    },
    ux: {
      strengths: [
        "Two clear CTAs, “Explore services” and “Start a project”, with a sensible primary/secondary hierarchy.",
        "Scroll-reveal animations pace the page without delaying content.",
        "New mobile bottom bar gives one-tap access to the five core destinations.",
      ],
      issues: [
        "“Explore services” anchors to #services-teaser with no scroll offset, so the fixed header covers the section title.",
        "Autoplay video has no poster, no captions, and no reduced-motion fallback.",
        "No skip link or visible focus styles beyond defaults for keyboard users.",
      ],
    },
    fixes: [
      "Replace the hero tagline with a benefit-led headline, or restore it consistently site-wide.",
      "Add scroll-margin-top to anchored sections so the header does not overlap.",
      "Add a poster image and a prefers-reduced-motion fallback for the hero video.",
    ],
  },
  {
    name: "About",
    route: "/about",
    score: 4.1,
    purpose:
      "Company identity and philosophy: purpose, the problem we solve, how we work, and why us.",
    design: {
      strengths: [
        "Narrative flow is strong, purpose → problem → answer → why → CTA reads as a single argument.",
        "Problem cards share a consistent gold-numbered system with the Services and Why sections.",
        "Mist/white alternation between Problem and Why gives the long page rhythm.",
      ],
      issues: [
        "AboutPurpose and ProblemSection are both white with similar card grids, the first two screens blur together.",
        "Dead classes py-6.5 and pt-4.5 appear in the Problem and Why sections, invalid scales masked by arbitrary px values.",
        "VideoStrip is a welcome break but has no visible label or caption context.",
      ],
    },
    ux: {
      strengths: [
        "Audience tags (“Serving”) set expectations for who the firm is for.",
        "The navy “Our answer” band closes the problem section decisively.",
        "CTA band at the bottom gives a clear next step.",
      ],
      issues: [
        "No in-page navigation or section index for a long, single-scroll page.",
        "Serving tags are decorative spans, not filterable or linked.",
        "No breadcrumbs or persistent wayfinding back to a specific section.",
      ],
    },
    fixes: [
      "Remove the invalid py-6.5 / pt-4.5 utility classes.",
        "Break the two white sections with a subtle divider or alternate background.",
      "Add a sticky section index on desktop for the four narrative blocks.",
    ],
  },
  {
    name: "Services",
    route: "/services",
    score: 3.8,
    purpose:
      "Detail the six service lines and signal the roadmap.",
    design: {
      strengths: [
        "Three-column card grid with a gold top-bar hover affordance feels precise and engineered.",
        "idx numbering, tag line, summary, and points list give each service a scannable structure.",
        "Roadmap tags are visually distinct from live services.",
      ],
      issues: [
        "“On the roadmap (Years 3&ndash;5)” prints the literal “&ndash;”, React does not decode entities in text.",
        "Roadmap items are flat tags with no expansion or timeline context.",
        "No imagery or iconography per service, the page is text-dense for a technology firm.",
      ],
    },
    ux: {
      strengths: [
        "Full service cards include deliverable points, so visitors know what they actually get.",
        "Clear CTA band closes the page.",
      ],
      issues: [
        "No filter, search, or comparison across the six lines.",
        "No engagement model, turnaround, or pricing guidance, visitors must inquire to learn basics.",
        "Roadmap items are not actionable or dated.",
      ],
    },
    fixes: [
      "Replace “&ndash;” with a real en-dash (Years 3 to 5).",
      "Add per-service icons or a small isometric visual to reduce text weight.",
      "Add a short engagement/turnaround hint per service to pre-qualify inquiries.",
    ],
  },
  {
    name: "Portfolio",
    route: "/portfolio",
    score: 4.0,
    purpose:
      "Showcase seven structural BIM projects and route to individual detail pages.",
    design: {
      strengths: [
        "16/10 image cards with a gold category badge and a clean hover scale feel premium.",
        "Arrow reveal on hover is a good, restrained affordance.",
        "Detail pages exist for each project, so the grid is a real index, not a dead end.",
      ],
      issues: [
        "No sector/category filtering, all seven projects render in one flat list.",
        "Cards show only title and meta; no client, scale, or outcome to differentiate work.",
        "No project count or summary line to frame the selection.",
      ],
    },
    ux: {
      strengths: [
        "Every card links to /portfolio/:slug with a clear detail route.",
        "Image component handles responsive loading and blur-up.",
      ],
      issues: [
        "No filter or sort by sector, year, or service type.",
        "No empty or loading state is needed at this count, but no skeleton is shown while images load.",
        "No back link context from a detail page to its category.",
      ],
    },
    fixes: [
      "Add sector filter chips (residential / commercial / institutional).",
      "Add a one-line scope or outcome under each card title.",
      "Show a project count and a short framing sentence above the grid.",
    ],
  },
  {
    name: "Contact",
    route: "/contact",
    score: 4.2,
    purpose:
      "Capture project inquiries with service selection and project details.",
    design: {
      strengths: [
        "Navy page with grid pattern and gold accents matches the hero and CTA band.",
        "Two-column info + form layout uses space well on tablet and desktop.",
        "Translucent inputs keep the dark theme cohesive.",
      ],
      issues: [
        "Placeholder text at white/40 on translucent fields may fall below contrast on some screens.",
        "Radix Select dropdown is white, good contrast, but the trigger sits low-contrast against the dark form.",
        "No visual grouping of required vs. optional fields.",
      ],
    },
    ux: {
      strengths: [
        "Required-field validation, loading state, success toast, and email fallback are all wired.",
        "Radix Select replaces the native dropdown, removing the system popup frame on mobile.",
        "HQ, response time, and service-line count set expectations up front.",
      ],
      issues: [
        "No inline success panel, the form clears and the button flips, but the form still occupies the screen.",
        "No privacy/consent note near the submit, common for B2B intake.",
        "No optional phone or budget field to triage inquiries faster.",
      ],
    },
    fixes: [
      "Replace the form with a confirmation panel on success.",
      "Add a short privacy note and an optional phone/budget field.",
      "Bump the placeholder to white/55 for contrast.",
    ],
  },
  {
    name: "Settings",
    route: "/settings",
    score: 3.6,
    purpose:
      "Account profile, session control, and account deletion.",
    design: {
      strengths: [
        "Clean divided profile card with navy avatar chips and gold labels stays on-brand.",
        "Bottom-sheet confirmation for deletion is a safe, modern pattern.",
        "Destructive button styling is clear and distinct from logout.",
      ],
      issues: [
        "Profile falls back to “LConnectiQ member” when no name is set, a blunt placeholder.",
        "No avatar or identity visual beyond a generic user icon.",
        "The screen is bare compared to the rest of the site, no account metadata or history.",
      ],
    },
    ux: {
      strengths: [
        "Logout and delete are clearly separated, and deletion is gated by a confirmation sheet.",
        "Mobile bottom bar exposes the screen in one tap.",
      ],
      issues: [
        "Not reachable on desktop, no header or footer link to /settings.",
        "Profile is read-only; there is no way to edit name via updateMe.",
        "Delete relies on removing the user record; no warning that inquiries remain.",
      ],
    },
    fixes: [
      "Add a Settings/account link in the header or footer for desktop.",
      "Expose profile editing via updateMe for full_name.",
      "Clarify the deletion warning that submitted inquiries are retained.",
    ],
  },
];