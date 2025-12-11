"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Removed PigeonAnimation import

interface HeroSectionProps {
  // children: React.ReactNode; // Removed as it's not used
}

const heroImages = [
  '/xr.jpeg',
  '/webapp.jpeg',
  '/ux1.jpeg'
];

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex w-full min-h-[calc(100vh-4rem)] items-center justify-center py-20 text-primary-foreground overflow-hidden"
      aria-label="Welkomstsectie - DigitaleDuif Digitale Innovatie & XR oplossingen"
    >
      {/* Background image carousel */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: 0
          }}
        />
      ))}
      
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
          className="mb-8 max-w-3xl text-mobile-body md:text-body-lg text-primary-foreground/90 text-shadow-hero-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Digitale Duif ontwikkelt Virtual, Mixed Reality ervaringen, websites en apps afgestemd op gebruikers en willen bedrijven vooruit helpen. Of je nu een eerste stap in digitale innovatie wilt zetten of een ambitieus project voor ogen hebt. Wij denken graag met je mee, vanaf de tekentafel tot het eindproduct.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
          >
            <Link to="/diensten">
              Onze diensten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Link to="/projecten">
              Projecten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;