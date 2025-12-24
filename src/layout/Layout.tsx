import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import FloatingCTA from "@/components/FloatingCTA";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import ScrollProgressBar from "@/components/ScrollProgressBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTopButton />
      <FloatingCTA />
    </div>
  );
};

export default Layout;