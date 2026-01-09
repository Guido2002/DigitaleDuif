import React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

interface AbstractBackgroundAnimationProps {
  className?: string;
}

const AbstractBackgroundAnimation: React.FC<AbstractBackgroundAnimationProps> = ({ className }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      <div className={cn(
        "h-32 w-32 rounded-full bg-primary/10",
        !shouldReduceMotion && "animate-pulse-fade"
      )} />
    </div>
  );
};

export default AbstractBackgroundAnimation;