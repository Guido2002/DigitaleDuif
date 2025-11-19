"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Removed PigeonAnimation import

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
      {/* Removed Pigeon Animations */}

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.h1
          className="mb-6 text-mobile-h1 md:text-h1 font-extrabold leading-tight tracking-tighter text-shadow-hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DigitaleDuif: We geven jouw<br className="hidden sm:inline" />
          <span className="text-accent-foreground">idee vleugels</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-3xl text-mobile-body md:text-body-lg text-primary-foreground/90 text-shadow-hero-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Digitale Duif ontwikkelt Virtual, Mixed Reality ervaringen, websites en apps afgestemd op gebruikers en willen bedrijven vooruit helpen. Of je nu een eerste stap in digitale innovatie wilt zetten of een ambitieus project voor ogen hebt. Wij denken graag met je mee, vanaf de tekentafel tot het eindproduct.
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
              Begin vandaag
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;