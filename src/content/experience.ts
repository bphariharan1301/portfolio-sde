import type { Role } from "./types";

/**
 * EXPERIENCE — newest first.
 *
 * InHousen and Innoart are taken from Hariharan_B_P_SDE.pdf.
 * The freelance role was supplied directly (Oct 2022 – Aug 2023) and is not
 * listed as a separate employer on that resume.
 */
export const roles: Role[] = [
  {
    company: "InHousen Pvt. Ltd.",
    title: "Software Engineer – Full Stack",
    period: "December 2025 – Present",
    location: "Remote",
    current: true,
    summary:
      "Running product development end to end and leading a small team — closer to owning delivery than owning tickets.",
    points: [
      "Directing end-to-end product development for web applications, using Agile methodologies to keep feature releases on time and aligned with what clients actually need.",
      "Leading a team of three developers — assigning work based on individual strengths and keeping client communication active so the build stays aligned with the goal.",
      "Delivering project updates directly to clients, translating technical decisions into outcomes they can act on, which has contributed to client retention and growth.",
    ],
    stack: ["Agile", "Team leadership", "Client communication", "Full stack"],
  },
  {
    company: "Innoart Technologies Pvt. Ltd.",
    title: "Software Engineer",
    period: "August 2023 – June 2025",
    location: "Hybrid / On-site",
    current: false,
    summary:
      "Built React and Python applications across healthcare and chemical manufacturing — claims workflows, healthcare data integrations and real-time operational dashboards.",
    points: [
      "Built React applications for healthcare insurance claims and chemical manufacturing operations, working across the stack with Django, Flask and FastAPI.",
      "Engineered end-to-end claim settlement workflows in Python/Django with React and TypeScript, reducing processing bottlenecks by 30%.",
      "Built document digitisation pipelines integrating FHIR and RxNorm APIs to automate medical record parsing.",
      "Developed real-time dashboards with React and FastAPI, improving operational decision-making by 25% through faster data rendering and cleaner workflows.",
      "Owned product features from design through deployment — a 40% increase in sprint velocity — while keeping technical delivery aligned with client expectations.",
      "Applied LangChain-based automation to accelerate approval processes and cut manual effort out of the claims path.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "FHIR",
      "RxNorm",
      "LangChain",
    ],
  },
  {
    company: "Freelance",
    title: "Full Stack Django Developer",
    period: "October 2022 – August 2023",
    location: "Remote",
    current: false,
    summary:
      "End-to-end web application work for multiple clients — delivery, communication and a small team, not just the code.",
    points: [
      "Built and shipped web applications end to end, using Agile delivery so features landed when clients needed them.",
      "Led a team of three developers, assigning work based on individual strengths rather than spreading every ticket evenly.",
      "Kept client communication active throughout each project, translating technical decisions into outcomes they could act on.",
    ],
    stack: ["Django", "Python", "JavaScript", "PostgreSQL", "Agile", "Client delivery"],
  },
];
