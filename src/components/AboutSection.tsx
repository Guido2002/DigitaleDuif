"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import AbstractBackgroundAnimation from "@/components/AbstractBackgroundAnimation";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aboutExpertiseCards } from "@/data/mockData";
import { cn } from "@/lib/utils";
import GuidoIntroSection from "./GuidoIntroSection"; // Import the new component

const AboutSection = () => {
  return (
    <section id="about" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wie is DigitaleDuif?"
          subtitle="DigitaleDuif is ontstaan uit een diepe fascinatie voor wat digitale technologie, inclusief Extended Reality (XR), voor mensen en bedrijven kan betekenen. Wij zijn geen groot bureau met eindeloze lagen - bij ons krijg je te maken met mensen die oprecht enthousiast worden van innovatieve technologie én begrijpen wat het in de praktijk moet opleveren."
          align="left"
        />
      </FadeInWhenVisible>

      {/* Replaced with new GuidoIntroSection component */}
      <GuidoIntroSection />

      {/* Expertise Grid remains the same */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {aboutExpertiseCards.map((item, index) => (
          <FadeInWhenVisible key={index} delay={0.3 + index * 0.1} className="h-full">
            <Card
              className="group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border glassmorphism h-full"
            >
              <AbstractBackgroundAnimation className="opacity-20" />
              <div className="z-10">
                <CardHeader className="mb-4 p-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-cyan-accent/20 text-primary mx-auto">
                    <item.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardTitle className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </div>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;