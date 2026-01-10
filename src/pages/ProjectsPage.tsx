import React from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ImpactCasesSection from "@/components/ImpactCasesSection";
import { DoodleStar, DoodleSpiral, FloatingDoodle, DotPattern } from "@/components/ui/doodles";

const ProjectsPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <DotPattern className="text-foreground" />
      <FloatingDoodle className="top-32 right-[10%] text-primary/15" duration={7}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="top-[60%] left-[5%] text-amber-500/10" duration={8} delay={1}>
        <DoodleSpiral className="w-16 h-16" />
      </FloatingDoodle>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-4">
        <div className="container px-4 md:px-6">
          <FadeInWhenVisible delay={shouldReduceMotion ? 0 : 0.1}>
            <SectionHeader
              title="Impact Cases"
              subtitle="Ontdek hoe ik complexe uitdagingen vertaal naar innovatieve digitale oplossingen. Van XR-training tot schaalbare platforms."
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
