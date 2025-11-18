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

// Project Data
export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "MR BIM 4D visualisatie voor ombouwplanning",
    description: "Een Mixed Reality applicatie die 3D BIM-modellen projecteert in de fysieke ruimte, inclusief tijdsdimensie (4D), voor efficiënte ombouwplanning en clashdetectie op locatie.",
    techStack: ["Unity", "C#", "HoloLens 2", "BIM Integration"],
  },
  {
    title: "XR sportanalyse: passing & positionering",
    description: "Een Virtual Reality trainingsmodule voor voetbalcoaches en spelers om passing en positionering te analyseren en te oefenen in gesimuleerde wedstrijdscenario's.",
    techStack: ["Unity", "C#", "Meta Quest 3", "Data Visualization"],
  },
  {
    title: "Interactieve VR-trainingsmodule voor complexe machines",
    description: "Een gedetailleerde VR-simulatie die operators traint in de veilige en efficiënte bediening van complexe industriële machines, inclusief noodprocedures.",
    techStack: ["Unity", "C#", "Meta Quest Pro", "Simulatie"],
  },
  {
    title: "Augmented Reality gids voor museumbezoekers",
    description: "Een mobiele AR-applicatie die museumbezoekers verrijkte informatie en interactieve elementen biedt bij kunstwerken en tentoonstellingen, via hun smartphone of tablet.",
    techStack: ["Unity", "AR Foundation", "Mobile AR", "UX Design"],
  },
  {
    title: "Data-gedreven XR-ervaring voor productontwerp",
    description: "Een VR-applicatie die real-time productiedata visualiseert binnen een virtuele omgeving, waardoor ontwerpers en ingenieurs direct inzicht krijgen in prestaties en optimalisatiemogelijkheden.",
    techStack: ["Unity", "C#", "Data Streaming", "VR Analytics"],
  },
];

// Service Data
export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: "VR-applicatieontwikkeling",
    description: "Ontwikkeling van op maat gemaakte Virtual Reality applicaties voor training, simulatie, visualisatie en entertainment. Van concept tot implementatie, wij brengen uw ideeën tot leven in VR.",
    tags: ["Unity", "Meta Quest", "C#", "VR Design"],
  },
  {
    title: "Mixed Reality interfaces",
    description: "Creëren van intuïtieve en functionele Mixed Reality interfaces die digitale informatie naadloos integreren met de fysieke wereld. Ideaal voor industriële toepassingen en interactieve ervaringen.",
    tags: ["Unity", "HoloLens", "MR Design", "UX"],
  },
  {
    title: "Prototyping & conceptontwikkeling",
    description: "Snelle ontwikkeling van prototypes en proof-of-concepts om ideeën te valideren en te visualiseren. Wij helpen u met het verkennen van de mogelijkheden van XR voor uw specifieke behoeften.",
    tags: ["Rapid Prototyping", "Concepting", "Ideation", "Agile"],
  },
  {
    title: "Unity consultancy / developer-as-a-service",
    description: "Expertise en ondersteuning voor uw Unity-projecten. Huur onze ervaren Unity-ontwikkelaars in voor advies, code review, projectmanagement of als tijdelijke uitbreiding van uw team.",
    tags: ["Unity", "C#", "Consultancy", "Development"],
  },
  {
    title: "XR-trainingssimulaties",
    description: "Ontwikkeling van realistische en effectieve XR-trainingssimulaties die medewerkers in een veilige omgeving complexe taken laten oefenen. Verhoog de retentie en verminder risico's.",
    tags: ["Training", "Simulatie", "Educatie", "Serious Gaming"],
  },
  {
    title: "Data logging & analyse in XR",
    description: "Implementatie van systemen voor het loggen en analyseren van gebruikersgedrag binnen XR-applicaties. Verkrijg waardevolle inzichten om uw ervaringen te optimaliseren en beslissingen te onderbouwen.",
    tags: ["Data Analytics", "Telemetry", "Insights", "Optimization"],
  },
];

// Navigation Links Data
interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Over ons", path: "/#about" },
  { name: "Diensten", path: "/diensten" },
  { name: "Projecten", path: "/projecten" },
  { name: "Hoe wij werken", path: "/#process" },
  { name: "Contact", path: "/contact" },
];