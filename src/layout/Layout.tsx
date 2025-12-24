import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import ScrollProgressBar from "@/components/ScrollProgressBar"; // Import the new component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar /> {/* Add the scroll progress bar here */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;