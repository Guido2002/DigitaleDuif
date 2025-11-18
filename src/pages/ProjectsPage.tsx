"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const ProjectsPage = () => {
  return (
    <div className="container bg-background py-12">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Onze Projecten"
          subtitle="Ontdek een selectie van onze innovatieve XR-projecten. Wij combineren technische diepgang met creativiteit om unieke en impactvolle oplossingen te leveren."
          align="left" // Left align header for Projects page
        />
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
            <Card 
              className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border"
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="mb-2 text-2xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-primary text-primary bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;