# Hariharan B P — Portfolio

Personal site for **Hariharan B P**, Software Engineer / Product Engineer.

Live: [hariharanbp.vercel.app](https://hariharanbp.vercel.app)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Motion (`motion/react`) for reveals and the hero text
- Lucide icons
- MUI used only for the mobile drawer, metric tooltips, and the copy-email snackbar

## Where to edit content

All copy lives under `src/content/` — change the data, not the components.

| File | What it controls |
| --- | --- |
| `src/content/profile.ts` | Name, hero, about, contact links, nav |
| `src/content/projects.ts` | Featured work and case-study write-ups |
| `src/content/experience.ts` | Timeline |
| `src/content/skills.ts` | Toolkit groups |
| `src/content/principles.ts` | “What I build”, “How I work”, impact numbers |

## Project pages

Each project in `projects.ts` gets a static page at `/work/[slug]`.

To add a project: copy an existing object, pick a `visual` key (`claims` · `oee` · `permit` · `pos` · `commerce`), set `featured: true` to show it on the home page.

## Placeholders

**AuditOS** is not on the site. No verified detail was available, so it lives as `draftProjects` in `src/content/projects.ts` with `[CONTENT TO BE ADDED]` fields. Fill those in and move the object into `projects` to publish it.

A photo for the About panel is optional — drop one in `/public` and swap the side panel in `src/components/sections/About.tsx`.
