"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/mockData"; // Import projects and Project interface from mockData

const ProjectsPage = () => {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Onze Projecten
      </h1>
      <p className="mb-12 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        Ontdek een selectie van onze innovatieve XR-projecten. Wij combineren
        technische diepgang met creativiteit om unieke en impactvolle
        oplossingen te leveren.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="mb-2 text-2xl font-semibold">
                {project.title}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;