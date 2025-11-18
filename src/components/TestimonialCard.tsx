"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react"; // Import Star icon
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
  rating: number; // New: Star rating (1-5)
  companyLogo?: string; // New: Optional company logo URL
  isDarkBackground?: boolean; // New prop to indicate dark parent background
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
        "group relative flex flex-col p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full",
        isDarkBackground
          ? "bg-neutral-800 text-neutral-100 dark-glassmorphism border-neutral-700"
          : "bg-card text-foreground glassmorphism border-border"
      )}
    >
      <Quote className={cn("absolute left-6 top-6 h-8 w-8", isDarkBackground ? "text-light-accent/30" : "text-light-accent/50")} />
      <CardContent className="flex flex-grow flex-col items-center justify-center p-0 pt-8">
        <p className={cn("mb-6 text-lg italic", isDarkBackground ? "text-neutral-200" : "text-foreground")}>"{quote}"</p>
        <div className="mt-auto flex flex-col items-center">
          {companyLogo && (
            <img src={companyLogo} alt="Company Logo" className="mb-3 h-10 w-10 object-contain" />
          )}
          <Avatar className="mb-3 h-16 w-16">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-light-accent/20 text-primary">{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-xl font-semibold text-primary">{author}</p>
          <p className={cn("text-sm", isDarkBackground ? "text-neutral-400" : "text-muted-foreground")}>{title}</p>
          <div className="mt-2 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500/50" // Adjusted gray for dark background
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