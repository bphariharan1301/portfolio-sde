"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds. Keep small — this is a reveal, not a show. */
  delay?: number;
  className?: string;
  as?: ElementType;
  y?: number;
}

/**
 * Section-entry reveal. Runs once, respects prefers-reduced-motion by
 * rendering the final state immediately.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 16,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px 0px -64px 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
