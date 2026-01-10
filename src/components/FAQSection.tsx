import React, { memo } from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoodleCircle, DoodleStar, GridPattern } from "@/components/ui/doodles";

const FAQSection = memo(function FAQSection() {
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { faqItems } = config;
  const { faq: sectionTitles } = config.sectionTitles;

  return (
    <section id="faq" className="bg-background relative overflow-hidden">
      {/* Static background decorations - no infinite animations */}
      <GridPattern className="text-foreground" />
      <div className="absolute top-24 right-[12%] text-primary/15 pointer-events-none">
        <DoodleStar className="w-8 h-8" />
      </div>
      <div className="absolute bottom-40 left-[8%] text-primary/10 pointer-events-none">
        <DoodleCircle className="w-14 h-14" />
      </div>
      
      <div className="container px-4 md:px-6 py-20 md:py-28 relative z-10">
        <FadeInWhenVisible delay={0.1}>
          <SectionHeader
            title={sectionTitles.title}
            subtitle={sectionTitles.subtitle}
          />
        </FadeInWhenVisible>

        <div className="mx-auto max-w-3xl">
          {/* Single FadeInWhenVisible for entire accordion - fewer observers */}
          <FadeInWhenVisible delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={item.question} 
                  value={`item-${index + 1}`} 
                  className="border-b border-border/60 bg-white/50 mb-3 rounded-2xl px-5 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInWhenVisible>
          
          {/* CTA after FAQ */}
          <FadeInWhenVisible delay={0.25}>
            <div className="mt-14 p-8 md:p-10 rounded-[2rem] border-2 border-border/60 bg-white/80 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-3">
                Staat jouw vraag er niet bij?
              </h3>
              <p className="text-muted-foreground mb-7 max-w-md mx-auto leading-relaxed">
                Geen probleem! Neem gerust contact op, ik help je graag verder.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="group rounded-full px-8 h-12">
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
});

export default FAQSection;