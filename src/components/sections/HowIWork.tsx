import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { principles } from "@/content/principles";

export function HowIWork() {
  return (
    <Section id="how-i-work" aria-labelledby="how-heading">
      <SectionHeader
        eyebrow="How I work"
        headingId="how-heading"
        title="Four things I've settled on."
        lead="Not a methodology. Just what I've found holds up across projects."
      />

      <div className="grid grid-cols-1 gap-x-12 gap-y-px sm:grid-cols-2 lg:gap-x-20">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 0.06}>
            <div className="group flex gap-5 border-t border-line py-7 sm:py-8">
              <span
                aria-hidden
                className="mt-1 font-mono text-[0.6875rem] tabular-nums text-faint transition-colors duration-300 group-hover:text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-fg sm:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                  {principle.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
