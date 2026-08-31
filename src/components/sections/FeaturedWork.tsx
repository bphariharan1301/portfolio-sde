import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects } from "@/content/projects";

export function FeaturedWork() {
  const [lead, ...rest] = featuredProjects;

  return (
    <Section id="work" aria-labelledby="work-heading">
      <SectionHeader
        eyebrow="Selected work"
        headingId="work-heading"
        title="Things I've built"
        lead="A few products and systems I've worked on across healthcare, manufacturing, finance, and e-commerce. Each one opens into a full write-up — problem, what I owned, how it worked and what came out of it."
      />

      <div className="space-y-6 md:space-y-8">
        {lead ? (
          <Reveal>
            <ProjectCard project={lead} variant="showcase" index={0} />
          </Reveal>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
