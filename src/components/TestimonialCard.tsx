"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  avatar,
}) => {
  return (
    <Card className="group relative flex flex-col p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Quote className="absolute left-6 top-6 h-8 w-8 text-primary/20" />
      <CardContent className="flex flex-grow flex-col items-center justify-center p-0 pt-8">
        <p className="mb-6 text-lg italic text-foreground">"{quote}"</p>
        <div className="mt-auto flex flex-col items-center">
          <Avatar className="mb-3 h-16 w-16">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-xl font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;