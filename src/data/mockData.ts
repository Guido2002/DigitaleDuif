// This file will contain mock data for various sections of the website.

import { LucideIcon, Brain, Rocket, Lightbulb, Users, TrendingUp, Code, Quote } from "lucide-react";

// USP Card Data
interface USP {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const uspCards: USP[] = [
  {
    icon: Brain,
    title: "XR Specialist",
    description: "Diepgaande expertise in Virtual en Mixed Reality technologieën en toepassingen.",
  },
  {
    icon: Rocket,
    title: "Snelle Concepten & Prototypes",
    description: "Van idee naar werkend prototype in recordtijd, voor snelle validatie.",
  },
  {
    icon: Lightbulb,
    title: "Techniek & UX in Balans",
    description: "Sterke combinatie van technische diepgang en gebruiksvriendelijk ontwerp.",
  },
  {
    icon: Users,
    title: "Co-creatie met Klanten",
    description: "Wij werken nauw samen met u, van concept tot oplevering, voor het beste resultaat.",
  },
  {
    icon: TrendingUp,
    title: "Data-gedreven Ervaringen",
    description: "Ontwerp van XR-oplossingen die meetbare resultaten en inzichten opleveren.",
  },
  {
    icon: Code,
    title: "Ervaring met Meta Quest & Unity",
    description: "Bewezen trackrecord met toonaangevende hardware en ontwikkelplatforms.",
  },
];

// Process Step Data
interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Users,
    title: "Kennismaking & Behoefteanalyse",
    description: "We starten met een grondige analyse van uw wensen en doelen om de kern van de uitdaging te begrijpen.",
  },
  {
    icon: Lightbulb,
    title: "Concept & Prototype",
    description: "Op basis van de analyse ontwikkelen we een concreet concept en een werkend prototype voor snelle feedback.",
  },
  {
    icon: Brain,
    title: "Testen & Itereren",
    description: "Samen met u testen we het prototype en verfijnen we de oplossing in iteratieve stappen.",
  },
  {
    icon: Rocket,
    title: "Oplevering & Support",
    description: "Na goedkeuring leveren we de complete oplossing op, inclusief documentatie en nazorg.",
  },
];

// Testimonial Data
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar?: string; // Optional avatar image URL
}

export const testimonials: Testimonial[] = [
  {
    quote: "DigitaleDuif heeft onze verwachtingen overtroffen met hun VR-trainingssimulatie. De kwaliteit en het realisme zijn ongeëvenaard, en onze medewerkers zijn er enorm door geholpen.",
    author: "Jan de Vries",
    title: "CEO, Innovatie B.V.",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Jan",
  },
  {
    quote: "De Mixed Reality oplossing die DigitaleDuif voor ons ontwikkelde, heeft onze operationele efficiëntie aanzienlijk verbeterd. Hun expertise in Unity is indrukwekkend.",
    author: "Sophie Bakker",
    title: "Projectmanager, Tech Solutions",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sophie",
  },
  {
    quote: "Vanaf het eerste concept tot de uiteindelijke oplevering was de samenwerking met DigitaleDuif uitstekend. Ze luisteren echt naar de klant en leveren maatwerk van topkwaliteit.",
    author: "Mark Jansen",
    title: "Hoofd R&D, Future Systems",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Mark",
  },
];