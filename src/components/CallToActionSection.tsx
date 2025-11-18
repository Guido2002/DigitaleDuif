"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="bg-primary py-16 text-white md:py-24">
      <div className="container text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Klaar om uw visie te laten vliegen?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl">
          Neem contact op met DigitaleDuif en ontdek hoe wij uw ideeën kunnen
          transformeren in baanbrekende XR-ervaringen.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Plan een gesprek
            </Button>
          </Link>
          <Link to="/projecten">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Bekijk onze projecten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;