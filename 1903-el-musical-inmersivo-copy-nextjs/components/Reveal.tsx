"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

export type RevealDirection = "up" | "left" | "right";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Entry direction. Default `up`. */
  direction?: RevealDirection;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "viewport" | "transition"
>;

const OFFSET: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 18 },
  left: { x: -22 },
  right: { x: 22 },
};

const MAX_DELAY_S = 0.24;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = OFFSET[direction];
  const safeDelay = Math.min(Math.max(delay, 0), MAX_DELAY_S);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once: true,
        amount: 0.05,
        // Expand the top of the root so items fire as they approach the viewport.
        margin: "100px 0px -40px 0px",
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: safeDelay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
