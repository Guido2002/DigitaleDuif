import React, { useRef, useState, memo } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { services } from "@/data/mockData";
import { ArrowUpRight, Code, Smartphone, Glasses, Layers, Palette, Lightbulb, Database, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { DoodleStar, DoodleSpiral, DoodleUnderline, FloatingDoodle, DotPattern } from "@/components/ui/doodles";
import FadeInWhenVisible from "./FadeInWhenVisible";

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

// Service categories for filtering
const serviceCategories = [
  { id: "all", label: "Alles", description: "Bekijk al onze diensten" },
  { id: "xr", label: "XR & Immersive", description: "VR, MR en immersive ervaringen", serviceIds: ["vr-app-dev", "mr-interfaces", "unity-consultancy"] },
  { id: "web-mobile", label: "Web & Mobile", description: "Websites en apps", serviceIds: ["web-development", "mobile-app-development"] },
  { id: "design", label: "Design & Strategie", description: "UX, prototyping en analyse", serviceIds: ["ui-ux-design", "prototyping", "data-analytics"] },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  colSpan: string;
  onClick: () => void;
  Icon: React.ElementType;
  hasRelatedProject: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ service, index, colSpan, onClick, Icon, hasRelatedProject }) => {
  const isMobile = useIsMobile();
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px"
  });
  
  const isActive = isMobile && inView;

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 15,
    delay: index * 50,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div
      ref={ref}
      id={service.id}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => `translateY(${y}px)`),
      }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`${service.title} - ${hasRelatedProject ? 'Bekijk gerelateerd project' : 'Bekijk alle projecten'}`}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border-2 border-border/50 bg-white/90 backdrop-blur-sm p-8 transition-all duration-200 ease-out cursor-pointer shadow-sm",
        "hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isActive && "shadow-xl border-primary/30 -translate-y-1 is-active",
        colSpan
      )}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-[.is-active]:opacity-100" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="w-14 h-14 rounded-2xl bg-foreground/5 text-foreground flex items-center justify-center mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary group-[.is-active]:scale-110 group-[.is-active]:bg-primary/10 group-[.is-active]:text-primary">
            <Icon className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-black mb-3 transition-colors duration-300 group-hover:text-primary group-[.is-active]:text-primary tracking-tight">
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
                className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 text-foreground/70 border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-sm font-bold text-foreground pt-3 border-t border-border/40 group-hover:text-primary transition-colors">
            {hasRelatedProject ? 'Bekijk project' : 'Bekijk projecten'}
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </animated.div>
  );
});

ServiceCard.displayName = "ServiceCard";

const BentoServices = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const handleServiceClick = (projectId?: string) => {
    if (projectId) {
      navigate(`/projecten?project=${projectId}`);
    } else {
      navigate('/projecten');
    }
  };

  // Filter services based on active category
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => {
        const category = serviceCategories.find(c => c.id === activeCategory);
        return category?.serviceIds?.includes(service.id);
      });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <DotPattern className="text-foreground" />
      <FloatingDoodle className="top-24 right-[10%] text-primary/15" duration={7}>
        <DoodleStar className="w-10 h-10" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-32 left-[5%] text-amber-500/15" duration={8} delay={1}>
        <DoodleSpiral className="w-16 h-16" />
      </FloatingDoodle>

      <div className="container relative z-10">
        <div className="mb-14 max-w-3xl">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight">
              Onze{" "}
              <span className="relative inline-block text-primary">
                Diensten
                <span className="absolute -bottom-1 left-0 w-full text-primary/40">
                  <DoodleUnderline delay={0.5} />
                </span>
              </span>
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Wij combineren creativiteit met technologie om impactvolle digitale oplossingen te creëren. Van immersive XR ervaringen tot robuuste webplatforms.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Category Filter Tabs */}
        <FadeInWhenVisible delay={0.15}>
          <div 
            className="mb-12"
            role="tablist"
            aria-label="Filter diensten op categorie"
          >
          <div className="flex flex-wrap gap-3">
            {serviceCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls="services-grid"
                className={cn(
                  "rounded-full px-6 py-2.5 h-auto transition-all duration-200 font-semibold",
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "border-2 border-border/60 bg-white/80 hover:border-primary hover:bg-white text-foreground hover:text-primary"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
          {/* Category description */}
          <p className="mt-4 text-sm text-muted-foreground">
            {serviceCategories.find(c => c.id === activeCategory)?.description}
          </p>
        </FadeInWhenVisible>

        <div 
          id="services-grid"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(260px,auto)]"
        >
          {filteredServices.map((service, index) => {
              const Icon = iconMap[service.id] || Code;
              // Determine span based on filtered index to create bento layout
              const isLarge = index === 0 || index === 3;
              const isFull = filteredServices.length > 6 && index === filteredServices.length - 1;
              
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
