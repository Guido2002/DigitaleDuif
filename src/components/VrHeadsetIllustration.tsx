import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import headsetImage from "/media/site/placeholder.svg"; // Placeholder image for now

interface VrHeadsetIllustrationProps {
  className?: string;
  parallaxOffset?: number; // For scroll parallax
}

const VrHeadsetIllustration: React.FC<VrHeadsetIllustrationProps> = ({
  className,
  parallaxOffset = 0,
}) => {
  return (
    <motion.div
      className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2",
        "w-[40%] max-w-[600px] lg:w-[35%] xl:w-[30%]", // Responsive width
        "hidden md:block", // Only show on desktop
        className
      )}
      style={{ y: parallaxOffset }} // Apply parallax
      initial={{ opacity: 0, rotateY: 0 }}
      animate={{ opacity: 1, rotateY: "360deg" }}
      transition={{
        opacity: { delay: 2.2, duration: 1 },
        rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
      }}
    >
      <img
        src={headsetImage}
        alt="3D VR Headset Illustration"
        className="w-full h-auto object-contain drop-shadow-lg"
        loading="lazy"
        decoding="async"
        width="400"
        height="400"
      />
      {/* Subtle glow around lenses - simulated */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute h-1/4 w-1/4 rounded-full bg-cyan-accent/40 blur-xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute h-1/5 w-1/5 rounded-full bg-purple-accent/40 blur-xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default VrHeadsetIllustration;