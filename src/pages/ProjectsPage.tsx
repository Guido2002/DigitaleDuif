"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface Project {
  title: string;
  description: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "MR BIM 4D visualisatie voor ombouwplanning",
    description: "Een Mixed Reality applicatie die 3D BIM-modellen projecteert in de fysieke ruimte, inclusief tijdsdimensie (4D), voor efficiënte ombouwplanning en clashdetectie op locatie.",
    techStack: ["Unity", "C#", "HoloLens 2", "BIM Integration"],
  },
  {
    title: "XR sportanalyse: passing & positionering",
    description: "Een Virtual Reality trainingsmodule voor voetbalcoaches en spelers om passing en positionering te analyseren en te oefenen in gesimuleerde wedstrijdscenario's.",
    techStack: ["Unity", "C#", "Meta Quest 3", "Data Visualization"],
  },
  {
    title: "Interactieve VR-trainingsmodule voor complexe machines",
    description: "Een gedetailleerde VR-simulatie die operators traint in de veilige en efficiënte bediening van complexe industriële machines, inclusief noodprocedures.",
    techStack: ["Unity", "C#", "Meta Quest Pro", "Simulatie"],
  },
  {
    title: "Augmented Reality gids voor museumbezoekers",
    description: "Een mobiele AR-applicatie die museumbezoekers verrijkte informatie en interactieve elementen biedt bij kunstwerken en tentoonstellingen, via hun smartphone of tablet.",
    techStack: ["Unity", "AR Foundation", "Mobile AR", "UX Design"],
  },
  {
    title: "Data-gedreven XR-ervaring voor productontwerp",
    description: "Een VR-applicatie die real-time productiedata visualiseert binnen een virtuele omgeving, waardoor ontwerpers en ingenieurs direct inzicht krijgen in prestaties en optimalisatiemogelijkheden.",
    techStack: ["Unity", "C#", "Data Streaming", "VR Analytics"],
  },
];

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
          <Card key={index} className="flex flex-col justify-between p-6">
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
      <MadeWithDyad />
    </div>
  );
};

export default ProjectsPage;