import React from "react";
import GuidoIntroSection from "./GuidoIntroSection";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <FadeInWhenVisible delay={0.1}>
          <SectionHeader
            title="Wie is DigitaleDuif?"
            subtitle="Maak kennis met de oprichter van DigitaleDuif, en ontdek zijn passie voor technologie en innovatie."
            align="center"
          />
        </FadeInWhenVisible>
        
        <GuidoIntroSection />
      </div>
    </section>
  );
};

export default AboutSection;