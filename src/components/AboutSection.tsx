import React from "react";
import GuidoIntroSection from "./GuidoIntroSection";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import WaveDivider from "./WaveDivider";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background overflow-hidden">
      {/* Wave divider from hero */}
      <WaveDivider className="-mt-[60px] md:-mt-[80px]" fillColor="fill-background" />
      
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
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