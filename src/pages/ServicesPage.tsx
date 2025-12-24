import React from "react";
import { motion } from "framer-motion";
import BentoServices from "@/components/BentoServices";

const ServicesPage = () => {
  return (
    <motion.div 
      className="bg-background min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <BentoServices />
    </motion.div>
  );
};

export default ServicesPage;