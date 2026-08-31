import type { SkillGroup } from "./types";

/**
 * SKILLS — only technologies supported by the resume or by detail Hariharan
 * supplied directly. No aspirational entries.
 *
 * Deliberately omitted: "CDS Hooks". It appeared in the brief but not in the
 * resume, so it is left out rather than asserted. Add it to the Healthcare
 * group below if you've genuinely worked with it.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Where most of my product work happens.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "ApexCharts",
    ],
  },
  {
    title: "Backend",
    note: "Python-first, with Node where it fits better.",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "Node.js",
    ],
  },
  {
    title: "Data",
    note: "Relational by default; document stores when the shape calls for it.",
    items: ["PostgreSQL", "MySQL", "SQL", "MongoDB"],
  },
  {
    title: "Healthcare",
    note: "Standards work from claims and medical record digitisation.",
    items: ["FHIR", "RxNorm", "Medical record digitisation"],
  },
  {
    title: "AI / Automation",
    note: "Used to remove manual steps, not as a feature for its own sake.",
    items: ["LangChain", "AI-assisted workflows", "Agentic automation"],
  },
  {
    title: "Practice & Tools",
    note: "How the work gets shipped.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Vercel",
      "Agile",
      "Scrum",
      "System design",
      "Clean code",
      "Unit testing",
    ],
  },
];
