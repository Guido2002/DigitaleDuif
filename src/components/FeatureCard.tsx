"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react"; // Import ArrowRight icon
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Import Link for navigation

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean; // New prop for highlighting
  stepNumber?: number; // New prop for step number
  learnMoreLink?: string; // New prop for learn more link
  isDarkBackground?: boolean; // New prop to indicate dark parent background
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, highlight = false, stepNumber, learnMoreLink, isDarkBackground = false }) => {
  return (
    <Card 
      className={cn(
        "group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border h-full", // Added h-full
        highlight 
          ? "bg-primary text-primary-foreground shadow-xl p-8 md:p-10 border-primary" // Larger padding for highlighted cards
          : isDarkBackground
            ? "bg-neutral-800 text-neutral-100 dark-glassmorphism p-6 border-neutral-700" // Dark card on dark background
            : "bg-card text-foreground glassmorphism p-6 border-border" // Standard card
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
          highlight 
            ? "text-primary-foreground" 
            : isDarkBackground 
              ? "text-neutral-100" 
              : "text-foreground"
        )}
      >
        {title}
      </CardTitle>
      <CardDescription 
        className={cn(
          "flex-grow", // Allow description to grow and push link to bottom
          highlight 
            ? "text-primary-foreground/90" 
            : isDarkBackground 
              ? "text-neutral-300" 
              : "text-muted-foreground"
        )}
      >
        {description}
      </CardDescription>
      {highlight && learnMoreLink && (
        <Link 
          to={learnMoreLink} 
          className="mt-6 flex items-center text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 group-hover:underline"
        >
          Lees meer <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </Card>
  );
};

export default FeatureCard;