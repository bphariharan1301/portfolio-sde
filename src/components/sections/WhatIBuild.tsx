import { Activity, HeartPulse, LayoutDashboard, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { buildAreas } from "@/content/principles";
import type { BuildArea } from "@/content/types";

const icons: Record<BuildArea["icon"], LucideIcon> = {
  layout: LayoutDashboard,
  heart: HeartPulse,
  sparkles: Sparkles,
  activity: Activity,
};

export function WhatIBuild() {
  return (
    <Section id="build" aria-labelledby="build-heading">
      <SectionHeader
        eyebrow="What I build"
        headingId="build-heading"
        title="Four kinds of problems I keep coming back to."
        lead="Different industries, but the same underlying job: take a process people are holding together manually and turn it into something they can rely on."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {buildAreas.map((area, i) => {
          const Icon = icons[area.icon];
          return (
            <Reveal key={area.title} delay={i * 0.06} className="h-full">
              <article className="group relative h-full bg-bg p-6 transition-colors duration-500 hover:bg-surface/70 md:p-8 lg:p-10">
                <span
                  aria-hidden
                  className="absolute right-6 top-6 font-mono text-[0.625rem] text-faint md:right-8 md:top-8"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent">
                  <Icon aria-hidden className="h-[18px] w-[18px]" />
                </span>

                <h3 className="mt-5 text-h3 font-medium tracking-tight text-fg">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {area.body}
                </p>
                <p className="mt-6 font-mono text-[0.6875rem] leading-relaxed text-faint transition-colors duration-300 group-hover:text-subtle">
                  {area.proof}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
