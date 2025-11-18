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
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="container bg-secondary py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Wat onze klanten zeggen"
          subtitle="Mooie verhalen vertellen over onszelf? Dat kunnen we. Maar we laten liever anderen aan het woord die al met ons hebben gewerkt."
        />
      </FadeInWhenVisible>

      <Carousel
        opts={{
          align: "start",
          loop: isMobile,
        }}
        plugins={isMobile ? [autoplayPlugin.current] : []}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <FadeInWhenVisible delay={0.1 + index * 0.1} className="h-full"> {/* Added h-full here */}
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    title={testimonial.title}
                    avatar={testimonial.avatar}
                    rating={testimonial.rating} // Pass the new rating prop
                    companyLogo={testimonial.companyLogo} // Pass the new companyLogo prop
                  />
                </FadeInWhenVisible>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;