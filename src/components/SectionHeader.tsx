import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DoodleUnderline, DoodleStar } from "@/components/ui/doodles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "left" | "center";
  showDoodles?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  align = "center",
  showDoodles = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className={cn("mb-14 relative", align === "center" ? "text-center" : "text-center md:text-left", className)}>
      {/* Static doodle - no infinite animation */}
      {showDoodles && (
        <div className="absolute top-0 -right-8 md:right-0 text-primary/20 hidden md:block pointer-events-none">
          <DoodleStar className="w-6 h-6" />
        </div>
      )}
      
      <motion.h2 
        className={cn("text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight", titleClassName)}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={cn("mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed", align === "center" ? "mx-auto" : "mx-auto md:mx-0", subtitleClassName)}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Hand-drawn underline instead of plain line */}
      {showDoodles && (
        <div className={cn("mt-6 w-32 text-primary/40", align === "center" ? "mx-auto" : "mx-auto md:mx-0")}>
          <DoodleUnderline delay={0.3} />
        </div>
      )}
    </div>
  );
});

export default SectionHeader;