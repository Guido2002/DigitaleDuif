import { LucideIcon, Glasses, Smartphone, Rocket, Lightbulb, Users, Code, Layers, Palette, Zap, Target, HeartHandshake, Eye, Gamepad2, Search, MessageCircle, Sparkles, PenTool } from "lucide-react";
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
  linkedinUrl?: string;
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

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryConfig {
  hero: HeroContent;
  usps: USPContent[];
  testimonials: TestimonialContent[];
  processSteps: ProcessStepContent[];
  offerings: OfferingContent[];
  featuredProjects: FeaturedProjectContent[];
  faqItems: FAQItem[];
  sectionTitles: {
    whyChooseUs: { title: string; subtitle: string };
    process: { title: string; subtitle: string };
    testimonials: { title: string; subtitle: string };
    offerings: { title: string; subtitle: string };
    faq: { title: string; subtitle: string };
  };
}

// ============================================
// XR CATEGORY CONFIG
// ============================================

const xrConfig: CategoryConfig = {
  hero: {
    title: "Transformeer jouw bedrijf met",
    titleHighlight: "XR-technologie",
    subtitle: "Ik bouw immersieve VR, AR en MR ervaringen die trainen, simuleren en inspireren. Van concept tot implementatie, samen met jou.",
    backgroundImages: ["/xr.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: Glasses,
      title: "XR Specialist",
      description: "Jarenlange ervaring met VR, AR en MR projecten in diverse sectoren.",
      backgroundImage: "/xr.jpeg",
    },
    {
      icon: Gamepad2,
      title: "Unity Expert",
      description: "Diepgaande Unity kennis voor complexe simulaties en interactieve ervaringen.",
      backgroundImage: "/unity-modified.jpg",
    },
    {
      icon: Eye,
      title: "Immersief Design",
      description: "Ontwerp dat de gebruiker volledig onderdompelt en engageert.",
      backgroundImage: "/ux1.jpeg",
    },
    {
      icon: Users,
      title: "Co-creatie",
      description: "Samenwerking staat centraal, jouw inspraak in elke fase.",
    },
    {
      icon: Layers,
      title: "Interactieve Visualisatie",
      description: "Complexe data en processen direct begrijpelijk gemaakt in 3D.",
    },
    {
      icon: Target,
      title: "Prototyping & PoC",
      description: "Snelle XR-prototypes om ideeën en use-cases te valideren.",
    },
  ],
  testimonials: [
    {
      quote: "Voor een ombouwproject heeft Guido ons uitstekend geholpen met het vervaardigen van een mixed reality applicatie. De applicatie had als doel om inzicht te krijgen in het bouwterrein en de daarbij horende vervoersbewegingen. Tevens hebben we hiermee nieuwe manieren ontdekt om ontwerp op locatie te kunnen beoordelen. De samenwerking was erg fijn.",
      author: "Wouter van Hulst",
      title: "Werktuigbouwkundig Ingenieur Watertechniek, Sweco Nederland",
      avatar: "woutervanhulst.jpg",
      rating: 5,
      companyLogo: "sweco_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/wouter-van-hulst-6a3254100/",
    },
    {
      quote: "Tijdens zijn afstudeerstage in ons team heeft Guido laten zien hoe krachtig AR/VR kan zijn voor het ontwerpen en realiseren van drinkwaterzuiveringen, door complexe installaties en bouwfases op ware schaal inzichtelijk te maken. Met zijn aanstekelijke enthousiasme wist hij ons moeiteloos mee te nemen in deze wereld, zonder technische drempels op te werpen. Guido combineert creativiteit met oprechte betrokkenheid en werkt sterk samen, waarbij hij actief zoekt naar input uit de praktijk. Dat maakt hem niet alleen prettig om mee te werken, maar ook iemand die oplossingen ontwikkelt die écht aansluiten bij de gebruiker.",
      author: "Marc de Graaf",
      title: "Werktuigbouwkundig Ingenieur Watertechniek, Sweco Nederland",
      avatar: "marcdegraaf.jpg",
      rating: 5,
      companyLogo: "sweco_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/marc-de-graaf-23246a144/",
    },
    {
      quote: "Guido was tijdens zijn stageperiode opvallend nieuwsgierig, leergierig en deed alles met een aanstekelijke glimlach. Tijdens zijn praktische experiment viel het mij vooral op dat hij kritisch was op zijn eigen concept en perfectionistisch nadacht over zijn eigen einddoel. Al met al een fijne periode.",
      author: "Quinten Mollema",
      title: "Projectleider, Sweco Nederland",
      avatar: "quintenmollema.jpg",
      rating: 5,
      companyLogo: "sweco_logo.png",
      linkedinUrl: "https://www.linkedin.com/in/quinten-mollema-78b20495/",
    },
  ],
  processSteps: [
    {
      icon: Search,
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
      icon: Glasses,
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
  faqItems: [
    {
      question: "Wat is het verschil tussen VR, AR en MR?",
      answer: "Virtual Reality (VR) plaatst je volledig in een digitale wereld via een headset. Augmented Reality (AR) projecteert digitale elementen over de echte wereld (denk aan Pokémon GO). Mixed Reality (MR) combineert beide: digitale objecten interageren met je fysieke omgeving en blijven op hun plek staan.",
    },
    {
      question: "Welke VR/AR hardware gebruik je voor projecten?",
      answer: "Ik werk voornamelijk met Meta Quest 2, Quest 3 en Quest Pro voor standalone VR/MR. Voor enterprise toepassingen gebruik ik ook HoloLens 2. De hardware keuze hangt af van jouw use case, budget en of de applicatie standalone of PC-gebonden moet zijn.",
    },
    {
      question: "Hoe lang duurt het ontwikkelen van een VR-applicatie?",
      answer: "Een eenvoudig VR prototype kan in 4-6 weken. Een volledige VR-training of simulatie duurt meestal 3-6 maanden, afhankelijk van complexiteit, interacties en integraties. Na een kennismaking geef ik een realistische tijdsinschatting.",
    },
    {
      question: "Kan een XR-applicatie geïntegreerd worden met bestaande systemen?",
      answer: "Ja, ik bouw XR-applicaties die koppelen met bestaande systemen zoals ERP, LMS (leerplatformen), BIM-software of eigen databases. Denk aan VR-training die voortgang wegschrijft naar jullie LMS, of een AR-app die live data uit jullie ERP toont.",
    },
    {
      question: "Is VR geschikt voor training binnen mijn organisatie?",
      answer: "VR-training is bijzonder effectief voor situaties die in het echt gevaarlijk, duur of moeilijk te oefenen zijn. Denk aan machine-bediening, noodprocedures, soft skills of medische handelingen. Medewerkers leren door te doen in een veilige omgeving.",
    },
    {
      question: "Wat kost een XR-project gemiddeld?",
      answer: "XR-projecten variëren sterk: een AR-visualisatie start rond €8.000, VR-trainingen vanaf €15.000 en complexe MR-oplossingen vanaf €20.000. De prijs hangt af van 3D-assets, interacties, platformen en integraties. Ik denk graag mee over een MVP-aanpak om binnen budget te starten.",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif voor XR?",
      subtitle: "Ik ben geen standaard ontwikkelaar. XR zit in mijn DNA. Ik combineer technische expertise met creatief denken om XR-ervaringen te bouwen die écht impact maken.",
    },
    process: {
      title: "Hoe ik jouw XR-project aanpak",
      subtitle: "Van eerste idee tot succesvolle implementatie: mijn bewezen aanpak voor XR-projecten zorgt voor resultaat.",
    },
    testimonials: {
      title: "Wat mijn XR-klanten zeggen",
      subtitle: "Bedrijven waarmee ik XR-projecten heb gerealiseerd delen hun ervaringen.",
    },
    offerings: {
      title: "Mijn XR-diensten",
      subtitle: "Van training tot visualisatie, ik bied complete XR-oplossingen die aansluiten bij jouw doelen.",
    },
    faq: {
      title: "Veelgestelde vragen over XR",
      subtitle: "Alles wat je wilt weten over Virtual Reality, Augmented Reality en Mixed Reality projecten.",
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
    subtitle: "Ik bouw snelle, schaalbare websites en webapplicaties die converteren. Van startup landing page tot enterprise platform.",
    backgroundImages: ["/webapp.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: PenTool,
      title: "Strategie & UX Design",
      description: "Ik ontwerp websites met een logische structuur en sterke gebruikerservaring die bezoekers gericht naar actie leiden.",
      backgroundImage: "/webapp.jpeg",
    },
    {
      icon: Zap,
      title: "Techniek & Performance",
      description: "Ik bouw snelle, veilige en toekomstbestendige websites die op elk apparaat optimaal presteren.",
      backgroundImage: "/website_performance.png",
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Ik vertaal jouw merk naar een modern, consistent en visueel aantrekkelijk webdesign.",
      backgroundImage: "/ux1.jpeg"
    },
    {
      icon: Code,
      title: "Schone Code",
      description: "Onderhoudbare, schaalbare codebase voor de lange termijn.",
    },
    {
      icon: Search,
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
      quote: "Guido denkt écht mee. Hij kwam met suggesties die we zelf nooit hadden bedacht.",
      author: "Emma de Groot",
      title: "Product Owner, SaaS Startup",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://ui-avatars.com/api/?name=SaaS+Startup&background=0074FF&color=fff&size=80&bold=true&format=svg",
    },
  ],
  processSteps: [
    {
      icon: Search,
      title: "Strategie & Planning",
      description: [
        "Diepgaand gesprek over jouw doelen en doelgroep.",
        "Analyse van concurrenten en marktpositie.",
        "Sitemap en functionele specificaties opstellen.",
      ],
    },
    {
      icon: PenTool,
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
  faqItems: [
    {
      question: "Welke technologieën gebruik je voor websites?",
      answer: "Ik werk voornamelijk met React en Next.js voor de frontend, gecombineerd met TypeScript voor betrouwbare code. Voor styling gebruik ik Tailwind CSS. Voor eenvoudige backend-functionaliteit werk ik met Node.js en databases zoals PostgreSQL of MongoDB.",
    },
    {
      question: "Kan ik de website zelf beheren na oplevering?",
      answer: "Absoluut! Ik koppel een gebruiksvriendelijk CMS (Content Management System) aan je website. Hiermee kun je zelf teksten, afbeeldingen en pagina's aanpassen zonder technische kennis. Ik geef ook een korte training bij oplevering.",
    },
    {
      question: "Hoe zit het met SEO en vindbaarheid?",
      answer: "SEO zit standaard ingebakken in elke website die ik bouw. Dit betekent: snelle laadtijden, correcte HTML-structuur, meta-tags, sitemap en schema markup. Voor uitgebreide SEO-strategieën werk ik samen met gespecialiseerde partners.",
    },
    {
      question: "Wat als mijn website veel bezoekers moet aankunnen?",
      answer: "Ik bouw schaalbare architectuur die meegroeit met je succes. Door moderne technieken zoals edge caching, CDN's en serverless functies kan je website duizenden gelijktijdige bezoekers aan zonder problemen.",
    },
    {
      question: "Bied je ook onderhoud en hosting aan?",
      answer: "Ja, ik bied onderhoudscontracten aan voor updates, security patches en kleine aanpassingen. Voor hosting adviseer ik platforms zoals Vercel of Netlify die snel, veilig en betaalbaar zijn. Ik kan dit volledig voor je regelen.",
    },
    {
      question: "Hoe lang duurt het bouwen van een website?",
      answer: "Een eenvoudige bedrijfswebsite is in 3-4 weken live. Een webshop of complexere applicatie duurt 6-12 weken. Na onze kennismaking geef ik een concrete planning met tussentijdse opleveringen zodat je de voortgang kunt volgen.",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif voor jouw website?",
      subtitle: "Ik bouw geen templates, ik bouw oplossingen. Elke website is maatwerk, geoptimaliseerd voor jouw specifieke doelen.",
    },
    process: {
      title: "Van idee naar live website",
      subtitle: "Mijn bewezen aanpak zorgt voor een website die niet alleen mooi is, maar ook presteert.",
    },
    testimonials: {
      title: "Tevreden website-klanten",
      subtitle: "Ontdek waarom bedrijven kiezen voor DigitaleDuif voor hun online aanwezigheid.",
    },
    offerings: {
      title: "Website pakketten",
      subtitle: "Van eenvoudige bedrijfssite tot complexe webapplicatie, ik heb een passende oplossing.",
    },
    faq: {
      title: "Veelgestelde vragen over websites",
      subtitle: "Antwoorden op de meest gestelde vragen over webontwikkeling en wat je kunt verwachten.",
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
    subtitle: "Ik ontwikkel mobiele apps in Flutter voor MVP's, prototypes en compacte producties. Focus op UX, performance en een duidelijke scope.",
    backgroundImages: ["/webapp.jpeg", "/ux1.jpeg"],
  },
  usps: [
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Eén codebase voor beide platformen met Flutter. Kostenefficiënt en snel naar de markt.",
      backgroundImage: "/webapp.jpeg",
    },
    {
      icon: PenTool,
      title: "UX & Interactieontwerp",
      description: "Sterke focus op gebruiksvriendelijkheid, intuïtieve flows en een fijne gebruikservaring.",
      backgroundImage: "/ux1.jpeg",
    },
    {
      icon: Rocket,
      title: "App Store Ready",
      description: "Volledige begeleiding bij publicatie in de App Store en Play Store.",
      backgroundImage: "/appstore-modified.jpg",
    },
    {
      icon: Target,
      title: "Bewust Compact",
      description: "Heldere scope en duidelijke afspraken over functionaliteit. Geen feature creep.",
    },
    {
      icon: Sparkles,
      title: "Snel Valideren",
      description: "Ideaal voor het testen van ideeën en verzamelen van gebruikersfeedback.",
    },
    {
      icon: MessageCircle,
      title: "Transparant Traject",
      description: "Duidelijke communicatie over wat ik lever en wat binnen mijn expertise valt.",
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
      icon: Search,
      title: "Discovery & Concept",
      description: [
        "User research en doelgroep analyse.",
        "Feature prioritering en MVP definitie.",
        "Technische haalbaarheid en platformkeuze.",
      ],
    },
    {
      icon: PenTool,
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
        "Koppeling met bestaande API's indien nodig.",
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
      title: "MVP / Prototype App",
      description: "Valideer je idee snel met een werkende app. Ideaal voor startups en nieuwe concepten.",
      features: [
        "Kernfunctionaliteit gefocust",
        "iOS én Android (Flutter)",
        "Gebruiksvriendelijk design",
        "Snel naar de markt",
      ],
      priceIndication: "Vanaf €10.000",
      popular: true,
    },
    {
      id: "compact-app",
      title: "Compacte Productie-app",
      description: "Functionele app voor MKB en organisaties. Bewust compact, zonder onnodige complexiteit.",
      features: [
        "Duidelijke scope",
        "Content-gedreven of interne tool",
        "Push notificaties",
        "Basis analytics",
      ],
      priceIndication: "Vanaf €15.000",
    },
    {
      id: "app-consult",
      title: "App Advies & Concept",
      description: "Weet je nog niet zeker of een app de juiste oplossing is? Ik help je met een helder advies.",
      features: [
        "Haalbaarheidsanalyse",
        "Concept & wireframes",
        "Technisch advies",
        "Kosteninschatting",
      ],
      priceIndication: "Vanaf €500",
    },
    {
      id: "app-maintenance",
      title: "App Onderhoud",
      description: "Houd je app up-to-date en compatible met nieuwe OS-versies.",
      features: [
        "iOS/Android updates",
        "Bug fixes",
        "Kleine aanpassingen",
        "Performance monitoring",
      ],
      priceIndication: "Vanaf €400/maand",
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
  faqItems: [
    {
      question: "Voor welk type apps is dit geschikt?",
      answer: "Mijn app development is ideaal voor MVP's, proof-of-concepts, interne tools, content-gedreven apps en apps zonder zware backend-logica. Denk aan event apps, informatieve apps, eenvoudige bestel-apps of tools voor in het veld. Minder geschikt voor grote enterprise-apps of zeer complexe real-time systemen.",
    },
    {
      question: "Waarom Flutter en niet native development?",
      answer: "Flutter biedt één codebase voor iOS én Android, wat kostenefficiënt is en de ontwikkeltijd verkort. De performance is uitstekend voor de meeste use cases. Voor apps waar maximale platform-specifieke integratie nodig is, adviseer ik transparant over de beste aanpak.",
    },
    {
      question: "Wat als mijn app complexe backend-logica nodig heeft?",
      answer: "Apps met zware server-architectuur of complexe real-time systemen vallen buiten mijn scope. Ik richt me op frontend en apps met eenvoudige backend-behoeften. Voor complexere projecten verwijs ik je graag door naar gespecialiseerde partijen.",
    },
    {
      question: "Wat is een MVP en waarom zou ik daarmee starten?",
      answer: "Een MVP (Minimum Viable Product) is een eerste versie met alleen de kernfunctionaliteit. Hiermee valideer je snel of je idee aanslaat bij gebruikers, voordat je investeert in uitgebreide features. Dit bespaart tijd, geld en risico.",
    },
    {
      question: "Hoe verloopt het publiceren in de App Stores?",
      answer: "Ik begeleid je volledig: van developer accounts aanmaken tot screenshots, beschrijvingen en de daadwerkelijke submission. Apple's review duurt 1-3 dagen, Google vaak binnen 24 uur. Na publicatie help ik met de eerste updates.",
    },
    {
      question: "Wat gebeurt er na de lancering?",
      answer: "Apps vereisen onderhoud: OS-updates, security patches en bug fixes. Ik bied onderhoudscontracten voor continuïteit. Ook help ik met het analyseren van gebruikersfeedback om de app door te ontwikkelen op basis van echte data.",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Praktijkgerichte app development",
      subtitle: "Sterke focus op UX, interactieontwerp en een solide technische basis. Duidelijke scope, heldere afspraken.",
    },
    process: {
      title: "Van idee naar App Store",
      subtitle: "Een hands-on aanpak die snelheid combineert met kwaliteit en duidelijke communicatie.",
    },
    testimonials: {
      title: "Succesvolle app-lanceringen",
      subtitle: "Klanten vertellen over hun ervaring met app development bij DigitaleDuif.",
    },
    offerings: {
      title: "App development pakketten",
      subtitle: "Van MVP tot compacte productie-app. Voor complexere projecten werk ik samen met specialisten.",
    },
    faq: {
      title: "Veelgestelde vragen over apps",
      subtitle: "Eerlijke antwoorden over wat ik lever, voor wie het geschikt is, en hoe het traject eruitziet.",
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
    title: "DigitaleDuif: Ik geef jouw",
    titleHighlight: "idee vleugels",
    subtitle: "Ik bouw VR, MR, websites en apps die écht werken. Van idee tot lancering, samen met jou.",
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
  faqItems: [
    {
      question: "Wat voor projecten kan ik bij DigitaleDuif laten maken?",
      answer: "Ik specialiseer me in drie gebieden: XR (Virtual Reality, Augmented Reality, Mixed Reality), websites & webapplicaties, en mobiele apps. Van VR-trainingen tot e-commerce platforms tot iOS/Android apps - ik help je van idee tot lancering.",
    },
    {
      question: "Werk je alleen of heb je een team?",
      answer: "Ik werk als zelfstandige, wat betekent dat je altijd direct contact hebt met degene die jouw project bouwt. Voor grotere projecten werk ik samen met een netwerk van betrouwbare specialisten op het gebied van design, 3D-modeling of specifieke technologieën.",
    },
    {
      question: "Hoe ziet een typisch traject eruit?",
      answer: "Elk project start met een vrijblijvende kennismaking waarin we jouw idee en doelen bespreken. Daarna volgt een voorstel met aanpak, planning en kosten. Na akkoord werken we in korte iteraties, met regelmatige updates en feedbackmomenten tot aan de oplevering.",
    },
    {
      question: "Kun je ook helpen als ik nog geen concreet idee heb?",
      answer: "Absoluut! Ik help graag bij het verkennen van mogelijkheden en het concretiseren van vage ideeën. Via een discovery sessie brengen we samen in kaart wat de beste digitale oplossing is voor jouw uitdaging of kans.",
    },
    {
      question: "Wat kost een project gemiddeld?",
      answer: "Dat hangt sterk af van het type project. Een eenvoudige website start rond €3.500, een mobiele app rond €12.000, en XR-projecten vanaf €8.000. Ik denk graag mee over een gefaseerde aanpak die past bij jouw budget.",
    },
    {
      question: "Waar ben je gevestigd en werk je ook remote?",
      answer: "Ik ben gevestigd in Nederland en werk zowel op locatie als volledig remote. Kennismakingen doe ik graag persoonlijk of via videocall. Tijdens het project communiceren we via de kanalen die voor jou het beste werken.",
    },
  ],
  sectionTitles: {
    whyChooseUs: {
      title: "Waarom DigitaleDuif?",
      subtitle: "Je kunt kiezen uit tientallen digitale bureaus. Waarom zou je met mij in zee gaan? Simpel: ik kijk verder dan de technologie.",
    },
    process: {
      title: "Hoe werkt DigitaleDuif?",
      subtitle: "Bij Digitale Duif vlieg ik volgens een aanpak die werkt. Hieronder zie je hoe ik jouw idee stap voor stap laat landen.",
    },
    testimonials: {
      title: "Wat mijn klanten zeggen",
      subtitle: "Mooie verhalen vertellen over mezelf? Dat kan ik. Maar ik laat liever anderen aan het woord.",
    },
    offerings: {
      title: "Mijn diensten",
      subtitle: "Van XR tot web tot mobiel, ik bied complete digitale oplossingen.",
    },
    faq: {
      title: "Veelgestelde vragen",
      subtitle: "Antwoorden op de meest gestelde vragen over samenwerken met DigitaleDuif.",
    },
  },
};
