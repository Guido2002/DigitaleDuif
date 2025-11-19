"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { processSteps } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";
import ProcessStepCard from "./ProcessStepCard";

const ProcessSection = () => {
  return (
    <section id="process" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Hoe werkt DigitaleDuif?"
          subtitle="Bij Digitale Duif vliegen we volgens een aanpak die werkt. Hieronder zie je hoe wij jouw idee stap voor stap laten landen."
        />
      </FadeInWhenVisible>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Horizontal connector line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -z-10 hidden lg:block"></div>
        
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