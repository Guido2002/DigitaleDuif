"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ImpactCasesSection from "@/components/ImpactCasesSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Impact Cases"
          subtitle="Ontdek hoe wij complexe uitdagingen vertalen naar innovatieve digitale oplossingen. Van XR-training tot schaalbare platforms."
          align="center"
        />
      </FadeInWhenVisible>

      <ImpactCasesSection />
    </div>
  );
};

export default ProjectsPage;
