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
import { useReducedMotion } from "framer-motion";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="bg-neutral-900 py-16 md:py-24">
      <div className="container">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Wat onze klanten zeggen"
            subtitle="Mooie verhalen vertellen over onszelf? Dat kunnen we. Maar we laten liever anderen aan het woord die al met ons hebben gewerkt."
            subtitleClassName="text-neutral-300"
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
              <CarouselItem key={`${testimonial.author}-${testimonial.title}`} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <FadeInWhenVisible delay={0.05 + index * 0.05} className="h-full">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      title={testimonial.title}
                      avatar={testimonial.avatar}
                      rating={testimonial.rating}
                      companyLogo={testimonial.companyLogo}
                      isDarkBackground={true}
                    />
                  </FadeInWhenVisible>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
              <CarouselNext variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none" />
            </>
          )}

          {isMobile && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <span className="text-sm text-neutral-400 font-medium">Swipe om meer te zien</span>
              <svg className={"w-5 h-5 text-neutral-400 " + (shouldReduceMotion ? "" : "animate-bounce-x")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
