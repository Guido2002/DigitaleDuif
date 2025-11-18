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
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  avatar,
  rating,
  companyLogo,
}) => {
  return (
    <Card className="group relative flex flex-col p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card border border-border glassmorphism h-full"> {/* Added h-full */}
      <Quote className="absolute left-6 top-6 h-8 w-8 text-light-accent/50" />
      <CardContent className="flex flex-grow flex-col items-center justify-center p-0 pt-8">
        <p className="mb-6 text-lg italic text-foreground">"{quote}"</p>
        <div className="mt-auto flex flex-col items-center">
          {companyLogo && (
            <img src={companyLogo} alt="Company Logo" className="mb-3 h-10 w-10 object-contain" />
          )}
          <Avatar className="mb-3 h-16 w-16">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-light-accent/20 text-primary">{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-xl font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="mt-2 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
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