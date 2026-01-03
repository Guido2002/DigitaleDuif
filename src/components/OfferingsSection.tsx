import React, { memo } from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig, type OfferingContent } from "@/data/categoryConfig";
import { cn } from "@/lib/utils";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface OfferingCardProps {
  offering: OfferingContent;
  index: number;
  categoryKey?: string | null;
}

const OfferingCard: React.FC<OfferingCardProps> = memo(({ offering, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    scale: isHovered ? 1.02 : 1,
    translateY: isHovered ? -4 : 0,
    delay: index * 80,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to((y) => 
          `translateY(${y + (isHovered ? -4 : 0)}px) scale(${isHovered ? 1.02 : 1})`
        ),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl border bg-card p-6 transition-shadow duration-200",
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
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-md shadow-primary/25">
            <Star className="w-3 h-3 fill-current" />
            Meest gekozen
          </span>
        </div>
      )}

      {/* Title & Description */}
      <div className="mb-4 relative z-10">
        <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {offering.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
      </div>

      {/* Price indication */}
      <div className="mb-6 relative z-10">
        <span className="text-2xl font-black text-primary">{offering.priceIndication}</span>
      </div>

      {/* Features list - simple CSS transitions */}
      <ul className="flex-1 space-y-3 mb-6 relative z-10">
        {offering.features.map((feature, i) => (
          <li 
            key={i} 
            className="flex items-start gap-2.5 text-sm text-foreground"
          >
            <div className="mt-0.5 flex-shrink-0">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        asChild
        variant={offering.popular ? "default" : "outline"}
        className={cn(
          "w-full relative z-10 group/btn overflow-hidden",
          offering.popular && "shadow-md shadow-primary/20"
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
              Niet gevonden wat je zoekt? We maken graag een offerte op maat.
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
