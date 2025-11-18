"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { navLinks } from "@/data/mockData"; // Import navLinks from mockData
import { cn } from "@/lib/utils"; // Import cn for conditional class names

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation(); // Get current location

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">DigitaleDuif</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-lg font-medium text-foreground hover:text-primary",
                        isActive(link.path) && "text-primary font-bold", // Apply active styles
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/contact">
                    <Button className="w-full">Plan een gesprek</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium text-foreground transition-colors hover:text-primary",
                  isActive(link.path) && "text-primary font-bold", // Apply active styles
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Plan een gesprek</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;