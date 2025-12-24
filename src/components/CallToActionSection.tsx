import React from "react";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <FadeInWhenVisible delay={0.05}>
              <h2 className="text-h2 font-bold mb-6 text-primary-foreground">
                Klaar om samen jouw idee aan te vliegen?
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <p className="text-body-lg mb-8 max-w-3xl mx-auto md:mx-0 text-primary-foreground/90">
                Laten we kennismaken en ontdekken wat Digitale Duif voor u kan betekenen. Ik kijk ernaar uit!
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.15}>
              <a
                href="https://app.cal.eu/digitale-duif/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-14 text-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 group gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Plan een vrijblijvend gesprek
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </FadeInWhenVisible>
          </div>

          {/* Image Card */}
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-[3/4] sm:aspect-auto sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0 ring-4 ring-white bg-white p-2"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/IMG_0005.png"
                alt="DigitaleDuif XR Innovation"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;