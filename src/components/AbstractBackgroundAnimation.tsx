"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AbstractBackgroundAnimationProps {
  className?: string;
}

const AbstractBackgroundAnimation: React.FC<AbstractBackgroundAnimationProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      <div className="h-32 w-32 rounded-full bg-primary/10 animate-pulse-fade" />
    </div>
  );
};

export default AbstractBackgroundAnimation;