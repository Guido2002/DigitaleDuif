"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./FadeInWhenVisible";

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-cyan-accent py-16 text-primary-foreground md:py-24">
      <div className="container flex flex-col items-center justify-center text-center">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Klaar om uw digitale visie te realiseren?
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="mb-10 max-w-2xl text-lg md:text-xl">
            Of het nu gaat om een meeslepende XR-ervaring, een krachtige website of een intuïtieve mobiele app, wij helpen u graag uw doelen te bereiken.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <Link to="/contact" className="group"> {/* Added 'group' class here */}
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary/90 transition-colors duration-300" // Simplified hover effect
            >
              Neem Contact Op
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default CallToActionSection;