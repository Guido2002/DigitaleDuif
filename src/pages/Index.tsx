"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import CallToActionSection from "@/components/CallToActionSection"; // Import the new component

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CallToActionSection /> {/* Add the new component here */}
    </>
  );
};

export default Index;