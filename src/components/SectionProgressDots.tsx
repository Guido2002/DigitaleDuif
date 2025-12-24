import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSection, homeSections, Section } from "@/hooks/use-active-section";
import { useIsMobile } from "@/hooks/use-mobile";

// Define which sections have dark or blue backgrounds
const blueSections = ["home", "cta"]; // Hero has blue gradient overlay, CTA has blue gradient

interface SectionProgressDotsProps {
  sections?: Section[];
}

const SectionProgressDots: React.FC<SectionProgressDotsProps> = ({ 
  sections = homeSections 
}) => {
  const activeSection = useActiveSection(sections);
  const isMobile = useIsMobile();

  // Hide on mobile
  if (isMobile) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine dot colors based on current section background
  const isBlueBackground = blueSections.includes(activeSection);
  
  // On blue backgrounds: white dots, otherwise: primary (blue) dots
  const dotActiveColor = isBlueBackground ? "bg-white" : "bg-primary";
  const dotInactiveColor = isBlueBackground 
    ? "bg-white/30 group-hover:bg-white/60" 
    : "bg-muted-foreground/30 group-hover:bg-primary/50";
  const lineColor = isBlueBackground ? "bg-white/20" : "bg-muted-foreground/20";
  const tooltipClasses = isBlueBackground
    ? "bg-white text-foreground border-white/20"
    : "bg-card text-foreground border-border";

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
      aria-label="Sectie navigatie"
    >
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "group relative flex items-center justify-center",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full"
            )}
            aria-label={`Ga naar ${section.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            {/* Dot */}
            <motion.span
              className={cn(
                "block rounded-full transition-colors duration-300",
                isActive ? dotActiveColor : dotInactiveColor
              )}
              animate={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            
            {/* Label tooltip on hover */}
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className={cn(
                  "absolute right-full mr-3 px-2 py-1 text-xs font-medium rounded shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity border",
                  tooltipClasses
                )}
              >
                {section.label}
              </motion.span>
            </AnimatePresence>
          </button>
        );
      })}
      
      {/* Progress line */}
      <motion.div 
        className={cn("absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px -z-10 transition-colors duration-300", lineColor)}
      />
    </nav>
  );
};

export default SectionProgressDots;
