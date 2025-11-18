"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary to-blue-800 py-20 text-white"
    >
      <div className="container z-10 text-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
          DigitaleDuif
        </h1>
        <p className="mb-6 text-2xl font-semibold md:text-3xl">
          Innovatieve XR-oplossingen die écht vliegen.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl">
          Wij zijn DigitaleDuif, uw partner in de ontwikkeling van baanbrekende
          Virtual Reality (VR), Mixed Reality (MR) en interactieve applicaties.
          Met een focus op Unity development creëren we data-gedreven
          XR-experiences die uw visie tot leven brengen.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="/projecten">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Bekijk projecten
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Plan een gesprek
            </Button>
          </Link>
        </div>
      </div>
      {/* Optional: Add a subtle background pattern or animation for a techy feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Example: SVG pattern or particles */}
      </div>
    </section>
  );
};

export default HeroSection;