import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Home, Search, Bird, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.warn(
        "404: User attempted to access non-existent route:",
        location.pathname,
      );
    }
  }, [location.pathname]);

  // Animation config respects reduced motion preference
  const animConfig = {
    duration: shouldReduceMotion ? 0 : 0.3,
    ease: "easeOut"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Soft Background Effects - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="text-center relative z-10 px-4 max-w-lg mx-auto">
        {/* Friendly illustration - lost bird */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...animConfig }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
            <Bird className="w-12 h-12 text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          <h1 className="text-7xl md:text-8xl font-black text-primary mb-2">404</h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="text-xl md:text-2xl font-medium text-foreground mb-3"
        >
          Deze pagina vliegt niet mee
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="text-muted-foreground mb-8 leading-relaxed"
        >
          Geen zorgen, dit overkomt de beste duiven. De pagina is misschien verplaatst of verwijderd. 
          Laten we je weer op de juiste koers brengen.
        </motion.p>

        {/* Quick suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.25 }}
          className="mb-8 p-4 rounded-xl bg-muted/50 border border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Misschien zocht je naar:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              to="/projecten" 
              className="px-3 py-1.5 text-sm rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-150"
            >
              Projecten
            </Link>
            <Link 
              to="/contact" 
              className="px-3 py-1.5 text-sm rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-150"
            >
              Contact
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="h-5 w-5" />
              Terug naar Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/contact">
              <Search className="h-5 w-5" />
              Hulp nodig?
            </Link>
          </Button>
        </motion.div>

        {/* Reassurance message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.35 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Zocht je een specifieke pagina? <Link to="/contact" className="text-primary hover:underline">Laat het ons weten</Link>
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;