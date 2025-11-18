"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash"; // Import the new hook

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToHash(); // Call the hook here

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;