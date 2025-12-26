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
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background relative">
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
            <div className="mt-12 p-6 md:p-8 rounded-2xl border border-border bg-card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Staat jouw vraag er niet bij?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Geen probleem! Neem gerust contact op, we helpen je graag verder.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    <Mail className="h-4 w-4" />
                    Stel je vraag
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;