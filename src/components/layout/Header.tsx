"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ArrowRight, Menu, X } from "lucide-react";
import { HbpLogo } from "@/components/brand/HbpLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { nav, profile } from "@/content/profile";
import { cn } from "@/lib/cn";

const sectionIds = nav.map((item) => item.id);

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-link tracking only makes sense on the single-page home route.
  useEffect(() => {
    if (!isHome) return;
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="container-page">
          <div className="flex h-[60px] items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2.5 rounded-md"
              aria-label={`${profile.name} — home`}
            >
              <HbpLogo className="h-9 w-auto sm:h-10" />
              <span className="hidden text-sm font-medium tracking-tight text-fg sm:inline">
                {profile.name}
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => {
                  const isActive = isHome && active === item.id;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "relative rounded-md px-3 py-2 text-[0.8125rem] transition-colors duration-200",
                          isActive
                            ? "text-fg"
                            : "text-subtle hover:text-fg",
                        )}
                      >
                        {item.label}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute inset-x-3 -bottom-px h-px bg-accent transition-opacity duration-300",
                            isActive ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/#contact"
                className="group hidden h-9 items-center gap-1.5 rounded-full border border-line-hi bg-surface/60 px-4 text-[0.8125rem] font-medium text-fg transition-colors duration-200 hover:border-fg/25 hover:bg-surface-hi md:inline-flex"
              >
                Let&apos;s talk
                <ArrowRight
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-hi text-muted transition-colors hover:text-fg md:hidden"
              >
                <Menu aria-hidden className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        slotProps={{
          paper: { sx: { width: "min(320px, 86vw)" } },
        }}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-eyebrow uppercase text-subtle">
              Menu
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-hi text-muted transition-colors hover:text-fg"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8">
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-baseline gap-3 py-4 text-xl font-medium tracking-tight text-fg transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-[0.625rem] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-4 pt-8">
            <Link
              href="/#contact"
              onClick={close}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-fg text-sm font-medium text-bg"
            >
              Let&apos;s talk
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.6875rem] text-subtle">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-fg"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-fg"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.links.email}`}
                className="hover:text-fg"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
