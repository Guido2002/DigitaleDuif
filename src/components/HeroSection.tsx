import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  '/xr.jpeg',
  '/webapp.jpeg',
  '/ux1.jpeg'
];

const HeroSection: React.FC = () => {
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

  React.useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

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
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={
              "absolute inset-0 w-full h-full object-cover " +
              (shouldReduceMotion ? "" : "transition-opacity duration-1000")
            }
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: 0
            }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            {...(index === 0 ? { fetchPriority: "high" } : {})}
          />
        ))}
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end opacity-80 z-0"></div>
      
      {/* Removed Pigeon Animations */}

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.h1
          className="mb-6 text-mobile-h1 md:text-h1 font-extrabold leading-tight tracking-tighter text-shadow-hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DigitaleDuif: We geven jouw<br className="hidden sm:inline" />
          <span className="text-accent-foreground"> idee vleugels</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-mobile-body md:text-body-lg text-primary-foreground/90 text-shadow-hero-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Wij bouwen VR, MR, websites en apps die écht werken. Van idee tot lancering, samen met jou.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px]"
          >
            <a
              href="https://app.cal.eu/digitale-duif/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plan een vrijblijvend gesprek (opent in nieuw tabblad)"
            >
              Plan een vrijblijvend gesprek
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px]"
          >
            <Link to="/projecten" aria-label="Bekijk onze projecten">
              Projecten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
        
        {/* Alternative contact option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2 min-h-[44px] min-w-[44px]"
        aria-label="Scroll naar de over ons sectie"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;