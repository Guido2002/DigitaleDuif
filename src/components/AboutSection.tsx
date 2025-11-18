"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import AbstractBackgroundAnimation from "@/components/AbstractBackgroundAnimation";
import profilePhoto from "/public/1711446418839.jpeg"; // Direct import van de afbeelding
import FadeInWhenVisible from "./FadeInWhenVisible"; // Import FadeInWhenVisible
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Import Card components
import { aboutExpertiseCards } from "@/data/mockData"; // Import new data
import { cn } from "@/lib/utils"; // For conditional classes

const AboutSection = () => {
  console.log("AboutSection rendering. Image path:", profilePhoto);

  return (
    <section id="about" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wie is DigitaleDuif?"
          subtitle="DigitaleDuif is een gespecialiseerde studio die zich richt op de voorhoede van Extended Reality (XR) technologie. Wij combineren diepgaande technische kennis met een passie voor innovatie om impactvolle en meeslepende ervaringen te creëren."
          align="left" // Left align header for About section
        />
      </FadeInWhenVisible>

      {/* Personal Introduction Card */}
      <FadeInWhenVisible delay={0.2}>
        <Card className="mb-16 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8 p-6 border border-border bg-card shadow-lg">
          <div className="mb-8 flex justify-center md:mb-0 md:w-1/3">
            <img
              src={profilePhoto} // Gebruik de geïmporteerde variabele
              alt="Persoonlijke foto van de oprichter"
              className="h-48 w-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold text-foreground">
                Hallo, ik ben Guido Duif!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-4 text-muted-foreground">
                Als oprichter van DigitaleDuif ben ik gepassioneerd door de kracht van XR om complexe problemen op te lossen en nieuwe werelden te creëren. Mijn reis in de technologie begon met een fascinatie voor interactieve ervaringen, en dat heeft me geleid tot het bouwen van innovatieve VR- en MR-oplossingen.
              </p>
              <p className="text-muted-foreground">
                Ik geloof sterk in een persoonlijke aanpak en werk graag nauw samen met klanten om hun visie te vertalen naar impactvolle digitale realiteiten. Laten we samen iets buitengewoons bouwen!
              </p>
            </CardContent>
          </div>
        </Card>
      </FadeInWhenVisible>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {aboutExpertiseCards.map((item, index) => (
          <FadeInWhenVisible key={index} delay={0.3 + index * 0.1}>
            <Card 
              className="group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border glassmorphism"
            >
              <AbstractBackgroundAnimation className="opacity-20" /> {/* Keep this for subtle background animation */}
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