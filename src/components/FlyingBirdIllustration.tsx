"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import pigeon1Image from "@/assets/pigeon1.png";
import pigeon2Image from "@/assets/pigeon3.png";
import pigeon3Image from "@/assets/pigeon2.png";
import pigeon4Image from "@/assets/pigeon4.png";

interface FlyingBirdIllustrationProps {
  className?: string;
  size?: "small" | "medium" | "large";
  initialX?: string; // e.g., "10%" or "-20%"
  initialY?: string; // e.g., "20%" or "-10%"
  animationDelay?: number;
  animationDuration?: number;
  floatIntensity?: number; // How much it floats
  rotateIntensity?: number; // How much it rotates
  animateOpacity?: number; // New prop for controlling final opacity
}

const pigeonImages = [pigeon1Image, pigeon2Image, pigeon3Image, pigeon4Image];

const FlyingBirdIllustration: React.FC<FlyingBirdIllustrationProps> = ({
  className,
  size = "medium",
  initialX = "0%",
  initialY = "0%",
  animationDelay = 0,
  animationDuration = 8,
  floatIntensity = 10, // px
  rotateIntensity = 2, // degrees
  animateOpacity = 1, // Default to full opacity after fade-in
}) => {
  const sizeClasses = {
    small: "h-12 w-12",
    medium: "h-20 w-20",
    large: "h-32 w-32",
  };

  // Randomly select a pigeon image once per component instance
  const [selectedPigeonImage] = React.useState(() =>
    pigeonImages[Math.floor(Math.random() * pigeonImages.length)]
  );

  return (
    <motion.img
      src={selectedPigeonImage}
      alt="Flying bird illustration"
      className={cn(
        "absolute object-contain pointer-events-none z-20", // Higher z-index than background animations
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{
        opacity: animateOpacity, // Use the new prop
        y: [initialY, `${parseFloat(initialY) + floatIntensity}%`, initialY, `${parseFloat(initialY) - floatIntensity}%`, initialY],
        x: [initialX, `${parseFloat(initialX) + floatIntensity}%`, initialX, `${parseFloat(initialX) - floatIntensity}%`, initialX],
        rotate: [0, rotateIntensity, -rotateIntensity, rotateIntensity, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: animationDelay, ease: "easeOut" }, // Fade in once
        y: { duration: animationDuration, repeat: Infinity, ease: "easeInOut", delay: animationDelay },
        x: { duration: animationDuration * 1.2, repeat: Infinity, ease: "easeInOut", delay: animationDelay + 0.5 },
        rotate: { duration: animationDuration * 0.8, repeat: Infinity, ease: "easeInOut", delay: animationDelay + 0.2 },
      }}
    />
  );
};

export default FlyingBirdIllustration;