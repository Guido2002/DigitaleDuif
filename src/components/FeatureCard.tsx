"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean; // New prop for highlighting
  stepNumber?: number; // New prop for step number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, highlight = false, stepNumber }) => {
  return (
    <Card 
      className={cn(
        "group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border",
        highlight 
          ? "bg-primary text-primary-foreground shadow-xl p-8 md:p-10" // Larger padding for highlighted cards
          : "bg-card text-foreground glassmorphism p-6" // Standard padding for non-highlighted cards
      )}
    >
      {highlight && stepNumber && (
        <div className="mb-4 text-h2 font-extrabold text-primary-foreground/70">
          {`0${stepNumber}`}
        </div>
      )}
      <CardHeader className="mb-4 p-0">
        <div 
          className={cn(
            "flex items-center justify-center rounded-full",
            highlight 
              ? "h-20 w-20 bg-primary-foreground/20 text-primary-foreground" // Larger icon container for highlighted
              : "h-16 w-16 bg-light-accent/20 text-primary" // Standard icon container
          )}
        >
          <Icon className={cn(highlight ? "h-10 w-10" : "h-8 w-8")} /> {/* Larger icon for highlighted */}
        </div>
      </CardHeader>
      <CardTitle 
        className={cn(
          "mb-2 text-xl font-semibold",
          highlight ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </CardTitle>
      <CardDescription 
        className={cn(
          highlight ? "text-primary-foreground/90" : "text-muted-foreground"
        )}
      >
        {description}
      </CardDescription>
    </Card>
  );
};

export default FeatureCard;