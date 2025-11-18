"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface Service {
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    title: "VR-applicatieontwikkeling",
    description: "Ontwikkeling van op maat gemaakte Virtual Reality applicaties voor training, simulatie, visualisatie en entertainment. Van concept tot implementatie, wij brengen uw ideeën tot leven in VR.",
    tags: ["Unity", "Meta Quest", "C#", "VR Design"],
  },
  {
    title: "Mixed Reality interfaces",
    description: "Creëren van intuïtieve en functionele Mixed Reality interfaces die digitale informatie naadloos integreren met de fysieke wereld. Ideaal voor industriële toepassingen en interactieve ervaringen.",
    tags: ["Unity", "HoloLens", "MR Design", "UX"],
  },
  {
    title: "Prototyping & conceptontwikkeling",
    description: "Snelle ontwikkeling van prototypes en proof-of-concepts om ideeën te valideren en te visualiseren. Wij helpen u met het verkennen van de mogelijkheden van XR voor uw specifieke behoeften.",
    tags: ["Rapid Prototyping", "Concepting", "Ideation", "Agile"],
  },
  {
    title: "Unity consultancy / developer-as-a-service",
    description: "Expertise en ondersteuning voor uw Unity-projecten. Huur onze ervaren Unity-ontwikkelaars in voor advies, code review, projectmanagement of als tijdelijke uitbreiding van uw team.",
    tags: ["Unity", "C#", "Consultancy", "Development"],
  },
  {
    title: "XR-trainingssimulaties",
    description: "Ontwikkeling van realistische en effectieve XR-trainingssimulaties die medewerkers in een veilige omgeving complexe taken laten oefenen. Verhoog de retentie en verminder risico's.",
    tags: ["Training", "Simulatie", "Educatie", "Serious Gaming"],
  },
  {
    title: "Data logging & analyse in XR",
    description: "Implementatie van systemen voor het loggen en analyseren van gebruikersgedrag binnen XR-applicaties. Verkrijg waardevolle inzichten om uw ervaringen te optimaliseren en beslissingen te onderbouwen.",
    tags: ["Data Analytics", "Telemetry", "Insights", "Optimization"],
  },
];

const ServicesPage = () => {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Wat biedt DigitaleDuif?
      </h1>
      <p className="mb-12 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        Bij DigitaleDuif zijn we gespecialiseerd in het creëren van innovatieve
        XR-oplossingen die uw bedrijf vooruit helpen. Ontdek hieronder ons
        uitgebreide aanbod aan diensten.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col justify-between p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="mb-2 text-2xl font-semibold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardHeader>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default ServicesPage;