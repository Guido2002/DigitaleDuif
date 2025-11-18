"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { uspCards } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="container bg-neutral-900 py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Waarom DigitaleDuif?"
          subtitle="Je kunt kiezen uit tientallen digitale bureaus. Waarom zou je met ons in zee gaan? Simpel: wij kijken verder dan de technologie. Het gaat uiteindelijk om wat het voor jouw organisatie oplevert, of het nu XR, web of mobiel is."
          subtitleClassName="text-neutral-300" // Ensure subtitle is readable on dark background
        />
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uspCards.map((usp, index) => (
          <FadeInWhenVisible key={index} delay={0.1 + index * 0.1}>
            <FeatureCard
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
              highlight={index < 3} // Highlight the first three USP cards
              stepNumber={index < 3 ? index + 1 : undefined} // Pass step number only for highlighted cards
              learnMoreLink={index === 0 ? "/diensten#vr-app-dev" : index === 1 ? "/diensten#web-development" : index === 2 ? "/#about" : undefined} // Example links
              isDarkBackground={true} // Indicate that the card is on a dark background
            />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;