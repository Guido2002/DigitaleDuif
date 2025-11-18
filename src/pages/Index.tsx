"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import HeroBackgroundAnimation from "@/components/HeroBackgroundAnimation"; // Re-import
import VrHeadsetIllustration from "@/components/VrHeadsetIllustration"; // Re-import
import ScrollIndicator from "@/components/ScrollIndicator"; // Re-import

const Index = () => {
  return (
    <>
      <HeroSection />
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