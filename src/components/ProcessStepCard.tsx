"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ProcessStepCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
  stepNumber: number;
  isLast?: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  icon: Icon,
  title,
  description,
  stepNumber,
  isLast = false,
}) => {
  return (
    <Card className="relative flex flex-col items-center gap-4 p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 z-10 bg-card border border-border">
      {/* Step Number Circle */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
        {stepNumber}
      </div>

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      {/* Description List */}
      <ul className="space-y-2 text-sm text-muted-foreground">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProcessStepCard;