import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
  isDarkBackground?: boolean;
  backgroundImage?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = memo(function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  highlight = false, 
  isDarkBackground = false, 
  backgroundImage 
}) {
  const shouldReduceMotion = useReducedMotion();
  
  const cardStyles = useMemo(() => {
    if (highlight) {
      return "text-primary-foreground shadow-xl p-0 border-primary/50 min-h-[320px] hover:shadow-2xl hover:border-primary";
    }
    if (isDarkBackground) {
      return "bg-primary border-none p-6 hover:shadow-lg hover:shadow-primary/20";
    }
    return "bg-card text-foreground glassmorphism p-6 border-border hover:shadow-lg hover:border-primary/50";
  }, [highlight, isDarkBackground]);

  const backgroundStyle = useMemo(() => 
    highlight && backgroundImage ? {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : undefined
  , [highlight, backgroundImage]);

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
      style={{ willChange: "transform" }}
    >
      <Card 
        className={cn(
          "group flex flex-col items-center text-center border h-full transition-shadow duration-300 relative overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "hover:shadow-2xl hover:shadow-primary/10",
          cardStyles
        )}
        style={backgroundStyle}
        tabIndex={0}
        role="article"
        aria-label={`${title}: ${description}`}
      >
      {highlight ? (
        <>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content container - always visible at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            {/* Icon */}
            <div className="flex items-center justify-center rounded-full h-12 w-12 bg-primary/90 text-primary-foreground mb-3 transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-6 w-6" />
            </div>
            
            {/* Title */}
            <CardTitle className="text-lg font-bold text-white mb-2 text-left">
              {title}
            </CardTitle>
            
            {/* Description - Always visible */}
            <CardDescription className="text-white/90 text-left text-sm leading-relaxed transition-all duration-300 ease-in-out">
              {description}
            </CardDescription>
          </div>
        </>
      ) : (
        <>
          <CardHeader className="mb-4 p-0">
            <div 
              className={cn(
                "flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110",
                "h-16 w-16",
                isDarkBackground
                  ? "bg-primary-foreground/10 text-primary-foreground"
                  : "bg-primary/10 text-primary"
              )}
            >
              <Icon className="h-8 w-8" />
            </div>
          </CardHeader>
          <CardTitle className={cn(
            "mb-2 text-xl font-semibold",
            isDarkBackground ? "text-primary-foreground" : "text-foreground"
          )}>
            {title}
          </CardTitle>
          <CardDescription className={cn(
            "flex-grow",
            isDarkBackground ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {description}
          </CardDescription>
        </>
      )}
    </Card>
    </motion.div>
  );
});

export default FeatureCard;