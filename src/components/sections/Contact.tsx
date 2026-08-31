"use client";

import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { ButtonAnchor } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";

const elsewhere = [
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the mailto link below still works.
      window.location.href = `mailto:${profile.links.email}`;
    }
  }

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-elev">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-lines opacity-80"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
        />

        <div className="relative p-7 sm:p-10 md:p-14 lg:p-16">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2
              id="contact-heading"
              className="mt-6 max-w-2xl text-h2 font-medium text-gradient-fade"
            >
              {profile.contact.heading}
            </h2>
            <p className="mt-5 max-w-xl text-lead text-muted">
              {profile.contact.lead}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-12">
              <ButtonAnchor
                href={`mailto:${profile.links.email}`}
                variant="primary"
                size="lg"
              >
                <Mail aria-hidden className="h-4 w-4" />
                Email me
              </ButtonAnchor>

              {elsewhere.map(({ label, href, Icon }) => (
                <ButtonAnchor
                  key={label}
                  href={href}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon aria-hidden className="h-4 w-4" />
                  {label}
                  <ArrowUpRight
                    aria-hidden
                    className="h-3.5 w-3.5 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </ButtonAnchor>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              <div className="bg-bg/80 p-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                  Email
                </p>
                <div className="mt-2.5 flex items-center gap-3">
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="truncate text-sm text-fg underline decoration-line-hi decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {profile.links.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-subtle transition-colors hover:border-line-hi hover:text-fg"
                  >
                    {copied ? (
                      <Check aria-hidden className="h-3.5 w-3.5 text-live" />
                    ) : (
                      <Copy aria-hidden className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-bg/80 p-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-faint">
                  Response time
                </p>
                <p className="mt-2.5 text-sm text-fg">
                  Usually within a day. Based in India, comfortable across time
                  zones.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Snackbar
        open={copied}
        autoHideDuration={2200}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message="Email address copied"
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "var(--palette-surface-hi)",
            border: "1px solid var(--palette-line-hi)",
            color: "var(--palette-fg)",
            fontSize: "0.8125rem",
            minWidth: "auto",
            borderRadius: "10px",
          },
        }}
      />
    </Section>
  );
}
