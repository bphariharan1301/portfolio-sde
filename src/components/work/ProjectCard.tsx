import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge, TechChip } from "@/components/ui/TechChip";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  /** "showcase" is the wide lead card; "standard" fits a two-up grid. */
  variant?: "showcase" | "standard";
  index: number;
}

export function ProjectCard({
  project,
  variant = "standard",
  index,
}: ProjectCardProps) {
  const isShowcase = variant === "showcase";
  const chips = isShowcase ? project.stack : project.stack.slice(0, 5);
  const hiddenCount = project.stack.length - chips.length;

  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.name} — ${project.summary}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-elev",
        "transition-[border-color,background-color,transform] duration-500 ease-out",
        "hover:border-line-hi hover:bg-surface/60",
        isShowcase ? "lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-stretch" : "",
      )}
    >
      {/* Visual */}
      <div
        className={cn(
          "relative order-first overflow-hidden border-b border-line bg-bg",
          isShowcase
            ? "h-64 sm:h-80 lg:order-last lg:h-auto lg:border-b-0 lg:border-l lg:min-h-[26rem]"
            : "h-56 sm:h-64",
        )}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.035]">
          <ProjectVisual variant={project.visual} />
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-1 flex-col p-6 sm:p-7",
          isShowcase && "lg:p-10 xl:p-12",
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            aria-hidden
            className="h-3 w-px bg-line-hi"
          />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-subtle">
            {project.label}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3
          className={cn(
            "mt-4 font-medium tracking-tight text-fg",
            isShowcase
              ? "text-[1.75rem] leading-tight sm:text-[2.25rem]"
              : "text-[1.375rem] leading-tight sm:text-[1.625rem]",
          )}
        >
          {project.name}
        </h3>

        <p
          className={cn(
            "mt-3 text-muted",
            isShowcase
              ? "max-w-lg text-[0.9375rem] leading-relaxed sm:text-base"
              : "text-sm leading-relaxed",
          )}
        >
          {project.summary}
        </p>

        {isShowcase ? (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-[0.8125rem] text-subtle transition-colors duration-300 group-hover:text-muted"
              >
                <span
                  aria-hidden
                  className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-accent/60"
                />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {project.metrics.length > 0 ? (
          <dl
            className={cn(
              "mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5",
              isShowcase && "gap-x-12",
            )}
          >
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span
                    className={cn(
                      "block font-medium tracking-tight text-fg",
                      isShowcase ? "text-2xl" : "text-xl",
                    )}
                  >
                    {m.value}
                  </span>
                  <span className="mt-0.5 block max-w-[11rem] text-xs leading-snug text-subtle">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-7">
          {chips.map((tech) => (
            <TechChip key={tech} interactive>
              {tech}
            </TechChip>
          ))}
          {hiddenCount > 0 ? (
            <TechChip interactive>+{hiddenCount}</TechChip>
          ) : null}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-subtle transition-colors duration-300 group-hover:text-fg">
          Read the case study
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
