import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import pigeon1Image from "@/assets/pigeon1.png";
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

const pigeonImages = [pigeon1Image, pigeon4Image];

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
  const shouldReduceMotion = useReducedMotion();
  const sizeClasses = {
    small: "h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20", // Small on mobile, larger on desktop
    medium: "h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36", // Medium on mobile, larger on desktop
    large: "h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64", // Large on mobile, much larger on desktop
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
        "absolute object-contain pointer-events-none z-1",
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={shouldReduceMotion ? {
        opacity: animateOpacity,
        x: initialX,
        y: initialY,
        rotate: 0,
      } : {
        opacity: animateOpacity,
        y: [initialY, `${parseFloat(initialY) + floatIntensity}%`, initialY, `${parseFloat(initialY) - floatIntensity}%`, initialY],
        x: [initialX, `${parseFloat(initialX) + floatIntensity}%`, initialX, `${parseFloat(initialX) - floatIntensity}%`, initialX],
        rotate: [0, rotateIntensity, -rotateIntensity, rotateIntensity, 0],
      }}
      transition={shouldReduceMotion ? {
        opacity: { duration: 0.3, delay: animationDelay },
      } : {
        opacity: { duration: 1, delay: animationDelay, ease: "easeOut" },
        y: { duration: animationDuration, repeat: Infinity, ease: "easeInOut", delay: animationDelay },
        x: { duration: animationDuration * 1.2, repeat: Infinity, ease: "easeInOut", delay: animationDelay + 0.5 },
        rotate: { duration: animationDuration * 0.8, repeat: Infinity, ease: "easeInOut", delay: animationDelay + 0.2 },
      }}
    />
  );
};

export default FlyingBirdIllustration;