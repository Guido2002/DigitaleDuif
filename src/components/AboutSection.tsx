"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Users } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import AbstractBackgroundAnimation from "./AbstractBackgroundAnimation";

const services = [
  {
    icon: <Brain className="h-8 w-8 text-accent-foreground" />,
    title: "Strategie & Concept",
    description:
      "Van brainstorm tot een concreet plan. Wij helpen je met het vormgeven van je digitale visie en het uitwerken van innovatieve concepten.",
  },
  {
    icon: <Code className="h-8 w-8 text-accent-foreground" />,
    title: "Full-Stack Web Development",
    description:
      "Robuuste, schaalbare en gebruiksvriendelijke websites en webapplicaties, gebouwd met de nieuwste technologieën.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent-foreground" />,
    title: "XR Oplossingen (VR/AR/MR)",
    description:
      "Creëer meeslepende Virtual, Augmented en Mixed Reality ervaringen die je doelgroep versteld doen staan.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <FadeInWhenVisible>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-foreground">
            Wie is <span className="text-accent-foreground">DigitaleDuif</span>?
          </h2>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={0.3 + index * 0.1} className="h-full">
              <Card
                className="group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border-2 border-primary glassmorphism h-full" // Teruggezet naar border-2 border-primary
              >
                <AbstractBackgroundAnimation className="opacity-20" />
                <CardHeader className="relative z-10 mb-4 p-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent-foreground backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 p-0 text-muted-foreground">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;