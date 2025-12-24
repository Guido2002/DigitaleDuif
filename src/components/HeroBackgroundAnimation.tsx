import React from "react";
import { motion, Variants } from "framer-motion"; // Import Variants
import { cn } from "@/lib/utils";
import ParticlesBackground from "./ParticlesBackground"; // Import the new ParticlesBackground

interface HeroBackgroundAnimationProps {
  className?: string;
  reducedMotion?: boolean; // New prop for reduced motion
}

const HeroBackgroundAnimation: React.FC<HeroBackgroundAnimationProps> = ({ className, reducedMotion = false }) => {
  // const baseTransition = { // This variable is not used
  //   duration: reducedMotion ? 0 : 15,
  //   ease: "easeInOut",
  //   repeat: Infinity,
  //   repeatType: "reverse",
  // };

  const pulseGlowVariants: Variants = { // Explicitly type as Variants
    animate: {
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.05, 1],
      transition: {
        duration: reducedMotion ? 0 : 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated Gradient Mesh */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-gradient-to-br from-hero-gradient-start via-electric-blue to-purple-accent opacity-30"
        animate={reducedMotion ? {} : {
          x: ["-25%", "25%", "-25%"],
          y: ["-25%", "25%", "-25%"],
        }}
        transition={reducedMotion ? { duration: 0 } : {
          duration: 20, // Slower for mobile
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
        style={{ animationDelay: reducedMotion ? '0s' : '1s' }}
      />

      {/* 3D Particle Field */}
      {!reducedMotion && <ParticlesBackground particleCount={50} className="hidden md:block" />}
      {!reducedMotion && <ParticlesBackground particleCount={20} className="md:hidden" />}
    </div>
  );
};

export default HeroBackgroundAnimation;