"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { processSteps } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";
import ProcessStepCard from "./ProcessStepCard";
import { motion } from "framer-motion"; // Import motion
import { useInView } from "react-intersection-observer"; // Import useInView

const ProcessSection = () => {
  const [lineRef, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the line is visible
  });

  return (
    <section id="process" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Hoe werkt DigitaleDuif?"
          subtitle="Bij Digitale Duif vliegen we volgens een aanpak die werkt. Hieronder zie je hoe wij jouw idee stap voor stap laten landen."
        />
      </FadeInWhenVisible>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Horizontal connector line for desktop */}
        <motion.div
          ref={lineRef}
          className="absolute top-[40px] left-0 right-0 h-1.5 bg-primary/30 z-0 hidden lg:block"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} // Animate over 1.5 seconds with a slight delay
        />

        {processSteps.map((step, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1} className="h-full"> {/* Added h-full here */}
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