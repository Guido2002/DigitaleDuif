import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";
import { Bird, ArrowUpRight } from "lucide-react";

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

// React Spring animated card component
interface SpringCardProps {
  categoryId: CategoryId;
  isLarge?: boolean;
  isHovered: boolean;
  onHover: (id: CategoryId | null) => void;
  onClick: () => void;
  children: React.ReactNode;
}

const SpringCard: React.FC<SpringCardProps> = ({ 
  categoryId, 
  isLarge, 
  isHovered, 
  onHover, 
  onClick, 
  children 
}) => {
  return (
    <div
      className={cn(
        isLarge ? "sm:row-span-2 min-h-[200px] sm:min-h-0" : "min-h-[180px] sm:min-h-0",
        "transition-transform duration-500 ease-out",
        !isHovered && "lg:[transform:perspective(1000px)_rotateX(10deg)_rotateY(4deg)_scale(0.95)]"
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <button
        onMouseEnter={() => onHover(categoryId)}
        onMouseLeave={() => onHover(null)}
        onClick={onClick}
        className={cn(
          "relative w-full h-full rounded-[2rem] overflow-hidden cursor-pointer group",
          "focus:outline-none focus:ring-4 focus:ring-primary/30"
        )}
      >
        {children}
      </button>
    </div>
  );
};

interface CategorySelectionModalProps {
  onClose?: () => void;
}

const CategorySelectionModal: React.FC<CategorySelectionModalProps> = ({ onClose }) => {
  const { showCategoryModal, setShowCategoryModal, setCategory, markAsVisited } = useCategory();
  const [hoveredCard, setHoveredCard] = useState<CategoryId | null>(null);

  useEffect(() => {
    if (showCategoryModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showCategoryModal]);

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
            <div className="lg:w-[48%] xl:w-[45%] flex flex-col justify-between p-8 lg:p-12 xl:p-16">
              {/* Header */}
              <div className="flex items-center">
                <div className="flex items-center gap-2.5">
                  <Bird className="h-7 w-7 text-primary" />
                  <span className="text-lg font-bold text-foreground tracking-tight">DigitaleDuif</span>
                </div>
              </div>

              {/* Main content */}
              <div className="py-12 lg:py-0">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Kies je richting
                  </span>
                </div>
                
                <h1
                  id="category-modal-title"
                  className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black text-foreground leading-[0.85] tracking-tight"
                >
                  WAT
                  <br />
                  <span className="relative inline-block text-primary">
                    MAKEN
                    <span className="absolute -bottom-1 left-0 w-full text-primary/60">
                      <DoodleScribble />
                    </span>
                  </span>
                  <br />
                  WE<span className="text-primary">?</span>
                </h1>

                <p className="mt-8 text-muted-foreground text-lg lg:text-xl max-w-md leading-relaxed">
                  Selecteer je focus en ontdek wat ik voor jou kan betekenen.
                </p>

                <div className="mt-8 text-primary/60 hidden lg:block">
                  <DoodleArrowCurved className="w-24 h-14 rotate-[30deg]" />
                </div>
              </div>

              {/* Footer */}
              <p className="text-muted-foreground/60 text-sm hidden lg:block">
                ← Je kunt altijd wisselen
              </p>
            </div>

            {/* Right panel - Bento Cards */}
            <div className="lg:w-[52%] xl:w-[55%] p-6 lg:p-8 xl:p-10 flex items-center">
              <div 
                className="w-full h-full lg:max-h-[700px] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 lg:gap-6"
                style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
              >
                
                {/* XR Card - Large */}
                <SpringCard
                  categoryId="xr"
                  isLarge
                  isHovered={hoveredCard === 'xr'}
                  onHover={setHoveredCard}
                  onClick={() => handleSelectCategory('xr')}
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategorySelectionModal;
