import type { BuildArea, Metric, Principle } from "./types";

export const buildAreas: BuildArea[] = [
  {
    title: "Product interfaces",
    icon: "layout",
    body: "Dashboards, admin tools and workflow apps — the screens people use for hours, where a bad layout costs someone their whole afternoon. Usually the work is deciding what to leave out.",
    proof: "Approval flows, operations dashboards, inventory tools",
  },
  {
    title: "Healthcare systems",
    icon: "heart",
    body: "Insurance claims, medical record digitisation and health data that has to line up with real standards. The domain punishes guesswork, which is what makes it interesting.",
    proof: "FHIR · RxNorm · claim settlement workflows",
  },
  {
    title: "AI-assisted products",
    icon: "sparkles",
    body: "LLM-backed steps inside real workflows — a suggestion a reviewer can accept, automation that removes a manual pass. Advisory by design, never deciding on someone's behalf.",
    proof: "LangChain agents · approval automation",
  },
  {
    title: "Data & analytics",
    icon: "activity",
    body: "Real-time dashboards and visualisations that turn operational data into a decision someone can make during their shift, instead of a report they read the next morning.",
    proof: "Real-time monitoring · reporting · reconciliation",
  },
];

export const principles: Principle[] = [
  {
    title: "Own the outcome",
    body: "I want to know what we're trying to achieve, not just what the ticket says. It usually changes the implementation.",
  },
  {
    title: "Build, then improve",
    body: "I'd rather get a useful version in front of people and iterate than spend a month designing something nobody has touched.",
  },
  {
    title: "Understand the problem first",
    body: "The best technical decision starts with the workflow and the person doing it. Most of my healthcare work was learning the domain before writing code.",
  },
  {
    title: "Keep it simple",
    body: "Maintainable beats clever. Someone reads this code next — often me, months later, with no memory of why.",
  },
];

/**
 * IMPACT — every figure traceable. `context` names the project it came from so
 * nothing reads as company-wide impact.
 */
export const impactMetrics: Metric[] = [
  {
    value: "30%",
    label: "Fewer claim processing bottlenecks",
    context: "360Health — claim settlement workflow",
    source: "resume",
  },
  {
    value: "35%",
    label: "Lower frontend data latency",
    context: "OEE — API response & state optimisation",
    source: "resume",
  },
  {
    value: "25%",
    label: "Better operational decision-making",
    context: "Real-time dashboards, React + FastAPI",
    source: "resume",
  },
  {
    value: "40%",
    label: "Increase in sprint velocity",
    context: "Owning features from design to deployment",
    source: "resume",
  },
  {
    value: "50%",
    label: "Reduction in human error",
    context: "Digital Permit to Work — paper to digital",
    source: "provided",
  },
  {
    value: "3",
    label: "Developers led",
    context: "Freelance, October 2022 – August 2023",
    source: "provided",
  },
];
