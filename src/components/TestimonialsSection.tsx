import React, { useState, useEffect, useCallback, useRef } from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion, AnimatePresence, motion } from "framer-motion";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { testimonials } = config;
  const { testimonials: sectionTitles } = config.sectionTitles;
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    
    if (isSwipe) {
      if (distance > 0) {
        // Swiped left - go next
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swiped right - go previous
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };
  
  // Reset to first testimonial when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);
  
  // Auto-advance testimonials
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length, shouldReduceMotion]);
  
  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container px-4 md:px-6 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
        {/* Header */}
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
                subtitleClassName="text-white/60"
              />
            </motion.div>
          </AnimatePresence>
        </FadeInWhenVisible>

        {/* Testimonial display */}
        <div className="max-w-5xl mx-auto mt-8 sm:mt-10 md:mt-12">
          {/* Main testimonial area with swipe support */}
          <div 
            className="relative touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${selectedCategory}-testimonial-${index}`}
                className={cn(
                  "flex items-center justify-center",
                  index === 0 ? "relative" : "absolute inset-0"
                )}
                aria-hidden={index !== activeIndex}
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : (index < activeIndex ? -30 : 30),
                    scale: index === activeIndex ? 1 : 0.98,
                  }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0 : 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={cn(
                    "w-full",
                    index !== activeIndex && "pointer-events-none"
                  )}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    title={testimonial.title}
                    avatar={testimonial.avatar}
                    rating={testimonial.rating}
                    companyLogo={testimonial.companyLogo}
                    isDarkBackground={true}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:bg-white/15 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
                aria-label="Vorige testimonial"
              >
                <ArrowLeft className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
              
              {/* Dots - larger tap targets on mobile */}
              <div className="flex items-center gap-3 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1a1a2e]",
                      index === activeIndex
                        ? "w-8 h-2.5 sm:h-2 bg-primary"
                        : "w-2.5 h-2.5 sm:w-2 sm:h-2 bg-white/20 hover:bg-white/40 active:bg-white/50"
                    )}
                    aria-label={`Ga naar testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : "false"}
                  />
                ))}
              </div>
              
              {/* Next button */}
              <button
                onClick={goToNext}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:bg-white/15 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
                aria-label="Volgende testimonial"
              >
                <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </div>
          )}
          
          {/* Swipe hint - mobile only */}
          <div className="flex justify-center mt-4 sm:hidden">
            <span className="text-xs text-white/30 flex items-center gap-1.5">
              <ArrowLeft className="h-3 w-3" />
              Swipe om te navigeren
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
          
          {/* Counter */}
          <div className="flex justify-center mt-3 sm:mt-6">
            <span className="text-sm text-white/40 font-mono">
              {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
