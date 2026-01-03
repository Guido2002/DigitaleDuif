import React from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import ProcessStepCard from "./ProcessStepCard";
import StepsMobile from "./StepsMobile";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import { DoodleStar, DoodleSpiral, FloatingDoodle, DotPattern } from "@/components/ui/doodles";

const ProcessSection = () => {
  const [lineRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { processSteps } = config;
  const { process: sectionTitles } = config.sectionTitles;

  return (
    <section id="process" className="bg-background relative overflow-hidden">
      {/* Doodle decorations */}
      <FloatingDoodle className="top-20 right-[8%] text-primary/15" duration={7}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-32 left-[5%] text-amber-500/15" duration={8} delay={1}>
        <DoodleSpiral className="w-16 h-16" />
      </FloatingDoodle>
      <DotPattern className="text-foreground" />
      
      <div className="container px-4 md:px-6 py-20 md:py-28 relative z-10">
        <FadeInWhenVisible delay={0.1}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`process-header-${selectedCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SectionHeader
                title={sectionTitles.title}
                subtitle={sectionTitles.subtitle}
              />
            </motion.div>
          </AnimatePresence>
        </FadeInWhenVisible>

        {/* Mobile & Tablet View */}
        <div className="block lg:hidden w-full md:max-w-[800px] md:mx-auto">
          <StepsMobile processSteps={processSteps} categoryKey={selectedCategory} />
        </div>

        {/* Desktop View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`process-desktop-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:grid relative grid-cols-4 gap-12 w-full"
          >
            {/* Horizontal connector line for desktop - now dashed for hand-drawn feel */}
            <motion.div
              ref={lineRef}
              className="absolute top-[37px] left-0 right-0 h-1 border-t-4 border-dashed border-primary/30 z-0 hidden lg:block"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />

            {processSteps.map((step, index) => (
              <FadeInWhenVisible key={`${selectedCategory}-step-${step.title}`} delay={0.1 + index * 0.1} className="w-full h-full">
                <ProcessStepCard
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  isLast={index === processSteps.length - 1}
                />
              </FadeInWhenVisible>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessSection;