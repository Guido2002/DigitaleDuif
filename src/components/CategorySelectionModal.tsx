import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";
import { Bird, ArrowUpRight } from "lucide-react";

// Device detection hook
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 640) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return deviceType;
};

const categoryImages: Record<CategoryId, string> = {
  xr: "/xr.jpeg",
  websites: "/webapp.jpeg",
  "mobile-apps": "/ux1.jpeg",
};

// Simple static doodle components (no animations for performance)
const DoodleScribble = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 30" className={cn("w-28", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15" />
  </svg>
);

const DoodleArrowCurved = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 50" className={cn("w-20 h-12", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 40 Q 40 40, 50 25 Q 60 10, 75 10" />
    <path d="M65 5 L 75 10 L 65 18" />
  </svg>
);

// React Spring animated card component with device-aware animations
interface SpringCardProps {
  categoryId: CategoryId;
  isLarge?: boolean;
  isHovered: boolean;
  onHover: (id: CategoryId | null) => void;
  onClick: () => void;
  children: React.ReactNode;
  delay: number;
  isVisible: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  index: number;
}

const SpringCard: React.FC<SpringCardProps> = ({ 
  categoryId, 
  isLarge, 
  isHovered, 
  onHover, 
  onClick, 
  children,
  delay,
  isVisible,
  deviceType,
  index
}) => {
  // Device-specific card animations
  const getInitialState = () => {
    // Tablet offsets for spiral animation
    const tabletOffsets = [
      { x: -200, y: -100, rotate: -20 },
      { x: 200, y: -50, rotate: 15 },
      { x: 0, y: 200, rotate: 10 },
    ];
    
    // Mobile rotation values
    const mobileRotations = [-5, 3, -2];
    
    switch (deviceType) {
      case 'mobile':
        // Cards slide up from bottom with stagger, like a deck of cards being dealt
        return { 
          y: 150 + (index * 30),
          opacity: 0,
          scale: 0.8,
          rotateZ: mobileRotations[index] || 0,
        };
      case 'tablet':
        // Cards spiral in from corners with rotation
        return {
          x: tabletOffsets[index]?.x || 0,
          y: tabletOffsets[index]?.y || 0,
          opacity: 0,
          scale: 0.6,
          rotateZ: tabletOffsets[index]?.rotate || 0,
        };
      default:
        // Desktop: 3D train effect (original)
        return { 
          scale: 0.3, 
          z: -800,
          opacity: 0,
          rotateX: 25,
          rotateY: -15,
        };
    }
  };

  const getAnimateState = () => {
    // Tablet rotation values for resting state
    const tabletRestRotations = [-2, 2, 0];
    
    switch (deviceType) {
      case 'mobile':
        return { 
          y: 0,
          opacity: 1,
          scale: 1,
          rotateZ: 0,
        };
      case 'tablet':
        return {
          x: 0,
          y: 0,
          opacity: 1,
          scale: isHovered ? 1.02 : 1,
          rotateZ: isHovered ? 0 : (tabletRestRotations[index] || 0),
        };
      default:
        return { 
          scale: isHovered ? 1 : 0.95, 
          z: 0,
          opacity: 1,
          rotateX: isHovered ? 0 : 10,
          rotateY: isHovered ? 0 : 4,
        };
    }
  };

  const getTransition = () => {
    switch (deviceType) {
      case 'mobile':
        // Snappy, bouncy feel for mobile
        return {
          type: "spring" as const,
          stiffness: 120,
          damping: 14,
          delay: isVisible ? delay : 0,
        };
      case 'tablet':
        // Smooth, elegant transitions
        return {
          type: "spring" as const,
          stiffness: 80,
          damping: 16,
          delay: isVisible ? delay : 0,
        };
      default:
        return {
          type: "spring" as const,
          stiffness: 60,
          damping: 14,
          delay: isVisible ? delay : 0,
          opacity: { duration: 0.4, delay: isVisible ? delay : 0 }
        };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      animate={isVisible ? getAnimateState() : {}}
      transition={getTransition()}
      className={cn(
        // Mobile: stack vertically with nice height
        "min-h-[180px]",
        // Tablet (sm to lg): optimized 2-column grid with XR card spanning 2 rows
        isLarge 
          ? "sm:row-span-2 sm:min-h-[320px] md:min-h-[380px]" 
          : "sm:min-h-[150px] md:min-h-[180px]",
        // Desktop (lg+): original sizing
        isLarge ? "lg:min-h-0" : "lg:min-h-0",
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <button
        onMouseEnter={() => onHover(categoryId)}
        onMouseLeave={() => onHover(null)}
        onClick={onClick}
        className={cn(
          "relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden cursor-pointer group",
          "focus:outline-none focus:ring-4 focus:ring-primary/30"
        )}
      >
        {children}
      </button>
    </motion.div>
  );
};

interface CategorySelectionModalProps {
  onClose?: () => void;
}

// Device-specific animation timings (ms) - optimized for each experience
const getAnimationSequence = (device: 'mobile' | 'tablet' | 'desktop') => {
  switch (device) {
    case 'mobile':
      // Fast, snappy - users want to get going quickly
      return {
        logo: 100,
        badge: 250,
        titleWord1: 350,
        titleWord2: 450,
        titleWord3: 550,
        subtitle: 700,
        arrow: 800, // Not shown on mobile but keep for consistency
        footer: 800,
        cards: 900,
      };
    case 'tablet':
      // Balanced - some theater but not too slow
      return {
        logo: 150,
        badge: 350,
        titleWord1: 500,
        titleWord2: 650,
        titleWord3: 800,
        subtitle: 1000,
        arrow: 1150,
        footer: 1300,
        cards: 1500,
      };
    default:
      // Full cinematic experience
      return {
        logo: 200,
        badge: 500,
        titleWord1: 700,
        titleWord2: 900,
        titleWord3: 1100,
        subtitle: 1400,
        arrow: 1700,
        footer: 1900,
        cards: 2200,
      };
  }
};

const CategorySelectionModal: React.FC<CategorySelectionModalProps> = ({ onClose }) => {
  const { showCategoryModal, setShowCategoryModal, setCategory, markAsVisited } = useCategory();
  const [hoveredCard, setHoveredCard] = useState<CategoryId | null>(null);
  const deviceType = useDeviceType();
  
  // Animation states for sequential reveal
  const [animationStage, setAnimationStage] = useState({
    logo: false,
    badge: false,
    titleWord1: false,
    titleWord2: false,
    titleWord3: false,
    subtitle: false,
    arrow: false,
    footer: false,
    cards: false,
  });
  
  // Memoize animation sequence based on device
  const animationSequence = useMemo(() => getAnimationSequence(deviceType), [deviceType]);

  useEffect(() => {
    if (showCategoryModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      
      // Trigger animations in sequence
      const timers: NodeJS.Timeout[] = [];
      
      Object.entries(animationSequence).forEach(([key, delay]) => {
        const timer = setTimeout(() => {
          setAnimationStage(prev => ({ ...prev, [key]: true }));
        }, delay);
        timers.push(timer);
      });
      
      return () => {
        timers.forEach(t => clearTimeout(t));
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        setAnimationStage({
          logo: false,
          badge: false,
          titleWord1: false,
          titleWord2: false,
          titleWord3: false,
          subtitle: false,
          arrow: false,
          footer: false,
          cards: false,
        });
      };
    }
  }, [showCategoryModal, animationSequence]);

  const handleSelectCategory = (categoryId: CategoryId) => {
    setCategory(categoryId);
    markAsVisited();
    setShowCategoryModal(false);
    onClose?.();
  };

  const handleSkip = () => {
    setCategory("xr");
    markAsVisited();
    setShowCategoryModal(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {showCategoryModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background overflow-y-auto lg:overflow-hidden overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
        >
          {/* Main layout */}
          <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row">
            
            {/* Left panel - Typography */}
            <div className={cn(
              // Mobile: compact padding
              "flex flex-col justify-between p-6 pb-4",
              // Tablet: centered content, more breathing room
              "sm:p-8 sm:pb-6 sm:items-center sm:text-center",
              // Desktop: left-aligned, side panel
              "lg:w-[48%] lg:p-12 lg:items-start lg:text-left",
              "xl:w-[45%] xl:p-16"
            )}>
              {/* Header - Logo with device-specific entrance */}
              <motion.div 
                className="flex items-center sm:justify-center lg:justify-start"
                initial={
                  deviceType === 'mobile' 
                    ? { y: -30, opacity: 0 } // Simple slide down on mobile
                    : deviceType === 'tablet'
                    ? { x: -50, opacity: 0, scale: 0.8 } // Slide from left on tablet
                    : { x: -100, y: -50, opacity: 0, scale: 0.5, rotate: -20 } // Full effect on desktop
                }
                animate={animationStage.logo ? { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ 
                  type: "spring", 
                  stiffness: deviceType === 'mobile' ? 150 : 100, 
                  damping: deviceType === 'mobile' ? 15 : 12 
                }}
              >
                <div className="flex items-center gap-2.5">
                  <motion.div
                    animate={animationStage.logo ? { rotate: deviceType === 'mobile' ? [0, -5, 5, 0] : [0, -10, 10, -5, 0] } : {}}
                    transition={{ delay: 0.2, duration: deviceType === 'mobile' ? 0.4 : 0.6 }}
                  >
                    <Bird className="h-7 w-7 text-primary" />
                  </motion.div>
                  <span className="text-lg font-bold text-foreground tracking-tight">DigitaleDuif</span>
                </div>
              </motion.div>

              {/* Main content */}
              <div className="py-8 sm:py-6 lg:py-0">
                {/* Badge - device-aware pop */}
                <motion.div 
                  className="mb-4 sm:mb-5 lg:mb-6"
                  initial={
                    deviceType === 'mobile'
                    ? { opacity: 0, y: 10 } // Subtle fade up on mobile
                    : { scale: 0, opacity: 0, y: 20 } // Pop effect on larger screens
                  }
                  animate={animationStage.badge ? { scale: 1, opacity: 1, y: 0 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: deviceType === 'mobile' ? 200 : 300, 
                    damping: 15 
                  }}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={animationStage.badge ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    Kies je richting
                  </span>
                </motion.div>
                
                <h1
                  id="category-modal-title"
                  className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black text-foreground leading-[0.85] tracking-tight"
                >
                  {/* WAT - device-specific entrance */}
                  <motion.span
                    className="inline-block"
                    initial={
                      deviceType === 'mobile'
                      ? { opacity: 0, x: -30 } // Slide from left on mobile
                      : deviceType === 'tablet'
                      ? { opacity: 0, y: -50, scale: 0.9 } // Subtle drop on tablet
                      : { y: -100, opacity: 0, rotateX: 90 } // Full 3D flip on desktop
                    }
                    animate={animationStage.titleWord1 ? { y: 0, x: 0, opacity: 1, rotateX: 0, scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: deviceType === 'mobile' ? 120 : 80, 
                      damping: 12 
                    }}
                  >
                    WAT
                  </motion.span>
                  <br />
                  {/* MAKEN - device-specific with scribble */}
                  <motion.span 
                    className="relative inline-block text-primary"
                    initial={
                      deviceType === 'mobile'
                      ? { opacity: 0, scale: 0.9 } // Simple scale on mobile
                      : deviceType === 'tablet'
                      ? { opacity: 0, x: 100, rotate: 5 } // Slide with tilt on tablet
                      : { x: -200, opacity: 0, scale: 0.5 } // Full slide on desktop
                    }
                    animate={animationStage.titleWord2 ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: deviceType === 'mobile' ? 100 : 70, 
                      damping: 14 
                    }}
                  >
                    MAKEN
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full text-primary/60"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={animationStage.titleWord2 ? { scaleX: 1, opacity: 1 } : {}}
                      transition={{ delay: deviceType === 'mobile' ? 0.15 : 0.3, duration: 0.4, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    >
                      <DoodleScribble />
                    </motion.span>
                  </motion.span>
                  <br />
                  {/* WE? - device-specific bounce */}
                  <motion.span
                    className="inline-block"
                    initial={
                      deviceType === 'mobile'
                      ? { opacity: 0, x: 30 } // Slide from right on mobile (alternating direction)
                      : deviceType === 'tablet'
                      ? { opacity: 0, scale: 1.3 } // Pop in on tablet
                      : { y: 100, opacity: 0, scale: 1.5 } // Full bounce on desktop
                    }
                    animate={animationStage.titleWord3 ? { y: 0, x: 0, opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: deviceType === 'mobile' ? 120 : 100, 
                      damping: deviceType === 'mobile' ? 12 : 10 
                    }}
                  >
                    WE<span className="text-primary">?</span>
                  </motion.span>
                </h1>

                {/* Subtitle - device-aware fade in */}
                <motion.p 
                  className="mt-5 sm:mt-6 lg:mt-8 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-md sm:mx-auto lg:mx-0 leading-relaxed"
                  initial={
                    deviceType === 'mobile'
                    ? { opacity: 0 } // Simple fade on mobile
                    : { y: 40, opacity: 0 } // Slide up on larger screens
                  }
                  animate={animationStage.subtitle ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: deviceType === 'mobile' ? 150 : 100, 
                    damping: 15 
                  }}
                >
                  Selecteer je focus en ontdek wat ik voor jou kan betekenen.
                </motion.p>

                {/* Arrow - only on desktop */}
                <motion.div 
                  className="mt-8 text-primary/60 hidden lg:block"
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={animationStage.arrow ? { opacity: 1, scale: 1, rotate: 30 } : {}}
                  transition={{ type: "spring", stiffness: 80, damping: 12 }}
                >
                  <DoodleArrowCurved className="w-24 h-14" />
                </motion.div>
              </div>

              {/* Footer - hidden on mobile and tablet */}
              <motion.p 
                className="text-muted-foreground/60 text-sm hidden lg:block"
                initial={{ x: -50, opacity: 0 }}
                animate={animationStage.footer ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                ← Je kunt altijd wisselen
              </motion.p>
            </div>

            {/* Right panel - Bento Cards */}
            <motion.div 
              className={cn(
                // Mobile: full width with padding
                "w-full p-4 pb-8",
                // Tablet: centered with max width for optimal card display
                "sm:p-6 sm:pb-10 sm:max-w-[600px] sm:mx-auto",
                // Medium tablets: slightly larger
                "md:max-w-[680px] md:p-8",
                // Desktop: side panel layout
                "lg:w-[52%] lg:max-w-none lg:mx-0 lg:p-8 lg:pb-8",
                "xl:w-[55%] xl:p-10",
                "flex items-center"
              )}
              initial={{ opacity: 0 }}
              animate={animationStage.cards ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div 
                className={cn(
                  "w-full h-full",
                  // Mobile: single column
                  "grid grid-cols-1 gap-4",
                  // Tablet: 2-column bento grid with proper sizing
                  "sm:grid-cols-2 sm:grid-rows-[1fr_1fr] sm:gap-4 sm:auto-rows-fr",
                  // Medium tablets: slightly more gap
                  "md:gap-5",
                  // Desktop: original sizing
                  "lg:max-h-[700px] lg:gap-6 lg:grid-rows-2"
                )}
                style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
              >
                
                {/* XR Card - Large */}
                <SpringCard
                  categoryId="xr"
                  isLarge
                  isHovered={hoveredCard === 'xr'}
                  onHover={setHoveredCard}
                  onClick={() => handleSelectCategory('xr')}
                  delay={deviceType === 'mobile' ? 0 : deviceType === 'tablet' ? 0 : 0}
                  isVisible={animationStage.cards}
                  deviceType={deviceType}
                  index={0}
                >
                  <div className="absolute inset-0">
                    <img
                      src={categoryImages.xr}
                      alt={CATEGORIES.xr.label}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500",
                        hoveredCard === 'xr' ? "scale-110" : "scale-100"
                      )}
                    />
                  </div>
                  <div className={cn(
                    "absolute inset-0 transition-all duration-300",
                    hoveredCard === 'xr' 
                      ? "bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" 
                      : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  )} />
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                    <div className="flex justify-between items-start">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-semibold",
                          "lg:[transform:translateZ(40px)_rotateX(-18deg)]"
                        )}
                        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                      >
                        Populair ★
                      </span>
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center transition-transform duration-300",
                          hoveredCard === 'xr' ? "rotate-45 scale-110" : ""
                        )}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 
                        className={cn(
                          "text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 transition-transform duration-300",
                          hoveredCard === 'xr' ? "translate-x-1" : ""
                        )}
                      >
                        {CATEGORIES.xr.shortLabel}
                      </h3>
                      <p className="text-white/80 text-sm lg:text-base max-w-[280px] leading-relaxed">
                        {CATEGORIES.xr.description}
                      </p>
                    </div>
                  </div>
                </SpringCard>

                {/* Websites Card */}
                <SpringCard
                  categoryId="websites"
                  isHovered={hoveredCard === 'websites'}
                  onHover={setHoveredCard}
                  onClick={() => handleSelectCategory('websites')}
                  delay={deviceType === 'mobile' ? 0.08 : deviceType === 'tablet' ? 0.12 : 0.15}
                  isVisible={animationStage.cards}
                  deviceType={deviceType}
                  index={1}
                >
                  <div className="absolute inset-0">
                    <img
                      src={categoryImages.websites}
                      alt={CATEGORIES.websites.label}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500",
                        hoveredCard === 'websites' ? "scale-110" : "scale-100"
                      )}
                    />
                  </div>
                  <div className={cn(
                    "absolute inset-0 transition-all duration-300",
                    hoveredCard === 'websites' 
                      ? "bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" 
                      : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  )} />
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center self-end transition-transform duration-300",
                        hoveredCard === 'websites' ? "rotate-45 scale-110" : ""
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                    
                    <div>
                      <h3 
                        className={cn(
                          "text-2xl lg:text-3xl font-black text-white mb-1 transition-transform duration-300",
                          hoveredCard === 'websites' ? "translate-x-1" : ""
                        )}
                      >
                        {CATEGORIES.websites.shortLabel}
                      </h3>
                      <p className="text-white/70 text-xs lg:text-sm line-clamp-2">
                        {CATEGORIES.websites.description}
                      </p>
                    </div>
                  </div>
                </SpringCard>

                {/* Mobile Apps Card */}
                <SpringCard
                  categoryId="mobile-apps"
                  isHovered={hoveredCard === 'mobile-apps'}
                  onHover={setHoveredCard}
                  onClick={() => handleSelectCategory('mobile-apps')}
                  delay={deviceType === 'mobile' ? 0.16 : deviceType === 'tablet' ? 0.24 : 0.3}
                  isVisible={animationStage.cards}
                  deviceType={deviceType}
                  index={2}
                >
                  <div className="absolute inset-0">
                    <img
                      src={categoryImages['mobile-apps']}
                      alt={CATEGORIES['mobile-apps'].label}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500",
                        hoveredCard === 'mobile-apps' ? "scale-110" : "scale-100"
                      )}
                    />
                  </div>
                  <div className={cn(
                    "absolute inset-0 transition-all duration-300",
                    hoveredCard === 'mobile-apps' 
                      ? "bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" 
                      : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  )} />
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center self-end transition-transform duration-300",
                        hoveredCard === 'mobile-apps' ? "rotate-45 scale-110" : ""
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                    
                    <div>
                      <h3 
                        className={cn(
                          "text-2xl lg:text-3xl font-black text-white mb-1 transition-transform duration-300",
                          hoveredCard === 'mobile-apps' ? "translate-x-1" : ""
                        )}
                      >
                        {CATEGORIES['mobile-apps'].shortLabel}
                      </h3>
                      <p className="text-white/70 text-xs lg:text-sm line-clamp-2">
                        {CATEGORIES['mobile-apps'].description}
                      </p>
                    </div>
                  </div>
                </SpringCard>

              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategorySelectionModal;
