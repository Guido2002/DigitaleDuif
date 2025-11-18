"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import FlyingBirdIllustration from "@/components/FlyingBirdIllustration"; // Import FlyingBirdIllustration

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8 relative overflow-hidden"> {/* Added relative and overflow-hidden */}
      {/* Static bird in the footer */}
      <FlyingBirdIllustration
        className="absolute top-8 right-8 h-16 w-16" // Vaste positie en grootte voor alle schermformaten
        initialX="0%"
        initialY="0%"
        animationDelay={0.5}
        animationDuration={0} // Make it static
        floatIntensity={0} // No floating
        rotateIntensity={0} // No rotation
        animateOpacity={0.6} // Slightly transparent
      />
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-primary">DigitaleDuif</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Innovatieve digitale oplossingen die écht vliegen. Uw partner in Virtual Reality, Mixed Reality, Web Development en Mobiele Apps.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:items-end">
          <a
            href="mailto:digitaleduif@outlook.com"
            className="flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <Mail className="mr-2 h-4 w-4" /> digitaleduif@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/company/digitaleduif"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} DigitaleDuif. Alle rechten voorbehouden.
      </div>
    </footer>
  );
};

export default Footer;