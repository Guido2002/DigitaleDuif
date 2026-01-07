import React, { memo, useMemo } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
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

// Move animation variants outside component to reduce complexity
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: { duration: 0.3 }
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const hoverAnimation = { 
  y: -12, 
  scale: 1.03,
  transition: { 
    type: "spring", 
    stiffness: 400, 
    damping: 15,
    mass: 0.5
  }
};

// Highlighted card content sub-component
const HighlightedContent: React.FC<{
  Icon: LucideIcon;
  title: string;
  description: string;
  isInView: boolean;
}> = ({ Icon, title, description, isInView }) => (
  <>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <motion.div 
      className="absolute bottom-0 left-0 right-0 p-5 z-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className="flex items-center justify-center rounded-full h-12 w-12 bg-primary/90 text-primary-foreground mb-3 transition-all duration-300 group-hover:scale-125 group-hover:bg-white group-hover:text-primary group-hover:shadow-lg"
        variants={contentVariants}
        custom={0}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <motion.div variants={contentVariants} custom={1}>
        <CardTitle className="text-lg font-bold text-white mb-2 text-left">{title}</CardTitle>
      </motion.div>
      <motion.div variants={contentVariants} custom={2}>
        <CardDescription className="text-white/90 text-left text-sm leading-relaxed transition-all duration-300 ease-in-out">
          {description}
        </CardDescription>
      </motion.div>
    </motion.div>
  </>
);

// Standard card content sub-component
const StandardContent: React.FC<{
  Icon: LucideIcon;
  title: string;
  description: string;
  isDarkBackground: boolean;
  isInView: boolean;
}> = ({ Icon, title, description, isDarkBackground, isInView }) => (
  <>
    <CardHeader className="mb-4 p-0">
      <motion.div 
        className={cn(
          "flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 h-16 w-16",
          isDarkBackground ? "bg-primary-foreground/10 text-primary-foreground" : "bg-primary/10 text-primary"
        )}
        variants={contentVariants}
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Icon className="h-8 w-8" />
      </motion.div>
    </CardHeader>
    <motion.div variants={contentVariants} custom={1} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <CardTitle className={cn(
        "text-xl font-bold mb-3 transition-colors duration-300",
        isDarkBackground ? "text-primary-foreground" : "text-foreground group-hover:text-primary"
      )}>
        {title}
      </CardTitle>
    </motion.div>
    <motion.div variants={contentVariants} custom={2} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      <CardDescription className={cn(
        "leading-relaxed",
        isDarkBackground ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {description}
      </CardDescription>
    </motion.div>
  </>
);

const FeatureCard: React.FC<FeatureCardProps> = memo(function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  highlight = false, 
  isDarkBackground = false, 
  backgroundImage 
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 });
  
  const cardStyles = useMemo(() => {
    if (highlight) return "text-primary-foreground shadow-xl p-0 border-primary/50 min-h-[320px] hover:shadow-2xl hover:border-primary";
    if (isDarkBackground) return "bg-primary border-none p-6 hover:shadow-lg hover:shadow-primary/20";
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
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={shouldReduceMotion ? {} : hoverAnimation}
      className="h-full"
      style={{ willChange: "transform" }}
    >
      <Card 
        className={cn(
          "group flex flex-col items-center text-center border h-full transition-all duration-300 relative overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "hover:shadow-2xl",
          isDarkBackground && "hover:shadow-primary/30",
          cardStyles
        )}
        style={backgroundStyle}
        tabIndex={0}
        role="article"
        aria-label={`${title}: ${description}`}
      >
        {highlight ? (
          <HighlightedContent Icon={Icon} title={title} description={description} isInView={isInView} />
        ) : (
          <StandardContent Icon={Icon} title={title} description={description} isDarkBackground={isDarkBackground} isInView={isInView} />
        )}
      </Card>
    </motion.div>
  );
});

export default FeatureCard;