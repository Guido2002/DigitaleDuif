import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import { AnimatePresence, motion } from "framer-motion";
import { DoodleStar, DoodleSpiral, FloatingDoodle } from "@/components/ui/doodles";
import { cn } from "@/lib/utils";

const WhyChooseUsSection = () => {
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { usps } = config;
  const { whyChooseUs } = config.sectionTitles;

  return (
    <section id="why-us" className="bg-foreground relative overflow-hidden">
      {/* Floating doodles on dark background */}
      <FloatingDoodle className="top-20 right-[10%] text-white/10" duration={7}>
        <DoodleStar className="w-12 h-12" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-24 left-[8%] text-white/5" duration={8} delay={1.5}>
        <DoodleSpiral className="w-20 h-20" />
      </FloatingDoodle>
      <FloatingDoodle className="top-[40%] left-[5%] text-primary/20" duration={6} delay={0.5}>
        <DoodleStar className="w-6 h-6" />
      </FloatingDoodle>
      
      <div className="container px-4 md:px-6 py-20 md:py-28 relative z-10">
        <FadeInWhenVisible delay={0.05}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`why-us-header-${selectedCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SectionHeader
                title={whyChooseUs.title}
                subtitle={whyChooseUs.subtitle}
                titleClassName="text-white"
                subtitleClassName="text-white/70"
              />
            </motion.div>
          </AnimatePresence>
        </FadeInWhenVisible>

        {/* Staggered grid with slight offset for visual interest */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`usps-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usps.slice(0, 3).map((usp, index) => (
                <FadeInWhenVisible 
                  key={`${selectedCategory}-${usp.title}`} 
                  delay={0.03 + index * 0.03}
                  className={cn(index === 2 ? "md:col-span-2 lg:col-span-1" : "")}
                >
                  <div className={cn("h-full", index === 2 ? "md:w-[calc(50%-0.75rem)] md:mx-auto lg:w-full lg:mx-0" : "")}>
                    <FeatureCard
                      icon={usp.icon}
                      title={usp.title}
                      description={usp.description}
                      highlight={true}
                      isDarkBackground={true}
                      backgroundImage={usp.backgroundImage}
                    />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
            
            {/* Second row with offset */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:px-8">
              {usps.slice(3, 6).map((usp, index) => (
                <FadeInWhenVisible 
                  key={`${selectedCategory}-${usp.title}`} 
                  delay={0.09 + index * 0.03}
                  className={cn(index === 2 ? "md:col-span-2 lg:col-span-1" : "")}
                >
                  <div className={cn("h-full", index === 2 ? "md:w-[calc(50%-0.75rem)] md:mx-auto lg:w-full lg:mx-0" : "")}>
                    <FeatureCard
                      icon={usp.icon}
                      title={usp.title}
                      description={usp.description}
                      highlight={false}
                      isDarkBackground={true}
                    />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;