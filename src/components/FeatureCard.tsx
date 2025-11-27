"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // motion is still imported but not used for this specific hover effect

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  stepNumber?: number;
  learnMoreLink?: string;
  isDarkBackground?: boolean;
  backgroundImage?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, highlight = false, stepNumber, learnMoreLink, isDarkBackground = false, backgroundImage }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <Card 
      className={cn(
        "group flex flex-col items-center text-center border h-full transition-all duration-300 relative overflow-hidden",
        highlight 
          ? "text-primary-foreground shadow-xl p-0 border-primary min-h-[400px] hover:shadow-2xl cursor-pointer"
          : isDarkBackground
            ? "bg-neutral-800 text-neutral-100 dark-glassmorphism p-6 border-neutral-700 hover:-translate-y-1 hover:shadow-lg"
            : "bg-card text-foreground glassmorphism p-6 border-border hover:-translate-y-1 hover:shadow-lg"
      )}
      style={highlight && backgroundImage ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : undefined}
      onClick={() => highlight && setIsFlipped(!isFlipped)}
    >
      {highlight ? (
        <>
          {/* Front side - Title bar with CTA */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2",
            "h-[20%]"
          )}>
            <CardTitle className="text-xl font-bold text-white">
              {title}
            </CardTitle>
            <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </div>
          
          {/* Back side - Description with icon (shown on click) */}
          <div className={cn(
            "absolute inset-0 bg-primary/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500",
            isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <div className="flex items-center justify-center rounded-full h-16 w-16 bg-white/20 text-white mb-4">
              <Icon className="h-8 w-8" />
            </div>
            <CardDescription className="text-white/90 text-center">
              {description}
            </CardDescription>
          </div>
        </>
      ) : (
        <>
          <CardHeader className="mb-4 p-0">
            <div 
              className={cn(
                "flex items-center justify-center rounded-full",
                "h-16 w-16 bg-light-accent/20 text-primary"
              )}
            >
              <Icon className="h-8 w-8" />
            </div>
          </CardHeader>
          <CardTitle 
            className={cn(
              "mb-2 text-xl font-semibold",
              isDarkBackground 
                ? "text-neutral-100" 
                : "text-foreground"
            )}
          >
            {title}
          </CardTitle>
          <CardDescription 
            className={cn(
              "flex-grow",
              isDarkBackground 
                ? "text-neutral-300" 
                : "text-muted-foreground"
            )}
          >
            {description}
          </CardDescription>
        </>
      )}
    </Card>
  );
};

export default FeatureCard;