"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard"; // Use FeatureCard instead of USP_Card
import { uspCards } from "@/data/mockData";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="container bg-muted py-16 md:py-24">
      <SectionHeader
        title="Waarom DigitaleDuif?"
        subtitle="Kies voor een partner die verder kijkt dan de technologie en zich richt op de impact die XR kan hebben op uw organisatie."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uspCards.map((usp, index) => (
          <FeatureCard // Use FeatureCard here
            key={index}
            icon={usp.icon}
            title={usp.title}
            description={usp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;