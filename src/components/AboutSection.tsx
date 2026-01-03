import React from "react";
import GuidoIntroSection from "./GuidoIntroSection";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { DoodleStar, DoodleCircle, FloatingDoodle, DotPattern } from "@/components/ui/doodles";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background overflow-hidden">
      {/* Background decorations */}
      <DotPattern className="text-foreground" />
      <FloatingDoodle className="top-20 right-[8%] text-primary/15" duration={6}>
        <DoodleStar className="w-8 h-8" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-24 left-[5%] text-primary/10" duration={8} delay={1.5}>
        <DoodleCircle className="w-14 h-14" />
      </FloatingDoodle>
      
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-28">
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