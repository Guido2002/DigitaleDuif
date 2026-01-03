import { LucideIcon, Brain, Globe, Smartphone, Rocket, Lightbulb, Users, TrendingUp, Code, Layers, Palette, Zap, Shield, HeartHandshake, Eye, Gamepad2 } from "lucide-react";
import type { CategoryId } from "@/context/CategoryContext";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface HeroContent {
  title: string;
  titleHighlight: string;
  subtitle: string;
  backgroundImages: string[];
}

export interface USPContent {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage?: string;
}

export interface TestimonialContent {
  quote: string;
  author: string;
  title: string;
  avatar?: string;
  rating: number;
  companyLogo?: string;
}

export interface ProcessStepContent {
  icon: LucideIcon;
  title: string;
  description: string[];
}

export interface OfferingContent {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceIndication: string;
  popular?: boolean;
}

export interface FeaturedProjectContent {
  id: string;
  title: string;
  tagline: string;
  client: string;
  techStack: string[];
  image: string;
}

export interface CategoryConfig {
  hero: HeroContent;
  usps: USPContent[];
  testimonials: TestimonialContent[];
  processSteps: ProcessStepContent[];
  offerings: OfferingContent[];
  featuredProjects: FeaturedProjectContent[];
  sectionTitles: {
    whyChooseUs: { title: string; subtitle: string };
    process: { title: string; subtitle: string };
    testimonials: { title: string; subtitle: string };
    offerings: { title: string; subtitle: string };
  };
}

// ============================================
// XR CATEGORY CONFIG
// ============================================

const xrConfig: CategoryConfig = {
  hero: {
    title: "Transformeer jouw bedrijf met",
    titleHighlight: "XR-technologie",
    subtitle: "Wij bouwen immersieve VR, AR en MR ervaringen die trainen, simuleren en inspireren. Van concept tot implementatie, samen met jou.",
    backgroundImages: ["/xr.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: Brain,
      title: "XR Specialisten",
      description: "Jarenlange ervaring met VR, AR en MR projecten in diverse sectoren.",
      backgroundImage: "/xr.jpeg",
    },
    {
      icon: Gamepad2,
      title: "Unity Experts",
      description: "Diepgaande Unity kennis voor complexe simulaties en interactieve ervaringen.",
      backgroundImage: "/ux1.jpeg",
    },
    {
      icon: Eye,
      title: "Immersief Design",
      description: "Ontwerp dat de gebruiker volledig onderdompelt en engageert.",
    },
    {
      icon: Users,
      title: "Co-creatie",
      description: "Samenwerking staat centraal, jouw inspraak in elke fase.",
    },
    {
      icon: TrendingUp,
      title: "Meetbare Impact",
      description: "XR-oplossingen met aantoonbare ROI en resultaten.",
    },
    {
      icon: Shield,
      title: "Veilig Trainen",
      description: "Risicovrije omgevingen voor training en simulatie.",
    },
  ],
  testimonials: [
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
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Tech+Solutions&background=3AA7FF&color=fff&size=80&bold=true&format=svg",
    },
    {
      quote: "De VR-training heeft onze onboarding tijd met 40% verkort. Nieuwe medewerkers zijn sneller productief en voelen zich beter voorbereid.",
      author: "Mark Jansen",
      title: "HR Director, Industrial Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Industrial+Corp&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
  ],
  processSteps: [
    {
      icon: Users,
      title: "XR Discovery",
      description: [
        "Analyse van jouw XR use case en doelstellingen.",
        "Identificeren van de juiste XR-technologie (VR/AR/MR).",
        "Haalbaarheidsonderzoek en technische validatie.",
      ],
    },
    {
      icon: Lightbulb,
      title: "Prototype & PoC",
      description: [
        "Snelle ontwikkeling van een werkend XR prototype.",
        "Gebruikerstesten in de daadwerkelijke omgeving.",
        "Itereren op basis van feedback en inzichten.",
      ],
    },
    {
      icon: Brain,
      title: "XR Development",
      description: [
        "Volledige ontwikkeling in Unity met optimale performance.",
        "Integratie met bestaande systemen en data.",
        "Uitgebreide testing op alle doelplatforms.",
      ],
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: [
        "Uitrol op de gewenste XR-hardware.",
        "Training voor eindgebruikers en beheerders.",
        "Doorlopende ondersteuning en updates.",
      ],
    },
  ],
  offerings: [
    {
      id: "vr-training",
      title: "VR Training Simulatie",
      description: "Volledig immersieve trainingsomgeving voor veilig en effectief leren.",
      features: [
        "Realistische 3D omgevingen",
        "Interactieve scenario's",
        "Voortgangsanalyse & rapportage",
        "Multi-user ondersteuning",
      ],
      priceIndication: "Vanaf €15.000",
      popular: true,
    },
    {
      id: "ar-visualization",
      title: "AR Visualisatie",
      description: "Projecteer digitale content in de echte wereld voor presentaties en onderhoud.",
      features: [
        "3D model visualisatie",
        "Real-time annotaties",
        "iOS & Android support",
        "Cloudless of cloud-based",
      ],
      priceIndication: "Vanaf €8.000",
    },
    {
      id: "mr-solution",
      title: "Mixed Reality Oplossing",
      description: "Het beste van VR en AR gecombineerd voor industriële toepassingen.",
      features: [
        "Ruimtelijke mapping",
        "Hands-free interactie",
        "BIM/CAD integratie",
        "HoloLens & Quest 3",
      ],
      priceIndication: "Vanaf €20.000",
    },
    {
      id: "xr-consultancy",
      title: "XR Consultancy",
      description: "Strategisch advies voor jouw XR-roadmap en technologiekeuzes.",
      features: [
        "Use case assessment",
        "Technologie selectie",
        "ROI analyse",
        "Implementatieplanning",
      ],
      priceIndication: "Vanaf €2.500",
    },
  ],
  featuredProjects: [
    {
      id: "mr-bim-4d",
      title: "Mixed Reality met BIM 4D",
      tagline: "Visualisatie van bouwprojecten in de echte wereld",
      client: "Sweco Nederland",
      techStack: ["Unity", "Quest 3", "BIM 4D"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    },
    {
      id: "xr-sportanalyse",
      title: "XR Sportanalyse",
      tagline: "Next-level training voor profvoetballers",
      client: "FC Topclub",
      techStack: ["Unity", "Meta Quest 3"],
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    },
    {
      id: "vr-machine-training",
      title: "VR Machine Training",
      tagline: "Veilig trainen met complexe machines",
      client: "Industrie Reus",
      techStack: ["Unity", "Meta Quest Pro"],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif voor XR?",
      subtitle: "Wij zijn geen standaard ontwikkelbureau. XR zit in ons DNA. We combineren technische expertise met creatief denken om XR-ervaringen te bouwen die écht impact maken.",
    },
    process: {
      title: "Hoe we jouw XR-project aanpakken",
      subtitle: "Van eerste idee tot succesvolle implementatie: onze bewezen aanpak voor XR-projecten zorgt voor resultaat.",
    },
    testimonials: {
      title: "Wat onze XR-klanten zeggen",
      subtitle: "Bedrijven die met ons XR-projecten hebben gerealiseerd delen hun ervaringen.",
    },
    offerings: {
      title: "Onze XR-diensten",
      subtitle: "Van training tot visualisatie, wij bieden complete XR-oplossingen die aansluiten bij jouw doelen.",
    },
  },
};

// ============================================
// WEBSITES CATEGORY CONFIG
// ============================================

const websitesConfig: CategoryConfig = {
  hero: {
    title: "Jouw digitale visitekaartje,",
    titleHighlight: "professioneel gebouwd",
    subtitle: "Wij bouwen snelle, schaalbare websites en webapplicaties die converteren. Van startup landing page tot enterprise platform.",
    backgroundImages: ["/webapp.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: Globe,
      title: "Full-stack Expertise",
      description: "Van frontend tot backend, wij beheersen de volledige stack.",
      backgroundImage: "/webapp.jpeg",
    },
    {
      icon: Zap,
      title: "Razendsnelle Performance",
      description: "Geoptimaliseerde websites die scoren op Core Web Vitals.",
      backgroundImage: "/ux1.jpeg",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Strakke, gebruiksvriendelijke interfaces die converteren.",
    },
    {
      icon: Code,
      title: "Schone Code",
      description: "Onderhoudbare, schaalbare codebase voor de lange termijn.",
    },
    {
      icon: TrendingUp,
      title: "SEO-ready",
      description: "Technisch geoptimaliseerd voor zoekmachines vanaf dag één.",
    },
    {
      icon: HeartHandshake,
      title: "Persoonlijke Service",
      description: "Directe lijnen, geen gedoe met account managers.",
    },
  ],
  testimonials: [
    {
      quote: "Onze nieuwe website laadt 3x sneller en we zien 50% meer conversies. DigitaleDuif begrijpt wat werkt op het web.",
      author: "Lisa Vermeer",
      title: "Marketing Manager, Retail Brand",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Retail+Brand&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
    {
      quote: "Eindelijk een website die we zelf kunnen beheren zonder technische kennis. Het CMS is erg intuïtief.",
      author: "Peter van Dijk",
      title: "Eigenaar, MKB Dienstverlening",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=MKB&background=3AA7FF&color=fff&size=80&bold=true&format=svg",
    },
    {
      quote: "Het development team denkt écht mee. Ze kwamen met suggesties die we zelf nooit hadden bedacht.",
      author: "Emma de Groot",
      title: "Product Owner, SaaS Startup",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=SaaS+Startup&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
  ],
  processSteps: [
    {
      icon: Users,
      title: "Strategie & Planning",
      description: [
        "Diepgaand gesprek over jouw doelen en doelgroep.",
        "Analyse van concurrenten en marktpositie.",
        "Sitemap en functionele specificaties opstellen.",
      ],
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: [
        "Wireframes en interactieve mockups.",
        "Visueel ontwerp in jouw huisstijl.",
        "Feedbackrondes tot het ontwerp perfect is.",
      ],
    },
    {
      icon: Code,
      title: "Development",
      description: [
        "Bouwen met moderne technologieën (React, Next.js).",
        "Responsive design voor alle apparaten.",
        "CMS integratie voor eenvoudig beheer.",
      ],
    },
    {
      icon: Rocket,
      title: "Lancering & Groei",
      description: [
        "Grondige testing en optimalisatie.",
        "SEO-setup en analytics integratie.",
        "Training en doorlopende ondersteuning.",
      ],
    },
  ],
  offerings: [
    {
      id: "business-website",
      title: "Bedrijfswebsite",
      description: "Professionele online aanwezigheid voor jouw bedrijf.",
      features: [
        "5-10 pagina's",
        "Responsive design",
        "CMS voor zelfbeheer",
        "Contact formulieren",
        "SEO basis",
      ],
      priceIndication: "Vanaf €3.500",
      popular: true,
    },
    {
      id: "webshop",
      title: "Webshop / E-commerce",
      description: "Verkoop online met een geoptimaliseerde webwinkel.",
      features: [
        "Productcatalogus",
        "Winkelwagen & checkout",
        "Betaalintegraties",
        "Voorraad- en orderbeheer",
        "Klantaccounts",
      ],
      priceIndication: "Vanaf €8.000",
    },
    {
      id: "web-application",
      title: "Webapplicatie",
      description: "Maatwerk software oplossing in de browser.",
      features: [
        "Custom functionaliteit",
        "Gebruikersauthenticatie",
        "API koppelingen",
        "Dashboard & rapportages",
        "Schaalbare architectuur",
      ],
      priceIndication: "Vanaf €15.000",
    },
    {
      id: "landing-page",
      title: "Landing Page",
      description: "Conversie-geoptimaliseerde pagina voor campagnes.",
      features: [
        "Eén doel, maximale focus",
        "A/B test ready",
        "Snelle oplevering",
        "Analytics tracking",
      ],
      priceIndication: "Vanaf €1.500",
    },
  ],
  featuredProjects: [
    {
      id: "ecommerce-platform",
      title: "Maatwerk E-commerce",
      tagline: "Schaalbaar platform voor miljoenen bezoekers",
      client: "Retail Brand",
      techStack: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      id: "corporate-website",
      title: "Bedrijfswebsite met CMS",
      tagline: "Modern visitekaartje met eenvoudig beheer",
      client: "MKB Bedrijf",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      tagline: "Data-driven beslissingen in één overzicht",
      client: "Tech Startup",
      techStack: ["React", "TypeScript", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif voor jouw website?",
      subtitle: "Wij bouwen geen templates, wij bouwen oplossingen. Elke website is maatwerk, geoptimaliseerd voor jouw specifieke doelen.",
    },
    process: {
      title: "Van idee naar live website",
      subtitle: "Onze bewezen aanpak zorgt voor een website die niet alleen mooi is, maar ook presteert.",
    },
    testimonials: {
      title: "Tevreden website-klanten",
      subtitle: "Ontdek waarom bedrijven kiezen voor DigitaleDuif voor hun online aanwezigheid.",
    },
    offerings: {
      title: "Website pakketten",
      subtitle: "Van eenvoudige bedrijfssite tot complexe webapplicatie, wij hebben een passende oplossing.",
    },
  },
};

// ============================================
// MOBILE APPS CATEGORY CONFIG
// ============================================

const mobileAppsConfig: CategoryConfig = {
  hero: {
    title: "Jouw idee, altijd binnen",
    titleHighlight: "handbereik",
    subtitle: "Wij ontwikkelen native en cross-platform mobiele apps die gebruikers willen blijven gebruiken. Van concept tot App Store.",
    backgroundImages: ["/webapp.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Native performance op beide platformen met één codebase.",
      backgroundImage: "/webapp.jpeg",
    },
    {
      icon: Zap,
      title: "React Native Experts",
      description: "Snelle ontwikkeling zonder in te leveren op kwaliteit.",
      backgroundImage: "/ux1.jpeg",
    },
    {
      icon: Palette,
      title: "App Store Ready",
      description: "We begeleiden je door het volledige publicatieproces.",
    },
    {
      icon: Layers,
      title: "Offline First",
      description: "Apps die werken, ook zonder internetverbinding.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Push",
      description: "Ingebouwde tracking en pushnotificaties voor engagement.",
    },
    {
      icon: HeartHandshake,
      title: "Lange Termijn Partner",
      description: "Onderhoud en doorontwikkeling na lancering.",
    },
  ],
  testimonials: [
    {
      quote: "Onze event app had binnen 2 weken 90% downloadgraad onder bezoekers. De pushnotificaties waren een game-changer.",
      author: "Thomas Visser",
      title: "Event Manager, Festival Org",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Festival+Org&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
    {
      quote: "De app werkt vlekkeloos op zowel iPhone als Android. Onze klanten zijn enthousiast over de gebruikservaring.",
      author: "Anna Smit",
      title: "CEO, Service Platform",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Service+Platform&background=3AA7FF&color=fff&size=80&bold=true&format=svg",
    },
    {
      quote: "Van eerste schets tot publicatie in de App Store: DigitaleDuif heeft ons door het hele traject begeleid.",
      author: "Rick de Jong",
      title: "Founder, Fitness App",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=Fitness+App&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
  ],
  processSteps: [
    {
      icon: Users,
      title: "Discovery & Concept",
      description: [
        "User research en doelgroep analyse.",
        "Feature prioritering en MVP definitie.",
        "Technische haalbaarheid en platformkeuze.",
      ],
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: [
        "Wireframes en user flows.",
        "High-fidelity mockups volgens platform guidelines.",
        "Interactieve prototype voor validatie.",
      ],
    },
    {
      icon: Code,
      title: "App Development",
      description: [
        "Agile development in 2-wekelijkse sprints.",
        "Regelmatige builds voor feedback.",
        "Backend en API development indien nodig.",
      ],
    },
    {
      icon: Rocket,
      title: "Launch & Iterate",
      description: [
        "App Store & Play Store submission.",
        "Marketing asset ondersteuning.",
        "Post-launch monitoring en updates.",
      ],
    },
  ],
  offerings: [
    {
      id: "mvp-app",
      title: "MVP App",
      description: "Valideer je idee met een Minimum Viable Product.",
      features: [
        "Kernfunctionaliteit",
        "Eén platform (iOS of Android)",
        "Basis UI/UX",
        "Snelle marktintroductie",
      ],
      priceIndication: "Vanaf €12.000",
    },
    {
      id: "cross-platform-app",
      title: "Cross-platform App",
      description: "Eén app voor iOS én Android met React Native.",
      features: [
        "Native performance",
        "Gedeelde codebase (80%+)",
        "Push notificaties",
        "Offline functionaliteit",
      ],
      priceIndication: "Vanaf €20.000",
      popular: true,
    },
    {
      id: "enterprise-app",
      title: "Enterprise App",
      description: "Maatwerk app voor interne bedrijfsprocessen.",
      features: [
        "SSO & security",
        "Systeem integraties",
        "Admin dashboard",
        "Schaalbare architectuur",
      ],
      priceIndication: "Vanaf €35.000",
    },
    {
      id: "app-maintenance",
      title: "App Onderhoud",
      description: "Houd je app up-to-date en veilig.",
      features: [
        "OS updates compatibiliteit",
        "Bug fixes",
        "Performance monitoring",
        "Kleine feature updates",
      ],
      priceIndication: "Vanaf €500/maand",
    },
  ],
  featuredProjects: [
    {
      id: "event-app",
      title: "Mobiele Event App",
      tagline: "De ultieme gids voor festivalbezoekers",
      client: "Event Org",
      techStack: ["React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker App",
      tagline: "Persoonlijke training in je broekzak",
      client: "FitLife",
      techStack: ["React Native", "HealthKit"],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
    {
      id: "delivery-app",
      title: "Bezorg Platform",
      tagline: "Van bestelling tot levering in één app",
      client: "Local Delivery",
      techStack: ["React Native", "Maps API"],
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif voor jouw app?",
      subtitle: "App development is meer dan code schrijven. Wij denken mee over UX, techniek én business model.",
    },
    process: {
      title: "Van idee naar App Store",
      subtitle: "Onze aanpak voor mobiele apps combineert snelheid met kwaliteit.",
    },
    testimonials: {
      title: "Succesvolle app-lanceringen",
      subtitle: "Onze klanten vertellen over hun ervaring met app development bij DigitaleDuif.",
    },
    offerings: {
      title: "App development pakketten",
      subtitle: "Van MVP tot enterprise oplossing, wij bouwen apps die gebruikers waarderen.",
    },
  },
};

// ============================================
// CATEGORY CONFIG MAP
// ============================================

export const categoryConfigs: Record<CategoryId, CategoryConfig> = {
  xr: xrConfig,
  websites: websitesConfig,
  "mobile-apps": mobileAppsConfig,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getCategoryConfig = (categoryId: CategoryId): CategoryConfig => {
  return categoryConfigs[categoryId];
};

export const getHeroContent = (categoryId: CategoryId): HeroContent => {
  return categoryConfigs[categoryId].hero;
};

export const getUSPs = (categoryId: CategoryId): USPContent[] => {
  return categoryConfigs[categoryId].usps;
};

export const getTestimonials = (categoryId: CategoryId): TestimonialContent[] => {
  return categoryConfigs[categoryId].testimonials;
};

export const getProcessSteps = (categoryId: CategoryId): ProcessStepContent[] => {
  return categoryConfigs[categoryId].processSteps;
};

export const getOfferings = (categoryId: CategoryId): OfferingContent[] => {
  return categoryConfigs[categoryId].offerings;
};

export const getFeaturedProjects = (categoryId: CategoryId): FeaturedProjectContent[] => {
  return categoryConfigs[categoryId].featuredProjects;
};

export const getSectionTitles = (categoryId: CategoryId) => {
  return categoryConfigs[categoryId].sectionTitles;
};

// Default content for when no category is selected (uses general/mixed content)
export const defaultConfig: CategoryConfig = {
  hero: {
    title: "DigitaleDuif: We geven jouw",
    titleHighlight: "idee vleugels",
    subtitle: "Wij bouwen VR, MR, websites en apps die écht werken. Van idee tot lancering, samen met jou.",
    backgroundImages: ["/xr.jpeg", "/webapp.jpeg", "/ux1.jpeg"],
  },
  usps: xrConfig.usps, // Use XR as default since it was original
  testimonials: xrConfig.testimonials,
  processSteps: xrConfig.processSteps,
  offerings: [],
  featuredProjects: [
    ...xrConfig.featuredProjects.slice(0, 1),
    ...websitesConfig.featuredProjects.slice(0, 1),
    ...mobileAppsConfig.featuredProjects.slice(0, 1),
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif?",
      subtitle: "Je kunt kiezen uit tientallen digitale bureaus. Waarom zou je met ons in zee gaan? Simpel: wij kijken verder dan de technologie.",
    },
    process: {
      title: "Hoe werkt DigitaleDuif?",
      subtitle: "Bij Digitale Duif vliegen we volgens een aanpak die werkt. Hieronder zie je hoe wij jouw idee stap voor stap laten landen.",
    },
    testimonials: {
      title: "Wat onze klanten zeggen",
      subtitle: "Mooie verhalen vertellen over onszelf? Dat kunnen we. Maar we laten liever anderen aan het woord.",
    },
    offerings: {
      title: "Onze diensten",
      subtitle: "Van XR tot web tot mobiel, wij bieden complete digitale oplossingen.",
    },
  },
};
