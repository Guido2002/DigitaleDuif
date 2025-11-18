"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
  isLast: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  icon: Icon,
  title,
  description,
  stepNumber,
  isLast,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
        <span className="text-xl font-bold">{stepNumber}</span>
      </div>
      <Card className="group mt-4 flex-grow p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border glassmorphism">
        <CardHeader className="mb-4 p-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-accent/20 text-primary">
            <Icon className="h-6 w-6" />
          </div>
        </CardHeader>
        <CardTitle className="mb-2 text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </Card>

      {!isLast && (
        // De lijn is nu altijd zichtbaar. De glassmorphism op de kaart zorgt voor de blur.
        <div className="absolute left-1/2 top-16 z-0 h-full w-1.5 -translate-x-1/2 bg-primary/30 md:left-auto md:top-8 md:h-1.5 md:w-[calc(100%+24px)] md:translate-x-0 md:translate-y-1/2" />
      )}
    </div>
  );
};

export default ProcessStepCard;