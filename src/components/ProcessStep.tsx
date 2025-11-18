"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, icon: Icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center p-6 text-center">
      <CardHeader className="mb-4 p-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
          <span className="text-2xl font-bold">{stepNumber}</span>
        </div>
        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      </CardHeader>
      <CardTitle className="mb-2 text-xl font-semibold">
        {title}
      </CardTitle>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </Card>
  );
};

export default ProcessStep;