import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Draws the hairline that separates major sections. */
  divider?: boolean;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  className,
  divider = true,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        divider && "border-t border-line",
        "py-20 md:py-28 lg:py-36",
        className,
      )}
      {...rest}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  headingId?: string;
  align?: "left" | "between";
  action?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  headingId,
  align = "left",
  action,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div
        className={cn(
          "flex flex-col gap-6",
          align === "between" &&
            "md:flex-row md:items-end md:justify-between md:gap-12",
        )}
      >
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={headingId}
            className="mt-5 text-h2 font-medium text-gradient-fade"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-[1.0625rem]">
              {lead}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-eyebrow uppercase text-subtle",
        className,
      )}
    >
      <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </div>
  );
}
