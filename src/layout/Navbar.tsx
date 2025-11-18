"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ModeToggle } from "@/components/ModeToggle"; // Import ModeToggle

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Over ons", path: "/#about" },
  { name: "Diensten", path: "/diensten" },
  { name: "Projecten", path: "/projecten" },
  { name: "Hoe wij werken", path: "/#process" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const handleNavLinkClick = (path: string) => {
    if (path.startsWith("/#") && location.pathname === "/") {
      // If on homepage and clicking an anchor, just scroll
      const id = path.substring(path.indexOf("#") + 1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    // For other cases (navigating to homepage anchor from another page, or to a different page),
    // the Link component handles it, and the browser will scroll if it's an anchor.
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
                      onClick={() => handleNavLinkClick(link.path)}
                      className="text-lg font-medium text-foreground hover:text-primary"
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
                <div className="flex justify-center pt-4">
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavLinkClick(link.path)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Plan een gesprek</Button>
            </Link>
            <ModeToggle /> {/* Add ModeToggle here for desktop */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;