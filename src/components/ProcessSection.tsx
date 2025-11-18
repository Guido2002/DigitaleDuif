"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard"; // Use FeatureCard instead of ProcessStep
import { processSteps } from "@/data/mockData";

const ProcessSection = () => {
  return (
    <section id="process" className="container py-16 md:py-24">
      <SectionHeader
        title="Hoe werkt DigitaleDuif?"
        subtitle="Ons gestructureerde proces zorgt voor transparantie, efficiëntie en een eindresultaat dat uw verwachtingen overtreft."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <FeatureCard // Use FeatureCard here
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;