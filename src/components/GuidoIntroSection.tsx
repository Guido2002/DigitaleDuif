"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profilePhoto from "../assets/1711446418839.jpeg";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import FlyingBirdIllustration from "./FlyingBirdIllustration"; // Import FlyingBirdIllustration

const GuidoIntroSection = () => {
  return (
    <div
      className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
    >
      {/* Image Section */}
      <motion.div
        className="relative flex justify-center md:justify-end"
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Subtle background glow behind the image */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/50 to-purple-accent/50 blur-xl"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        />
        <img
          src={profilePhoto}
          alt="Bas van Toor - Oprichter DigitaleDuif"
          className="w-full max-w-md rounded-xl object-cover shadow-2xl ring-4 ring-primary/50 ring-offset-4 ring-offset-background transition-all duration-300 ease-in-out"
          style={{ aspectRatio: '4/5' }}
        />
        {/* Static bird near the image, adjusted to sit exactly in the middle on top */}
        <FlyingBirdIllustration
          className="absolute -top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-1/2"
          size="medium" {/* Aangepast van "small" naar "medium" */}
          initialX="0%"
          initialY="0%"
          animationDelay={0.5}
          animationDuration={0} // Make it static
          floatIntensity={0} // No floating
          rotateIntensity={0} // No rotation
          animateOpacity={0.8} // Slightly transparent
        />
        {/* Optional: Add a subtle floating UI element near the image */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg md:left-auto md:right-0 md:translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ animation: "float 5s ease-in-out infinite alternate 1s" }}
        >
          Innovatie met impact!
        </motion.div>
      </motion.div>

      {/* Text Content Section */}
      <div className="text-left md:text-left">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-mobile-h1 md:text-h1 font-extrabold text-primary">
            Hallo, ik ben Guido
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 px-4 md:px-0">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Oprichter van DigitaleDuif, gedreven door digitale innovatie.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Creëert digitale ervaringen waar je écht 'in stapt', zowel in XR als op web/mobiel.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Focus op VR-trainingen, MR-applicaties, webdevelopment, mobiele apps en data-visualisatie.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Passie voor het 'wauw-moment' bij klanten.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Perfectionist met oog voor detail en resultaat.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                Nieuwsgierig naar jouw ideeën voor een kop koffie!
              </p>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default GuidoIntroSection;