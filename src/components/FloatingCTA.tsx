import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Glasses, Globe, Smartphone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";

const categoryIcons: Record<CategoryId, React.ElementType> = {
  xr: Glasses,
  websites: Globe,
  "mobile-apps": Smartphone,
};

// Custom hook for more granular breakpoints
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");
  
  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width <= 420) {
        setBreakpoint("mobile");
      } else if (width < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };
    
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);
  
  return breakpoint;
};

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const location = useLocation();
  const { selectedCategory, setCategory } = useCategory();
  
  const isHomePage = location.pathname === "/";
  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Reset dismissed state when user scrolls back to top
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setIsDismissed(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  // Detect when modal is open by checking body overflow or data attribute
  useEffect(() => {
    const checkModalState = () => {
      // Check if body has overflow hidden (modal is open)
      const isOverflowHidden = document.body.style.overflow === "hidden";
      // Also check for any open dialogs/modals in the DOM
      const hasOpenModal = document.querySelector('[role="dialog"]') !== null;
      setIsModalOpen(isOverflowHidden || hasOpenModal);
    };

    // Check immediately
    checkModalState();

    // Use MutationObserver to watch for changes
    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ["style", "class"],
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  // Don't show if modal is open
  const shouldShow = isVisible && !isModalOpen;

  // Unified design across all breakpoints - same feel, responsive sizing
  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "fixed z-50 flex justify-center pointer-events-none",
            isMobile ? "bottom-4 inset-x-0 px-3" : isTablet ? "bottom-4 inset-x-0" : "bottom-6 inset-x-0"
          )}
          role="navigation"
          aria-label="Snelle acties"
        >
          <motion.div
            className={cn(
              "flex items-center rounded-full bg-card/95 backdrop-blur-md border border-border shadow-2xl pointer-events-auto",
              isMobile ? "gap-2 p-1.5" : isTablet ? "gap-2 p-1.5" : "gap-2 p-2"
            )}
            whileHover={!isMobile ? { scale: 1.02 } : undefined}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button
              asChild
              size={isMobile ? "default" : isTablet ? "default" : "lg"}
              className={cn(
                "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold",
                isMobile 
                  ? "h-10 min-h-[40px] px-6 text-sm"
                  : isTablet 
                    ? "h-10 min-h-[40px] px-5 text-sm" 
                    : "h-11 min-h-[44px] px-8"
              )}
            >
              <a
                href="https://app.cal.eu/digitale-duif/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Plan een gratis gesprek (opent in nieuw tabblad)"
              >
                <Calendar className={cn(
                  "mr-1.5 transition-transform duration-150 group-hover:scale-110",
                  isMobile ? "h-4 w-4" : isTablet ? "h-4 w-4" : "h-5 w-5"
                )} aria-hidden="true" />
                {isMobile ? "Plan gesprek" : "Gratis gesprek"}
              </a>
            </Button>
            
            {isHomePage && (
              <>
                <div className={cn(
                  "w-px bg-border/50",
                  isMobile ? "h-5" : isTablet ? "h-5" : "h-6"
                )} />
                <div className={cn("flex items-center", isMobile ? "gap-1" : "gap-0.5")}>
                  {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
                    const Icon = categoryIcons[categoryId];
                    const category = CATEGORIES[categoryId];
                    const isActive = selectedCategory === categoryId;
                    return (
                      <Button
                        key={categoryId}
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setCategory(categoryId);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={cn(
                          "rounded-full group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200",
                          isMobile
                            ? "h-10 min-h-[40px] w-10 p-0"
                            : isTablet
                              ? "h-8 min-h-[32px] px-2.5"
                              : "h-9 min-h-[36px] px-3",
                          isActive 
                            ? "bg-primary/15 text-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        )}
                        aria-label={`Selecteer ${category.label}`}
                        aria-pressed={isActive}
                      >
                        <Icon className={cn(
                          "transition-transform duration-150",
                          isMobile ? "h-4 w-4" : isTablet ? "h-3.5 w-3.5" : "h-4 w-4",
                          !isMobile && (isTablet ? "mr-1" : "mr-1.5"),
                          isActive ? "scale-110" : "group-hover:scale-110"
                        )} aria-hidden="true" />
                        {!isMobile && (
                          <span className={isTablet ? "text-xs" : "text-sm"}>
                            {category.shortLabel}
                          </span>
                        )}
                      </Button>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
