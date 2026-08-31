type ClassValue = string | number | false | null | undefined;

/** Minimal class joiner — avoids pulling in clsx/tailwind-merge for this. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
