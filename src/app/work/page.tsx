import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products and systems Hariharan B P has built across healthcare, manufacturing, finance and e-commerce — with the problem, ownership and outcome for each.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-28 pb-14 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-70"
        />
        <div className="container-page relative">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-subtle transition-colors hover:text-fg"
          >
            <ArrowLeft
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back home
          </Link>

          <div className="mt-8">
            <Eyebrow>All work</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-h2 font-medium text-gradient-fade">
              Every project, with the reasoning behind it.
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-muted">
              Healthcare claims, real-time factory analytics, permit workflows,
              POS expense tracking and B2B commerce. Each write-up covers the
              problem, what I owned, how it worked, what was hard and what came
              out of it.
            </p>
          </div>
        </div>
      </section>

      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 2) * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
