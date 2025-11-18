"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="group flex flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card border border-border">
      <CardHeader className="mb-4 p-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
      </CardHeader>
      <CardTitle className="mb-2 text-xl font-semibold text-foreground">
        {title}
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </Card>
  );
};

export default FeatureCard;