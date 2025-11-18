"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center p-6 text-center">
      <CardHeader className="mb-4 p-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
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