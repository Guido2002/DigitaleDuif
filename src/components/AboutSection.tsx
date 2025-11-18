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
          subtitle="DigitaleDuif is ontstaan uit een diepe fascinatie voor wat digitale technologie, inclusief Extended Reality (XR), voor mensen en bedrijven kan betekenen. Wij zijn geen groot bureau met eindeloze lagen - bij ons krijg je te maken met mensen die oprecht enthousiast worden van innovatieve technologie én begrijpen wat het in de praktijk moet opleveren."
          align="left" // Left align header for About section
        />
      </FadeInWhenVisible>

      {/* Personal Introduction Card */}
      <FadeInWhenVisible delay={0.2}>
        <Card className="mb-16 flex flex-col items-center text-center md:flex-row md:items-start md:gap-12 p-8 border border-border bg-card shadow-xl glassmorphism"> {/* Enhanced styling */}
          <div className="mb-8 flex justify-center md:mb-0 md:w-1/3"> {/* Adjusted width for larger photo */}
            <img
              src={profilePhoto} // Gebruik de geïmporteerde variabele
              alt="Persoonlijke foto van de oprichter"
              className="h-72 w-72 rounded-full object-cover shadow-lg border-4 border-primary/20" // Made photo larger with subtle border
            />
          </div>
          <div className="md:w-2/3"> {/* Adjusted width for text content */}
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-4xl font-extrabold text-primary"> {/* Made title larger and bolder */}
                Hallo, ik ben Guido Duif!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground"> {/* Made list items larger */}
                <li>Oprichter van DigitaleDuif, gedreven door digitale innovatie.</li>
                <li>Creëert digitale ervaringen waar je écht 'in stapt', zowel in XR als op web/mobiel.</li>
                <li>Focus op VR-trainingen, MR-applicaties, webdevelopment, mobiele apps en data-visualisatie.</li>
                <li>Passie voor het 'wauw-moment' bij klanten.</li>
                <li>Perfectionist met oog voor detail en resultaat.</li>
                <li>Nieuwsgierig naar jouw ideeën voor een kop koffie!</li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </FadeInWhenVisible>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {aboutExpertiseCards.map((item, index) => (
          <FadeInWhenVisible key={index} delay={0.3 + index * 0.1} className="h-full"> {/* Added h-full here */}
            <Card
              className="group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border glassmorphism h-full" // Added h-full here
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