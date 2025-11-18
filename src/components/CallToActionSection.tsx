"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-emerald-800 py-20 text-white">
      <div className="container text-center">
        <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Klaar om uw visie te realiseren?
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg md:text-xl">
          Neem contact op met DigitaleDuif en ontdek hoe onze XR-oplossingen
          uw bedrijf naar een hoger niveau kunnen tillen.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Plan een gesprek
            </Button>
          </Link>
          <Link to="/projecten">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Bekijk projecten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;