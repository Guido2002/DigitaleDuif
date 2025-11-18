"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon, ArrowDown } from "lucide-react"; // Import ArrowDown icon
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import motion for animations

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
      {/* Enhanced Step Number */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
        <span className="text-2xl font-extrabold">{stepNumber}</span>
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