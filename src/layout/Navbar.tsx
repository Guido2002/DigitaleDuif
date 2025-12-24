import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Bird } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { navLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const linkFocus =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  const isActive = (path: string) => {
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
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between"> {/* Increased height to h-20 */}
        <Link to="/" className="flex items-center space-x-2">
          <Bird className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary">
            DigitaleDuif
          </span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="h-12 w-12" aria-label="Open menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
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
                <SheetClose asChild>
                  <a
                    href="https://app.cal.eu/digitale-duif/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90">Plan een gesprek</Button>
                  </a>
                </SheetClose>
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
                      "relative text-base font-medium text-foreground transition-colors hover:text-primary",
                      linkFocus,
                      isActive(link.path) && "text-primary font-bold",
                    )}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                      />
                    )}
                  </Link>
                  {/* Dropdown on hover */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 bg-card border border-border shadow-lg rounded-md py-1">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          to={childLink.path}
                          aria-current={isActive(childLink.path) ? "page" : undefined}
                          className={cn(
                            "block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground",
                            linkFocus,
                            isActive(childLink.path) && "text-primary font-semibold",
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
                    "relative text-base font-medium text-foreground transition-colors hover:text-primary",
                    linkFocus,
                    isActive(link.path) && "text-primary font-bold",
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                    />
                  )}
                </Link>
              )
            ))}
            <a
              href="https://app.cal.eu/digitale-duif/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">Plan een gesprek</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;