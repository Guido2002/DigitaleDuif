"use client";

import React from "react";
import FadeInWhenVisible from "@/components/FadeInWhenVisible"; // Re-import FadeInWhenVisible
import GuidoIntroSection from "./GuidoIntroSection"; // Import the GuidoIntroSection

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <FadeInWhenVisible delay={0.1}> {/* Re-added FadeInWhenVisible wrapper */}
          <GuidoIntroSection />
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default AboutSection;