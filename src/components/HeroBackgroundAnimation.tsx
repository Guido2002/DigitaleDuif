"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroBackgroundAnimationProps {
  className?: string;
}

const HeroBackgroundAnimation: React.FC<HeroBackgroundAnimationProps> = ({ className }) => {
  const baseTransition = {
    duration: 15,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0.2 },
    animate: {
      scale: [0, 1, 0.8, 1.2, 1],
      opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
      transition: baseTransition,
    },
  };

  const squareVariants = {
    initial: { rotate: 0, opacity: 0.1 },
    animate: {
      rotate: [0, 90, 180, 270, 360],
      opacity: [0.1, 0.2, 0.15, 0.25, 0.1],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const pulseGlowVariants = {
    animate: {
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated Gradient Mesh - simulated with large, moving elements */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end opacity-30"
        animate={{
          x: ["-25%", "25%", "-25%"],
          y: ["-25%", "25%", "-25%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Soft light leaks/glow effects */}
      <motion.div
        className="absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-accent/30 blur-3xl"
        variants={pulseGlowVariants}
        initial="animate"
        animate="animate"
      />
      <motion.div
        className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-accent/30 blur-3xl"
        variants={pulseGlowVariants}
        initial="animate"
        animate="animate"
        style={{ animationDelay: '1s' }}
      />

      {/* Geometric shapes (particles) */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-light-accent/20"
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-lg bg-primary/20"
        variants={squareVariants}
        initial="initial"
        animate="animate"
        style={{ x: "-50%", y: "-50%" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full bg-primary-foreground/10"
        variants={circleVariants}
        initial="initial"
        animate="animate"
        style={{ x: "-50%", y: "-50%", scale: 0.5, animationDelay: '0.5s' }}
      />
    </div>
  );
};

export default HeroBackgroundAnimation;