import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  align = "center",
}) => {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-center md:text-left", className)}>
      <h2 className={cn("text-3xl md:text-5xl font-bold text-primary", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-muted-foreground max-w-3xl", align === "center" ? "mx-auto" : "mx-auto md:mx-0", subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <motion.div 
        className={cn("mt-6 h-1 w-24 rounded-full bg-primary/20", align === "center" ? "mx-auto" : "mx-auto md:mx-0")}
        initial={{ scaleX: 0, originX: align === "center" ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionHeader;