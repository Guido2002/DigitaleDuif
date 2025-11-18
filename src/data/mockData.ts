// This file will contain mock data for various sections of the website.

import { LucideIcon, Brain, Rocket, Lightbulb, Users, TrendingUp, Code, Star } from "lucide-react"; // Import Star icon

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
  rating: number; // New: Star rating (1-5)
  companyLogo?: string; // New: Optional company logo URL
}

export const testimonials: Testimonial[] = [
  {
    quote: "DigitaleDuif heeft onze verwachtingen overtroffen met hun VR-trainingssimulatie. De kwaliteit en het realisme zijn ongeëvenaard, en onze medewerkers zijn er enorm door geholpen.",
    author: "Jan de Vries",
    title: "CEO, Innovatie B.V.",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Jan",
    rating: 5,
    companyLogo: "https://via.placeholder.com/40x40/0074FF/FFFFFF?text=IB", // Dummy logo
  },
  {
    quote: "De Mixed Reality oplossing die DigitaleDuif voor ons ontwikkelde, heeft onze operationele efficiëntie aanzienlijk verbeterd. Hun expertise in Unity is indrukwekkend.",
    author: "Sophie Bakker",
    title: "Projectmanager, Tech Solutions",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sophie",
    rating: 4,
    companyLogo: "https://via.placeholder.com/40x40/3AA7FF/FFFFFF?text=TS", // Dummy logo
  },
  {
    quote: "Vanaf het eerste concept tot de uiteindelijke oplevering was de samenwerking met DigitaleDuif uitstekend. Ze luisteren echt naar de klant en leveren maatwerk van topkwaliteit.",
    author: "Mark Jansen",
    title: "Hoofd R&D, Future Systems",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Mark",
    rating: 5,
    companyLogo: "https://via.placeholder.com/40x40/0074FF/FFFFFF?text=FS", // Dummy logo
  },
  {
    quote: "De flexibiliteit en technische kennis van DigitaleDuif waren cruciaal voor het succes van ons project. Een echte aanrader voor iedereen die met XR aan de slag wil.",
    author: "Lisa Vermeer",
    title: "Innovatie Specialist, Global Corp",
    avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Lisa",
    rating: 5,
    companyLogo: "https://via.placeholder.com/40x40/3AA7FF/FFFFFF?text=GC", // Dummy logo
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

// FAQ Data
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Wat is Extended Reality (XR)?",
    answer: "Extended Reality (XR) is een overkoepelende term die Virtual Reality (VR), Augmented Reality (AR) en Mixed Reality (MR) omvat. Het verwijst naar technologieën die de echte en virtuele werelden combineren of een volledig virtuele ervaring creëren.",
  },
  {
    question: "Welke technologieën gebruiken jullie?",
    answer: "Wij zijn gespecialiseerd in Unity development en werken met diverse XR-hardware, waaronder Meta Quest (VR) en HoloLens (MR). Onze expertise omvat C#, 3D-modellering en data-integratie.",
  },
  {
    question: "Kunnen jullie helpen met conceptontwikkeling?",
    answer: "Absoluut! Wij geloven in co-creatie en werken nauw samen met onze klanten vanaf de eerste brainstormsessie. We helpen u uw ideeën te verfijnen en om te zetten in concrete, werkende prototypes.",
  },
  {
    question: "Wat zijn de voordelen van XR voor mijn bedrijf?",
    answer: "XR kan uw bedrijf transformeren door middel van interactieve trainingen, efficiënte visualisaties, verbeterde samenwerking op afstand en innovatieve marketingervaringen. Het kan leiden tot kostenbesparingen, hogere productiviteit en een concurrentievoordeel.",
  },
  {
    question: "Hoe lang duurt de ontwikkeling van een XR-applicatie?",
    answer: "De duur van de ontwikkeling hangt sterk af van de complexiteit en de scope van het project. Na een initiële behoefteanalyse en conceptfase kunnen we een realistische tijdslijn en budget inschatten. We werken vaak met agile methoden voor snelle iteraties.",
  },
];

// About Section Expertise Data
interface AboutExpertise {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutExpertiseCards: AboutExpertise[] = [
  {
    icon: Brain,
    title: "XR & VR Expertise",
    description: "Met jarenlange ervaring in de XR-sector, zijn wij experts in het ontwikkelen van zowel Virtual Reality als Mixed Reality applicaties. Of het nu gaat om complexe simulaties, interactieve trainingsmodules of innovatieve visualisatietools, wij leveren oplossingen die de grenzen van het mogelijke verleggen. Onze focus ligt op het benutten van de kracht van XR om concrete zakelijke uitdagingen op te lossen en nieuwe kansen te creëren.",
  },
  {
    icon: Code, // Using Code for Unity Development
    title: "Unity Development",
    description: "Unity is de kern van onze technische stack. Onze ontwikkelaars zijn bedreven in het creëren van robuuste, schaalbare en hoogwaardige applicaties binnen dit veelzijdige platform. Wij geloven sterk in een iteratieve aanpak en co-creatie met onze klanten. Vanaf de eerste brainstormsessie tot de uiteindelijke oplevering werken we nauw samen, waarbij we prototypes ontwikkelen en continu feedback integreren om ervoor te zorgen dat het eindproduct perfect aansluit bij uw visie en behoeften.",
  },
  {
    icon: Users, // Using Users for Co-creatie
    title: "Co-creatie Aanpak",
    description: "Wij geloven sterk in een iteratieve aanpak en co-creatie met onze klanten. Vanaf de eerste brainstormsessie tot de uiteindelijke oplevering werken we nauw samen, waarbij we prototypes ontwikkelen en continu feedback integreren om ervoor te zorgen dat het eindproduct perfect aansluit bij uw visie en behoeften. Uw visie is onze drijfveer, en samen bouwen we aan de toekomst.",
  },
];