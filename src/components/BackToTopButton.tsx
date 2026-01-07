import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Check if a project modal is open by checking if the URL contains a project query param
  // Also check for body overflow hidden as a fallback
  const isModalOpen = React.useMemo(() => {
    const hasProjectParam = new URLSearchParams(location.search).has('project');
    const isOverflowHidden = document.body.style.overflow === 'hidden';
    return hasProjectParam || isOverflowHidden;
  }, [location.search]);

  if (isModalOpen) return null;

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full p-3 shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] min-w-[44px] hidden lg:inline-flex",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      size="icon"
      aria-label="Scroll naar boven"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
};

export default BackToTopButton;