"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code, Smartphone, Glasses, Layers, Palette, Lightbulb, Database, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Map service IDs to specific icons for better visual representation
const iconMap: Record<string, React.ElementType> = {
  "web-development": Code,
  "mobile-app-development": Smartphone,
  "vr-app-dev": Glasses,
  "mr-interfaces": Layers,
  "ui-ux-design": Palette,
  "prototyping": Lightbulb,
  "unity-consultancy": Terminal,
  "data-analytics": Database,
};

const BentoServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (projectId?: string) => {
    if (projectId) {
      navigate(`/projecten?project=${projectId}`);
    } else {
      navigate('/projecten');
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500"
          >
            Onze Diensten
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Wij combineren creativiteit met technologie om impactvolle digitale oplossingen te creëren. Van immersive XR ervaringen tot robuuste webplatforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Code;
            // Determine span based on index to create bento layout
            // 0: span 2 (Web Dev)
            // 1: span 1 (Mobile)
            // 2: span 1 (VR)
            // 3: span 2 (MR)
            // 4, 5, 6: span 1
            // 7: span 3 (Data - full width)
            
            const isLarge = index === 0 || index === 3;
            const isFull = index === 7;
            
            const colSpan = isFull 
              ? "md:col-span-3" 
              : isLarge 
                ? "md:col-span-2" 
                : "md:col-span-1";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleServiceClick(service.relatedProjectId)}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 cursor-pointer",
                  colSpan
                )}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-3 py-1 text-xs font-medium transition-colors border-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
