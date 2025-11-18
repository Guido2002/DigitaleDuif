"use client";

import React from "react";
// Removed motion import
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profilePhoto from "../assets/1711446418839.jpeg";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react"; // Import CheckCircle2 icon

const GuidoIntroSection = () => {
  return (
    <div // Replaced motion.div with a standard div
      className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
    >
      {/* Image Section */}
      <div // Replaced motion.div with a standard div
        className="relative flex justify-center md:justify-end"
      >
        {/* Subtle background glow behind the image */}
        <div // Replaced motion.div with a standard div
          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/50 to-purple-accent/50 blur-xl"
          // Removed animation props
        />
        <img
          src={profilePhoto}
          alt="Bas van Toor - Oprichter DigitaleDuif"
          className="w-full max-w-md rounded-xl object-cover shadow-2xl ring-4 ring-primary/50 ring-offset-4 ring-offset-background transition-all duration-300 ease-in-out"
          style={{ aspectRatio: '4/5' }}
        />
        {/* Optional: Add a subtle floating UI element near the image */}
        <div // Replaced motion.div with a standard div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg md:left-auto md:right-0 md:translate-x-1/2"
          // Removed animation props
        >
          Innovatie met impact!
        </div>
      </div>

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
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
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