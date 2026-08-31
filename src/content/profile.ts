export const profile = {
  name: "Hariharan B P",
  firstName: "Hariharan",
  role: "Software Engineer",
  discipline: "Full Stack / Product Engineer",
  location: "India · Open to remote",
  availability: "Open to Software / Product Engineering opportunities",

  hero: {
    heading: "I build products that solve real problems.",
    lead: "Software Engineer focused on building full-stack products, healthcare systems, AI-assisted workflows and data-driven applications.",
    stackLine: ["React", "Next.js", "Python", "Django", "FastAPI", "Node.js"],
  },

  about: [
    "I'm a Software Engineer with 2+ years of professional experience, and most of what I enjoy sits in the space between product and engineering — working out what a system actually needs to do, then building it.",
    "So far that's meant healthcare insurance claims, real-time factory analytics, permit and approval workflows, POS expense tracking and a B2B commerce platform. Different domains, same shape of problem: a messy real-world process that people are currently holding together with spreadsheets and phone calls.",
    "I move across the stack because the interesting problems don't respect the boundary. A slow dashboard is sometimes a React re-render and sometimes a query; a confusing approval flow is sometimes a UI problem and sometimes a data model that never modelled the real process.",
    "Right now I'm most interested in product engineering, healthcare technology, AI-assisted software and data-heavy applications — the kind of systems where getting the details right is the whole job.",
  ],

  education: {
    degree: "B.E. Computer Science and Engineering",
    school: "Sathyabama University",
    location: "Chennai, India",
    period: "2019 – 2023",
  },

  contact: {
    heading: "Have something worth building?",
    lead: "I'm always interested in interesting products, difficult problems, and teams that care about what they build.",
  },

  links: {
    email: "bphariharan1301@gmail.com",
    linkedin: "https://linkedin.com/in/hariharanbp",
    github: "https://github.com/bphariharan1301",
    site: "https://hariharanbp.vercel.app",
  },
} as const;

export const siteUrl = profile.links.site;

export const nav = [
  { label: "Home", href: "/#top", id: "top" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;
