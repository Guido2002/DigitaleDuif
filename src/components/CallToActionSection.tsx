"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./FadeInWhenVisible";

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om uw digitale aanwezigheid te transformeren?
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvend gesprek en ontdek hoe DigitaleDuif uw bedrijf kan laten vliegen.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              Neem Contact Op
            </Button>
          </Link>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default CallToActionSection;