"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess, showError } from "@/utils/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react"; // Import Loader2 icon

// Define the schema for the contact form
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Naam moet minimaal 2 karakters bevatten.",
  }).max(50, {
    message: "Naam mag maximaal 50 karakters bevatten.",
  }),
  email: z.string().email({
    message: "Voer een geldig e-mailadres in.",
  }),
  message: z.string().min(10, {
    message: "Bericht moet minimaal 10 karakters bevatten.",
  }).max(500, {
    message: "Bericht mag maximaal 500 karakters bevatten.",
  }),
});

const ContactPage = () => {
  // Initialize react-hook-form with zodResolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // In een echte applicatie zou hier de formulierdata naar een backend gestuurd worden.
    // Voor nu tonen we alleen een succesbericht en simuleren we een API-call.
    console.log("Formulier verzonden:", values);
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    showSuccess("Uw bericht is succesvol verzonden!");
    form.reset(); // Reset form fields after successful submission
  };

  return (
    <div className="container flex flex-col items-center justify-center py-12">
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Naam</FormLabel>
                    <FormControl>
                      <Input placeholder="Uw naam" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mailadres</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bericht</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Uw bericht..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  "Verzenden"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;