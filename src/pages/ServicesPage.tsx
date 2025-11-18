"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, Service } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader"; // Import SectionHeader
import FadeInWhenVisible from "@/components/FadeInWhenVisible"; // Import FadeInWhenVisible

const ServicesPage = () => {
  return (
    <div className="container bg-background py-12">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wat biedt DigitaleDuif?"
          subtitle="Bij DigitaleDuif zijn we gespecialiseerd in het creëren van innovatieve XR-oplossingen die uw bedrijf vooruit helpen. Ontdek hieronder ons uitgebreide aanbod aan diensten."
        />
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
            <Card 
              className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border"
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="mb-2 text-2xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="border-primary text-primary bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;