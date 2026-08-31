import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge, TechChip } from "@/components/ui/TechChip";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { profile, siteUrl } from "@/content/profile";
import { getProject, projects } from "@/content/projects";
import { cn } from "@/lib/cn";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const description = project.summary;
  return {
    title: `${project.name} — ${project.label}`,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/work/${project.slug}`,
      title: `${project.name} — ${profile.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${profile.name}`,
      description,
    },
  };
}

const sections = [
  { id: "problem", title: "The problem", key: "problem" },
  { id: "ownership", title: "What I worked on", key: "ownership" },
  { id: "architecture", title: "How it worked", key: "howItWorked" },
  { id: "challenges", title: "Challenges", key: "challenges" },
  { id: "outcome", title: "Outcome", key: "outcome" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* ------------------------------- header ------------------------------ */}
      <header className="relative overflow-hidden border-b border-line pt-28 pb-12 md:pt-36 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-70"
        />
        <div className="container-page relative">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-subtle transition-colors hover:text-fg"
          >
            <ArrowLeft
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-accent">
              {project.label}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="mt-5 max-w-3xl text-h2 font-medium text-gradient-fade">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lead text-muted">
            {project.summary}
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            <MetaCell label="Timeline" value={project.period} />
            <MetaCell label="Context" value={project.context} />
            <MetaCell label="My role" value={project.role} />
          </dl>
        </div>
      </header>

      {/* ------------------------------- visual ------------------------------ */}
      <div className="container-page py-10 md:py-14">
        <Reveal>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-line bg-bg-elev sm:h-80 md:h-[26rem]">
            <ProjectVisual variant={project.visual} size="page" />
          </div>
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-faint">
            Illustrative representation of the interface — not a screenshot of
            client software.
          </p>
        </Reveal>
      </div>

      {/* ------------------------------ metrics ------------------------------ */}
      {project.metrics.length > 0 ? (
        <div className="container-page pb-4 md:pb-8">
          <Reveal>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-bg p-6 md:p-8">
                  <dd className="text-[2.5rem] font-medium leading-none tracking-[-0.04em] text-gradient-fade">
                    {metric.value}
                  </dd>
                  <dt className="mt-4 text-sm font-medium text-fg">
                    {metric.label}
                  </dt>
                  <p className="mt-1.5 font-mono text-[0.6875rem] text-faint">
                    {metric.context}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      ) : null}

      {/* ------------------------------ write-up ----------------------------- */}
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                On this page
              </p>
              <ul className="mt-4 space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-md py-1.5 text-[0.8125rem] text-subtle transition-colors hover:text-fg"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#stack"
                    className="block rounded-md py-1.5 text-[0.8125rem] text-subtle transition-colors hover:text-fg"
                  >
                    Stack
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <WriteUpSection
                key={section.id}
                id={section.id}
                number={i + 1}
                title={section.title}
                items={project.detail[section.key]}
                isFirst={i === 0}
              />
            ))}

            <section id="stack" className="border-t border-line pt-10">
              <SectionLabel number={6} title="Stack" />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechChip key={tech} tone="accent" className="px-3 py-1.5 text-xs">
                    {tech}
                  </TechChip>
                ))}
              </div>

              <h3 className="mt-10 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                What I owned
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <TechChip key={item} className="px-3 py-1.5 text-xs">
                    {item}
                  </TechChip>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* -------------------------------- next ------------------------------- */}
      <div className="border-t border-line">
        <div className="container-page py-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                Next project
              </p>
              <Link
                href={`/work/${next.slug}`}
                className="group mt-3 inline-flex items-baseline gap-3"
              >
                <span className="text-h3 font-medium tracking-tight text-fg transition-colors group-hover:text-accent">
                  {next.name}
                </span>
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 shrink-0 text-subtle transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-subtle">
                {next.label}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#contact" variant="primary">
                Let&apos;s talk
                <ArrowRight aria-hidden className="h-4 w-4" />
              </ButtonLink>
              <ButtonAnchor
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                variant="secondary"
              >
                GitHub
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-bg px-5 py-4">
      <dt className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
        {label}
      </dt>
      <dd className="mt-2 text-[0.8125rem] leading-relaxed text-fg">{value}</dd>
    </div>
  );
}

function SectionLabel({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="font-mono text-[0.625rem] tabular-nums text-accent"
      >
        {String(number).padStart(2, "0")}
      </span>
      <h2 className="text-h3 font-medium tracking-tight text-fg">{title}</h2>
    </div>
  );
}

function WriteUpSection({
  id,
  number,
  title,
  items,
  isFirst,
}: {
  id: string;
  number: number;
  title: string;
  items: string[];
  isFirst: boolean;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className={cn("py-10", isFirst ? "pt-0" : "border-t border-line")}
      >
        <SectionLabel number={number} title={title} />
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <p
              key={item}
              className="text-[0.9375rem] leading-[1.75] text-muted md:text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export const dynamicParams = false;
