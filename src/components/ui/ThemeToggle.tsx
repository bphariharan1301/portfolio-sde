"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={
        className ??
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-hi text-muted transition-colors hover:text-fg"
      }
    >
      <Sun aria-hidden className="hidden h-4 w-4 dark:block" />
      <Moon aria-hidden className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
