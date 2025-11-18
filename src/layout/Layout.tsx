"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton"; // Import BackToTopButton

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTopButton /> {/* Add BackToTopButton here */}
    </div>
  );
};

export default Layout;