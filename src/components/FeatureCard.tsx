"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  stepNumber?: number;
  learnMoreLink?: string;
  isDarkBackground?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, highlight = false, stepNumber, learnMoreLink, isDarkBackground = false }) => {
  return (
    <motion.div
      className="h-full" // Ensure motion.div takes full height
      whileHover={
        highlight
          ? {
              scale: 1.03,
              y: -5,
              rotate: 1,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)", // More pronounced shadow
            }
          : {
              y: -3, // A more subtle lift for non-highlighted cards
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        className={cn(
          "group flex flex-col items-center text-center border h-full", // Removed hover effects from here, handled by motion.div
          highlight 
            ? "bg-primary text-primary-foreground shadow-xl p-6 border-primary"
            : isDarkBackground
              ? "bg-neutral-800 text-neutral-100 dark-glassmorphism p-6 border-neutral-700"
              : "bg-card text-foreground glassmorphism p-6 border-border"
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
                ? "h-16 w-16 bg-primary-foreground/20 text-primary-foreground"
                : "h-16 w-16 bg-light-accent/20 text-primary"
            )}
          >
            <Icon className={cn(highlight ? "h-8 w-8" : "h-8 w-8")} />
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
            "flex-grow",
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
    </motion.div>
  );
};

export default FeatureCard;