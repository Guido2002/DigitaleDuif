"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./PigeonAnimation.module.css"; // Import CSS module

interface PigeonAnimationProps {
  className?: string;
  delay?: number;
  duration?: number;
  sizeScale?: number; // To control overall size
  initialX?: string;
  finalX?: string;
  initialY?: string;
  finalY?: string;
}

const PigeonAnimation: React.FC<PigeonAnimationProps> = ({
  className,
  delay = 0,
  duration = 15, // Longer duration for flight across screen
  sizeScale = 1,
  initialX = "-20%", // Start off-screen left
  finalX = "120%", // End off-screen right
  initialY = "20%", // Start at 20% from top
  finalY = "30%", // End at 30% from top (slight vertical movement)
}) => {
  return (
    <motion.div
      className={cn(styles.pigeon, className)}
      initial={{ x: initialX, y: initialY, scale: sizeScale, opacity: 0 }}
      animate={{
        x: finalX,
        y: [initialY, finalY, initialY], // Gentle up and down motion
        opacity: [0, 1, 1, 1, 0], // Fade in, stay visible, fade out
      }}
      transition={{
        x: { duration: duration, ease: "linear", delay: delay },
        y: { duration: duration / 3, repeat: Infinity, ease: "easeInOut", delay: delay, repeatType: "reverse" },
        opacity: { duration: 2, delay: delay, ease: "easeOut" }, // Fade in/out duration
        repeat: Infinity,
        repeatDelay: 5, // Delay before repeating the entire flight
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