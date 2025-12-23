"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { uspCards } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="bg-neutral-900 py-16 md:py-24">
      <div className="container">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Waarom DigitaleDuif?"
            subtitle="Je kunt kiezen uit tientallen digitale bureaus. Waarom zou je met ons in zee gaan? Simpel: wij kijken verder dan de technologie. Het gaat uiteindelijk om wat het voor jou oplevert, of het nu XR, web of mobiel is."
            subtitleClassName="text-neutral-300"
          />
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uspCards.map((usp, index) => (
            <FadeInWhenVisible key={index} delay={0.05 + index * 0.05}>
              <FeatureCard
                icon={usp.icon}
                title={usp.title}
                description={usp.description}
                highlight={index < 3}
                isDarkBackground={true}
                backgroundImage={usp.backgroundImage}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;