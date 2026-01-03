import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Brain, Globe, Smartphone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCategory, CATEGORIES, type CategoryId } from "@/context/CategoryContext";
import { cn } from "@/lib/utils";

const categoryIcons: Record<CategoryId, React.ElementType> = {
  xr: Brain,
  websites: Globe,
  "mobile-apps": Smartphone,
};

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { selectedCategory, setCategory } = useCategory();
  
  const isHomePage = location.pathname === "/";

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

  if (isMobile) {
    // Mobile: Enhanced floating pill at bottom
    return (
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 inset-x-4 z-50"
            role="navigation"
            aria-label="Snelle acties"
          >
            <div className="flex gap-2 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Button
                asChild
                className={cn(
                  "h-12 min-h-[48px] rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isHomePage ? "flex-1" : "flex-1"
                )}
              >
                <a
                  href="https://app.cal.eu/digitale-duif/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Plan een gratis gesprek (opent in nieuw tabblad)"
                >
                  <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                  Gratis gesprek
                </a>
              </Button>
              {isHomePage && (
                <div className="flex gap-1">
                  {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
                    const Icon = categoryIcons[categoryId];
                    const isActive = selectedCategory === categoryId;
                    return (
                      <Button
                        key={categoryId}
                        variant="ghost"
                        onClick={() => setCategory(categoryId)}
                        className={cn(
                          "h-12 min-h-[48px] w-12 rounded-xl p-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                          isActive 
                            ? "bg-primary/15 text-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        )}
                        aria-label={`Selecteer ${CATEGORIES[categoryId].label}`}
                        aria-pressed={isActive}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Desktop: Floating bottom center
  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none"
          role="navigation"
          aria-label="Snelle acties"
        >
          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-2 p-2 rounded-full bg-card/95 backdrop-blur-md border border-border shadow-2xl pointer-events-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button
              asChild
              size="lg"
              className="h-11 min-h-[44px] px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold"
            >
              <a
                href="https://app.cal.eu/digitale-duif/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Plan een gratis gesprek (opent in nieuw tabblad)"
              >
                <Calendar className="h-5 w-5 mr-2 transition-transform duration-150 group-hover:scale-110" aria-hidden="true" />
                Gratis gesprek
              </a>
            </Button>
            
            {isHomePage && (
              <>
                <div className="w-px h-6 bg-border" />
                <div className="flex items-center gap-1">
                  {(Object.keys(CATEGORIES) as CategoryId[]).map((categoryId) => {
                    const Icon = categoryIcons[categoryId];
                    const category = CATEGORIES[categoryId];
                    const isActive = selectedCategory === categoryId;
                    return (
                      <Button
                        key={categoryId}
                        variant="ghost"
                        size="sm"
                        onClick={() => setCategory(categoryId)}
                        className={cn(
                          "h-9 min-h-[36px] px-3 rounded-full group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200",
                          isActive 
                            ? "bg-primary/15 text-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        )}
                        aria-label={`Selecteer ${category.label}`}
                        aria-pressed={isActive}
                      >
                        <Icon className={cn(
                          "h-4 w-4 mr-1.5 transition-transform duration-150",
                          isActive ? "scale-110" : "group-hover:scale-110"
                        )} aria-hidden="true" />
                        {category.shortLabel}
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
