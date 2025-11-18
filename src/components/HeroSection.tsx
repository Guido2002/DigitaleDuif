"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Assuming Next.js Link for navigation

interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section
      id="home"
      className="relative flex w-full min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif XR oplossingen"
    >
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.h1
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl text-shadow-hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DigitaleDuif: Uw Partner in <br className="hidden sm:inline" />
          <span className="text-accent-foreground">XR Innovatie</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-3xl text-lg md:text-xl text-primary-foreground/90 text-shadow-hero"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Wij creëren meeslepende Virtual en Mixed Reality ervaringen die uw bedrijf transformeren. Van concept tot implementatie, wij bouwen de toekomst van interactie.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="group px-8 py-6 text-lg">
            <Link href="/contact">
              Start uw XR Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
      {children}
    </section>
  );
};

export default HeroSection;