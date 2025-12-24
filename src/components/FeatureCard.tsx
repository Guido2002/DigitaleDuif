import React from "react";
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

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  highlight = false, 
  isDarkBackground = false, 
  backgroundImage 
}) => {
  const getCardStyles = () => {
    if (highlight) {
      return "text-primary-foreground shadow-xl p-0 border-primary/50 min-h-[320px] hover:shadow-2xl hover:border-primary";
    }
    if (isDarkBackground) {
      return "bg-neutral-800 border-neutral-700 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50";
    }
    return "bg-card text-foreground glassmorphism p-6 border-border hover:-translate-y-1 hover:shadow-lg hover:border-primary/50";
  };

  return (
    <Card 
      className={cn(
        "group flex flex-col items-center text-center border h-full transition-all duration-300 relative overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        getCardStyles()
      )}
      style={highlight && backgroundImage ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : undefined}
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
            
            {/* Description - visible on hover (desktop) or always (mobile) */}
            <CardDescription className="text-white/90 text-left text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 max-md:max-h-24 max-md:opacity-100">
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
                  ? "bg-primary/20 text-primary"
                  : "bg-primary/10 text-primary"
              )}
            >
              <Icon className="h-8 w-8" />
            </div>
          </CardHeader>
          <CardTitle className={cn(
            "mb-2 text-xl font-semibold",
            isDarkBackground ? "text-neutral-100" : "text-foreground"
          )}>
            {title}
          </CardTitle>
          <CardDescription className={cn(
            "flex-grow",
            isDarkBackground ? "text-neutral-300" : "text-muted-foreground"
          )}>
            {description}
          </CardDescription>
        </>
      )}
    </Card>
  );
};

export default FeatureCard;