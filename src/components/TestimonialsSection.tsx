import React from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
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
import { useReducedMotion, AnimatePresence, motion } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import { DoodleStar, DoodleCircle, FloatingDoodle } from "@/components/ui/doodles";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { testimonials } = config;
  const { testimonials: sectionTitles } = config.sectionTitles;

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="bg-foreground relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Floating doodles */}
      <FloatingDoodle className="top-16 right-[12%] text-white/10" duration={6}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-20 left-[6%] text-primary/15" duration={8} delay={1}>
        <DoodleCircle className="w-12 h-12" />
      </FloatingDoodle>
      
      <div className="container px-4 md:px-6 py-20 md:py-28 relative z-10">
        <FadeInWhenVisible delay={0.05}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`testimonials-header-${selectedCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SectionHeader
                title={sectionTitles.title}
                subtitle={sectionTitles.subtitle}
                titleClassName="text-white"
                subtitleClassName="text-white/70"
              />
            </motion.div>
          </AnimatePresence>
        </FadeInWhenVisible>

        <AnimatePresence mode="wait">
          <motion.div
            key={`testimonials-carousel-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: isMobile,
              }}
              plugins={isMobile ? [autoplayPlugin.current] : []}
              className="w-full max-w-4xl mx-auto"
              aria-label="Klantbeoordelingen carousel"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={`${selectedCategory}-${testimonial.author}-${testimonial.title}`} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
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
                  <CarouselPrevious 
                    variant="default" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 border-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[48px] min-w-[48px] rounded-full" 
                    aria-label="Vorige testimonial"
                  />
                  <CarouselNext 
                    variant="default" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 border-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[48px] min-w-[48px] rounded-full" 
                    aria-label="Volgende testimonial"
                  />
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;
