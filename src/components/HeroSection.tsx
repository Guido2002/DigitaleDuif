"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PigeonAnimation from "@/components/PigeonAnimation"; // New import

interface HeroSectionProps {
  // children: React.ReactNode; // Removed as it's not used
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="home"
      className="relative flex w-full min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif Digitale Innovatie & XR oplossingen"
    >
      {/* Pigeon Animations */}
      <PigeonAnimation className="z-20" delay={0} duration={20} sizeScale={0.8} initialY="10%" finalY="15%" initialX="-20%" finalX="120%" />
      <PigeonAnimation className="z-20" delay={5} duration={18} sizeScale={0.6} initialY="40%" finalY="35%" initialX="-10%" finalX="110%" />
      <PigeonAnimation className="z-20" delay={10} duration={22} sizeScale={0.9} initialY="25%" finalY="20%" initialX="-30%" finalX="130%" />

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.h1
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl text-shadow-hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DigitaleDuif: Uw Partner in <br className="hidden sm:inline" />
          <span className="text-accent-foreground">Digitale Innovatie & XR</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-3xl text-lg md:text-xl text-primary-foreground/90 text-shadow-hero-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Wij creëren Virtual, Mixed Reality ervaringen, websites en apps die mensen écht raken en bedrijven vooruit helpen. Of je nu een eerste stap in digitale innovatie wilt zetten of een ambitieus project voor ogen hebt - wij denken graag met je mee, van het allereerste idee tot de uiteindelijke lancering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              Start uw Digitale Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;