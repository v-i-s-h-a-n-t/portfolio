"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: "mount" | "viewport";
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  mode = "mount",
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion() === true;
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.32, delay, ease: "easeOut" as const };
  const initial = prefersReducedMotion ? false : { y: 6 };

  if (mode === "viewport") {
    return (
      <m.div
        className={className}
        initial={initial}
        transition={transition}
        viewport={{ once: true, amount: 0.15 }}
        whileInView={{ y: 0 }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      animate={{ y: 0 }}
      className={className}
      initial={initial}
      transition={transition}
    >
      {children}
    </m.div>
  );
}
