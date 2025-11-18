"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible"; // Import the new component

const FAQSection = () => {
  return (
    <section id="faq" className="container py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Veelgestelde Vragen"
          subtitle="Heeft u vragen over XR, onze diensten of hoe we werken? Hier vindt u de antwoorden op de meest voorkomende vragen."
        />
      </FadeInWhenVisible>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <FadeInWhenVisible key={index} delay={0.1 + index * 0.05}>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeInWhenVisible>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;