"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "viewport" | "transition"
>;

export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
