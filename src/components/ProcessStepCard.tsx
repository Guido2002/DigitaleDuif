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
    <>
      <div className="relative flex flex-col items-center text-center md:items-start md:text-left h-full">
        {/* Enhanced Step Number - Show only on desktop, hide on mobile */}
        {!isMobile && (
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-8 ring-background">
            <span className="text-2xl font-extrabold">{stepNumber}</span>
          </div>
        )}

        <Card
          className={cn(
            "group mt-8 flex-grow transition-all duration-300 hover:-translate-y-1 h-full w-full relative overflow-hidden",
            isMobile
              ? "border-4 border-primary rounded-xl bg-neutral-50 shadow-md p-6"
              : "bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_18px_45px_rgba(15,23,42,0.08)] rounded-2xl p-8"
          )}
        >
          {/* Gradient Accent for Desktop */}
          {!isMobile && (
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-50" />
          )}

          <CardHeader className="mb-4 p-0">
            {isMobile ? (
              // Show step number inside card on mobile with original styling
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-primary-foreground">
                <span className="text-2xl font-extrabold">{stepNumber}</span>
              </div>
            ) : (
              // Show icon inside card on desktop
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-7 w-7" />
              </div>
            )}
          </CardHeader>
          <CardTitle className="mb-4 text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {/* Replaced CardDescription with a div to fix DOM nesting warning */}
          <div className="text-muted-foreground flex-grow">
            <ul className="space-y-3">
              {description.map((item, i) => (
                <li key={`item-${i}`} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {!isLast && (
        <>
          {/* Mobile arrow indicator (hidden on desktop) - outside card padding */}
          <motion.div
            className="my-4 flex items-center justify-center text-primary md:hidden"
            animate={{ y: [0, 5, 0] }} // Subtle bounce animation
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </>
      )}
    </>
  );
};

export default ProcessStepCard;