import React, { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
  rating: number;
  companyLogo?: string;
  isDarkBackground?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(function TestimonialCard({
  quote,
  author,
  title,
  avatar,
  rating,
  companyLogo,
  isDarkBackground = false,
}) {
  return (
    <article
      className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4"
      tabIndex={0}
      aria-label={`Testimonial van ${author}`}
    >
      {/* Main card */}
      <div className="relative group">
        {/* Card content */}
        <div className={cn(
          "relative rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12",
          isDarkBackground ? "bg-primary" : "bg-card"
        )}>
          {/* Grid layout - stacked on mobile/tablet, side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 lg:gap-12 items-center">
            
            {/* Quote section */}
            <div className="space-y-4 sm:space-y-6">
              {/* Stars at top */}
              <div className="flex gap-0.5 sm:gap-1 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4 sm:h-5 sm:w-5",
                      i < rating ? "text-white fill-white" : "text-white/20"
                    )}
                  />
                ))}
              </div>
              
              {/* Quote text */}
              <blockquote>
                <p className={cn(
                  "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-center lg:text-left",
                  isDarkBackground ? "text-primary-foreground" : "text-foreground"
                )}>
                  "{quote}"
                </p>
              </blockquote>
              
              {/* Author info - mobile/tablet (centered) */}
              <div className="flex flex-col items-center gap-3 pt-2 lg:hidden">
                <div className="relative">
                  <Avatar className="relative h-16 w-16 sm:h-18 sm:w-18 ring-2 ring-white/30">
                    <AvatarImage src={avatar} alt={author} className="object-cover" />
                    <AvatarFallback className="bg-white/20 text-primary-foreground font-semibold text-lg">
                      {author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className={cn(
                      "font-semibold text-base sm:text-lg",
                      isDarkBackground ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {author}
                    </p>
                    {companyLogo && (
                      <img
                        src={companyLogo}
                        alt="Company"
                        className="h-5 w-5 sm:h-6 sm:w-6 object-contain rounded-full"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <p className={cn(
                    "text-xs sm:text-sm mt-0.5",
                    isDarkBackground ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    {title}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Author section - desktop sidebar */}
            <div className="hidden lg:flex flex-col items-center text-center gap-4 pl-8 border-l border-primary-foreground/20">
              {/* Large avatar */}
              <div className="relative">
                <Avatar className="relative h-24 w-24 ring-4 ring-white/20">
                  <AvatarImage src={avatar} alt={author} className="object-cover" />
                  <AvatarFallback className="bg-white/20 text-primary-foreground text-2xl font-semibold">
                    {author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Company logo */}
              {companyLogo && (
                <img
                  src={companyLogo}
                  alt="Company"
                  className="h-10 w-10 object-contain rounded-full ring-2 ring-white/20"
                  loading="lazy"
                />
              )}
              
              {/* Name & title */}
              <div className="space-y-1">
                <p className={cn(
                  "font-bold text-xl",
                  isDarkBackground ? "text-primary-foreground" : "text-foreground"
                )}>
                  {author}
                </p>
                <p className={cn(
                  "text-sm max-w-[200px]",
                  isDarkBackground ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export default TestimonialCard;
