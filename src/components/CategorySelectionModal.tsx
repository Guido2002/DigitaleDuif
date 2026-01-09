import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";
import { Bird, ArrowUpRight } from "lucide-react";

// Type alias for device breakpoints
type DeviceType = 'mobile' | 'tablet' | 'desktop';

// Helper function to get animation delays based on device type
const getCardDelay = (deviceType: DeviceType, index: number): number => {
  const delays: Record<DeviceType, number[]> = {
    mobile: [0, 0.08, 0.16],
    tablet: [0, 0.12, 0.24],
    desktop: [0, 0.15, 0.3]
  };
  return delays[deviceType][index] ?? 0;
};

// Device detection hook
const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  
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
  xr: "/media/site/xr.jpeg",
  websites: "/media/site/webapp.jpeg",
  "mobile-apps": "/media/site/ux1.jpeg",
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
  deviceType: DeviceType;
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
        // Desktop (lg+): original sizing - no min-height needed
        "lg:min-h-0",
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
const getAnimationSequence = (device: DeviceType) => {
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

// Helper functions for animation initial states to avoid nested ternaries
const getLogoInitial = (device: DeviceType) => {
  if (device === 'mobile') return { y: -30, opacity: 0 };
  if (device === 'tablet') return { x: -50, opacity: 0, scale: 0.8 };
  return { x: -100, y: -50, opacity: 0, scale: 0.5, rotate: -20 };
};

const getBadgeInitial = (device: DeviceType) => {
  if (device === 'mobile') return { opacity: 0, y: 10 };
  return { scale: 0, opacity: 0, y: 20 };
};

const getTitleWord1Initial = (device: DeviceType) => {
  if (device === 'mobile') return { opacity: 0, x: -30 };
  if (device === 'tablet') return { opacity: 0, y: -50, scale: 0.9 };
  return { y: -100, opacity: 0, rotateX: 90 };
};

const getTitleWord2Initial = (device: DeviceType) => {
  if (device === 'mobile') return { opacity: 0, scale: 0.9 };
  if (device === 'tablet') return { opacity: 0, x: 100, rotate: 5 };
  return { x: -200, opacity: 0, scale: 0.5 };
};

const getTitleWord3Initial = (device: DeviceType) => {
  if (device === 'mobile') return { opacity: 0, x: 30 };
  if (device === 'tablet') return { opacity: 0, scale: 1.3 };
  return { y: 100, opacity: 0, scale: 1.5 };
};

const getSubtitleInitial = (device: DeviceType) => {
  if (device === 'mobile') return { opacity: 0 };
  return { y: 40, opacity: 0 };
};

// Animation stage state type
interface AnimationStage {
  logo: boolean;
  badge: boolean;
  titleWord1: boolean;
  titleWord2: boolean;
  titleWord3: boolean;
  subtitle: boolean;
  arrow: boolean;
  footer: boolean;
  cards: boolean;
}

// Animation parameters by device type - extracted to reduce component complexity
interface AnimationParams {
  logoStiffness: number;
  logoDamping: number;
  birdRotation: number[];
  birdDuration: number;
  badgeStiffness: number;
  titleWord1Stiffness: number;
  titleWord2Stiffness: number;
  titleWord3Stiffness: number;
  titleWord3Damping: number;
  scribbleDelay: number;
  subtitleStiffness: number;
}

const getAnimationParams = (device: DeviceType): AnimationParams => {
  const isMobile = device === 'mobile';
  return {
    logoStiffness: isMobile ? 150 : 100,
    logoDamping: isMobile ? 15 : 12,
    birdRotation: isMobile ? [0, -5, 5, 0] : [0, -10, 10, -5, 0],
    birdDuration: isMobile ? 0.4 : 0.6,
    badgeStiffness: isMobile ? 200 : 300,
    titleWord1Stiffness: isMobile ? 120 : 80,
    titleWord2Stiffness: isMobile ? 100 : 70,
    titleWord3Stiffness: isMobile ? 120 : 100,
    titleWord3Damping: isMobile ? 12 : 10,
    scribbleDelay: isMobile ? 0.15 : 0.3,
    subtitleStiffness: isMobile ? 150 : 100,
  };
};

// Props for the left panel component
interface ModalLeftPanelProps {
  deviceType: DeviceType;
  animationStage: AnimationStage;
}

// Left panel with typography - extracted to reduce main component complexity
const ModalLeftPanel: React.FC<ModalLeftPanelProps> = ({ deviceType, animationStage }) => {
  const params = getAnimationParams(deviceType);

  return (
    <div className={cn(
      "flex flex-col justify-between p-6 pb-4",
      "sm:p-8 sm:pb-6 sm:items-center sm:text-center",
      "lg:w-[48%] lg:p-12 lg:items-start lg:text-left",
      "xl:w-[45%] xl:p-16"
    )}>
      {/* Logo */}
      <motion.div 
        className="flex items-center sm:justify-center lg:justify-start"
        initial={getLogoInitial(deviceType)}
        animate={animationStage.logo ? { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: params.logoStiffness, damping: params.logoDamping }}
      >
        <div className="flex items-center gap-2.5">
          <motion.div
            animate={animationStage.logo ? { rotate: params.birdRotation } : {}}
            transition={{ delay: 0.2, duration: params.birdDuration }}
          >
            <Bird className="h-7 w-7 text-primary" />
          </motion.div>
          <span className="text-lg font-bold text-foreground tracking-tight">DigitaleDuif</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="py-8 sm:py-6 lg:py-0">
        {/* Badge */}
        <motion.div 
          className="mb-4 sm:mb-5 lg:mb-6"
          initial={getBadgeInitial(deviceType)}
          animate={animationStage.badge ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: params.badgeStiffness, damping: 15 }}
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.85] tracking-tight"
        >
          <motion.span
            className="inline-block"
            initial={getTitleWord1Initial(deviceType)}
            animate={animationStage.titleWord1 ? { y: 0, x: 0, opacity: 1, rotateX: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: params.titleWord1Stiffness, damping: 12 }}
          >
            WAT
          </motion.span>
          <br />
          <motion.span 
            className="relative inline-block text-primary"
            initial={getTitleWord2Initial(deviceType)}
            animate={animationStage.titleWord2 ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: params.titleWord2Stiffness, damping: 14 }}
          >
            MAKEN
            <motion.span 
              className="absolute -bottom-1 left-0 w-full text-primary/60"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={animationStage.titleWord2 ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ delay: params.scribbleDelay, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            >
              <DoodleScribble />
            </motion.span>
          </motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={getTitleWord3Initial(deviceType)}
            animate={animationStage.titleWord3 ? { y: 0, x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: params.titleWord3Stiffness, damping: params.titleWord3Damping }}
          >
            WE<span className="text-primary">?</span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          className="mt-5 sm:mt-6 lg:mt-8 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-md sm:mx-auto lg:mx-0 leading-relaxed"
          initial={getSubtitleInitial(deviceType)}
          animate={animationStage.subtitle ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: params.subtitleStiffness, damping: 15 }}
        >
          Selecteer je focus en ontdek wat ik voor jou kan betekenen.
        </motion.p>

        {/* Arrow - desktop only */}
        <motion.div 
          className="mt-8 text-primary/60 hidden lg:block"
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={animationStage.arrow ? { opacity: 1, scale: 1, rotate: 30 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          <DoodleArrowCurved className="w-24 h-14" />
        </motion.div>
      </div>

      {/* Footer - desktop only */}
      <motion.p 
        className="text-muted-foreground/60 text-sm hidden lg:block"
        initial={{ x: -50, opacity: 0 }}
        animate={animationStage.footer ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        ← Je kunt altijd wisselen
      </motion.p>
    </div>
  );
};

// Props for individual category card content
interface CategoryCardContentProps {
  categoryId: CategoryId;
  isHovered: boolean;
}

// XR Card content - extracted to reduce complexity
const XrCardContent: React.FC<Omit<CategoryCardContentProps, 'categoryId'>> = ({ isHovered }) => (
  <>
    <div className="absolute inset-0">
      <img
        src={categoryImages.xr}
        alt={CATEGORIES.xr.label}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          isHovered ? "scale-110" : "scale-100"
        )}
      />
    </div>
    <div className={cn(
      "absolute inset-0 transition-all duration-300",
      isHovered 
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
            isHovered ? "rotate-45 scale-110" : ""
          )}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div>
        <h3 
          className={cn(
            "text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )}
        >
          {CATEGORIES.xr.shortLabel}
        </h3>
        <p className="text-white/80 text-sm lg:text-base max-w-[280px] leading-relaxed">
          {CATEGORIES.xr.description}
        </p>
      </div>
    </div>
  </>
);

// Standard card content (Websites/Mobile Apps) - extracted to reduce complexity
const StandardCardContent: React.FC<CategoryCardContentProps> = ({ categoryId, isHovered }) => (
  <>
    <div className="absolute inset-0">
      <img
        src={categoryImages[categoryId]}
        alt={CATEGORIES[categoryId].label}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          isHovered ? "scale-110" : "scale-100"
        )}
      />
    </div>
    <div className={cn(
      "absolute inset-0 transition-all duration-300",
      isHovered 
        ? "bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" 
        : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
    )} />
    
    <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
      <div
        className={cn(
          "w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center self-end transition-transform duration-300",
          isHovered ? "rotate-45 scale-110" : ""
        )}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
      
      <div>
        <h3 
          className={cn(
            "text-2xl lg:text-3xl font-black text-white mb-1 transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )}
        >
          {CATEGORIES[categoryId].shortLabel}
        </h3>
        <p className="text-white/70 text-xs lg:text-sm line-clamp-2">
          {CATEGORIES[categoryId].description}
        </p>
      </div>
    </div>
  </>
);

// Props for the cards panel
interface CategoryCardsPanelProps {
  deviceType: DeviceType;
  animationStage: AnimationStage;
  hoveredCard: CategoryId | null;
  onHover: (id: CategoryId | null) => void;
  onSelect: (id: CategoryId) => void;
}

// Right panel with category cards - extracted to reduce main component complexity
const CategoryCardsPanel: React.FC<CategoryCardsPanelProps> = ({
  deviceType,
  animationStage,
  hoveredCard,
  onHover,
  onSelect,
}) => (
  <motion.div 
    className={cn(
      "w-full p-4 pb-8",
      "sm:p-6 sm:pb-10 sm:max-w-[600px] sm:mx-auto",
      "md:max-w-[680px] md:p-8",
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
        "grid grid-cols-1 gap-4",
        "sm:grid-cols-2 sm:grid-rows-[1fr_1fr] sm:gap-4 sm:auto-rows-fr",
        "md:gap-5",
        "lg:max-h-[700px] lg:gap-6 lg:grid-rows-2"
      )}
      style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
    >
      {/* XR Card */}
      <SpringCard
        categoryId="xr"
        isLarge
        isHovered={hoveredCard === 'xr'}
        onHover={onHover}
        onClick={() => onSelect('xr')}
        delay={getCardDelay(deviceType, 0)}
        isVisible={animationStage.cards}
        deviceType={deviceType}
        index={0}
      >
        <XrCardContent isHovered={hoveredCard === 'xr'} />
      </SpringCard>

      {/* Websites Card */}
      <SpringCard
        categoryId="websites"
        isHovered={hoveredCard === 'websites'}
        onHover={onHover}
        onClick={() => onSelect('websites')}
        delay={getCardDelay(deviceType, 1)}
        isVisible={animationStage.cards}
        deviceType={deviceType}
        index={1}
      >
        <StandardCardContent categoryId="websites" isHovered={hoveredCard === 'websites'} />
      </SpringCard>

      {/* Mobile Apps Card */}
      <SpringCard
        categoryId="mobile-apps"
        isHovered={hoveredCard === 'mobile-apps'}
        onHover={onHover}
        onClick={() => onSelect('mobile-apps')}
        delay={getCardDelay(deviceType, 2)}
        isVisible={animationStage.cards}
        deviceType={deviceType}
        index={2}
      >
        <StandardCardContent categoryId="mobile-apps" isHovered={hoveredCard === 'mobile-apps'} />
      </SpringCard>
    </div>
  </motion.div>
);

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

  // Animation stage update callback
  const updateAnimationStage = React.useCallback((key: string) => {
    setAnimationStage(prev => ({ ...prev, [key]: true }));
  }, []);

  // Reset animation state
  const resetAnimationStage = React.useCallback(() => {
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
  }, []);

  useEffect(() => {
    if (!showCategoryModal) return;
    
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    
    // Trigger animations in sequence
    const timers = Object.entries(animationSequence).map(([key, delay]) =>
      setTimeout(() => updateAnimationStage(key), delay)
    );
    
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      resetAnimationStage();
    };
  }, [showCategoryModal, animationSequence, updateAnimationStage, resetAnimationStage]);

  const handleSelectCategory = (categoryId: CategoryId) => {
    setCategory(categoryId);
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
          <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row">
            <ModalLeftPanel deviceType={deviceType} animationStage={animationStage} />
            <CategoryCardsPanel
              deviceType={deviceType}
              animationStage={animationStage}
              hoveredCard={hoveredCard}
              onHover={setHoveredCard}
              onSelect={handleSelectCategory}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategorySelectionModal;
