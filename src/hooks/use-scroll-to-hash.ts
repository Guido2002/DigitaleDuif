import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        const nav = document.querySelector('nav[aria-label="Hoofdnavigatie"]');
        const navHeight = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 80;
        const extraGap = 12;
        const top = element.getBoundingClientRect().top + globalThis.scrollY - navHeight - extraGap;
        globalThis.window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    } else {
      // If no hash, scroll to top on route change (e.g., navigating from /#about to /diensten)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Re-run when location object changes
}