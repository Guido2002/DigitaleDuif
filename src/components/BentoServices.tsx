import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/mockData";
import { ArrowUpRight, Code, Smartphone, Glasses, Layers, Palette, Lightbulb, Database, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

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

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  colSpan: string;
  onClick: () => void;
  Icon: React.ElementType;
  hasRelatedProject: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, colSpan, onClick, Icon, hasRelatedProject }) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  // Trigger when 50% of the card is in view
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: 0.4 });
  
  const isActive = isMobile && isInView;

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`${service.title} - ${hasRelatedProject ? 'Bekijk gerelateerd project' : 'Bekijk alle projecten'}`}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 backdrop-blur-sm p-8 transition-all duration-200 ease-out cursor-pointer shadow-lg",
        "hover:shadow-2xl hover:border-primary/25 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isActive && "shadow-2xl border-primary/25 -translate-y-2 is-active",
        colSpan
      )}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-[.is-active]:opacity-100" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform duration-300 ease-out group-hover:scale-110 group-[.is-active]:scale-110">
            <Icon className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary group-[.is-active]:text-primary">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, i) => (
              <span 
                key={`${service.id}-tag-${tag}`} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-sm font-medium text-primary pt-2 border-t border-border/50">
            {hasRelatedProject ? 'Bekijk gerelateerd project' : 'Bekijk projecten'}
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
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
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-accent"
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
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                colSpan={colSpan}
                onClick={() => handleServiceClick(service.relatedProjectId)}
                Icon={Icon}
                hasRelatedProject={!!service.relatedProjectId}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
