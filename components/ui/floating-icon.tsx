"use client";

import { motion } from "framer-motion";

interface FloatingIconProps {
  Icon: any;
  delay: number;
  x: string;
  y: string;
  size: number;
  opacity?: number[];
}

export const FloatingIcon = ({
  Icon,
  delay,
  x,
  y,
  size,
  opacity = [0.1, 0.2, 0.1],
}: FloatingIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: opacity,
        scale: [1, 1.1, 1],
        y: [0, -20, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        color: "var(--primary)",
      }}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
};
