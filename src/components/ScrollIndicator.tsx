import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile"; // Import useIsMobile

interface ScrollIndicatorProps {
  className?: string;
  reducedMotion?: boolean; // New prop for reduced motion
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className, reducedMotion = false }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]); // Fade out between 0 and 100px scroll
  const isMobile = useIsMobile(); // Determine if it's a mobile device

  return (
    <motion.div
      className={cn(
        "absolute bottom-10 left-1/2 z-10 flex cursor-pointer flex-col items-center text-primary-foreground -translate-x-1/2", // Added -translate-x-1/2 for perfect centering
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reducedMotion ? 0 : 3, duration: reducedMotion ? 0 : 0.6 }}
      whileHover={reducedMotion ? {} : { scale: 1.2, opacity: 1 }} // Scale to 1.2x on hover
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      style={{ opacity }} // Apply scroll-based opacity
      aria-label="Scroll naar inhoud"
    >
      <motion.p
        className="mb-2 text-sm uppercase tracking-widest text-primary-foreground/70 text-shadow-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: [0.7, 1, 0.7] }}
        transition={reducedMotion ? { delay: 0.5, duration: 0.6 } : { delay: 3.6, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        {isMobile ? "Swipe" : "Scroll om te ontdekken"} {/* Conditional text */}
      </motion.p>
      <motion.div
        className="rounded-full border-2 border-primary-foreground/70 p-2 text-shadow-scroll-indicator"
        animate={reducedMotion ? {} : { y: [0, 10, 0] }}
        transition={reducedMotion ? { duration: 0 } : {
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;