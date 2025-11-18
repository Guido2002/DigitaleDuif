"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, Service } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { motion } from "framer-motion"; // Import motion

const ServicesPage = () => {
  return (
    <div className="container relative bg-background py-12 overflow-hidden"> {/* Added relative and overflow-hidden */}
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wat biedt DigitaleDuif?"
          subtitle="Bij DigitaleDuif zijn we gespecialiseerd in het creëren van innovatieve digitale oplossingen, waaronder XR, web en mobiele apps, die uw bedrijf vooruit helpen. Ontdek hieronder ons uitgebreide aanbod aan diensten."
          align="left" // Left align header for Services page
        />
      </FadeInWhenVisible>

      {/* Pigeon 3 */}
      <motion.img
        src="/pigeon3.png"
        alt="Vliegende duif"
        className="absolute right-[10%] top-[20%] w-28 h-auto object-contain opacity-80 hidden lg:block"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        style={{ animation: "float 5s ease-in-out infinite alternate 0.8s" }}
      />
      <motion.img
        src="/pigeon3.png"
        alt="Vliegende duif"
        className="absolute left-[5%] bottom-[10%] w-24 h-auto object-contain opacity-70 hidden md:block"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        style={{ animation: "float 6s ease-in-out infinite alternate 1.2s" }}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1} className="h-full"> {/* Added h-full here */}
            <Card
              id={service.id} // Add ID here
              className="group flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border h-full" // Added h-full here
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