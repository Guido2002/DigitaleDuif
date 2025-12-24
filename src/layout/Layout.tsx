import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import FloatingCTA from "@/components/FloatingCTA";
import AccessibilityPanel from "@/components/AccessibilityPanel";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import ScrollProgressBar from "@/components/ScrollProgressBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Ga naar hoofdinhoud
      </a>
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>{children}</main>
      <Footer />
      <BackToTopButton />
      <FloatingCTA />
      <AccessibilityPanel />
    </div>
  );
};

export default Layout;