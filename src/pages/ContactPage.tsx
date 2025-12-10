"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess, showError } from "@/utils/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/mockData";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Naam moet minimaal 2 karakters bevatten.",
  }).max(50, {
    message: "Naam mag maximaal 50 karakters bevatten.",
  }),
  email: z.string().email({
    message: "Voer een geldig e-mailadres in.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Bericht moet minimaal 10 karakters bevatten.",
  }).max(500, {
    message: "Bericht mag maximaal 500 karakters bevatten.",
  }),
});

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (serviceId) {
      const serviceExists = services.some((s) => s.id === serviceId);
      if (serviceExists) {
        form.setValue("service", serviceId);
      }
    }
  }, [searchParams, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Formulier verzonden:", values);
    
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    setIsSubmitted(true);
    form.reset();
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-12 overflow-hidden bg-background">
      {/* Abstract Background Elements for Immersive Visuals */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-lg px-4"
      >
        <Card className="backdrop-blur-md bg-card/80 border-primary/10 shadow-2xl overflow-hidden relative group">
          {/* Geometric decorative line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-80" />
          
          {!isSubmitted && (
            <CardHeader className="text-center pb-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CardTitle className="mb-2 text-4xl font-bold text-primary">
                  Neem Contact Op
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  Heeft u een vraag, een idee of wilt u de mogelijkheden bespreken?
                  Neem gerust contact met ons op.
                </p>
              </motion.div>
            </CardHeader>
          )}
          <CardContent className="pt-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center space-y-6"
              >
                <div className="rounded-full bg-primary/10 p-4 shadow-inner">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Bedankt voor uw bericht!</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto text-lg">
                    We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Nog een bericht sturen
                </Button>
              </motion.div>
            ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Naam</FormLabel>
                      <FormControl>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Input 
                            placeholder="Uw naam" 
                            {...field} 
                            className="border-input bg-background/50 text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12" 
                          />
                        </motion.div>
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
                      <FormLabel className="text-foreground font-medium">E-mailadres</FormLabel>
                      <FormControl>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Input 
                            type="email" 
                            placeholder="uw.email@voorbeeld.nl" 
                            {...field} 
                            className="border-input bg-background/50 text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12" 
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Onderwerp / Dienst</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-input bg-background/50 text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12">
                            <SelectValue placeholder="Selecteer een onderwerp" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Anders</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Bericht</FormLabel>
                      <FormControl>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Textarea 
                            placeholder="Waar kunnen we u mee helpen?" 
                            {...field} 
                            className="min-h-[150px] border-input bg-background/50 text-foreground transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" 
                          />
                        </motion.div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      <>
                        Verstuur Bericht
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPage;