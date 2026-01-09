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
  linkedinUrl?: string;
  isDarkBackground?: boolean;
}

const LinkedInMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.083V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.073-1.69 3.286 0 3.893 2.164 3.893 4.98v6.601zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TestimonialCard: React.FC<TestimonialCardProps> = memo(function TestimonialCard({
  quote,
  author,
  title,
  avatar,
  rating,
  companyLogo,
  linkedinUrl,
  isDarkBackground = false,
}) {
  return (
    <article
      className="w-full"
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
                  "text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light text-center lg:text-left",
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
                    {linkedinUrl && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open LinkedIn van ${author} in een nieuw tabblad`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                      >
                        <LinkedInMark className="h-4 w-4" />
                      </a>
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
                <div className="flex items-center justify-center gap-2">
                  <p className={cn(
                    "font-bold text-xl",
                    isDarkBackground ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {author}
                  </p>
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open LinkedIn van ${author} in een nieuw tabblad`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                    >
                      <LinkedInMark className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className={cn(
                  "text-sm max-w-[200px] text-center",
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
