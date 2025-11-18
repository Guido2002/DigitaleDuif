"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { uspCards } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible"; // Import the new component

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="container bg-muted py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Waarom DigitaleDuif?"
          subtitle="Kies voor een partner die verder kijkt dan de technologie en zich richt op de impact die XR kan hebben op uw organisatie."
        />
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uspCards.map((usp, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
            <FeatureCard
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;