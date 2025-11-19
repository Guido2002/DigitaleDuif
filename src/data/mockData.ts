// This file will contain mock data for various sections of the website.

import { LucideIcon, Brain, Rocket, Lightbulb, Users, TrendingUp, Code, Star, Globe, Smartphone, LayoutDashboard, Cloud } from "lucide-react"; // Import new icons

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
    description: "Diepgaande XR kennis voor innovatieve ervaringen.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Van concept tot lancering, robuuste websites en apps.",
  },
  {
    icon: Lightbulb,
    title: "Techniek & UX in Balans",
    description: "Solide techniek gecombineerd met een fijne gebruikservaring.",
  },
  {
    icon: Users,
    title: "Co-creatie met Klanten",
    description: "Samenwerking staat centraal, jouw inspraak telt.",
  },
  {
    icon: TrendingUp,
    title: "Resultaatgericht",
    description: "Focus op meetbare resultaten en impact.",
  },
  {
    icon: Code,
    title: "Moderne Technologieën",
    description: "Expertise in Unity, React, TypeScript en meer.",
  },
];

// Process Step Data
interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string[]; // Changed to string array for list items
}

export const processSteps: ProcessStep[] = [
  {
    icon: Users,
    title: "Kennismaking & Behoefteanalyse",
    description: [
      "Diepgaand gesprek over jouw visie en doelen.",
      "Identificeren van de kernuitdagingen en kansen.",
      "Vaststellen van projectscope en verwachtingen."
    ],
  },
  {
    icon: Lightbulb,
    title: "Concept & Prototype",
    description: [
      "Ontwikkelen van een concreet digitaal concept.",
      "Bouwen van een werkend prototype voor snelle validatie.",
      "Verzamelen van feedback en bijsturen van het ontwerp."
    ],
  },
  {
    icon: Brain,
    title: "Testen & Itereren",
    description: [
      "Uitgebreid testen van de applicatie.",
      "Verfijnen van functionaliteiten en gebruikerservaring.",
      "Optimaliseren van prestaties en stabiliteit."
    ],
  },
  {
    icon: Rocket,
    title: "Oplevering & Support",
    description: [
      "Leveren van de complete, geteste oplossing.",
      "Voorzien van heldere documentatie en instructies.",
      "Bieden van nazorg en technische ondersteuning."
    ],
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
  imageUrl: string; // Added imageUrl
}

export const projects: Project[] = [
  {
    title: "MR BIM 4D visualisatie voor ombouwplanning",
    description: "Een Mixed Reality applicatie die 3D BIM-modellen projecteert in de fysieke ruimte, inclusief tijdsdimensie (4D), voor efficiënte ombouwplanning en clashdetectie op locatie.",
    techStack: ["Unity", "C#", "HoloLens 2", "BIM Integration"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
  {
    title: "XR sportanalyse: passing & positionering",
    description: "Een Virtual Reality trainingsmodule voor voetbalcoaches en spelers om passing en positionering te analyseren en te oefenen in gesimuleerde wedstrijdscenario's.",
    techStack: ["Unity", "C#", "Meta Quest 3", "Data Visualization"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
  {
    title: "Interactieve VR-trainingsmodule voor complexe machines",
    description: "Een gedetailleerde VR-simulatie die operators traint in de veilige en efficiënte bediening van complexe industriële machines, inclusief noodprocedures.",
    techStack: ["Unity", "C#", "Meta Quest Pro", "Simulatie"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
  {
    title: "Maatwerk E-commerce Platform",
    description: "Ontwikkeling van een schaalbaar e-commerce platform met geavanceerde productbeheerfuncties en een gepersonaliseerde gebruikerservaring.",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe API"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
  {
    title: "Mobiele Event App",
    description: "Een native mobiele applicatie voor evenementen met functies zoals agenda, sprekersinformatie, netwerkmogelijkheden en live polls.",
    techStack: ["React Native", "TypeScript", "Firebase", "Push Notifications"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
  {
    title: "Bedrijfswebsite met CMS",
    description: "Een responsieve en SEO-vriendelijke bedrijfswebsite, gebouwd met een gebruiksvriendelijk Content Management Systeem voor eenvoudige updates.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    imageUrl: "/public/placeholder.svg", // Placeholder image
  },
];

// Service Data
export interface Service {
  id: string; // Added ID for hash linking
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Ontwikkeling van responsieve en krachtige websites en webapplicaties, van marketingwebsites tot complexe SaaS-oplossingen. Wij bouwen met moderne frameworks zoals React en Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Frontend", "Backend", "CMS"],
  },
  {
    id: "mobile-app-development",
    title: "Mobiele App Ontwikkeling",
    description: "Native en cross-platform mobiele applicaties voor iOS en Android. Wij creëren intuïtieve en performante apps die uw gebruikers zullen waarderen.",
    tags: ["React Native", "iOS", "Android", "UI/UX", "API Integration"],
  },
  {
    id: "vr-app-dev", // Corresponding ID
    title: "VR-applicatieontwikkeling",
    description: "Ontwikkeling van op maat gemaakte Virtual Reality applicaties voor training, simulatie, visualisatie en entertainment. Van concept tot implementatie, wij brengen uw ideeën tot leven in VR.",
    tags: ["Unity", "Meta Quest", "C#", "VR Design"],
  },
  {
    id: "mr-interfaces", // Corresponding ID
    title: "Mixed Reality interfaces",
    description: "Creëren van intuïtieve en functionele Mixed Reality interfaces die digitale informatie naadloos integreren met de fysieke wereld. Ideaal voor industriële toepassingen en interactieve ervaringen.",
    tags: ["Unity", "HoloLens", "MR Design", "UX"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Gebruikersgerichte ontwerpen die niet alleen mooi zijn, maar ook functioneel en intuïtief. Wij zorgen voor een optimale gebruikerservaring voor al uw digitale producten.",
    tags: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma"],
  },
  {
    id: "prototyping", // Corresponding ID
    title: "Prototyping & conceptontwikkeling",
    description: "Snelle ontwikkeling van prototypes en proof-of-concepts om ideeën te valideren en te visualiseren. Wij helpen u met het verkennen van de mogelijkheden van digitale innovatie.",
    tags: ["Rapid Prototyping", "Concepting", "Ideation", "Agile"],
  },
  {
    id: "unity-consultancy", // Corresponding ID
    title: "Unity consultancy / developer-as-a-service",
    description: "Expertise en ondersteuning voor uw Unity-projecten. Huur onze ervaren Unity-ontwikkelaars in voor advies, code review, projectmanagement of als tijdelijke uitbreiding van uw team.",
    tags: ["Unity", "C#", "Consultancy", "Development"],
  },
  {
    id: "data-analytics", // Corresponding ID
    title: "Data logging & analyse in XR & Web",
    description: "Implementatie van systemen voor het loggen en analyseren van gebruikersgedrag binnen XR-applicaties en webplatforms. Verkrijg waardevolle inzichten om uw ervaringen te optimaliseren.",
    tags: ["Data Analytics", "Telemetry", "Insights", "Optimization", "Google Analytics"],
  },
];

// Navigation Links Data
interface NavLink {
  name: string;
  path: string;
  children?: NavLink[]; // Added for dropdowns
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Over ons", path: "/#about" },
  { name: "Diensten", path: "/diensten" },
  { name: "Projecten", path: "/projecten" },
  { name: "Hoe wij werken", path: "/#process" },
  { name: "Contact", path: "/contact" },
];

// About Section Expertise Data
interface AboutExpertise {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutExpertiseCards: AboutExpertise[] = [
  {
    icon: Globe,
    title: "Full-stack Web Development",
    description: "Van frontend tot backend, wij bouwen robuuste en schaalbare webapplicaties met moderne technologieën.",
  },
  {
    icon: Smartphone,
    title: "Mobiele App Ontwikkeling",
    description: "Creëren van intuïtieve en performante mobiele apps voor iOS en Android die uw gebruikers zullen boeien.",
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description: "Focus op gebruikersgerichte ontwerpen die niet alleen mooi zijn, maar ook een optimale ervaring bieden.",
  },
  {
    icon: Brain,
    title: "XR & VR Expertise",
    description: "Diepgaande kennis van Virtual en Mixed Reality voor innovatieve en meeslepende ervaringen.",
  },
  {
    icon: Code,
    title: "Unity Development",
    description: "Specialisten in Unity 3D voor complexe simulaties, games en interactieve XR-applicaties.",
  },
  {
    icon: Cloud,
    title: "Cloud & API Integraties",
    description: "Naadloze integratie met cloudservices en externe API's voor uitgebreide functionaliteit.",
  },
];

// FAQ Data
interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Wat is Extended Reality (XR)?",
    answer: "Extended Reality (XR) is een overkoepelende term die alle real-and-virtual gecombineerde omgevingen en mens-machine-interacties omvat, inclusief Virtual Reality (VR), Augmented Reality (AR) en Mixed Reality (MR).",
  },
  {
    question: "Bouwen jullie ook reguliere websites en apps?",
    answer: "Jazeker! Naast onze expertise in XR, ontwikkelen wij ook maatwerk websites en mobiele applicaties. Van complexe webplatforms tot intuïtieve mobiele apps, wij leveren complete digitale oplossingen.",
  },
  {
    question: "Welke technologieën gebruiken jullie voor web- en app-ontwikkeling?",
    answer: "Voor webontwikkeling werken we voornamelijk met React, Next.js, TypeScript en Node.js. Voor mobiele apps gebruiken we React Native voor cross-platform ontwikkeling, of native technologieën indien nodig.",
  },
  {
    question: "Kunnen jullie helpen met conceptontwikkeling als we nog geen concreet idee hebben?",
    answer: "Absoluut! Wij begeleiden u graag van de initiële brainstormfase tot een concreet concept en een werkend prototype, om de mogelijkheden van digitale innovatie voor uw specifieke behoeften te verkennen.",
  },
  {
    question: "Wat zijn de voordelen van VR-trainingssimulaties?",
    answer: "VR-trainingssimulaties bieden een veilige, kosteneffectieve en herhaalbare manier om medewerkers te trainen in complexe of gevaarlijke scenario's, wat leidt tot hogere retentie en betere prestaties in de praktijk.",
  },
  {
    question: "Hoe lang duurt het om een digitale applicatie te ontwikkelen?",
    answer: "De ontwikkeltijd varieert sterk afhankelijk van de complexiteit en de scope van het project. Na een kennismaking en behoefteanalyse kunnen we een realistische tijdsinschatting geven.",
  },
];