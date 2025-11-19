"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./PigeonAnimation.module.css"; // Import CSS module

interface PigeonAnimationProps {
  className?: string;
  delay?: number;
  duration?: number; // Duration for the horizontal flight
  sizeScale?: number; // To control overall size
  initialX?: string;
  finalX?: string;
  initialY?: string; // Start Y position
  finalY?: string; // End Y position (for subtle vertical movement)
}

const PigeonAnimation: React.FC<PigeonAnimationProps> = ({
  className,
  delay = 0,
  duration = 10, // Default faster duration for flight across screen
  sizeScale = 1,
  initialX = "-20%", // Start off-screen left
  finalX = "120%", // End off-screen right
  initialY = "5%", // Default start at 5% from top (just below navbar)
  finalY = "8%", // Default end at 8% from top (subtle vertical movement)
}) => {
  return (
    <motion.div
      className={cn(styles.pigeon, className)}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: sizeScale }}
      animate={{
        opacity: 1, // Fade in once and stay visible
        x: finalX,
        y: [initialY, finalY, initialY], // Gentle up and down motion
      }}
      transition={{
        opacity: { duration: 1, delay: delay, ease: "easeOut" }, // Fade in duration
        x: { duration: duration, ease: "linear", delay: delay, repeat: Infinity, repeatType: "reverse" }, // Continuous horizontal flight
        y: { duration: duration / 3, repeat: Infinity, ease: "easeInOut", delay: delay, repeatType: "reverse" }, // Continuous vertical bobbing
      }}
      style={{
        // Apply scale directly to the pigeon container
        transform: `scale(${sizeScale})`,
        transformOrigin: "center",
      }}
    >
      <div className={styles.pHead}></div>
      <div className={styles.pEye}></div>
      <div className={styles.pBeak}></div>
      <div className={styles.pBody}></div>
      <div className={styles.pWhiteSpot}></div>
      <div className={cn(styles.pLeg, styles.leftLeg)}>
        <div className={styles.pLeg1}></div>
        <div className={styles.pLeg2}></div>
        <div className={styles.pLeg3}></div>
      </div>
      <div className={cn(styles.pLeg, styles.rightLeg)}>
        <div className={styles.pLeg1}></div>
        <div className={styles.pLeg2}></div>
        <div className={styles.pLeg3}></div>
      </div>
      <div className={styles.wingContainer}>
        <div className={styles.wing0}></div>
        <div className={styles.wing1}></div>
        <div className={styles.wing2}></div>
        <div className={styles.wing3}></div>
        <div className={styles.wing4}></div>
      </div>
    </motion.div>
  );
};

export default PigeonAnimation;