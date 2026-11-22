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
  up: { y: 28 },
  left: { x: -36 },
  right: { x: 36 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = OFFSET[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
