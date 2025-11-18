"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation"; // Import the new animation component

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary to-hero-gradient-end py-20 text-primary-foreground overflow-hidden"
    >
      <HeroBackgroundAnimation className="z-0" /> {/* Add the background animation */}
      
      <div className="container z-10 text-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl text-primary-foreground">
          DigitaleDuif
        </h1>
        <p className="mb-6 text-2xl font-semibold md:text-3xl text-primary-foreground/90">
          Innovatieve XR-oplossingen die écht vliegen.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl text-primary-foreground/80">
          Wij zijn DigitaleDuif, uw partner in de ontwikkeling van baanbrekende
          Virtual Reality (VR), Mixed Reality (MR) en interactieve applicaties.
          Met een focus op Unity development creëren we data-gedreven
          XR-experiences die uw visie tot leven brengen.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="/projecten">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Bekijk projecten
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Plan een gesprek
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;