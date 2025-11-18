"use client";

import React from "react";
// Removed Card, CardContent, CardHeader, CardTitle, Brain, Code, Users imports as they are no longer needed here
import FadeInWhenVisible from "./FadeInWhenVisible";
// Removed AbstractBackgroundAnimation import as it was specific to the old card layout
import GuidoIntroSection from "./GuidoIntroSection"; // Import the GuidoIntroSection

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <FadeInWhenVisible>
          {/* The GuidoIntroSection already contains its own title, so we remove the generic SectionHeader here */}
          <GuidoIntroSection />
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default AboutSection;