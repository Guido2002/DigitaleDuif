import React, { lazy, Suspense, memo } from "react";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections for better initial load
const AboutSection = lazy(() => import("@/components/AboutSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CallToActionSection = lazy(() => import("@/components/CallToActionSection"));
const SectionProgressDots = lazy(() => import("@/components/SectionProgressDots"));
const OfferingsSection = lazy(() => import("@/components/OfferingsSection"));
const FeaturedProjectsSection = lazy(() => import("@/components/FeaturedProjectsSection"));

// Minimal section loading placeholder
const SectionPlaceholder = () => (
  <div className="min-h-[300px] flex items-center justify-center">
    <div className="w-6 h-6 rounded-full bg-primary/20 animate-pulse" />
  </div>
);

const Index = memo(function Index() {
  return (
    <>
      <Suspense fallback={null}>
        <SectionProgressDots />
      </Suspense>
      
      {/* HeroSection loads immediately - above the fold */}
      <HeroSection />
      
      {/* Below-the-fold sections lazy loaded with content-visibility */}
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <AboutSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <WhyChooseUsSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <OfferingsSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <FeaturedProjectsSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <ProcessSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <TestimonialsSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <FAQSection />
        </section>
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <section className="section-lazy">
          <CallToActionSection />
        </section>
      </Suspense>
    </>
  );
});

export default Index;