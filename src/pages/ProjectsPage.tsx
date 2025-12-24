import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ImpactCasesSection from "@/components/ImpactCasesSection";

const ProjectsPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects with subtle animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.3, 0.5],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }
          }
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 pb-2">
        <div className="container px-4 md:px-6">
          <FadeInWhenVisible delay={0.1}>
            <SectionHeader
              title="Impact Cases"
              subtitle="Ontdek hoe wij complexe uitdagingen vertalen naar innovatieve digitale oplossingen. Van XR-training tot schaalbare platforms."
              align="center"
            />
          </FadeInWhenVisible>
        </div>
      </section>

      <ImpactCasesSection />
    </div>
  );
};

export default ProjectsPage;
