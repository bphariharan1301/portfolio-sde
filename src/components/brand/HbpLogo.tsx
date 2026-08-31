"use client";

import { useId, type ReactNode } from "react";

const STEM_H = "M46.5 35 V183";
const STEM_B = "M115.5 36 V150";
const BAR_H = "M46.5 115 H115.5";
const STEM_P = "M184 115 V264";

/**
 * Vector recreation of Hariharan's hbp wordmark.
 * Geometry traced from the source PNG (300×300, stroke ≈ 30px).
 * Letters stack p → b → h so crossings knock out like the original.
 */
export function HbpLogo({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const grad = `hbp-grad-${uid}`;

  return (
    <svg
      viewBox="24 12 252 276"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={grad}
          x1="32"
          y1="20"
          x2="267"
          y2="279"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EBF4FC" />
          <stop offset="0.55" stopColor="#88C4EB" />
          <stop offset="1" stopColor="#47B0E3" />
        </linearGradient>
      </defs>

      <LetterStroke color="var(--palette-bg)" width={36}>
        <path d={STEM_P} />
        <circle cx="218.5" cy="149.5" r="34.5" />
      </LetterStroke>
      <LetterStroke color={`url(#${grad})`} width={30}>
        <path d={STEM_P} />
        <circle cx="218.5" cy="149.5" r="34.5" />
      </LetterStroke>

      <LetterStroke color="var(--palette-bg)" width={36}>
        <path d={STEM_B} />
        <circle cx="150" cy="149.5" r="34.5" />
      </LetterStroke>
      <LetterStroke color={`url(#${grad})`} width={30}>
        <path d={STEM_B} />
        <circle cx="150" cy="149.5" r="34.5" />
      </LetterStroke>

      <LetterStroke color="var(--palette-bg)" width={36}>
        <path d={STEM_H} />
        <path d={BAR_H} />
      </LetterStroke>
      <LetterStroke color={`url(#${grad})`} width={30}>
        <path d={STEM_H} />
        <path d={BAR_H} />
      </LetterStroke>
    </svg>
  );
}

function LetterStroke({
  color,
  width,
  children,
}: {
  color: string;
  width: number;
  children: ReactNode;
}) {
  return (
    <g
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </g>
  );
}
