import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import BentoServices from "@/components/BentoServices";

const ServicesPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className="bg-background min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      <BentoServices />
    </motion.div>
  );
};

export default ServicesPage;