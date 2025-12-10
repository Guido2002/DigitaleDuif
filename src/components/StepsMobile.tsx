import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/mockData";
import { cn } from "@/lib/utils";

const StepsMobile = () => {
  return (
    <div className="flex flex-col gap-8 relative px-4 py-8">
      {/* Vertical Connector Line */}
      <div className="absolute left-[2.25rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/20 to-transparent z-0" />

      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10"
        >
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 transition-all duration-300">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-50" />

            <div className="flex gap-5">
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <ul className="space-y-2">
                  {step.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepsMobile;
