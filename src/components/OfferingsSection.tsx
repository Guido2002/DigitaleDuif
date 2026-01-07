import React, { memo } from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig, type OfferingContent } from "@/data/categoryConfig";
import { cn } from "@/lib/utils";
import { Check, Star, ArrowRight, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface OfferingCardProps {
  offering: OfferingContent;
  index: number;
  categoryKey?: string | null;
}

const OfferingCard: React.FC<OfferingCardProps> = memo(({ offering, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.15,
    rootMargin: "-80px"
  });

  // Detect mobile for performance optimizations
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced spring animation with scale and stagger
  // Remove scale on mobile for better performance
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    scale: inView ? 1 : (isMobile ? 1 : 0.92),
    delay: index * 100,
    config: { 
      tension: 220, 
      friction: 28,
      mass: 1
    },
  });

  // Separate spring for hover effects
  // Disable hover scale on mobile for better performance
  const hoverSpring = useSpring({
    scale: (isHovered && !isMobile) ? 1.02 : 1,
    y: isHovered ? -6 : 0,
    config: { tension: 300, friction: 25 }
  });

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => 
          springProps.scale.to(s =>
            hoverSpring.y.to(hy =>
              hoverSpring.scale.to(hs =>
                `translateY(${y + hy}px) scale(${s * hs})`
              )
            )
          )
        ),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl border bg-card p-6 transition-shadow duration-300",
        "hover:shadow-xl",
        offering.popular
          ? "border-primary shadow-lg shadow-primary/10"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Gradient overlay - CSS transition instead of framer-motion */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none transition-opacity duration-200",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Popular badge */}
      {offering.popular && (
        <animated.div 
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          style={{
            opacity: springProps.opacity,
            scale: springProps.scale.to(s => s * 1.02)
          }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-md shadow-primary/25">
            <Star className="w-3 h-3 fill-current" />
            Meest gekozen
          </span>
        </animated.div>
      )}

      {/* Title & Description */}
      <animated.div 
        className="mb-4 relative z-10"
        style={{
          opacity: springProps.opacity.to(o => o * 0.95),
        }}
      >
        <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {offering.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
      </animated.div>

      {/* Features list - simple CSS transitions */}
      <animated.ul 
        className="flex-1 space-y-3 mb-6 relative z-10"
        style={{
          opacity: springProps.opacity.to(o => o * 0.98),
        }}
      >
        {offering.features.map((feature, i) => (
          <li 
            key={i} 
            className="flex items-start gap-2.5 text-sm text-foreground transition-all duration-200 hover:translate-x-1"
            style={{
              transitionDelay: `${i * 30}ms`
            }}
          >
            <div className="mt-0.5 flex-shrink-0">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
        {/* Price indication - styled like features */}
        <li className="flex items-start gap-2.5 text-sm text-foreground pt-2 border-t border-border/50">
          <div className="mt-0.5 flex-shrink-0">
            <Euro className="w-4 h-4 text-primary" />
          </div>
          <span className="font-medium">{offering.priceIndication}</span>
        </li>
      </animated.ul>

      {/* CTA Button */}
      <animated.div
        style={{
          opacity: springProps.opacity,
        }}
      >
        <Button
          asChild
          variant={offering.popular ? "default" : "outline"}
          className={cn(
            "w-full relative z-10 group/btn overflow-hidden transition-all duration-300",
            offering.popular && "shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          )}
        >
          <Link to="/contact" className="flex items-center justify-center gap-2">
            Meer informatie
            <ArrowRight className={cn(
              "w-4 h-4 transition-transform duration-200",
              isHovered && "translate-x-1"
            )} />
          </Link>
        </Button>
      </animated.div>
    </animated.div>
  );
});

OfferingCard.displayName = "OfferingCard";

const OfferingsSection: React.FC = () => {
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { offerings } = config;
  const { offerings: sectionTitles } = config.sectionTitles;

  // Don't render if no offerings
  if (!offerings || offerings.length === 0) {
    return null;
  }

  return (
    <section id="offerings" className="bg-muted/30 relative">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title={sectionTitles.title}
            subtitle={sectionTitles.subtitle}
          />
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={`${selectedCategory}-${offering.id}`}
              offering={offering}
              index={index}
              categoryKey={selectedCategory}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Niet gevonden wat je zoekt? Ik maak graag een offerte op maat.
            </p>
            <Button asChild variant="outline" size="lg" className="group">
              <a
                href="https://app.cal.eu/digitale-duif/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Plan een vrijblijvend gesprek
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default OfferingsSection;
