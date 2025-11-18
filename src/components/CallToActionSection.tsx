"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./FadeInWhenVisible";

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center md:text-left">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-h2 font-bold mb-6">
            Klaar om uw toekomst met XR vorm te geven?
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="text-body-lg mb-8 max-w-3xl mx-auto md:mx-0">
            Klinkt dit als de partner die je zoekt? Laten we dan gewoon eens kennismaken! Geen verplichtingen, geen verkooppraatjes - gewoon een open gesprek over wat digitale innovatie voor jouw bedrijf kan betekenen. Wie weet bouwen we binnenkort samen aan iets bijzonders. Ik kijk ernaar uit om je te ontmoeten!
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
            >
              Plan een gratis consult
            </Button>
          </Link>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default CallToActionSection;