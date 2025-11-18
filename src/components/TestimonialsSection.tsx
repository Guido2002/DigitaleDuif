"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/mockData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container bg-muted py-16 md:py-24">
      <SectionHeader
        title="Wat onze klanten zeggen"
        subtitle="Lees hoe DigitaleDuif bedrijven heeft geholpen met innovatieve XR-oplossingen."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;