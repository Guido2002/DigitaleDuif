import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Hand-drawn style SVG doodle components for consistent use across the website
// Note: These components use whileInView animations which respect browser reduced motion settings
// via framer-motion's built-in accessibility features

export const DoodleScribble = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 30" className={cn("w-28", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <motion.path 
      d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15" 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    />
  </svg>
);

export const DoodleUnderline = ({ className, delay = 0.3 }: { className?: string; delay?: number }) => (
  <svg viewBox="0 0 200 20" className={cn("w-full h-4", className)} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <motion.path 
      d="M5 10 Q 50 18, 100 10 T 195 10" 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    />
  </svg>
);

export const DoodleSpiral = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={cn("w-14 h-14", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <motion.path 
      d="M30 30 C 30 25, 35 25, 35 30 C 35 38, 22 38, 22 30 C 22 18, 42 18, 42 30 C 42 45, 15 45, 15 30"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
  </svg>
);

export const DoodleArrowCurved = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 50" className={cn("w-20 h-12", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <motion.path 
      d="M5 40 Q 40 40, 50 25 Q 60 10, 75 10"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path 
      d="M65 5 L 75 10 L 65 18"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 1.1 }}
    />
  </svg>
);

export const DoodleStar = ({ className, filled = true }: { className?: string; filled?: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.svg 
      viewBox="0 0 40 40" 
      className={cn("w-8 h-8", className)} 
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="2"
      initial={shouldReduceMotion ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
    >
      <path d="M20 4 L22 16 L34 16 L24 22 L28 34 L20 26 L12 34 L16 22 L6 16 L18 16 Z" />
    </motion.svg>
  );
};

export const DoodleCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={cn("w-10 h-10", className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <motion.circle 
      cx="25" cy="25" r="20"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </svg>
);

export const DoodleZigzag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={cn("w-24 h-8", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <motion.path 
      d="M5 25 L 20 5 L 35 25 L 50 5 L 65 25 L 80 5 L 95 25"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    />
  </svg>
);

export const DoodleArrowDown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 60" className={cn("w-10 h-16", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <motion.path 
      d="M20 5 Q 22 30, 20 50"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    />
    <motion.path 
      d="M10 42 L 20 55 L 30 42"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
  </svg>
);

export const DoodleHighlight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 40" className={cn("w-full h-8", className)} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
    <motion.path 
      d="M10 30 Q 50 10, 100 25 T 190 20"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </svg>
);

export const DoodleBracket = ({ className, side = "left" }: { className?: string; side?: "left" | "right" }) => (
  <svg viewBox="0 0 30 100" className={cn("w-6 h-20", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <motion.path 
      d={side === "left" ? "M25 5 Q 5 5, 5 50 Q 5 95, 25 95" : "M5 5 Q 25 5, 25 50 Q 25 95, 5 95"}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    />
  </svg>
);

// Floating doodle wrapper - static position (removed infinite animation for performance)
export const FloatingDoodle = ({ 
  children, 
  className,
  duration = 5,
  delay = 0,
  rotateAmount = 5,
  yAmount = 8
}: { 
  children: React.ReactNode; 
  className?: string;
  duration?: number;
  delay?: number;
  rotateAmount?: number;
  yAmount?: number;
}) => (
  <div className={cn("absolute pointer-events-none", className)}>
    {children}
  </div>
);

// Grid pattern background
export const GridPattern = ({ className }: { className?: string }) => (
  <div 
    className={cn("absolute inset-0 opacity-[0.03]", className)}
    style={{
      backgroundImage: `
        linear-gradient(to right, currentColor 1px, transparent 1px),
        linear-gradient(to bottom, currentColor 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}
  />
);

// Dot pattern background
export const DotPattern = ({ className }: { className?: string }) => (
  <div 
    className={cn("absolute inset-0 opacity-[0.05]", className)}
    style={{
      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
      backgroundSize: '24px 24px'
    }}
  />
);
