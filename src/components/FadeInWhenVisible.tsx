"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Ensure motion is used

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <motion.div // Changed to motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on inView status
      transition={{
        opacity: { duration: duration, ease: "easeOut", delay: delay },
        y: { duration: duration, ease: "easeOut", delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;