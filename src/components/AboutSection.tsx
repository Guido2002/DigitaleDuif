"use client";

import React from "react";
// Removed FadeInWhenVisible import
import GuidoIntroSection from "./GuidoIntroSection"; // Import the GuidoIntroSection

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        {/* Removed FadeInWhenVisible wrapper */}
        <GuidoIntroSection />
      </div>
    </section>
  );
};

export default AboutSection;