const BASE = "https://media.base44.com/images/public/6a9705851490e4fe54db65e8/";

export const PORTFOLIO_ITEMS = [
  {
    title: "Administrative Building",
    slug: "administrative-building",
    category: "Commercial",
    meta: "Structural BIM Model",
    image: `${BASE}dc47b438a_AdministrativeBuilding.png`,
    location: "Tallahassee, FL",
    summary:
      "Isometric structural model of a multi-part administrative complex — a vertical tower, wide podium, and a box-like utility block — documenting the exposed concrete and steel framing for coordination review.",
    specs: {
      "Structural system": "Cast-in-place concrete + exposed steel framing",
      Scope: "Structural BIM coordination model",
      Composition: "Tower · podium · utility block",
      Levels: "5 + podium",
    },
    services: ["BIM & CAD Support", "Construction Document Management", "Remote Project Engineering"],
    highlights: [
      "Isometric projection showing interconnected structures and exposed skeletons",
      "Open floor plates and steel truss work documented for clash detection",
      "Soft directional lighting modelled to communicate depth and spatial separation",
    ],
    deliverables: ["Coordination model", "Clash report", "Sheet set index"],
  },
  {
    title: "Concrete Parking Structure",
    slug: "concrete-parking-structure",
    category: "Institutional",
    meta: "Structural BIM Model",
    image: `${BASE}0d6ae117c_Concreteparkingstructure.png`,
    location: "North Florida",
    summary:
      "Tiered, L-shaped concrete and steel frame with a five-story skeletal grid, an atrium cutout exposing inner walls, and a solid tower core with arched openings revealing an interior stair.",
    specs: {
      "Structural system": "Concrete beams, columns & slabs",
      Scope: "Structural documentation model",
      Composition: "5-story frame · atrium · stair tower",
      Levels: "5",
    },
    services: ["BIM & CAD Support", "Construction Document Management"],
    highlights: [
      "Hollowed atrium with roof slab removed to expose inner concrete walls",
      "Solid tower section with two arched openings and partial stair visibility",
      "Cool-gray concrete textures with panel joints and long soft cast shadows",
    ],
    deliverables: ["Structural model", "Section views", "Material schedule"],
  },
  {
    title: "Institutional Facility",
    slug: "institutional-facility",
    category: "Institutional",
    meta: "Structural BIM Model",
    image: `${BASE}9dad0057f_InstitutionalFacility.png`,
    location: "Florida Panhandle",
    summary:
      "Modernist L-shaped facility with a three-story block, a ribbed metal-roof wing on offset elevations, and a ground-level projection carried by diagonal steel braces over a courtyard stair.",
    specs: {
      "Structural system": "Concrete columns + ribbed steel roof",
      Scope: "Structural coordination model",
      Composition: "3-story block · roof wing · braced projection",
      Levels: "3",
    },
    services: ["BIM & CAD Support", "Remote Project Engineering", "Procore Administration"],
    highlights: [
      "Ribbed metal roof spanning two offset elevations on open steel framing",
      "Diagonal steel struts supporting an overhanging ground-floor slab",
      "Prominent concrete staircase documented within the L-shaped courtyard",
    ],
    deliverables: ["Coordination model", "Framing plans", "Connection details"],
  },
  {
    title: "Mixed-Use Development",
    slug: "mixed-use-development",
    category: "Mixed-Use",
    meta: "Structural BIM Model",
    image: `${BASE}ab7633cc4_Mixed-UseDevelopment.png`,
    location: "Tallahassee, FL",
    summary:
      "Complex multi-level frame under construction, combining cast-in-place slabs, a prominent steel grid, circular floor voids for ventilation, and a golden-hued triangular truss section tied to a circular pad by a bridge.",
    specs: {
      "Structural system": "Concrete slabs + structural steel grid",
      Scope: "Construction-phase structural model",
      Composition: "Steel grid · voided slabs · truss · ramp",
      Levels: "Multi-level",
    },
    services: ["BIM & CAD Support", "Remote Project Engineering", "Workflow Automation"],
    highlights: [
      "Vertical and horizontal steel grid documented on the upper levels",
      "Circular voids in the floor slab mapped for ventilation / atrium",
      "Golden triangular truss section with ramp bridge to a circular pad",
    ],
    deliverables: ["Construction model", "Void & penetration schedule", "Truss detail"],
  },
  {
    title: "Multi-Story Residential",
    slug: "multi-story-residential",
    category: "Residential",
    meta: "Structural BIM Model",
    image: `${BASE}5983c7652_Multi-StoryResidential.png`,
    location: "Florida",
    summary:
      "Structural skeleton of a multi-story residence on a rectangular concrete podium, with three floor slabs, a gabled steel roof truss, and a secondary vertical tower rising above the main roofline.",
    specs: {
      "Structural system": "Concrete podium + steel roof truss",
      Scope: "Structural framing model",
      Composition: "Podium · 3 levels · gabled truss · tower",
      Levels: "3 + tower",
    },
    services: ["BIM & CAD Support", "Construction Document Management"],
    highlights: [
      "Gabled steel roof truss with parallel rafters and horizontal purlins",
      "Secondary vertical tower extending above the main roofline",
      "Bolt connections detailed at beam-to-column junctions",
    ],
    deliverables: ["Framing model", "Roof truss detail", "Connection schedule"],
  },
  {
    title: "Private Building",
    slug: "private-building",
    category: "Commercial",
    meta: "Structural BIM Model",
    image: `${BASE}c7c3abf4a_Privatebuilding.png`,
    location: "Tallahassee, FL",
    summary:
      "High-rise under construction with a tall concrete shear wall, stacked open-sided floors, a cylindrical central core with curved plates, and a monolithic multi-tier concrete foundation.",
    specs: {
      "Structural system": "Concrete shear wall + cylindrical core",
      Scope: "High-rise structural model",
      Composition: "Shear wall · open floors · core · base",
      Levels: "High-rise",
    },
    services: ["BIM & CAD Support", "Remote Project Engineering", "Procore Administration"],
    highlights: [
      "Tall rectangular concrete shear wall with stacked open floors",
      "Cylindrical central core with curved floor plates and ladder-frame support",
      "Monolithic multi-tier concrete foundation block",
    ],
    deliverables: ["Structural model", "Core detail", "Foundation plan"],
  },
  {
    title: "Steel-Framed Building",
    slug: "steel-framed-building",
    category: "Steel",
    meta: "Structural BIM Model",
    image: `${BASE}f871203e3_Steel-FramedBuilding.png`,
    location: "Florida",
    summary:
      "Multi-level steel and concrete structural model with tiered platforms, a network of vertical columns, angular support struts at the lower front levels, and ribbed metallic deck surfaces.",
    specs: {
      "Structural system": "Steel columns, struts & deck platforms",
      Scope: "Structural framing model",
      Composition: "Tiered platforms · braced frame",
      Levels: "Multi-level",
    },
    services: ["BIM & CAD Support", "Construction Document Management", "Workflow Automation"],
    highlights: [
      "Tiered platforms carried by vertical steel columns and angular struts",
      "Ribbed metallic deck surfaces with realistic texture",
      "Modular stacking emphasized through clean isometric projection",
    ],
    deliverables: ["Framing model", "Strut & brace detail", "Deck schedule"],
  },
];

export const getProjectBySlug = (slug) =>
  PORTFOLIO_ITEMS.find((p) => p.slug === slug);