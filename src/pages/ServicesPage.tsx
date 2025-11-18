"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, Service } from "@/data/mockData"; // Import services and Service interface from mockData

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
    </div>
  );
};

export default ServicesPage;