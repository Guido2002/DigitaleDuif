import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Bird } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { navLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useActiveSection, homeSections } from "@/hooks/use-active-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const activeSection = useActiveSection(homeSections);

  const linkFocus =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  // Check if a nav link is active based on scroll position or route
  const isActive = React.useCallback((path: string) => {
    // On homepage, use scroll-based active detection
    if (location.pathname === "/") {
      if (path === "/") {
        return activeSection === "home";
      }
      if (path === "/#about") {
        return activeSection === "about" || activeSection === "why-us";
      }
      if (path === "/#process") {
        return activeSection === "process" || activeSection === "testimonials" || activeSection === "faq" || activeSection === "cta";
      }
    }
    
    // For other pages, use route-based detection
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path;
    }
    // Handle active state for parent link when a child link is active
    if (navLinks.some(link => link.path === path && link.children?.some(child => location.pathname + location.hash === child.path))) {
      return true;
    }
    return location.pathname + location.hash === path;
  }, [location.pathname, location.hash, activeSection]);

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md"
      role="navigation"
      aria-label="Hoofdnavigatie"
      style={{ willChange: "transform" }}
    >
      <div className="container flex h-20 items-center justify-between"> {/* Increased height to h-20 */}
        <Link to="/" className="flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md" aria-label="DigitaleDuif - Ga naar homepage">
          <Bird className="h-7 w-7 text-primary" aria-hidden="true" />
          <span className="text-xl font-black text-foreground tracking-tight">
            DigitaleDuif
          </span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="h-12 w-12 min-h-[48px] min-w-[48px] p-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                aria-label="Open navigatiemenu"
              >
                <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background" aria-label="Navigatiemenu">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  link.children ? (
                    <Accordion type="single" collapsible key={link.name} className="w-full">
                      <AccordionItem value={link.name} className="border-b-0">
                        <AccordionTrigger className={cn(
                          "relative text-lg font-medium text-foreground hover:text-primary hover:no-underline",
                          linkFocus,
                          isActive(link.path) && "text-primary font-bold",
                      )}>
                        {link.name}
                        {isActive(link.path) && (
                          <motion.span
                            layoutId="underline-mobile"
                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                          />
                        )}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 pt-2 pb-0 space-y-2">
                        {link.children.map((childLink) => (
                          <SheetClose asChild key={childLink.name}>
                            <Link
                              to={childLink.path}
                              aria-current={isActive(childLink.path) ? "page" : undefined}
                              className={cn(
                                "block text-base text-muted-foreground hover:text-primary",
                                linkFocus,
                                isActive(childLink.path) && "text-primary font-semibold",
                              )}
                            >
                              {childLink.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SheetClose asChild key={link.name}>
                    <Link
                      to={link.path}
                      aria-current={isActive(link.path) ? "page" : undefined}
                      className={cn(
                        "relative text-lg font-medium text-foreground hover:text-primary",
                        linkFocus,
                        isActive(link.path) && "text-primary font-bold",
                      )}
                    >
                      {link.name}
                      {isActive(link.path) && (
                        <motion.span
                          layoutId="underline-mobile"
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                        />
                      )}
                    </Link>
                  </SheetClose>
                )
              ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={cn(
                      "relative text-base font-semibold text-foreground transition-colors hover:text-primary",
                      linkFocus,
                      isActive(link.path) && "text-primary font-bold",
                    )}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                      />
                    )}
                  </Link>
                  {/* Dropdown on hover */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 bg-white border-2 border-border/60 shadow-lg rounded-2xl py-2 px-1">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          to={childLink.path}
                          aria-current={isActive(childLink.path) ? "page" : undefined}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-xl transition-colors",
                            linkFocus,
                            isActive(childLink.path) && "text-primary font-bold bg-primary/5",
                          )}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={cn(
                    "relative text-base font-semibold text-foreground transition-colors hover:text-primary",
                    linkFocus,
                    isActive(link.path) && "text-primary font-bold",
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                    />
                  )}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;