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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, highlight = false }) => {
  return (
    <Card 
      className={cn(
        "group flex flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border",
        highlight ? "bg-primary text-primary-foreground shadow-xl" : "bg-card text-foreground glassmorphism"
      )}
    >
      <CardHeader className="mb-4 p-0">
        <div 
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full",
            highlight ? "bg-primary-foreground/20 text-primary-foreground" : "bg-light-accent/20 text-primary"
          )}
        >
          <Icon className="h-8 w-8" />
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