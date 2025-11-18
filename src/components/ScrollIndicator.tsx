"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <motion.div
      className={cn(
        "absolute bottom-10 left-1/2 z-10 flex cursor-pointer flex-col items-center text-primary-foreground",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.6 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
    >
      <motion.p
        className="mb-2 text-sm uppercase tracking-widest text-primary-foreground/70 text-shadow-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ delay: 3.6, duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll om te ontdekken
      </motion.p>
      <motion.div
        className="rounded-full border-2 border-primary-foreground/70 p-2 text-shadow-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1], // Corrected cubic-bezier format
        }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;