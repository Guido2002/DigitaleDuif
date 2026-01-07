import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/IMG_9948_OLD.jpg";
import profilePhotoHover from "../assets/IMG_9949_OLD.jpg";
import { cn } from "@/lib/utils";
import { CheckCircle2, ExternalLink } from "lucide-react";
import FlyingBirdIllustration from "./FlyingBirdIllustration";
import CvModal from "./CvModal";
import { useIsMobile } from "@/hooks/use-mobile";

const LinkedInMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 23.5h4V7.98h-4V23.5Zm7.5-15.52h3.84v2.12h.05c.54-1.02 1.86-2.12 3.83-2.12 4.1 0 4.86 2.7 4.86 6.21v9.31h-4v-8.26c0-1.97-.04-4.5-2.74-4.5-2.74 0-3.16 2.14-3.16 4.36v8.4h-4V7.98Z"
    />
  </svg>
);

const GuidoIntroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    // Lower threshold on mobile for better trigger experience
    const threshold = isMobile ? 0.7 : 0.95;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger on all devices
        setTimeout(() => {
          setIsHovered(entry.isIntersecting);
        }, 100);
      },
      {
        threshold, // Trigger when threshold % of the image is visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [isMobile]);

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
          <div
            className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/40 to-purple-accent/40 blur-xl opacity-60"
          />
          <a 
            href="https://www.linkedin.com/in/guido-van-duijvenvoorde-531712162/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Bekijk Guido's LinkedIn profiel (opent in nieuw tabblad)"
            className="block w-full max-w-md rounded-xl shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-300 ease-in-out hover:ring-primary/70 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 relative overflow-hidden bg-primary group"
          >
            <img
              src={profilePhoto}
              alt="Portretfoto van Guido van Duijvenvoorde, lachend in een professionele setting"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-700 ease-in-out"
              decoding="async"
              style={{ 
                aspectRatio: '4/5',
                opacity: isHovered ? 0 : 1
              }}
            />
            <img
              src={profilePhotoHover}
              alt=""
              aria-hidden="true"
              className="w-full h-auto object-cover rounded-xl transition-opacity duration-700 ease-in-out absolute top-0 left-0"
              decoding="async"
              style={{ 
                aspectRatio: '4/5',
                opacity: isHovered ? 1 : 0
              }}
            />
            {/* LinkedIn indicator overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <LinkedInMark className="h-5 w-5 text-blue-600 group-hover:text-white" />
              <span className="text-sm font-medium text-blue-600 group-hover:text-white">LinkedIn</span>
              <ExternalLink className="h-3 w-3 text-blue-600 group-hover:text-white opacity-60" aria-hidden="true" />
            </div>
          </a>
        </motion.div>

        {/* Text Content Section */}
        <div className="text-left md:text-left">
          <CardHeader className="p-0 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
                Hallo, ik ben <span className="text-primary">Guido</span>
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              {[
                "Oprichter van DigitaleDuif met passie voor digitale innovatie.",
                "Specialist in VR, MR, webdevelopment en mobiele apps.",
                "Perfectionist met oog voor detail én resultaat.",
                "Nieuwsgierig naar jouw ideeën en klaar voor een goed gesprek!"
              ].map((text, idx) => (
                <motion.div 
                  key={text}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.05 + idx * 0.05 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1.5 flex-shrink-0" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <CvModal 
                trigger={
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all duration-200 group h-14 px-10 text-lg rounded-full font-bold"
                  >
                    Download CV (PDF)
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