"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";
import ScrollIndicator from "./ScrollIndicator";
import { motion, useScroll, useTransform } from "framer-motion"; // Import motion, useScroll, useTransform
import { ArrowRight, CalendarDays } from "lucide-react";
import VrHeadsetIllustration from "./VrHeadsetIllustration"; // Import new headset component
import FloatingUiCard from "./FloatingUiCard"; // Import new floating UI card component
import { useIsMobile } from "@/hooks/use-mobile"; // Import useIsMobile

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollY } = useScroll();
  const parallaxOffset = useTransform(scrollY, [0, 500], [0, -100]); // Adjust 500 for scroll distance

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.2,
        delayChildren: reducedMotion ? 0 : 0.4,
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
        duration: reducedMotion ? 0 : 0.8,
        ease: "easeOut", // Bounce ease is not a standard Framer Motion ease, using easeOut
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
        delay: reducedMotion ? 0 : 2,
        duration: reducedMotion ? 0 : 0.8,
      },
    },
    hoverPrimary: {
      y: -2,
      scale: 1.02,
      boxShadow: "0px 8px 24px rgba(37, 99, 235, 0.3)",
      transition: { duration: reducedMotion ? 0 : 0.3 },
    },
    hoverSecondary: {
      y: -2,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "hsl(var(--primary-foreground))", // Ensure border is 100% opaque
      transition: { duration: reducedMotion ? 0 : 0.3 },
    },
    tap: { scale: 0.98, boxShadow: "0px 2px 8px rgba(37, 99, 235, 0.15)" },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif XR oplossingen"
    >
      <HeroBackgroundAnimation className="z-0" reducedMotion={reducedMotion} />
      
      <motion.div
        className="container z-10 text-center md:text-left relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:w-2/3 lg:w-1/2"> {/* Content takes left half on desktop */}
          <motion.h1
            className="mb-4 text-h1 font-extrabold leading-tight text-primary-foreground text-shadow-hero-title md:text-left text-center"
            variants={itemVariants}
          >
            <span className="gradient-text bg-gradient-to-r from-electric-blue via-cyan-accent to-purple-accent animate-gradient-text">
              DigitaleDuif
            </span>
          </motion.h1>
          <motion.p
            className="mb-6 text-h3 font-medium text-primary-foreground/90 md:text-left text-center"
            variants={itemVariants}
          >
            Innovatieve XR-oplossingen die <span className="relative inline-block">écht
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: reducedMotion ? 0 : 1.4, duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-0.5 bg-primary-foreground/80 shadow-scroll-indicator"
              aria-hidden="true"
            ></motion.span></span> vliegen.
          </motion.p>
          <motion.p
            className="mx-auto mb-10 max-w-3xl text-body-lg text-primary-foreground/80 text-shadow-hero-body md:mx-0 md:text-left text-center"
            variants={itemVariants}
          >
            Wij zijn DigitaleDuif, uw partner in de ontwikkeling van baanbrekende
            Virtual Reality (VR), Mixed Reality (MR) en interactieve applicaties.
            Met een focus op Unity development creëren we data-gedreven
            XR-experiences die uw visie tot leven brengen.
          </motion.p>
          <motion.div
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start"
            variants={buttonVariants}
          >
            <Link to="/projecten">
              <motion.div
                variants={buttonVariants}
                whileHover={reducedMotion ? {} : "hoverPrimary"}
                whileTap="tap"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary-foreground/95 px-9 py-4 text-body-base font-semibold text-deep-blue shadow-md transition-all duration-300 ease-out hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                aria-label="Bekijk onze projecten"
              >
                {!reducedMotion && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/50 to-primary-foreground/0 opacity-0 group-hover:opacity-100 animate-shimmer" aria-hidden="true" />
                )}
                <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                Bekijk projecten
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                variants={buttonVariants}
                whileHover={reducedMotion ? {} : "hoverSecondary"}
                whileTap="tap"
                className="group relative inline-flex items-center justify-center rounded-xl border-2 border-primary-foreground/80 bg-transparent px-9 py-4 text-body-base font-semibold text-primary-foreground shadow-none transition-all duration-300 ease-out hover:border-primary-foreground hover:bg-primary-foreground/15 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                aria-label="Plan een gesprek met ons"
              >
                <CalendarDays className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                Plan een gesprek
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* VR Headset Illustration */}
        <VrHeadsetIllustration parallaxOffset={parallaxOffset} className="z-10" />

        {/* Floating UI Elements */}
        {!isMobile && !reducedMotion && (
          <>
            <FloatingUiCard text="VR Training" className="top-[20%] right-[15%] xl:right-[20%] z-20" delay={2.4} />
            <FloatingUiCard text="Unity Development" className="top-[45%] right-[5%] xl:right-[10%] z-20" delay={2.6} />
            <FloatingUiCard text="Meta Quest 3" className="bottom-[20%] right-[25%] xl:right-[30%] z-20" delay={2.8} />
          </>
        )}
      </motion.div>
      <ScrollIndicator reducedMotion={reducedMotion} />
    </section>
  );
};

export default HeroSection;