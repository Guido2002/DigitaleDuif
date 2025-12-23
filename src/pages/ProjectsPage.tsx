"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ImpactCasesSection from "@/components/ImpactCasesSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-8">
        <div className="container mx-auto px-4">
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
