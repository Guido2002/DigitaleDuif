"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FlyingBirdIllustration from "./FlyingBirdIllustration"; // Import the bird component

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex w-full min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif Digitale Innovatie & XR oplossingen"
    >
      {/* Flying Bird Illustrations */}
      <FlyingBirdIllustration
        className="top-[10%] left-[5%] md:top-[15%] md:left-[10%]"
        size="medium"
        initialX="-10%"
        initialY="10%"
        animationDelay={0}
        animateOpacity={0.8}
      />
      <FlyingBirdIllustration
        className="top-[20%] right-[10%] md:top-[25%] md:right-[15%]"
        size="large"
        initialX="10%"
        initialY="-10%"
        animationDelay={1}
        animateOpacity={0.9}
      />
      {/* De duif linksonder is verwijderd */}
      <FlyingBirdIllustration
        className="bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%]"
        size="medium"
        initialX="20%"
        initialY="10%"
        animationDelay={3}
        animateOpacity={0.85}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DigitaleDuif: Jouw Partner in Digitale Innovatie & XR
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Wij transformeren jouw visie naar meeslepende digitale ervaringen met
          op maat gemaakte XR-oplossingen en innovatieve webapplicaties.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Button asChild className="px-8 py-6 text-lg">
            <Link href="#contact">
              Neem Contact Op <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;