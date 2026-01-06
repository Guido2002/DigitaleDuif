// This file will contain mock data for various sections of the website.

import { LucideIcon, Glasses, Rocket, Lightbulb, Users, TrendingUp, Code, Star, Globe, Smartphone, LayoutDashboard, Cloud, Search, Settings } from "lucide-react";

// USP Card Data
interface USP {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage?: string;
}

export const uspCards: USP[] = [
  {
    icon: Glasses,
    title: "XR Specialist",
    description: "Diepgaande XR kennis voor innovatieve ervaringen.",
    backgroundImage: "/xr.jpeg",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Van concept tot lancering, robuuste websites en apps.",
    backgroundImage: "/webapp.jpeg",
  },
  {
    icon: Lightbulb,
    title: "Techniek & UX in Balans",
    description: "Solide techniek gecombineerd met een fijne gebruikservaring.",
    backgroundImage: "/ux1.jpeg",
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
    icon: Search,
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
    icon: Settings,
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
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    companyLogo: "https://ui-avatars.com/api/?name=Innovatie+BV&background=0074FF&color=fff&size=80&bold=true&format=svg",
  },
  {
    quote: "De Mixed Reality oplossing die DigitaleDuif voor ons ontwikkelde, heeft onze operationele efficiëntie aanzienlijk verbeterd. Hun expertise in Unity is indrukwekkend.",
    author: "Sophie Bakker",
    title: "Projectmanager, Tech Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    companyLogo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=3AA7FF&color=fff&size=80&bold=true&format=svg",
  },
  {
    quote: "Vanaf het eerste concept tot de uiteindelijke oplevering was de samenwerking met DigitaleDuif uitstekend. Ze luisteren echt naar de klant en leveren maatwerk van topkwaliteit.",
    author: "Mark Jansen",
    title: "Hoofd R&D, Future Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    companyLogo: "https://ui-avatars.com/api/?name=Future+Systems&background=0074FF&color=fff&size=80&bold=true&format=svg",
  },
  {
    quote: "De flexibiliteit en technische kennis van DigitaleDuif waren cruciaal voor het succes van ons project. Een echte aanrader voor iedereen die met XR aan de slag wil.",
    author: "Lisa Vermeer",
    title: "Innovatie Specialist, Global Corp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    companyLogo: "https://ui-avatars.com/api/?name=Global+Corp&background=3AA7FF&color=fff&size=80&bold=true&format=svg",
  },
];

// Project Data
export interface Project {
  id: string;
  title: string;
  tagline: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  images: string[];
  serviceId?: string; // New field
  videoUrl?: string; // New field for project video
}

export const projects: Project[] = [
  {
    id: "mr-bim-4d",
    title: "Mixed Reality met BIM 4D",
    tagline: "Visualisatie van bouwprojecten in de echte wereld",
    client: "Sweco Nederland",
    description: "Een Mixed Reality applicatie die 3D BIM-modellen projecteert in de fysieke ruimte, inclusief tijdsdimensie (4D), voor efficiënte ombouwplanning en clashdetectie op locatie.",
    challenge: "Complexe ombouwprojecten liepen vaak vertraging op door onvoorziene clashes tussen nieuwe ontwerpen en bestaande situaties, wat leidde tot hoge faalkosten.",
    solution: "Een Quest 3 applicatie die het BIM-model 1-op-1 over de werkelijkheid projecteert, waardoor betrokkenen direct kunnen zien waar leidingen en constructies moeten komen.",
    impact: "Vroegtijdig inzicht over ontwerpfouten, waardoor gerichter en sneller ontworpen kan worden.",
    techStack: ["Unity", "C#", "Quest 3", "Autodesk Revit", "BIM 4D"],
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    ],
    serviceId: "mr-interfaces",
  },
  {
    id: "xr-sportanalyse",
    title: "XR sportanalyse",
    tagline: "Next-level training voor profvoetballers",
    client: "FC Topclub",
    description: "Een Virtual Reality trainingsmodule voor voetbalcoaches en spelers om passing en positionering te analyseren en te oefenen in gesimuleerde wedstrijdscenario's.",
    challenge: "Traditionele video-analyse mist de diepte en het perspectief van de speler op het veld, waardoor tactische beslissingen lastig te trainen zijn zonder fysieke belasting.",
    solution: "Een VR-simulatie waarin spelers wedstrijdfragmenten kunnen herbeleven vanuit hun eigen perspectief en alternatieve keuzes kunnen maken.",
    impact: "Verbeterd tactisch inzicht bij jeugdspelers en snellere revalidatie van geblesseerde spelers door cognitieve training zonder fysieke impact.",
    techStack: ["Unity", "C#", "Meta Quest 3", "Data Visualization"],
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
    ],
    serviceId: "data-analytics",
  },
  {
    id: "vr-machine-training",
    title: "VR Machine Training",
    tagline: "Veilig trainen met complexe machines",
    client: "Industrie Reus",
    description: "Een gedetailleerde VR-simulatie die operators traint in de veilige en efficiënte bediening van complexe industriële machines, inclusief noodprocedures.",
    challenge: "Het trainen van nieuwe operators op echte machines is duur, risicovol en haalt machines uit productie.",
    solution: "Een hyperrealistische VR-tweeling van de machine waarop operators onbeperkt kunnen oefenen, inclusief zeldzame noodscenario's.",
    impact: "30% kortere inwerktijd en 0 incidenten tijdens de eerste werkmaand van nieuwe operators.",
    techStack: ["Unity", "C#", "Meta Quest Pro", "Simulatie"],
    images: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=600&fit=crop",
    ],
    serviceId: "vr-app-dev",
  },
  {
    id: "ecommerce-platform",
    title: "Maatwerk E-commerce",
    tagline: "Schaalbaar platform voor miljoenen bezoekers",
    client: "Retail Brand",
    description: "Ontwikkeling van een schaalbaar e-commerce platform met geavanceerde productbeheerfuncties en een gepersonaliseerde gebruikerservaring.",
    challenge: "Het bestaande platform kon de piekbelasting tijdens sales niet aan en bood te weinig flexibiliteit voor marketingcampagnes.",
    solution: "Een headless e-commerce architectuur met een razendsnelle frontend en een flexibel CMS.",
    impact: "50% snellere laadtijden en een verdubbeling van de conversie op mobiele apparaten.",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe API"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    ],
    serviceId: "ui-ux-design",
  },
  {
    id: "event-app",
    title: "Mobiele Event App",
    tagline: "De ultieme gids voor festivalbezoekers",
    client: "Event Org",
    description: "Een native mobiele applicatie voor evenementen met functies zoals agenda, sprekersinformatie, netwerkmogelijkheden en live polls.",
    challenge: "Bezoekers raakten het overzicht kwijt in het papieren programmaboekje en misten last-minute wijzigingen.",
    solution: "Een interactieve app met real-time pushnotificaties, een persoonlijke agenda en een interactieve plattegrond.",
    impact: "90% downloadgraad onder bezoekers en een hogere waardering voor de event-organisatie.",
    techStack: ["React Native", "TypeScript", "Firebase", "Push Notifications"],
    images: [
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
    ],
    serviceId: "mobile-app-development",
  },
  {
    id: "corporate-website",
    title: "Bedrijfswebsite met CMS",
    tagline: "Modern visitekaartje met eenvoudige content beheer",
    client: "MKB Bedrijf",
    description: "Een responsieve en SEO-vriendelijke bedrijfswebsite, gebouwd met een gebruiksvriendelijk Content Management Systeem voor eenvoudige updates.",
    challenge: "De oude website was traag, niet mobielvriendelijk en moeilijk aan te passen door de marketingafdeling.",
    solution: "Een moderne Next.js website gekoppeld aan een headless CMS voor maximale snelheid en beheergemak.",
    impact: "40% meer organisch verkeer en een professionele uitstraling die past bij de groei van het bedrijf.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    ],
    serviceId: "web-development",
  },
];

// Service Data
export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  relatedProjectId?: string; // New field
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Ontwikkeling van responsieve en krachtige websites en webapplicaties, van marketingwebsites tot complexe SaaS-oplossingen. Ik bouw met moderne frameworks zoals React en Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Frontend", "Backend", "CMS"],
    relatedProjectId: "corporate-website",
  },
  {
    id: "mobile-app-development",
    title: "Mobiele App Ontwikkeling",
    description: "Native en cross-platform mobiele applicaties voor iOS en Android. Ik creëer intuïtieve en performante apps die uw gebruikers zullen waarderen.",
    tags: ["React Native", "iOS", "Android", "UI/UX", "API Integration"],
    relatedProjectId: "event-app",
  },
  {
    id: "vr-app-dev",
    title: "VR-applicatieontwikkeling",
    description: "Ontwikkeling van op maat gemaakte Virtual Reality applicaties voor training, simulatie, visualisatie en entertainment. Van concept tot implementatie, ik breng uw ideeën tot leven in VR.",
    tags: ["Unity", "Meta Quest", "C#", "VR Design"],
    relatedProjectId: "vr-machine-training",
  },
  {
    id: "mr-interfaces",
    title: "Mixed Reality interfaces",
    description: "Creëren van intuïtieve en functionele Mixed Reality interfaces die digitale informatie naadloos integreren met de fysieke wereld. Ideaal voor industriële toepassingen en interactieve ervaringen.",
    tags: ["Unity", "HoloLens", "MR Design", "UX"],
    relatedProjectId: "mr-bim-4d",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Gebruikersgerichte ontwerpen die niet alleen mooi zijn, maar ook functioneel en intuïtief. Ik zorg voor een optimale gebruikerservaring voor al uw digitale producten.",
    tags: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma"],
    relatedProjectId: "ecommerce-platform",
  },
  {
    id: "prototyping",
    title: "Prototyping & conceptontwikkeling",
    description: "Snelle ontwikkeling van prototypes en proof-of-concepts om ideeën te valideren en te visualiseren. Ik help u met het verkennen van de mogelijkheden van digitale innovatie.",
    tags: ["Rapid Prototyping", "Concepting", "Ideation", "Agile"],
    relatedProjectId: "xr-sportanalyse",
  },
  {
    id: "unity-consultancy",
    title: "Unity consultancy / developer-as-a-service",
    description: "Expertise en ondersteuning voor uw Unity-projecten. Huur mijn ervaring in als Unity-ontwikkelaar voor advies, code review, projectmanagement of als tijdelijke uitbreiding van uw team.",
    tags: ["Unity", "C#", "Consultancy", "Development"],
    relatedProjectId: "mr-bim-4d",
  },
  {
    id: "data-analytics",
    title: "Data logging & analyse in XR & Web",
    description: "Implementatie van systemen voor het loggen en analyseren van gebruikersgedrag binnen XR-applicaties en webplatforms. Verkrijg waardevolle inzichten om uw ervaringen te optimaliseren.",
    tags: ["Analytics", "Data Visualization", "User Behavior", "Optimization"],
    relatedProjectId: "xr-sportanalyse",
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
  { name: "Over mij", path: "/#about" },
  { name: "Projecten", path: "/projecten" },
  { name: "Hoe ik werk", path: "/#process" },
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
    title: "Web Development",
    description: "Ik bouw moderne, snelle websites en webapplicaties met React, Next.js en TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Mobiele App Ontwikkeling",
    description: "Ik creëer intuïtieve en performante mobiele apps voor iOS en Android die uw gebruikers zullen boeien.",
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description: "Focus op gebruikersgerichte ontwerpen die niet alleen mooi zijn, maar ook een optimale ervaring bieden.",
  },
  {
    icon: Glasses,
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
    question: "Bouw je ook reguliere websites en apps?",
    answer: "Jazeker! Naast mijn expertise in XR, ontwikkel ik ook maatwerk websites en mobiele applicaties. Van complexe webplatforms tot intuïtieve mobiele apps, ik lever complete digitale oplossingen.",
  },
  {
    question: "Welke technologieën gebruik je voor web- en app-ontwikkeling?",
    answer: "Voor webontwikkeling werk ik voornamelijk met React, Next.js, TypeScript en Node.js. Voor mobiele apps gebruik ik React Native voor cross-platform ontwikkeling, of native technologieën indien nodig.",
  },
  {
    question: "Kun je helpen met conceptontwikkeling als ik nog geen concreet idee heb?",
    answer: "Absoluut! Ik begeleid u graag van de initiële brainstormfase tot een concreet concept en een werkend prototype, om de mogelijkheden van digitale innovatie voor uw specifieke behoeften te verkennen.",
  },
  {
    question: "Hoe lang duurt het om een digitale applicatie te ontwikkelen?",
    answer: "De ontwikkeltijd varieert sterk afhankelijk van de complexiteit en de scope van het project. Na een kennismaking en behoefteanalyse kan ik een realistische tijdsinschatting geven.",
  },
];