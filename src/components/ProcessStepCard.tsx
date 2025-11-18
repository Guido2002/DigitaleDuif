"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ArrowDown } from "lucide-react"; // Import ArrowDown icon
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import motion for animations
import { useIsMobile } from "@/hooks/use-mobile"; // Import useIsMobile

interface ProcessStepCardProps {
  icon: LucideIcon;
  title: string;
  description: string[]; // Changed to string array
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
  const isMobile = useIsMobile(); // Determine if it's a mobile device

  return (
    <div className="relative flex flex-col items-center text-center md:items-start md:text-left h-full">
      {/* Enhanced Step Number - Show only on desktop, hide on mobile */}
      {!isMobile && (
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
          <span className="text-2xl font-extrabold">{stepNumber}</span>
        </div>
      )}

      <Card
        className={cn(
          "group mt-4 flex-grow p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full",
          isMobile
            ? "border-4 border-primary rounded-xl bg-card glassmorphism" // Mobile behoudt huidige styling
            : "bg-neutral-50 shadow-md border border-border" // Desktop krijgt een lichte grijze achtergrond, standaard schaduw en een subtiele rand
        )}
      >
        <CardHeader className="mb-4 p-0">
          {isMobile ? (
            // Show step number inside card on mobile with original styling
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-primary-foreground">
              <span className="text-2xl font-extrabold">{stepNumber}</span>
            </div>
          ) : (
            // Show icon inside card on desktop
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-accent/20 text-primary">
              <Icon className="h-6 w-6" />
            </div>
          )}
        </CardHeader>
        <CardTitle className="mb-2 text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
        {/* Replaced CardDescription with a div to fix DOM nesting warning */}
        <div className="text-muted-foreground flex-grow">
          <ul className="list-disc pl-5 space-y-1">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>

      {!isLast && (
        <>
          {/* Mobile arrow indicator (hidden on desktop) */}
          <motion.div
            className="mt-4 mb-4 flex items-center justify-center text-primary md:hidden"
            animate={{ y: [0, 5, 0] }} // Subtle bounce animation
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProcessStepCard;