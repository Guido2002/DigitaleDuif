"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";
import ScrollIndicator from "./ScrollIndicator"; // Import the new scroll indicator
import { motion } from "framer-motion"; // Import motion for animations
import { ArrowRight, CalendarDays } from "lucide-react"; // Icons for buttons

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 2, // Delay buttons slightly more
      },
    },
    hoverPrimary: {
      y: -2,
      scale: 1.02,
      boxShadow: "0px 8px 24px rgba(37, 99, 235, 0.3)",
      transition: { duration: 0.3 },
    },
    hoverSecondary: {
      y: -2,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98, boxShadow: "0px 2px 8px rgba(37, 99, 235, 0.15)" },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
    >
      <HeroBackgroundAnimation className="z-0" />
      
      <motion.div
        className="container z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-h1 font-extrabold leading-tight text-primary-foreground text-shadow-hero-title"
          variants={itemVariants}
        >
          <span className="gradient-text bg-gradient-to-r from-electric-blue via-cyan-accent to-purple-accent animate-gradient-text">
            DigitaleDuif
          </span>
        </motion.h1>
        <motion.p
          className="mb-6 text-h3 font-semibold text-primary-foreground/90"
          variants={itemVariants}
        >
          Innovatieve XR-oplossingen die <span className="relative inline-block">écht<motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }} className="absolute bottom-0 left-0 h-0.5 bg-primary-foreground/80 shadow-scroll-indicator"></motion.span></span> vliegen.
        </motion.p>
        <motion.p
          className="mx-auto mb-10 max-w-3xl text-body-lg text-primary-foreground/80 text-shadow-hero-body"
          variants={itemVariants}
        >
          Wij zijn DigitaleDuif, uw partner in de ontwikkeling van baanbrekende
          Virtual Reality (VR), Mixed Reality (MR) en interactieve applicaties.
          Met een focus op Unity development creëren we data-gedreven
          XR-experiences die uw visie tot leven brengen.
        </motion.p>
        <motion.div
          className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          variants={buttonVariants}
        >
          <Link to="/projecten">
            <motion.div
              variants={buttonVariants}
              whileHover="hoverPrimary"
              whileTap="tap"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary-foreground/95 px-9 py-4 text-body-base font-semibold text-deep-blue shadow-md transition-all duration-300 ease-out hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/50 to-primary-foreground/0 opacity-0 group-hover:opacity-100 animate-shimmer" />
              <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              Bekijk projecten
            </motion.div>
          </Link>
          <Link to="/contact">
            <motion.div
              variants={buttonVariants}
              whileHover="hoverSecondary"
              whileTap="tap"
              className="group relative inline-flex items-center justify-center rounded-xl border-2 border-primary-foreground/80 bg-transparent px-9 py-4 text-body-base font-semibold text-primary-foreground shadow-none transition-all duration-300 ease-out hover:border-primary-foreground hover:bg-primary-foreground/15"
            >
              <CalendarDays className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              Plan een gesprek
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;