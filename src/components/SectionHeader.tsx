"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "left" | "center"; // Added align prop
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  align = "center", // Default to center
}) => {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-center md:text-left", className)}>
      <h2 className={cn("text-4xl font-bold text-primary", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-muted-foreground max-w-3xl", align === "center" ? "mx-auto" : "mx-auto md:mx-0", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <div className={cn("mt-6 h-1 w-24 rounded-full bg-primary/20", align === "center" ? "mx-auto" : "mx-auto md:mx-0")} />
    </div>
  );
};

export default SectionHeader;