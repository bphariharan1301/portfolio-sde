"use client";

import Tooltip from "@mui/material/Tooltip";
import { Info } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { impactMetrics } from "@/content/principles";

const sourceCopy = {
  resume: "Measured outcome recorded on this project.",
  provided: "Outcome reported by the delivery team on this project.",
} as const;

export function Impact() {
  return (
    <Section id="impact" aria-labelledby="impact-heading">
      <SectionHeader
        eyebrow="Outcomes"
        headingId="impact-heading"
        title="Numbers I can actually point at."
        lead="Each figure comes from a specific project rather than a company-wide claim. Hover any card to see where it came from."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((metric, i) => (
          <Reveal
            key={`${metric.value}-${metric.label}`}
            delay={i * 0.05}
            className="h-full"
          >
            <Tooltip title={sourceCopy[metric.source]} placement="top">
              <div
                tabIndex={0}
                className="group relative h-full bg-bg p-6 transition-colors duration-500 hover:bg-surface/70 md:p-8"
              >
                <Info
                  aria-hidden
                  className="absolute right-5 top-5 h-3 w-3 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
                <p className="text-[2.75rem] font-medium leading-none tracking-[-0.04em] text-gradient-fade md:text-[3.25rem]">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm font-medium text-fg">
                  {metric.label}
                </p>
                <p className="mt-1.5 font-mono text-[0.6875rem] leading-relaxed text-faint transition-colors duration-300 group-hover:text-subtle">
                  {metric.context}
                </p>
              </div>
            </Tooltip>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-faint">
          These are outcomes from individual projects and teams I worked in, not
          organisation-wide impact. Where a figure is approximate it&apos;s
          written as such in the project write-up.
        </p>
      </Reveal>
    </Section>
  );
}
