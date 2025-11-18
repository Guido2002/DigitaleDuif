"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { processSteps } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";
import ProcessStepCard from "./ProcessStepCard"; // Import the new component

const ProcessSection = () => {
  return (
    <section id="process" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Hoe werkt DigitaleDuif?"
          subtitle="Ons gestructureerde proces zorgt voor transparantie, efficiëntie en een eindresultaat dat uw verwachtingen overtreft."
        />
      </FadeInWhenVisible>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
            <ProcessStepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
              isLast={index === processSteps.length - 1}
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;