"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { profile } from "@/content/profile";

const headingLines = ["I build products", "that solve real problems."];

const meta = [
  { label: "Experience", value: "2+ years, professional" },
  { label: "Focus", value: "Full stack · Product engineering" },
  { label: "Domains", value: "Healthcare · Manufacturing · Finance" },
  { label: "Based in", value: "India · Open to remote" },
];

const social = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.links.email}`, Icon: Mail },
];

export function Hero() {
  const reduced = useReducedMotion();

  const line = (i: number) =>
    reduced
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: {
            duration: 0.9,
            delay: 0.05 + i * 0.09,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20 lg:pt-52"
    >
      {/* Background: hairline grid, faded out. No blobs, no glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-fg/10 to-transparent"
      />

      <div className="container-page relative">
        <motion.div {...fade(0)} className="flex">
          <span className="inline-flex items-start gap-2.5 rounded-2xl border border-line bg-surface/50 py-1.5 pl-2.5 pr-4 sm:items-center sm:rounded-full">
            <span aria-hidden className="relative mt-1.5 flex h-1.5 w-1.5 sm:mt-0">
              <span className="absolute inset-0 rounded-full bg-live/60 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            <span className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-wider text-muted sm:leading-none">
              {profile.availability}
            </span>
          </span>
        </motion.div>

        {/*
          Solid colour rather than .text-gradient-fade: the per-line spans are
          motion-promoted to their own compositing layers, and a parent's
          background-clip:text background does not paint over those layers —
          which silently hid heading lines at narrow widths.
        */}
        <h1
          id="hero-heading"
          className="mt-8 max-w-4xl text-display font-medium text-fg md:mt-10"
        >
          {headingLines.map((text, i) => (
            <span key={text} className="block overflow-hidden pb-[0.06em]">
              <motion.span className="block" {...line(i)}>
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...fade(0.32)}
          className="mt-7 max-w-2xl text-lead text-muted md:mt-8"
        >
          Software Engineer focused on building full-stack products, healthcare
          systems, AI-assisted workflows and data-driven applications.
        </motion.p>

        <motion.p
          {...fade(0.4)}
          className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.75rem] text-subtle"
        >
          {profile.hero.stackLine.map((tech, i) => (
            <span key={tech} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden className="text-faint">
                  ·
                </span>
              ) : null}
              {tech}
            </span>
          ))}
        </motion.p>

        <motion.div
          {...fade(0.48)}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-12"
        >
          <div className="flex flex-col gap-3 min-[420px]:flex-row">
            <ButtonLink href="/#work" variant="primary" size="lg">
              View my work
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary" size="lg">
              Let&apos;s talk
            </ButtonLink>
          </div>

          <div className="flex items-center gap-1 sm:ml-2">
            {social.map(({ label, href, Icon }) => (
              <ButtonAnchor
                key={label}
                href={href}
                variant="ghost"
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noreferrer noopener"
                }
                className="h-11 w-11 px-0"
              >
                <Icon aria-hidden className="h-4 w-4" />
              </ButtonAnchor>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.dl
        {...fade(0.6)}
        className="container-page relative mt-16 md:mt-24 lg:mt-28"
      >
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-bg px-5 py-5">
              <dt className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm text-fg">{item.value}</dd>
            </div>
          ))}
        </div>
      </motion.dl>

      <div className="container-page relative mt-10 hidden md:block">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-wider text-faint transition-colors hover:text-muted"
        >
          Scroll to work
          <ArrowUpRight
            aria-hidden
            className="h-3 w-3 rotate-45 transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
