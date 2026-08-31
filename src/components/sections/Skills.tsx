import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Toolkit"
        headingId="skills-heading"
        title="What I work with."
        lead="Grouped by what I actually use it for. No proficiency bars — happy to talk through any of it in detail instead."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04} className="h-full">
            <div className="h-full bg-bg p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium tracking-tight text-fg">
                  {group.title}
                </h3>
                <span className="font-mono text-[0.625rem] tabular-nums text-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-subtle">
                {group.note}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex cursor-default items-center rounded-md border border-line bg-fg/[0.03] px-2.5 py-1.5 text-[0.75rem] text-muted transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-accent/30 hover:bg-accent-soft hover:text-accent">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
