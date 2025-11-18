"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Corrected import path to reference the image from src/assets
import profilePhoto from "../assets/1711446418839.jpeg"; // Import the image directly
import { cn } from "@/lib/utils";

const GuidoIntroSection = () => {
  return (
    <motion.div
      className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex justify-center md:justify-end"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={profilePhoto} // Using the imported image path
          alt="Bas van Toor - Oprichter DigitaleDuif"
          className="w-full max-w-md rounded-xl object-cover shadow-2xl border-4 border-primary/20 transition-all duration-300 ease-in-out"
          style={{ aspectRatio: '4/5' }}
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
          <CardTitle className="text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
            Hallo, ik ben Guido Duif!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="list-disc pl-5 space-y-3 text-lg text-muted-foreground">
            <li>Oprichter van DigitaleDuif, gedreven door digitale innovatie.</li>
            <li>Creëert digitale ervaringen waar je écht 'in stapt', zowel in XR als op web/mobiel.</li>
            <li>Focus op VR-trainingen, MR-applicaties, webdevelopment, mobiele apps en data-visualisatie.</li>
            <li>Passie voor het 'wauw-moment' bij klanten.</li>
            <li>Perfectionist met oog voor detail en resultaat.</li>
            <li>Nieuwsgierig naar jouw ideeën voor een kop koffie!</li>
          </ul>
        </CardContent>
      </div>
    </motion.div>
  );
};

export default GuidoIntroSection;