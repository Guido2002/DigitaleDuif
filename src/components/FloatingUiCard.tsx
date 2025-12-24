import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingUiCardProps {
  text: string;
  delay?: number;
  className?: string;
}

const FloatingUiCard: React.FC<FloatingUiCardProps> = ({ text, delay = 0, className }) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-lg p-3 text-sm font-medium text-primary-foreground glassmorphism",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        animation: `float 4s ease-in-out infinite alternate ${delay + 0.5}s`,
      }}
    >
      {text}
    </motion.div>
  );
};

export default FloatingUiCard;