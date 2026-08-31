import type { Project } from "./types";

/**
 * PROJECTS
 * ---------------------------------------------------------------------------
 * Everything here is traceable to the resume or to detail Hariharan supplied
 * directly. Metrics carry a `source` tag — see `types.ts`.
 *
 * To add a project: copy any object below, keep the same shape, pick a
 * `visual` key from VisualKey, and set `featured: true` to surface it on the
 * home page. Order in this array is the order it renders.
 */
export const projects: Project[] = [
  {
    slug: "360health",
    name: "360Health",
    label: "Healthcare · Full Stack · AI",
    domain: "Healthcare",
    period: "2023 – 2025",
    context: "Professional project · Innoart Technologies",
    status: "shipped",
    featured: true,
    role: "Full stack engineer — claim workflow, healthcare integrations, dashboards",
    summary:
      "A healthcare insurance workflow platform that follows a claim from the moment a patient raises it, through provider acceptance, to hospital processing and settlement.",
    visual: "claims",
    stack: [
      "React",
      "Tailwind CSS",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "FHIR",
      "RxNorm",
      "LangChain",
    ],
    highlights: [
      "Claim settlement workflow",
      "Patient → provider → hospital flow",
      "FHIR & RxNorm integrations",
      "AI-assisted provider recommendation",
      "Multi-step approval UX",
    ],
    metrics: [
      {
        value: "30%",
        label: "Fewer processing bottlenecks",
        context: "Claim settlement workflow, end to end",
        source: "resume",
      },
      {
        value: "30%",
        label: "Shorter settlement cycles",
        context: "Dual settlement flow for patients and hospitals",
        source: "resume",
      },
    ],
    detail: {
      problem: [
        "An insurance claim passes through a lot of hands — the patient who raises it, the provider who accepts it, the hospital that processes it. Most of that coordination lived in email threads and spreadsheets, so nobody could answer \"where is this claim right now?\" without asking three different people.",
        "Medical records arrived as scans and PDFs. Anything useful inside them had to be read and re-typed by a human before the claim could even be assessed, which is slow and exactly the kind of work that introduces errors.",
        "Choosing the right insurance provider for a given diagnosis was tribal knowledge held by experienced reviewers, which made the process hard to scale and hard to hand over.",
      ],
      ownership: [
        "Built the claim settlement workflow end to end in Python/Django with a React and TypeScript front end — the claim lifecycle, the APIs behind it, and the screens each role works in.",
        "Built the dual settlement flow so patient reimbursements and direct hospital settlements reconcile through the same path instead of two parallel processes that drift apart.",
        "Built document digitisation pipelines that parse uploaded medical records and integrate FHIR and RxNorm, so the output is standards-shaped and searchable rather than free text sitting in a blob.",
        "Integrated RxNorm medication APIs and wired a LangChain agent that suggests a likely insurance provider from the diagnosis on record.",
        "Built the operational dashboards and the multi-step approval experience reviewers spend their day inside.",
        "Worked directly with the client's engineers on domain questions, testing and agile delivery — a lot of this project was learning how claims actually work before writing anything.",
      ],
      howItWorked: [
        "Django owns the claim lifecycle and acts as the system of record. FastAPI services sit alongside it for the read-heavy paths that feed dashboards, where response time matters more than write guarantees.",
        "A claim is modelled as an explicit state machine — initiated → provider review → hospital processing → settlement. Every transition is recorded, so the audit trail is a by-product of the design rather than something bolted on, and no screen has to guess which actions are legal next.",
        "Uploaded documents run through digitisation and are then mapped onto FHIR resources. Medication strings are normalised through RxNorm, so the same drug written three different ways resolves to one concept and becomes searchable.",
        "The provider recommendation is a LangChain agent given the diagnosis context. It produces a suggestion for a human reviewer to accept or reject — it never writes a decision itself.",
        "React with Tailwind on the front end. The approval UI is one reusable multi-step primitive driven by the workflow state, not a bespoke form per role, which is what kept it maintainable as new steps appeared.",
      ],
      challenges: [
        "Healthcare vocabularies are unforgiving. Getting medication and diagnosis data to line up with FHIR and RxNorm meant actually learning the domain — the failure mode of guessing at field names is silently wrong data, which is the worst kind in a clinical context.",
        "Approvals have real financial consequences, so the AI suggestion had to stay clearly advisory: surfaced with its context, trivial to override, and never applied silently. Designing for \"the model is wrong\" was more important than designing for when it's right.",
        "Three roles look at the same claim and each needs a different slice of it. Most of the interface work was deciding what each role does not need to see.",
        "Reimbursement and direct settlement look similar and behave differently. Collapsing them into one reconciliation path without losing the differences took a few iterations on the data model.",
      ],
      outcome: [
        "~30% reduction in claim processing bottlenecks once the end-to-end settlement workflow was in place.",
        "~30% reduction in settlement cycle time through the dual settlement flow.",
        "Digitised, searchable medical data measurably improved compliance and usability — records became something reviewers could work with rather than files they had to open one at a time.",
        "LangChain-based automation cut manual effort out of the approval path.",
      ],
    },
  },

  {
    slug: "overall-equipment-effectiveness",
    name: "Overall Equipment Effectiveness",
    label: "Manufacturing · Analytics · Real-time",
    domain: "Manufacturing",
    period: "2023 – 2025",
    context: "Professional project · Innoart Technologies",
    status: "shipped",
    featured: true,
    role: "Front end & data engineer — real-time dashboards, visualisation, API performance",
    summary:
      "A real-time monitoring and analytics dashboard built for plant supervisors: equipment performance, benchmarks and the numbers needed to make a call during a shift instead of after it.",
    visual: "oee",
    stack: ["React", "ApexCharts", "Django", "Python", "Node.js", "PostgreSQL"],
    highlights: [
      "Real-time operations dashboard",
      "Custom data visualisation",
      "API response optimisation",
      "Efficient frontend state handling",
      "Performance benchmarking",
    ],
    metrics: [
      {
        value: "35%",
        label: "Lower frontend data latency",
        context: "API response optimisation and efficient state handling",
        source: "resume",
      },
      {
        value: "15%",
        label: "Better operational efficiency",
        context: "Custom visualisations built for plant supervisors",
        source: "resume",
      },
    ],
    detail: {
      problem: [
        "Supervisors were running the floor on yesterday's numbers. Equipment performance existed inside the machines and in end-of-shift reports, but nowhere a supervisor could glance at while a shift was still running and still do something about it.",
        "Raw machine data is not an answer. Availability, performance and quality only mean something once they're framed against a benchmark, and that framing was happening in people's heads.",
        "The first working version was also slow. A dashboard that takes several seconds to answer gets checked once a day, which defeats the point of building it.",
      ],
      ownership: [
        "Designed the real-time operations dashboard for factory supervisors — what belongs on the screen, what a supervisor should notice first, and what can wait for a drill-down.",
        "Built custom data visualisations aimed at plant supervisors rather than analysts: benchmarks, trends and downtime framed as decisions, not as chart types.",
        "Reduced frontend data latency by roughly 35% through API response optimisation and more efficient state handling on the client.",
        "Worked across the Django/Python backend, the Node service layer and the PostgreSQL schema that the dashboard reads from.",
      ],
      howItWorked: [
        "Python and Django handle aggregation and the OEE calculations; a Node service sits on the ingest and streaming side; PostgreSQL stores the time-series and reference data the dashboard reads.",
        "The API was restructured to return exactly the shape the charts consume. A large part of the latency win came from stopping the client from stitching together several responses and recomputing derived values on every render.",
        "On the client, state is scoped per widget instead of held in one large shared store, so a new reading updates one chart rather than cascading a re-render through the whole page.",
        "React with ApexCharts for the visualisation layer, with chart configuration centralised so every chart on the dashboard shares one visual language.",
      ],
      challenges: [
        "\"Real-time\" and \"a chart with a lot of points\" pull against each other. Deciding what genuinely needed to be live, and what could be aggregated server-side and polled, was the difference between a smooth dashboard and a janky one.",
        "Industrial data has gaps — machines go offline, readings arrive late or out of order. The charts had to represent missing data honestly instead of interpolating a comfortable-looking line over it.",
        "Supervisors are not analysts and are not sitting comfortably at a desk. The interface had to be readable at a glance, in a noisy environment, by someone with a job to get back to.",
      ],
      outcome: [
        "~35% reduction in frontend data latency after API response optimisation and state handling changes.",
        "~15% improvement in operational efficiency, attributed to the custom visualisations giving supervisors actionable benchmarks.",
        "Performance benchmarks and insights moved from end-of-shift reports into a live view supervisors could act on within the shift.",
      ],
    },
  },

  {
    slug: "digital-permit-to-work",
    name: "Digital Permit to Work",
    label: "Enterprise · Workflow · React",
    domain: "Enterprise",
    period: "2023 – 2025",
    context: "Professional project · Innoart Technologies",
    status: "shipped",
    featured: true,
    role: "Full stack engineer — approval workflow, dashboards, client collaboration",
    summary:
      "A digital permit management platform for manufacturing environments, replacing paper permits and signature chains with a tracked multi-step approval flow.",
    visual: "permit",
    stack: ["React", "Tailwind CSS", "Django", "PostgreSQL"],
    highlights: [
      "Multi-step approval flows",
      "Permit dashboards",
      "Workflow design",
      "Domain collaboration with client engineers",
    ],
    metrics: [
      {
        value: "50%",
        label: "Reduction in human error",
        context: "Digitising the permit issuance and approval chain",
        source: "provided",
      },
      {
        value: "35%",
        label: "Faster permit issuance",
        context: "Structured multi-step approval flow",
        source: "provided",
      },
    ],
    detail: {
      problem: [
        "High-risk work in a plant can't start without a permit, and the permit was paper. Paper means a physical signature chain, permits that sit on the wrong desk, fields left blank, and no reliable way to know what work is currently authorised anywhere on site.",
        "The cost of a mistake here isn't a bug report — an incomplete or wrongly approved permit is a safety problem, so the failure mode drove the whole design.",
      ],
      ownership: [
        "Built the permit management platform with React and Tailwind on the front end and Django with PostgreSQL behind it.",
        "Designed and implemented the multi-step approval flow: who can raise a permit, who has to sign off at each stage, and what has to be complete before it can move forward.",
        "Built the dashboards that show permit status across the site, so \"what's open right now\" is a question the system answers.",
        "Collaborated closely with the client's engineers to understand the real permit process — including the informal parts that don't appear on the form — before turning it into software.",
      ],
      howItWorked: [
        "A permit is a workflow record with a defined stage sequence and required approvals per stage. Validation lives with the workflow definition rather than being scattered across form components, so a rule change is one change.",
        "Every transition is attributed and timestamped, which turns the audit trail from a reporting feature into a property of the data.",
        "The React front end is driven by the permit's current stage and the current user's role: the same screen renders as a form, a review or a read-only record depending on where the permit is and who's looking at it.",
        "Dashboards read aggregated permit state from PostgreSQL for status, ageing and bottleneck views.",
      ],
      challenges: [
        "Digitising a process nobody had written down. The documented procedure and the actual procedure were different, and the useful version only came out of sitting with the client's engineers.",
        "Enforcing completeness without making the form hostile. Too strict and people work around the system; too loose and you've rebuilt paper with extra steps.",
        "Approval chains vary by permit type and area, so the flow had to be configurable rather than hard-coded — while staying legible enough that a safety officer could confirm it matched policy.",
      ],
      outcome: [
        "~50% reduction in permit-related human error after moving off paper.",
        "~35% reduction in permit issuance time through the structured approval flow.",
        "Permit status across the site became visible in one place instead of living in a folder on someone's desk.",
      ],
    },
  },

  {
    slug: "moodus",
    name: "Moodus",
    label: "Finance · POS · Full Stack",
    domain: "Finance",
    period: "2023 – 2025",
    context: "Professional project · Innoart Technologies",
    status: "shipped",
    featured: true,
    role: "Full stack engineer — terminal data pipeline, reporting, dashboards",
    summary:
      "A POS expense tracking platform where each client maps to their own set of terminals, giving them real-time transaction monitoring and financial visibility across all of them.",
    visual: "pos",
    stack: [
      "React",
      "Django",
      "Python",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Payment gateway",
    ],
    highlights: [
      "Client → terminal mapping",
      "Real-time transaction monitoring",
      "Data normalisation & reconciliation",
      "Downloadable reporting modules",
    ],
    metrics: [],
    detail: {
      problem: [
        "Clients running several POS terminals had no single view of what was being spent where. Each terminal was its own island of transactions, so building a picture of the month meant collecting exports and reconciling them by hand.",
        "Terminal data doesn't arrive in one clean format either, which makes naive aggregation quietly wrong.",
      ],
      ownership: [
        "Designed and built the POS expense tracking dashboard, with each client mapped to their dedicated terminals for real-time transaction monitoring and financial visibility.",
        "Engineered the backend services that aggregate, normalise and process terminal-level transaction data so expense tracking and reconciliation are accurate rather than approximately right.",
        "Built dynamic reporting modules with downloadable summaries and client-specific analytics.",
      ],
      howItWorked: [
        "Django and Python own the aggregation and reconciliation services; a Node layer handles the transaction intake side; PostgreSQL holds relational and reporting data with MongoDB used for the less-structured transaction payloads.",
        "Normalisation happens on the way in — transactions are mapped to a common shape at ingest, so reporting queries never have to know which terminal model produced a row.",
        "Client-to-terminal mapping is a first-class relationship, which is what makes tenant-scoped dashboards and per-client analytics straightforward instead of a filter bolted onto every query.",
        "Reporting modules are generated from the same aggregates the dashboard reads, so a downloaded summary and the on-screen number can't disagree.",
      ],
      challenges: [
        "Reconciliation is unforgiving: a duplicate or dropped transaction turns a finance dashboard into something nobody trusts, so the ingest path needed to be idempotent and the reconciliation checkable.",
        "Mixing relational and document storage is useful right up until it isn't. Drawing a clear line about which data lives where kept the reporting layer sane.",
        "Different clients wanted different cuts of the same data, which pushed the reporting toward configurable modules rather than a growing list of one-off reports.",
      ],
      outcome: [
        "Improved financial transparency and operational oversight for clients through real-time terminal-level monitoring.",
        "Reporting became self-serve — client-specific analytics and downloadable summaries replaced manual export-and-reconcile work.",
      ],
    },
  },

  {
    slug: "shopzy",
    name: "ShopZY",
    label: "B2B Commerce · Full Stack",
    domain: "Commerce",
    period: "Ongoing",
    context: "Personal project",
    status: "ongoing",
    featured: true,
    role: "Solo — architecture, frontend, backend, auth",
    summary:
      "A B2B e-commerce platform built around the parts that actually run a wholesale business: inventory, orders and shipments. Currently in progress.",
    visual: "commerce",
    stack: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],
    highlights: [
      "JWT authentication",
      "Google social login",
      "Secure session handling",
      "Inventory dashboards",
      "Order & shipment management",
    ],
    metrics: [],
    detail: {
      problem: [
        "B2B commerce is not consumer commerce with bigger numbers. The hard part is not the storefront — it's inventory that has to stay truthful, orders that move through fulfilment stages, and shipments that need tracking against those orders.",
        "I'm building it partly because it's a genuinely good systems problem: multiple entities that all have to stay consistent with each other.",
      ],
      ownership: [
        "Everything — architecture, data model, API design, front end and auth. It's a solo build.",
        "Next.js with TypeScript on the front end, Django REST Framework with PostgreSQL behind it.",
        "JWT-based authentication, Google social login and secure session handling.",
        "Interactive dashboards for managing inventory, orders and shipments.",
      ],
      howItWorked: [
        "Django REST Framework exposes the domain; Next.js consumes it with typed API boundaries so a backend contract change surfaces as a type error rather than a runtime surprise.",
        "Auth is JWT-based with Google social login layered on the same identity, and session handling kept deliberately conservative — short-lived access tokens with refresh, rather than long-lived tokens sitting in local storage.",
        "Inventory, orders and shipments are modelled as related entities with explicit state, so an order's fulfilment stage and the stock it reserves stay consistent.",
      ],
      challenges: [
        "Keeping inventory honest under concurrent orders is the interesting part — reservations, not just decrements.",
        "Social login next to credential login means one user can arrive through two doors and has to come out as one account.",
        "Working out how much structure to build before there are real users, without over-engineering ahead of a requirement.",
      ],
      outcome: [
        "In active development — no outcome metrics to report yet, and I'd rather leave this section honest than fill it.",
      ],
    },
  },
];

/**
 * AuditOS — placeholder.
 *
 * Hariharan: this project is intentionally NOT rendered anywhere on the site
 * because no verified detail was available when the site was built. Nothing
 * here has been invented.
 *
 * To publish it: fill in every [CONTENT TO BE ADDED] below, pick a `visual`
 * key (or add a new one in components/work/ProjectVisual.tsx), then move the
 * object into the `projects` array above.
 */
export const draftProjects: Project[] = [
  {
    slug: "auditos",
    name: "AuditOS",
    label: "Finance · Audit Workflow · AI",
    domain: "Finance",
    period: "[CONTENT TO BE ADDED]",
    context: "[CONTENT TO BE ADDED]",
    status: "ongoing",
    featured: false,
    role: "[CONTENT TO BE ADDED]",
    summary: "[CONTENT TO BE ADDED — one or two sentences on what AuditOS does]",
    visual: "pos",
    stack: ["[CONTENT TO BE ADDED]"],
    highlights: ["[CONTENT TO BE ADDED]"],
    metrics: [],
    detail: {
      problem: ["[CONTENT TO BE ADDED]"],
      ownership: ["[CONTENT TO BE ADDED]"],
      howItWorked: ["[CONTENT TO BE ADDED]"],
      challenges: ["[CONTENT TO BE ADDED]"],
      outcome: ["[CONTENT TO BE ADDED]"],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
