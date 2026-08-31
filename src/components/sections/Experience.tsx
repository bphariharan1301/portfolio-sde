import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TechChip } from "@/components/ui/TechChip";
import { roles } from "@/content/experience";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <SectionHeader
        eyebrow="Experience"
        headingId="experience-heading"
        title="Where I've worked."
        lead="Three stretches of work, all hands-on. The through-line is owning features from design to deployment and staying close to the people the software is for."
      />

      <ol className="relative">
        {/* Timeline rail — hidden on small screens where it adds nothing. */}
        <span
          aria-hidden
          className="absolute left-0 top-2 hidden h-full w-px bg-line md:block"
        />

        {roles.map((role, i) => (
          <li key={role.company} className="relative">
            <Reveal delay={i * 0.06}>
              <div className="grid gap-6 pb-14 last:pb-0 md:grid-cols-[minmax(0,13rem)_1fr] md:gap-10 md:pl-8 lg:pl-12">
                <span
                  aria-hidden
                  className="absolute -left-[3px] top-[0.6rem] hidden h-[7px] w-[7px] rounded-full border border-bg bg-line-hi md:block"
                  style={
                    role.current
                      ? { backgroundColor: "var(--color-accent)" }
                      : undefined
                  }
                />

                <div className="md:pt-1">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-subtle">
                    {role.period}
                  </p>
                  <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-faint">
                    {role.location}
                  </p>
                  {role.current ? (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-live/25 bg-live/10 px-2 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-live">
                      <span aria-hidden className="h-1 w-1 rounded-full bg-live" />
                      Current
                    </span>
                  ) : null}
                </div>

                <div className="rounded-2xl border border-line bg-bg-elev p-6 transition-colors duration-500 hover:border-line-hi sm:p-7 md:p-8">
                  <h3 className="text-h3 font-medium tracking-tight text-fg">
                    {role.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-accent">{role.company}</p>

                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                    {role.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/50"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <TechChip key={tech}>{tech}</TechChip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-line bg-bg-elev p-6 sm:flex-row sm:items-center sm:justify-between md:ml-8 lg:ml-12">
          <div className="flex items-start gap-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-muted">
              <GraduationCap aria-hidden className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-fg">
                {profile.education.degree}
              </p>
              <p className="mt-1 text-sm text-subtle">
                {profile.education.school} · {profile.education.location}
              </p>
            </div>
          </div>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-faint sm:text-right">
            {profile.education.period}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
