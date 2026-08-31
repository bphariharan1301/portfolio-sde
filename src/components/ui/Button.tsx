import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,border-color,color,transform] duration-200 ease-out " +
  "active:translate-y-px whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:opacity-90 border border-transparent",
  secondary:
    "border border-line-hi bg-surface/60 text-fg hover:border-fg/25 hover:bg-surface-hi",
  ghost: "border border-transparent text-muted hover:text-fg hover:bg-fg/5",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = "secondary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
