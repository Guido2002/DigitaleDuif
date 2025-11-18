"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile"; // Import useIsMobile
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

  // Configure autoplay plugin
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="container bg-secondary py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wat onze klanten zeggen"
          subtitle="Lees hoe DigitaleDuif bedrijven heeft geholpen met innovatieve XR-oplossingen."
        />
      </FadeInWhenVisible>

      <Carousel
        opts={{
          align: "start",
          loop: isMobile, // Loop only on mobile
        }}
        plugins={isMobile ? [autoplayPlugin.current] : []} // Autoplay only on mobile
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <FadeInWhenVisible delay={0.1 + index * 0.1}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    title={testimonial.title}
                    avatar={testimonial.avatar}
                  />
                </FadeInWhenVisible>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;