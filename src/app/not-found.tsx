import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-70"
      />
      <div className="container-page relative flex min-h-[70vh] flex-col justify-center py-32">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-2xl text-h2 font-medium text-gradient-fade">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          The link may be out of date. The work is all still here.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Back home
            <ArrowRight aria-hidden className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            View all work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
