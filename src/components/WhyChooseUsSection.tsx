import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { uspCards } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="bg-neutral-900 relative">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Waarom DigitaleDuif?"
            subtitle="Je kunt kiezen uit tientallen digitale bureaus. Waarom zou je met ons in zee gaan? Simpel: wij kijken verder dan de technologie. Het gaat uiteindelijk om wat het voor jou oplevert."
            subtitleClassName="text-neutral-300"
          />
        </FadeInWhenVisible>

        {/* Staggered grid with slight offset for visual interest */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uspCards.slice(0, 3).map((usp, index) => (
            <FadeInWhenVisible key={usp.title} delay={0.05 + index * 0.05}>
              <FeatureCard
                icon={usp.icon}
                title={usp.title}
                description={usp.description}
                highlight={true}
                isDarkBackground={true}
                backgroundImage={usp.backgroundImage}
              />
            </FadeInWhenVisible>
          ))}
        </div>
        
        {/* Second row with offset */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 lg:px-8">
          {uspCards.slice(3, 6).map((usp, index) => (
            <FadeInWhenVisible key={usp.title} delay={0.15 + index * 0.05}>
              <FeatureCard
                icon={usp.icon}
                title={usp.title}
                description={usp.description}
                highlight={false}
                isDarkBackground={true}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;