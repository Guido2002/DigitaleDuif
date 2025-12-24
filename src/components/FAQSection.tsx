import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/mockData";
import FadeInWhenVisible from "./FadeInWhenVisible";

const FAQSection = () => {
  return (
    <section id="faq" className="container bg-background py-16 md:py-24">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Veelgestelde Vragen"
          subtitle="Vragen? Natuurlijk! Digitale innovatie en XR zijn voor veel mensen nog redelijk nieuw terrein. Hier vind je antwoorden op de vragen die we het vaakst krijgen. Staat jouw vraag er niet bij? Stuur gerust een berichtje!"
        />
      </FadeInWhenVisible>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <FadeInWhenVisible key={index} delay={0.1 + index * 0.05}>
              <AccordionItem value={`item-${index + 1}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
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