"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In een echte applicatie zou hier de formulierdata naar een backend gestuurd worden.
    // Voor nu tonen we alleen een succesbericht.
    showSuccess("Uw bericht is succesvol verzonden!");
    // Reset form fields if needed
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-12">
      <Card className="w-full max-w-lg p-6 md:p-8">
        <CardHeader className="text-center">
          <CardTitle className="mb-2 text-3xl font-bold text-primary">
            Neem Contact Op
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Heeft u een vraag, een idee of wilt u de mogelijkheden bespreken?
            Neem gerust contact met ons op.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                Naam
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Uw naam"
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-mailadres
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="uw.email@voorbeeld.nl"
                required
                className="w-full"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Bericht
              </Label>
              <Textarea
                id="message"
                placeholder="Uw bericht..."
                rows={5}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Verzenden
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;