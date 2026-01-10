// This file will contain mock data for various sections of the website.

import { LucideIcon, Glasses, Rocket, Lightbulb, Users, TrendingUp, Code, Star, Globe, Smartphone, LayoutDashboard, Cloud, Search, Settings } from "lucide-react";

// Import media assets
import xrImage from "@/assets/media/site/xr.jpeg";
import webappImage from "@/assets/media/site/webapp.jpeg";
import ux1Image from "@/assets/media/site/ux1.jpeg";
import vrEscapeRoomVideo from "@/assets/media/projects/vr-escape-room/vr-escape-room.webm";
import mrBim4dVideo from "@/assets/media/projects/mr-bim-4d/afstudeerzitting.webm";
import mrSporenVideo from "@/assets/media/projects/mr-sporensimulator/sporen-simulator.webm";
import passingPrototypeVideo from "@/assets/media/projects/passing-prototype/passingprototype.webm";
import flutter1 from "@/assets/media/flutter (1).png";
import flutter2 from "@/assets/media/flutter (2).png";
import flutter3 from "@/assets/media/flutter (3).png";
import flutter4 from "@/assets/media/flutter (4).png";
import flutter5 from "@/assets/media/flutter (5).png";
import flutter6 from "@/assets/media/flutter (6).png";

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
    backgroundImage: xrImage,
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Van concept tot lancering, robuuste websites en apps.",
    backgroundImage: webappImage,
  },
  {
    icon: Lightbulb,
    title: "Techniek & UX in Balans",
    description: "Solide techniek gecombineerd met een fijne gebruikservaring.",
    backgroundImage: ux1Image,
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
    id: "digitale-duif-website",
    title: "Digitale Duif – Portfolio Website",
    tagline: "Snelle, video-first portfolio website voor acquisitie",
    client: "Digitale Duif",
    description:
      "Een moderne portfolio website die diensten en projecten helder presenteert. De focus ligt op vertrouwen opbouwen via sterke cases, video-first media en een laagdrempelig contactformulier.",
    challenge:
      "Het combineren van een hoogwaardige uitstraling met snelle performance en goede toegankelijkheid, terwijl projecten en media eenvoudig beheerd moeten kunnen worden vanuit één centrale bron.",
    solution:
      "Ontwikkeld met React, TypeScript en Vite, met Tailwind voor styling en Framer Motion voor subtiele interacties. Projecten worden gevoed vanuit één centrale dataset en ondersteunen zowel beeld als video. Het contactformulier verstuurt e-mails via Web3Forms, met configuratie veilig opgeslagen in environment variables.",
    impact:
      "Een schaalbare en onderhoudsvriendelijke basis voor online acquisitie. Bezoekers krijgen snel inzicht in expertise en resultaten, wat leidt tot meer kwalitatieve contactaanvragen.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Web3Forms"],
    images: [
      "/media/site/webapp.jpeg",
    ],
    serviceId: "web-development",
  },
  {
    id: "limescoop-katwijk",
    title: "Limescoop",
    tagline: "Interactieve tijdreis langs de Romeinse Limes",
    client: "Gemeente Katwijk / Limes-programma",
    description: "Een interactieve, locatiegebonden Virtual Reality ervaring waarmee bezoekers via een virtuele verrekijker terugkijken in de tijd en het Romeinse fort Brittenburg en zijn omgeving ervaren zoals die er circa 2000 jaar geleden uitzag. De Limescoop staat permanent in de openbare ruimte aan de Buitensluis in Katwijk en is gratis toegankelijk.",
    challenge: "Voor mij lag de grootste uitdaging in het werken aan een bestaand Unity-project dat ontwikkeld werd voor mobiele Android-hardware. De applicatie moest real-time 3D content renderen binnen strikte performance- en energiebeperkingen, terwijl de ervaring vloeiend en stabiel moest blijven in een buitenopstelling die 24/7 beschikbaar is.",
    solution: "Ik werkte als student bij VR Learning Lab aan optimalisatiewerkzaamheden en het toevoegen van nieuwe functionaliteiten binnen een bestaand Unity-project. Dit omvatte het optimaliseren van 3D assets, het verbeteren van rendering-prestaties en het aanpassen van interactielogica zodat de ervaring soepel draaide op een Android-based systeem. Hierbij werd voortdurend afgewogen tussen visuele kwaliteit, performance en stabiliteit.",
    impact: "De optimalisaties droegen bij aan een stabiele en toegankelijke ervaring die inmiddels door honderden bezoekers is gebruikt. De Limescoop maakt het Romeinse erfgoed tastbaar in de publieke ruimte en vervangt een statisch informatiebord door een actieve beleving die jong en oud aanspreekt.",
    techStack: ["Unity", "C#", "Android", "Real-time 3D", "Asset optimalisatie"],
    images: [
      "/media/projects/limescoop/Limescoop.webp",
      "/media/projects/limescoop/Limescoop-1024x598.webp",
    ],
    serviceId: "vr-app-dev",
  },
  {
    id: "vr-multiplayer-escaperoom",
    title: "VR Multiplayer Escaperoom",
    tagline: "Samenwerken onder druk in een historische VR-ervaring",
    client: "François Vatel VMBO",
    description: "Een educatieve VR multiplayer escaperoom waarin twee leerlingen gezamenlijk opdrachten uitvoeren in een woning in de Jordaan tijdens de Tweede Wereldoorlog. De ervaring is ontwikkeld voor VMBO-leerlingen en sluit aan op het onderwijsprogramma.",
    challenge: "Het realiseren van een stabiele en begrijpelijke multiplayer VR-ervaring voor VMBO-leerlingen, waarbij samenwerking verplicht is en de applicatie betrouwbaar functioneert in een klaslokaal met beperkte technische ondersteuning.",
    solution: "Een Unity-gebaseerde VR-applicatie voor Oculus Quest 2 met real-time multiplayer via Photon Fusion. Door duidelijke instructies, voice-over begeleiding en gesynchroniseerde interacties kunnen leerlingen zonder VR-ervaring direct aan de slag.",
    impact: "Leerlingen ervaren geschiedenis op een interactieve manier en ontwikkelen samenwerking en communicatievaardigheden binnen een veilige leeromgeving.",
    techStack: ["Unity", "C#", "Oculus Quest 2", "Photon Fusion", "Multiplayer VR", "Educational VR"],
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=800&h=600&fit=crop",
    ],
    videoUrl: vrEscapeRoomVideo,
    serviceId: "vr-app-dev",
  },
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
    ],
    serviceId: "mr-interfaces",
    videoUrl: mrBim4dVideo,
  },
  {
    id: "mr-sporensimulator",
    title: "Mixed Reality Sporensimulator",
    tagline: "Plaats delict opbouwen en onderzoeken in de echte ruimte",
    client: "Hogeschool Leiden (Minor)",
    description: "Een Mixed Reality sporensimulator waarin gebruikers zelf een plaats delict kunnen opbouwen in de fysieke ruimte door sporen te plaatsen. Andere gebruikers kunnen dit scenario vervolgens spelen door sporen te zoeken, te monsteren, correct te verpakken en op te sturen naar het lab.",
    challenge: "Het ontwikkelen van een realistische en herbruikbare MR-ervaring waarin scenario’s kunnen worden opgeslagen en opnieuw afgespeeld, terwijl interacties intuïtief blijven en aansluiten bij forensische werkprocessen.",
    solution: "Een Unity-gebaseerde Mixed Reality applicatie waarin sporen in de ruimte worden geplaatst en persistent opgeslagen. Spelers doorlopen een vast forensisch proces: sporen lokaliseren, veiligstellen, labelen en verzenden, met focus op realistische handelingen en volgorde.",
    impact: "Studenten leren forensische procedures door actief te oefenen in hun eigen omgeving, zonder fysieke materialen of een echte plaats delict nodig te hebben.",
    techStack: ["Unity", "C#", "Mixed Reality", "Spatial Anchors", "Scenario opslag", "Forensic Training"],
    images: [
    ],
    serviceId: "mr-interfaces",
    videoUrl: mrSporenVideo,
  },
  {
    id: "xr-sportanalyse",
    title: "Passing Prototype",
    tagline: "Realistische pass-simulatie voor tactische training",
    client: "Tactive Sport - VV Katwijk",
    description: "Een Unity prototype dat een pass zo realistisch mogelijk simuleert om de immersie te vergroten. De speler loopt door een cirkel (ontvangstmoment) en krijgt de bal precies ingespeeld op basis van zijn snelheid en looprichting.",
    challenge: "Het doel was maximale realisme: een pass voelt pas 'echt' als timing, snelheid en richting kloppen. De uitdaging was om de bal zo te berekenen dat hij betrouwbaar op het juiste moment aankomt, terwijl de speler met verschillende snelheden naar een doelgebied beweegt.",
    solution: "Door wiskundige en natuurkundige principes in Unity toe te passen wordt de benodigde bal-snelheid en -richting dynamisch berekend. Zodra de speler naar het target beweegt, voorspelt het systeem het punt en past het de pass aan op de actuele spelerssnelheid.",
    impact: "Meer immersie door een natuurgetrouwe balbaan en timing, plus consistente en herhaalbare trainingssituaties voor passing en loopacties zonder een fysieke passgever nodig te hebben.",
    techStack: ["Unity", "C#", "Meta Quest 3", "Data Visualization", "Mixed Reality"],
    images: [
    ],
    serviceId: "data-analytics",
    videoUrl: passingPrototypeVideo,
  },
  {
    id: "flutter-todo-app",
    title: "Flutter To-Do App",
    tagline: "Moderne mobile to-do app met focus op snelheid en gebruiksgemak",
    client: "Eigen project",
    description:
      "Een moderne mobiele to-do applicatie waarmee gebruikers taken efficiënt kunnen beheren. De app is ontworpen voor een snelle workflow, met ondersteuning voor subtaken, prioriteiten en inline bewerking.",
    challenge:
      "Het ontwerpen van een intuïtieve en responsieve mobiele interface die complexe takenstructuren ondersteunt zonder de eenvoud en snelheid van interactie te verliezen.",
    solution:
      "Gebouwd met Flutter en Dart, gebruikmakend van Material Design 3. De interface ondersteunt inline bewerking via tap-to-edit, subtaken met afvinkfunctionaliteit en prioriteitsniveaus met duidelijke kleurcodering. Animaties en haptic feedback versterken de gebruikersinteractie.",
    impact:
      "Een schaalbare basis voor productiviteitsapps, waarbij taken snel kunnen worden aangemaakt en beheerd. De combinatie van visuele feedback en animatie zorgt voor een prettige en efficiënte gebruikerservaring.",
    techStack: ["Flutter", "Dart", "Material Design 3"],
    images: [
      flutter1,
      flutter2,
      flutter3,
      flutter4,
      flutter5,
      flutter6,
    ],
    serviceId: "mobile-app-development",
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