import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, useReducedMotion } from "framer-motion";
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
import { Loader2, Send, CheckCircle2, Clock, AlertCircle, Check } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/mockData";
import { cn } from "@/lib/utils";

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

// Inline validation indicator component
const ValidationIndicator = ({ isValid, isTouched }: { isValid: boolean; isTouched: boolean }) => {
  if (!isTouched) return null;
  
  return (
    <span className={cn(
      "absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-150",
      isValid ? "text-green-500" : "text-destructive"
    )}>
      {isValid ? (
        <Check className="w-4 h-4" />
      ) : (
        <AlertCircle className="w-4 h-4" />
      )}
    </span>
  );
};

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  // Watch message field for character counter
  const messageValue = form.watch("message");
  const messageLength = messageValue?.length || 0;
  const maxMessageLength = 500;

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
    setSubmitError(null);
    
    try {
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      if (values.service) {
        const serviceName = services.find(s => s.id === values.service)?.title || values.service;
        formData.append("service", serviceName);
      }
      // Add subject for email
      formData.append("subject", `Nieuw contactformulier bericht van ${values.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setSubmitError("Er is iets misgegaan. Probeer het later opnieuw.");
      }
    } catch {
      setSubmitError("Er is een netwerkfout opgetreden. Controleer uw internetverbinding.");
    }
  };

  // Animation config respects reduced motion
  const animConfig = {
    duration: shouldReduceMotion ? 0 : 0.3,
    ease: "easeOut"
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-8 md:py-12 overflow-hidden bg-background">
      {/* Abstract Background Elements - Static (no animate-pulse) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...animConfig }}
        className="z-10 w-full max-w-lg px-4"
      >
        <Card className="backdrop-blur-md bg-white/90 border-2 border-border/50 shadow-xl rounded-[2rem] overflow-hidden relative group">
          {/* Geometric decorative line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-80 rounded-t-[2rem]" />
          
          {!isSubmitted && (
            <CardHeader className="text-center pb-2 px-6 pt-8 md:pt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...animConfig, delay: shouldReduceMotion ? 0 : 0.1 }}
              >
                <CardTitle className="mb-2 text-3xl md:text-4xl font-black text-foreground tracking-tight">
                  Neem Contact Op
                </CardTitle>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Heeft u een vraag, een idee of wilt u de mogelijkheden bespreken?
                  Neem gerust contact met mij op.
                </p>
                {/* Expected response time - sets expectations */}
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Meestal binnen 24 uur reactie</span>
                </div>
              </motion.div>
            </CardHeader>
          )}
          <CardContent className="pt-4 md:pt-6 px-6 pb-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...animConfig }}
                className="flex flex-col items-center justify-center py-8 md:py-12 text-center space-y-6"
              >
                <div className="rounded-full bg-green-500/10 p-4 shadow-inner">
                  <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Bedankt voor uw bericht!</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto text-base md:text-lg">
                    Ik heb uw bericht goed ontvangen en neem zo snel mogelijk contact met u op.
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-4">
                    <Clock className="w-4 h-4" />
                    Verwachte reactietijd: binnen 24 uur
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
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
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder=" "
                            autoComplete="name"
                            {...field} 
                            className={cn(
                              "peer border-input bg-background/50 text-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pr-10 pt-4",
                              fieldState.isTouched && !fieldState.error && "border-green-500/50",
                              fieldState.error && "border-destructive/50"
                            )}
                          />
                          <FormLabel className={cn(
                            "absolute left-3 transition-all duration-200 pointer-events-none text-muted-foreground",
                            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
                            "peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium",
                            field.value ? "top-2 -translate-y-0 text-xs font-medium text-foreground" : ""
                          )}>
                            Naam
                          </FormLabel>
                          <ValidationIndicator 
                            isValid={!fieldState.error && field.value.length >= 2} 
                            isTouched={fieldState.isTouched || false} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="email" 
                            placeholder=" "
                            autoComplete="email"
                            {...field} 
                            className={cn(
                              "peer border-input bg-background/50 text-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pr-10 pt-4",
                              fieldState.isTouched && !fieldState.error && field.value && "border-green-500/50",
                              fieldState.error && "border-destructive/50"
                            )}
                          />
                          <FormLabel className={cn(
                            "absolute left-3 transition-all duration-200 pointer-events-none text-muted-foreground",
                            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
                            "peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium",
                            field.value ? "top-2 -translate-y-0 text-xs font-medium text-foreground" : ""
                          )}>
                            E-mailadres
                          </FormLabel>
                          <ValidationIndicator 
                            isValid={!fieldState.error && field.value.length > 0} 
                            isTouched={fieldState.isTouched || false} 
                          />
                        </div>
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
                      <div className="relative">
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                          <FormControl>
                            <SelectTrigger className={cn(
                              "border-input bg-background/50 text-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pt-4",
                              field.value && "[&>span]:pt-0"
                            )}>
                              <SelectValue placeholder=" " />
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
                        <FormLabel className={cn(
                          "absolute left-3 transition-all duration-200 pointer-events-none text-muted-foreground",
                          field.value ? "top-2 text-xs font-medium text-foreground" : "top-1/2 -translate-y-1/2 text-base"
                        )}>
                          Onderwerp / Dienst
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => {
                    // Helper for character counter color
                    const getCounterColor = () => {
                      if (messageLength > maxMessageLength) return "text-destructive";
                      if (messageLength > maxMessageLength * 0.8) return "text-amber-500";
                      return "text-muted-foreground";
                    };

                    return (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder=" "
                            {...field} 
                            className={cn(
                              "peer min-h-[120px] md:min-h-[150px] border-input bg-background/50 text-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none pt-6",
                              fieldState.isTouched && !fieldState.error && messageLength >= 10 && "border-green-500/50",
                              fieldState.error && "border-destructive/50"
                            )}
                          />
                          <FormLabel className={cn(
                            "absolute left-3 transition-all duration-200 pointer-events-none text-muted-foreground",
                            "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base",
                            "peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium",
                            field.value ? "top-1.5 text-xs font-medium text-foreground" : ""
                          )}>
                            Bericht
                          </FormLabel>
                          {/* Character counter */}
                          <span className={cn("absolute right-3 top-1.5 text-xs transition-colors duration-150", getCounterColor())}>
                            {messageLength}/{maxMessageLength}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    );
                  }}
                />
                
                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-150 active:scale-[0.98]"
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