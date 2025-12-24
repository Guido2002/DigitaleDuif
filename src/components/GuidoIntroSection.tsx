import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/IMG_9948_OLD.jpg";
import profilePhotoHover from "../assets/IMG_9949_OLD.jpg";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import FlyingBirdIllustration from "./FlyingBirdIllustration";
import CvModal from "./CvModal";

const GuidoIntroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger on all devices
        setTimeout(() => {
          setIsHovered(entry.isIntersecting);
        }, 100);
      },
      {
        threshold: 0.95, // Trigger when 95% of the image is visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
    >
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          className="relative flex justify-center md:justify-end"
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Subtle background glow behind the image */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/50 to-purple-accent/50 blur-xl"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          />
          <a 
            href="https://www.linkedin.com/in/guido-van-duijvenvoorde-531712162/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full max-w-md rounded-xl shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-300 ease-in-out hover:ring-primary/70 relative overflow-hidden bg-primary"
          >
            <img
              src={profilePhoto}
              alt="Guido van Duijvenvoorde - Oprichter DigitaleDuif"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-700 ease-in-out"
              decoding="async"
              style={{ 
                aspectRatio: '4/5',
                opacity: isHovered ? 0 : 1
              }}
            />
            <img
              src={profilePhotoHover}
              alt="Guido van Duijvenvoorde - Oprichter DigitaleDuif"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-700 ease-in-out absolute top-0 left-0"
              decoding="async"
              style={{ 
                aspectRatio: '4/5',
                opacity: isHovered ? 1 : 0
              }}
            />
          </a>
        </motion.div>

        {/* Text Content Section */}
        <div className="text-left md:text-left">
          <CardHeader className="p-0 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle className="text-mobile-h1 md:text-h1 font-extrabold text-primary">
                Hallo, ik ben Guido
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              {[
                "Oprichter van DigitaleDuif.",
                "Ontwikkelt digitale producten met passie voor IT.",
                "Focus op VR en MR-applicaties, webdevelopment en mobiele apps.",
                "Harde werker in hart en nieren.",
                "Perfectionist met oog voor detail en resultaat.",
                "Nieuwsgierig naar jouw ideeën en een goed gesprek!"
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-mobile-body md:text-body-lg text-muted-foreground">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CvModal 
                trigger={
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 group h-14 px-10 text-lg"
                  >
                    Bekijk mijn CV
                  </Button>
                }
              />
            </motion.div>
          </CardContent>
        </div>
      </div>
  );
};

export default GuidoIntroSection;