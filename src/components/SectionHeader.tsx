"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div className={cn("mb-12 text-center md:text-left", className)}>
      <h2 className={cn("text-4xl font-bold text-primary", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary/20 md:mx-0" />
    </div>
  );
};

export default SectionHeader;