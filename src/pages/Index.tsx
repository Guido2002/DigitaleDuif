"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import HeroBackgroundAnimation from "@/components/HeroBackgroundAnimation";
import VrHeadsetIllustration from "@/components/VrHeadsetIllustration";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <>
      <HeroSection>
        <HeroBackgroundAnimation />
        <VrHeadsetIllustration />
        <ScrollIndicator />
      </HeroSection>
      <AboutSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
    </>
  );
};

export default Index;