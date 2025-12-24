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
import WaveDivider from "./WaveDivider";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background relative">
      {/* Wave divider at top */}
      <WaveDivider className="-mt-[60px] md:-mt-[80px]" fillColor="fill-background" />
      
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.1}>
          <SectionHeader
            title="Veelgestelde Vragen"
            subtitle="Vragen? Natuurlijk! Digitale innovatie en XR zijn voor veel mensen nog redelijk nieuw terrein. Hier vind je antwoorden op de vragen die we het vaakst krijgen."
          />
        </FadeInWhenVisible>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <FadeInWhenVisible key={item.question} delay={0.05 + index * 0.03}>
                <AccordionItem value={`item-${index + 1}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInWhenVisible>
            ))}
          </Accordion>
          
          {/* CTA after FAQ */}
          <FadeInWhenVisible delay={0.3}>
            <div className="mt-12 text-center p-8 rounded-2xl bg-muted/50 border border-border">
              <p className="text-muted-foreground mb-4">Staat jouw vraag er niet bij?</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
              >
                Stuur ons een bericht
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;