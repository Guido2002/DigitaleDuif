"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./FadeInWhenVisible";

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-h2 font-bold mb-6">
                Klaar om samen jouw idee aan te vliegen?
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-body-lg mb-8 max-w-3xl mx-auto md:mx-0">
                Laten we kennismaken en ontdekken wat Digitale Duif voor u kan betekenen. Ik kijk ernaar uit!
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-14 text-xl bg-primary-foreground text-primary hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
                >
                  Plan een vrijblijvend gesprek
                </Button>
              </Link>
            </FadeInWhenVisible>
          </div>

          {/* Image Card */}
          <FadeInWhenVisible delay={0.4}>
            <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-[3/4] sm:aspect-auto sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <img
                src="/IMG_0005.jpg"
                alt="DigitaleDuif XR Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;