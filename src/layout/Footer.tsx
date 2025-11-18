"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion"; // Import motion

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background py-8 overflow-hidden"> {/* Added relative and overflow-hidden */}
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

      {/* Pigeon 4 */}
      <motion.img
        src="/pigeon4.png"
        alt="Zittende duif"
        className="absolute left-[5%] bottom-[5%] w-16 h-auto object-contain opacity-70 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        style={{ animation: "float 4s ease-in-out infinite alternate 0.8s" }}
      />
    </footer>
  );
};

export default Footer;