"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Bird } from "lucide-react"; // Import Bird icon
import { useIsMobile } from "@/hooks/use-mobile";
import { navLinks } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container flex h-20 items-center justify-between"> {/* Increased height to h-20 */}
        <Link to="/" className="flex items-center space-x-2">
          <Bird className="h-7 w-7 text-primary" /> {/* Added Bird icon */}
          <motion.span
            className="text-xl font-bold text-primary"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            DigitaleDuif
          </motion.span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="h-14 w-14">
                <Menu className="h-8 w-8 text-foreground" /> {/* Icon size increased to h-8 w-8 */}
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
                                className={cn(
                                  "block text-base text-muted-foreground hover:text-primary",
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
                        className={cn(
                          "relative text-lg font-medium text-foreground hover:text-primary",
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
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Link
                      to={link.path} // Link to the main services page
                      className={cn(
                        "relative text-base font-medium text-foreground transition-colors hover:text-primary", // Increased text size to text-base
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
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-card border border-border shadow-lg">
                    {link.children.map((childLink) => (
                      <DropdownMenuItem key={childLink.name} asChild>
                        <Link
                          to={childLink.path}
                          className={cn(
                            "block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer",
                            isActive(childLink.path) && "text-primary font-semibold",
                          )}
                        >
                          {childLink.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-base font-medium text-foreground transition-colors hover:text-primary", // Increased text size to text-base
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
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Plan een gesprek</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;