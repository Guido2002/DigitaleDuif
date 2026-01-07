import React from "react";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DoodleStar, DoodleScribble, FloatingDoodle } from "@/components/ui/doodles";

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration - softer, hand-drawn feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Floating doodles */}
      <FloatingDoodle className="top-12 right-[15%] text-white/20" duration={6}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-16 left-[10%] text-white/15" duration={7} delay={1}>
        <DoodleStar className="w-6 h-6" />
      </FloatingDoodle>
      
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <FadeInWhenVisible delay={0.05}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-foreground leading-tight tracking-tight">
                Klaar om samen<br />
                <span className="relative inline-block">
                  te vliegen?
                  <span className="absolute -bottom-2 left-0 w-full text-white/40">
                    <DoodleScribble className="w-full" />
                  </span>
                </span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <p className="text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 text-primary-foreground/80 leading-relaxed">
                Laten we kennismaken en ontdekken wat ik voor u kan betekenen. Ik kijk ernaar uit!
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.15}>
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://app.cal.eu/digitale-duif/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg rounded-full bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group gap-2 font-bold"
                  >
                    <Calendar className="h-5 w-5" />
                    Plan gratis gesprek
                    <ArrowRight className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
                  </Button>
                </a>
                <p className="mt-4 text-sm text-primary-foreground/60">Vrijblijvend · 30 minuten · Online of op locatie</p>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Image Card */}
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative w-full sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] sm:aspect-auto sm:h-[320px] md:h-[380px] lg:h-[440px] rounded-[2rem] overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0 ring-4 ring-white/20 bg-white p-2"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/IMG_0005.JPG"
                alt="DigitaleDuif XR Innovation"
                className="w-full h-full object-cover rounded-[1.5rem]"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-2 bg-gradient-to-t from-primary/30 to-transparent rounded-[1.5rem]" />
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;