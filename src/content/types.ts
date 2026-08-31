/**
 * Shared content types.
 *
 * `source` exists so every claim on this site can be traced back to where it
 * came from. Keep it honest — it is the reason the numbers are safe to say out
 * loud in an interview.
 *
 *  - "resume"   : taken verbatim (or near) from Hariharan_B_P_SDE.pdf
 *  - "provided" : supplied directly by Hariharan outside the resume
 */
export type SourceTag = "resume" | "provided";

export type ProjectStatus = "shipped" | "ongoing";

/** Keys map to the hand-built product visuals in `components/work/ProjectVisual`. */
export type VisualKey = "claims" | "oee" | "permit" | "pos" | "commerce";

export interface Metric {
  value: string;
  label: string;
  context: string;
  source: SourceTag;
}

export interface ProjectDetail {
  problem: string[];
  ownership: string[];
  howItWorked: string[];
  challenges: string[];
  outcome: string[];
}

export interface Project {
  slug: string;
  name: string;
  /** e.g. "Healthcare · Full Stack · AI" */
  label: string;
  domain: string;
  period: string;
  context: string;
  status: ProjectStatus;
  featured: boolean;
  /** Card + detail-page one liner. */
  summary: string;
  role: string;
  visual: VisualKey;
  stack: string[];
  /** Short scannable capability chips on the card. */
  highlights: string[];
  metrics: Metric[];
  detail: ProjectDetail;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  current: boolean;
  summary: string;
  points: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  note: string;
  items: string[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface BuildArea {
  title: string;
  body: string;
  icon: "layout" | "heart" | "sparkles" | "activity";
  proof: string;
}
