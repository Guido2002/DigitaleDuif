import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import FloatingCTA from "@/components/FloatingCTA";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CategorySelectionModal from "@/components/CategorySelectionModal";
import { useCategory } from "@/context/CategoryContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToHash();
  const { showCategoryModal, isFirstVisit } = useCategory();
  
  // Hide content completely on first visit when modal is open
  const hideContent = showCategoryModal && isFirstVisit;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Category selection modal - shown first on initial visit */}
      <CategorySelectionModal />
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Ga naar hoofdinhoud
      </a>
      
      {/* Hide all content when showing category modal on first visit */}
      {!hideContent && (
        <>
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content" className="flex-grow" tabIndex={-1}>{children}</main>
          <Footer />
          <BackToTopButton />
          <FloatingCTA />
        </>
      )}
    </div>
  );
};

export default Layout;