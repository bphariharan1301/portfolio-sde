import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Technology / capability tag.
 *
 * `interactive` chips brighten when the parent card is hovered — the group-*
 * classes rely on a `group` ancestor.
 */
export function TechChip({
  children,
  interactive = false,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  interactive?: boolean;
  tone?: "neutral" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.6875rem] leading-none tracking-wide transition-colors duration-300",
        tone === "accent"
          ? "border-accent/25 bg-accent-soft text-accent"
          : "border-line bg-fg/[0.03] text-subtle",
        interactive &&
          tone === "neutral" &&
          "group-hover:border-line-hi group-hover:bg-fg/[0.06] group-hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: "shipped" | "ongoing" }) {
  if (status === "ongoing") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-signal/25 bg-signal/10 px-2 py-1 font-mono text-[0.6875rem] uppercase leading-none tracking-wider text-signal">
        <span aria-hidden className="h-1 w-1 rounded-full bg-signal" />
        Ongoing
      </span>
    );
  }
  return null;
}
