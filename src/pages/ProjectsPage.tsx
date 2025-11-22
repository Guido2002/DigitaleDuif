"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ProjectCarousel from "@/components/ProjectCarousel";

const ProjectsPage = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const selectedProject = selectedProjectIndex !== null && selectedProjectIndex >= 0 ? projects[selectedProjectIndex] : null;

  return (
    <div className="container bg-background py-12">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Onze Projecten"
          subtitle="Ontdek een selectie van onze innovatieve digitale projecten, variërend van XR-oplossingen tot maatwerk websites en mobiele applicaties. Wij combineren technische diepgang met creativiteit om unieke en impactvolle oplossingen te leveren."
          align="center" // Center align header for Projects page
        />
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInWhenVisible key={`project-${project.title}`} delay={0.1 + index * 0.1} className="h-full">
            <button
              onClick={() => setSelectedProjectIndex(index)}
              className="text-left w-full h-full"
            >
              <Card className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border h-full cursor-pointer hover:border-primary/50">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="mb-2 text-2xl font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 flex flex-wrap gap-2 p-0">
                  {project.techStack.map((tech) => (
                    <Badge key={`tech-${tech}`} variant="outline" className="border-primary text-primary bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </button>
          </FadeInWhenVisible>
        ))}
      </div>

      {/* Project Carousel Modal */}
      {selectedProject && (
        <ProjectCarousel
          images={selectedProject.images}
          title={selectedProject.title}
          isOpen={selectedProjectIndex !== null}
          onClose={() => setSelectedProjectIndex(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;