import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If no hash, scroll to top on route change (e.g., navigating from /#about to /diensten)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Re-run when location object changes
}