import React, { memo, useCallback, useMemo } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig } from "@/data/categoryConfig";
import { DoodleStar, DoodleScribble, FloatingDoodle } from "@/components/ui/doodles";

const HeroSection: React.FC = memo(function HeroSection() {
  const { selectedCategory } = useCategory();
  const config = useMemo(() => 
    selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig
  , [selectedCategory]);
  const heroContent = config.hero;
  
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Memoized scroll handler
  const scrollToAbout = useCallback(() => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Reset image index when category changes
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCategory]);

  React.useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroContent.backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [shouldReduceMotion, heroContent.backgroundImages.length]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex w-full min-h-[calc(100vh-4rem)] items-center justify-center py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif Digitale Innovatie & XR oplossingen"
    >
      {/* Background image carousel with parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={shouldReduceMotion ? undefined : { y: parallaxY, scale: parallaxScale }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={`${selectedCategory}-${heroContent.backgroundImages[currentImageIndex]}`}
            src={heroContent.backgroundImages[currentImageIndex]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            style={{ zIndex: 0 }}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </AnimatePresence>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end opacity-85 z-0"></div>
      
      {/* Floating doodles */}
      <FloatingDoodle className="top-[15%] right-[8%] text-white/20 z-[5]" duration={6}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-[25%] left-[5%] text-white/15 z-[5]" duration={7} delay={1}>
        <DoodleStar className="w-6 h-6" />
      </FloatingDoodle>

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${selectedCategory}`}
            className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-shadow-hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {heroContent.title}<br className="hidden sm:inline" />
            <span className="relative inline-block text-accent-foreground">
              {heroContent.titleHighlight}
              <span className="absolute -bottom-1 left-0 w-full text-white/30">
                <DoodleScribble className="w-full" />
              </span>
            </span>
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${selectedCategory}`}
            className="mb-10 max-w-2xl text-lg md:text-xl text-primary-foreground/85 text-shadow-hero-body leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            {heroContent.subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              asChild
              size="lg"
              className="group px-8 py-6 text-lg rounded-full bg-white text-primary hover:bg-white/95 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px] font-bold"
            >
              <a
                href="https://app.cal.eu/digitale-duif/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Plan een gratis 30-minuten gesprek (opent in nieuw tabblad)"
              >
                Plan gratis gesprek
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="group px-6 py-5 text-base rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 text-primary-foreground hover:bg-white/20 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px] font-semibold"
            >
              <Link to="/projecten" aria-label="Bekijk mijn projecten">
                Bekijk projecten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          {/* Helper text under CTA */}
          <p className="mt-4 text-sm text-primary-foreground/60">Vrijblijvend · 30 minuten · Online of op locatie</p>
        </motion.div>
        
        {/* Alternative contact option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="mt-6"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Liever een bericht sturen?</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Arrow - white on dark background */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 0.3 }}
        className="absolute bottom-6 left-0 right-0 mx-auto w-fit z-10 flex flex-col items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2 min-h-[44px] min-w-[44px]"
        aria-label="Scroll naar de over mij sectie"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
});

export default HeroSection;