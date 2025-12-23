"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  avatar,
  rating,
  companyLogo,
  isDarkBackground = false,
}) => {
  return (
    <Card
      className={cn(
        "group relative flex flex-col p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        isDarkBackground
          ? "bg-neutral-800 border-neutral-700 hover:border-primary/50"
          : "bg-card border-border hover:border-primary/50"
      )}
      tabIndex={0}
      role="article"
      aria-label={`Testimonial van ${author}: ${quote}`}
    >
      <CardContent className="flex flex-grow flex-col items-center justify-center p-0 pt-8">
        <p className={cn(
          "mb-6 text-lg italic",
          isDarkBackground ? "text-neutral-100" : "text-foreground"
        )}>"{quote}"</p>
        <div className="mt-auto flex flex-col items-center">
          {companyLogo && (
            <img
              src={companyLogo}
              alt="Company Logo"
              className="mb-3 h-10 w-10 object-contain"
              loading="lazy"
              decoding="async"
            />
          )}
          <Avatar className="mb-3 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary/20 text-primary">{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-xl font-semibold text-primary">{author}</p>
          <p className={cn(
            "text-sm",
            isDarkBackground ? "text-neutral-400" : "text-muted-foreground"
          )}>{title}</p>
          <div className="mt-2 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-600"
                )}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
