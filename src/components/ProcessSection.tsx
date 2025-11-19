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

      <div className="relative">
        {/* Animated line and numbers container */}
        <div className="relative mb-12 flex justify-between md:mb-16">
          {[1, 2, 3, 4].map((step, index) => (
            <React.Fragment key={step}>
              <FadeInWhenVisible delay={0.2 + index * 0.1}>
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg z-10">
                    {step}
                  </div>
                  {index < 3 && (
                    <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -z-10 hidden lg:block"></div>
                  )}
                </div>
              </FadeInWhenVisible>
            </React.Fragment>
          ))}
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
              <ProcessStepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;