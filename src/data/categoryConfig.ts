import { LucideIcon, Glasses, Smartphone, Rocket, Lightbulb, Users, Code, Layers, Palette, Zap, Target, HeartHandshake, Eye, Gamepad2, Search, MessageCircle, Sparkles, PenTool } from "lucide-react";
import type { CategoryId } from "@/context/CategoryContext";

// Import media assets
import xrImage from "@/assets/media/site/xr.jpeg";
import unityImage from "@/assets/media/site/unity-modified.jpg";
import ux1Image from "@/assets/media/site/ux1.jpeg";
import webappImage from "@/assets/media/site/webapp.jpeg";
import websitePerformanceImage from "@/assets/media/site/website_performance.png";
import appstoreImage from "@/assets/media/site/appstore-modified.jpg";

// Import icons
import woutervanhulstAvatar from "@/assets/icons/woutervanhulst.jpg";
import marcdegraafAvatar from "@/assets/icons/marcdegraaf.jpg";
import quintenmollemaAvatar from "@/assets/icons/quintenmollema.jpg";
import corjanAvatar from "@/assets/icons/corjan.jpg";
import maartengerritseAvatar from "@/assets/icons/maartengerritse.jpg";
import florianhierckAvatar from "@/assets/icons/florianhierck.jpg";
import swecoLogo from "@/assets/icons/sweco_logo.png";
import framespaceLogo from "@/assets/icons/framespace_logo.jpg";
import domineedanielAvatar from "@/assets/domineedaniel.jpg";
import enriqueAvatar from "@/assets/enrique.jpg";
import unoLogo from "@/assets/uno_logo.jpg";

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
  defaultMessage?: string;
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
    title: "Van hoog overzien naar gericht ",
    titleHighlight: "bouwen",
    subtitle: "Ik bouw immersieve VR, AR en MR ervaringen die trainen, simuleren en inspireren. Van concept tot implementatie, samen met jou.",
    backgroundImages: [xrImage, ux1Image],
  },
  usps: [
    {
      icon: Glasses,
      title: "XR Specialist",
      description: "Jarenlange ervaring met VR, AR en MR projecten in diverse sectoren.",
      backgroundImage: xrImage,
    },
    {
      icon: Gamepad2,
      title: "Unity Expert",
      description: "Diepgaande Unity kennis voor complexe simulaties en interactieve ervaringen.",
      backgroundImage: unityImage,
    },
    {
      icon: Eye,
      title: "Immersief Design",
      description: "Ontwerp dat de gebruiker volledig onderdompelt en engageert.",
      backgroundImage: ux1Image,
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
      avatar: woutervanhulstAvatar,
      rating: 5,
      companyLogo: swecoLogo,
      linkedinUrl: "https://www.linkedin.com/in/wouter-van-hulst-6a3254100/",
    },
    {
      quote: "Tijdens zijn afstudeerstage in ons team heeft Guido laten zien hoe krachtig AR/VR kan zijn voor het ontwerpen en realiseren van drinkwaterzuiveringen, door complexe installaties en bouwfases op ware schaal inzichtelijk te maken. Met zijn aanstekelijke enthousiasme wist hij ons moeiteloos mee te nemen in deze wereld, zonder technische drempels op te werpen. Guido combineert creativiteit met oprechte betrokkenheid en werkt sterk samen, waarbij hij actief zoekt naar input uit de praktijk. Dat maakt hem niet alleen prettig om mee te werken, maar ook iemand die oplossingen ontwikkelt die écht aansluiten bij de gebruiker.",
      author: "Marc de Graaf",
      title: "Werktuigbouwkundig Ingenieur Watertechniek, Sweco Nederland",
      avatar: marcdegraafAvatar,
      rating: 5,
      companyLogo: swecoLogo,
      linkedinUrl: "https://www.linkedin.com/in/marc-de-graaf-23246a144/",
    },
    {
      quote: "Guido was tijdens zijn stageperiode opvallend nieuwsgierig, leergierig en deed alles met een aanstekelijke glimlach. Tijdens zijn praktische experiment viel het mij vooral op dat hij kritisch was op zijn eigen concept en perfectionistisch nadacht over zijn eigen einddoel. Al met al een fijne periode.",
      author: "Quinten Mollema",
      title: "Projectleider, Sweco Nederland",
      avatar: quintenmollemaAvatar,
      rating: 5,
      companyLogo: swecoLogo,
      linkedinUrl: "https://www.linkedin.com/in/quinten-mollema-78b20495/",
    },

    {
    quote: "In 2024-2025 heeft Guido van Duivenvoorde voor een renovatie/nieuwbouw project bij onze opdrachtgever een Mixed Reality model gemaakt. Hiermee konden de ontwerpers en de opdrachtgever op de projectlocatie meekijken hoe de renovatie van o.a. ruimtes en installaties in de bestaande bouw eruit kon komen te zien en hoe de nieuwbouw aansloot bij de bestaande bouw. Mixed Reality is daarmee een fantastisch middel gebleken om op de projectlocatie aan te tonen dat het ontworpen 3D model past op en naast de bestaande bouw of clashes goed in beeld bracht. De passie en inzet van Guido om deze makkelijk bedienbaar Mixed Reality model te maken, heeft enorm geholpen om voor het ontwerpbureau en de opdrachtgever een mooi en inzichtelijk ontwerp te maken.",
    author: "Cor-Jan Baltus",
    title: "Projectmanager Drinkwater, Sweco Nederland",
    avatar: corjanAvatar,
    rating: 5,
    companyLogo: swecoLogo,
  },

  ],
  processSteps: [
    {
      icon: Search,
      title: "Wat is er nodig?",
      description: [
        "Analyse van jouw use-case, context en doelen",
        "Keuze voor de juiste XR-vorm: VR, AR of MR",
        "Technische en praktische haalbaarheid vastgesteld",
      ],
    },
    {
      icon: Lightbulb,
      title: "Toetsen in praktijk",
      description: [
        "Snel werkend prototype of Proof of Concept",
        "Testen met echte gebruikers in de echte omgeving",
        "Iteraties op basis van concrete feedback",
      ],
    },
    {
      icon: Glasses,
      title: "Ontwikkeling van applicatie",
      description: [
        "Ontwikkeling in Unity met focus op performance en stabiliteit",
        "Integratie met bestaande systemen en data.",
        "Uitgebreide testing op desbetreffende platform",
      ],
    },
    {
      icon: Rocket,
      title: "Oplevering van project",
      description: [
        "Uitrol op de gewenste XR-hardware",
        "Tevreden klant en gebruikers",
        "Nazorg en ondersteuning indien gewenst",
      ],
    },
  ],
  offerings: [
    {
      id: "vr-demo",
      title: "VR applicatie: Jouw idee tot leven",
      description: "Een meeslepende Virtual Reality-ervaring die direct indruk maakt. Een digitale wereld waarin jouw doelgroep volledig kan opgaan.",
      features: [
        "Eén specifiek scenario met intuïtieve interacties",
        "Bediening van knoppen, verplaatsen van objecten",
        "Perfect voor beurzen of interne trainingen",
        "Onvergetelijke eerste indruk",
      ],
      priceIndication: "vanaf €14.000",
      popular: true,
      defaultMessage: "Hoi Guido,\n\nIk ben geïnteresseerd in een VR applicatie. Ik zou graag meer willen weten over de mogelijkheden en hoe we kunnen samenwerken.\n\nGroeten,",
    },
    {
      id: "ar-visual",
      title: "AR Visual: Jouw product in de broekzak",
      description: "Breng digitale objecten naar de fysieke wereld. Jouw product simpelweg via smartphone of tablet in de ruimte van de klant.",
      features: [
        "Hoogwaardige projectie van 1-2 objecten",
        "Bekijken van alle kanten mogelijk",
        "Werkt op Android",
        "Ideaal voor marketing of productvisualisatie",
      ],
      priceIndication: "vanaf €10.500",
      defaultMessage: "Hoi Guido,\n\nIk wil graag mijn product visualiseren met AR. Kunnen we bespreken hoe dit eruit zou kunnen zien?\n\nGroeten,",
    },
    {
      id: "mr-intro",
      title: "Mixed Reality: Echte wereld in combinatie met digitaal",
      description: "De meest geavanceerde vorm van XR waarbij digitale en fysieke wereld samenwerken. Focus op de 'handsfree' ervaring.",
      features: [
        "Basis MR-ervaring voor één product of ruimte",
        "Digitale toevoegingen over de echte omgeving",
        "Meta Quest 3",
        "Perfect voor instructies of showroom-ervaringen",
      ],
      priceIndication: "vanaf €17.500",
      defaultMessage: "Hoi Guido,\n\nMixed Reality klinkt interessant voor mijn project. Ik zou graag meer willen weten over de mogelijkheden.\n\nGroeten,",
    },
    {
      id: "xr-consultancy",
      title: "XR Consultancy: Advies op maat",
      description: "Twijfel je over de juiste koers? Advies over de kansen van VR, AR en MR voor jouw situatie, inclusief businesscase.",
      features: [
        "Maximaal drie dagen diepgaand advies",
        "Proof-of-concept ideeën",
        "Duidelijke roadmap",
        "Strategisch fundament voor innovatie",
      ],
      priceIndication: "Vanaf €2.500",
      defaultMessage: "Hoi Guido,\n\nIk wil graag advies over XR voor mijn organisatie. Kunnen we een kennismakingsgesprek plannen?\n\nGroeten,",
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
      answer: "Ik werk voornamelijk met Meta Quest 3 voor standalone VR/MR. De hardware keuze hangt af van jouw use case, budget en of de applicatie standalone of PC-gebonden moet zijn.",
    },
    {
      question: "Hoe lang duurt het ontwikkelen van een VR-applicatie?",
      answer: "Een eenvoudig VR prototype kan in 4-6 weken. Een volledige VR-training of simulatie duurt meestal 3-6 maanden, afhankelijk van complexiteit, interacties en integraties. Na een kennismaking geef ik een realistische tijdsinschatting.",
    },
    {
      question: "Is VR geschikt voor training binnen mijn organisatie?",
      answer: "VR-training is bijzonder effectief voor situaties die in het echt gevaarlijk, duur of moeilijk te oefenen zijn. Denk aan machine-bediening, noodprocedures, soft skills of medische handelingen. Medewerkers leren door te doen in een veilige omgeving.",
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
      subtitle: "Mensen waarmee ik XR-projecten heb gerealiseerd delen hun ervaringen.",
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
    backgroundImages: [webappImage, ux1Image],
  },
  usps: [
    {
      icon: PenTool,
      title: "Strategie & UX Design",
      description: "Ik ontwerp websites met een logische structuur en sterke gebruikerservaring die bezoekers gericht naar actie leiden.",
      backgroundImage: webappImage,
    },
    {
      icon: Zap,
      title: "Techniek & Performance",
      description: "Ik bouw snelle, veilige en toekomstbestendige websites die op elk apparaat optimaal presteren.",
      backgroundImage: websitePerformanceImage,
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Ik vertaal jouw merk naar een modern, consistent en visueel aantrekkelijk webdesign.",
      backgroundImage: ux1Image
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
      quote: "Guido combineert een sterke technische kennis met een aanstekelijke passie voor technologie. Daardoor voelen uitdagingen als interessante puzzels, en met zijn goede gevoel voor humor is het simpelweg fijn om met hem samen te werken.",
      author: "Maarten Gerritse",
      title: "UX Designer, Framespace",
      avatar: maartengerritseAvatar,
      rating: 5,
      companyLogo: framespaceLogo,
      linkedinUrl: "https://www.linkedin.com/in/maartengerritse/",
    },

    {
      quote: "De samenwerking met Guido was erg prettig. Als ik ergens vast liep, dan schroomde Guido niet om te helpen. Met behulp van leuke referenties zat de sfeer er ook altijd wel in en bleef de informatie daardoor ook makkelijker hangen",
      author: "Florian Hierck",
      title: "Student Informatica, Hogeschool Leiden",
      rating: 5,
      avatar: florianhierckAvatar,
      linkedinUrl: "https://www.linkedin.com/in/florian-hierck-203569210/",
    }

  ],
  processSteps: [
    {
      icon: Search,
      title: "Kennismaken & Verkennen",
      description: [
        "Diepgaand gesprek over jouw doelen en doelgroep",
        "Samen ontdekken we wat jouw website nodig heeft om te slagen",
        "Ik zorg voor een heldere projectscope en planning",
      ],
    },
    {
      icon: PenTool,
      title: "Design & Prototype",
      description: [
        "Ik schets de eerste wireframes",
        "Jouw stijl en persoonlijkheid komen centraal te staan",
        "Itereren tot het design precies goed voelt",
      ],
    },
    {
      icon: Code,
      title: "Bouwen & Optimaliseren",
      description: [
        "Ik zet het ontwerp om in een werkende website",
        "Alles werkt soepel op telefoon, tablet en desktop",
        "Eventueel CMS-koppeling voor zelfbeheer",
      ],
    },
    {
      icon: Rocket,
      title: "Lancering & Nazorg",
      description: [
        "Testen voordat we website live gaat",
        "Oplevering en lancering van jouw nieuwe site",
        "Eventueel onderhoud en doorontwikkeling na lancering",
      ],
    },
  ],
  offerings: [
    {
      id: "business-website",
      title: "Bedrijfswebsite",
      description: "Jouw professionele basis: een website die vertrouwen uitstraalt en past bij jouw identiteit.",
      features: [
        "3-8 pagina's",
        "Responsive design",
        "Basis SEO optimalisatie",
        "Contact formulieren",
        "SEO basis",
      ],
      priceIndication: "Vanaf €5.000",
      popular: true,
      defaultMessage: "Hoi Guido,\n\nIk ben op zoek naar een professionele bedrijfswebsite. Kunnen we bespreken wat de mogelijkheden zijn?\n\nGroeten,",
    },
    {
      id: "webshop",
      title: "Webshop / E-commerce",
      description: "Jouw online winkel: een soepele shop-ervaring die bezoekers helpt om te bestellen.",
      features: [
        "Productcatalogus",
        "Winkelwagen & checkout",
        "Betaalintegraties",
        "Dashboard voor bestellingen",
        "Responsive design",
      ],
      priceIndication: "Vanaf €12.500",
      defaultMessage: "Hoi Guido,\n\nIk wil graag een webshop laten bouwen. Kunnen we de mogelijkheden bespreken?\n\nGroeten,",
    },
    {
      id: "one-page-website",
      title: "One-Page Website",
      description: "Snel en krachtig: alle belangrijke informatie overzichtelijk op één pagina.",
      features: [
        "Eén pagina met duidelijke secties",
        "Soepel scrollen en duidelijke navigatie",
        "Contactformulier of CTA",
        "Volledig mobiel geoptimaliseerd",
        "Snelle oplevering",
      ],
      priceIndication: "Vanaf €3.500",
      defaultMessage: "Hoi Guido,\n\nIk ben geïnteresseerd in een one-page website. Kunnen we bespreken hoe dit eruit zou kunnen zien?\n\nGroeten,",
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
      question: "Wat als mijn website veel bezoekers moet aankunnen?",
      answer: "Ik bouw schaalbare architectuur die meegroeit met je succes. Door moderne technieken zoals edge caching, CDN's en serverless functies kan je website duizenden gelijktijdige bezoekers aan zonder problemen.",
    },
    {
      question: "Bied je ook onderhoud en hosting aan?",
      answer: "Hosting regel ik standaard via Strato, maar andere hostingpartijen zijn ook mogelijk. Voor onderhoud is het een en ander bespreekbaar – indien nodig maak ik hiervoor een aparte offerte op maat.",
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
      subtitle: "Ontdek waarom mensen kiezen voor DigitaleDuif voor hun online aanwezigheid.",
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
    title: "Jouw idee, altijd binnen ",
    titleHighlight: "handbereik",
    subtitle: "Ik ontwikkel mobiele apps in Flutter voor MVP's, prototypes en compacte producties. Focus op UX, performance en een duidelijke scope.",
    backgroundImages: [webappImage, ux1Image],
  },
  usps: [
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Eén codebase voor beide platformen met Flutter. Kostenefficiënt en snel naar de markt.",
      backgroundImage: webappImage,
    },
    {
      icon: PenTool,
      title: "UX & Interactieontwerp",
      description: "Sterke focus op gebruiksvriendelijkheid, intuïtieve flows en een fijne gebruikservaring.",
      backgroundImage: ux1Image,
    },
    {
      icon: Rocket,
      title: "App Store Ready",
      description: "Volledige begeleiding bij publicatie in de App Store en Play Store.",
      backgroundImage: appstoreImage,
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
      quote: "Guido is iemand die zich met veel energie en toewijding inzet voor projecten waar hij enthousiast over is. Hij werkt met plezier en brengt op een natuurlijke manier humor in het werk. Door zijn kritische houding en hoge standaarden levert hij consistent goede resultaten.",
      author: "Daniel Looijestijn",
      title: "Low code developer, UNO",
      avatar: domineedanielAvatar,
      rating: 5,
      companyLogo: unoLogo,
    },

    {
      quote: "Ik heb de samenwerking met Guido als erg positief ervaren. Hij is gedreven, werkt snel en denkt actief mee. Wat ik vooral fijn vond, is dat hij continu feedback vraagt zodat het eindresultaat echt aansluit bij de wensen van zowel de opdrachtgever als de gebruiker.",
      author: "Enrique Alonso Barreiro",
      title: "Junior IT Professional",
      avatar: enriqueAvatar,
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/in/enrique-alonso-barreiro-78929925a/",
    },
    
  ],
  processSteps: [
    {
      icon: Search,
      title: "Kennismaken & Verkennen",
      description: [
        "Samen bespreken we jouw idee, doelen en doelgroep",
        "We bepalen welke functies écht belangrijk zijn",
        "Ik adviseer over de beste aanpak en planning",
      ],
    },
    {
      icon: PenTool,
      title: "Ontwerp & Prototype",
      description: [
        "Ik schets hoe de app eruitziet en werkt",
        "Je krijgt een klikbaar voorbeeld om te testen",
        "Samen verfijnen we het ontwerp tot het klopt",
      ],
    },
    {
      icon: Code,
      title: "Bouwen & Testen",
      description: [
        "Ik bouw de app stap voor stap",
        "Regelmatig laat ik je de voortgang zien",
        "We testen grondig voordat we verdergaan",
      ],
    },
    {
      icon: Rocket,
      title: "Lancering & Nazorg",
      description: [
        "Indien nodig, komt de app in de App Store en Play Store",
        "Ik help met alles rondom de lancering",
        "Na de lancering blijf ik beschikbaar voor updates",
      ],
    },
  ],
  offerings: [
    {
      id: "mvp-app",
      title: "MVP / Prototype App: Valideer je Idee",
      description: "Snel een werkende versie om jouw concept te testen met echte gebruikers. We focussen op de kern, zodat je snel kunt bijsturen zonder onnodige kosten.",
      features: [
        "Focus op de belangrijkste functies",
        "Snel testen en verbeteren op basis van feedback",
        "Heldere scope: geen onnodige extra's",
        "Ideaal om te valideren bij investeerders of eerste gebruikers",
      ],
      priceIndication: "Vanaf €10.000",
      popular: true,
      defaultMessage: "Hoi Guido,\n\nIk heb een app-idee en wil graag starten met een MVP. Kunnen we bespreken hoe we dit kunnen aanpakken?\n\nGroeten,",
    },
    {
      id: "compact-app",
      title: "Compacte Productie-app: Slim & Functioneel",
      description: "Een degelijke, werkende app zonder overbodige toeters en bellen. Gericht op stabiliteit en gebruiksgemak.",
      features: [
        "Complete app voor iOS én Android",
        "Push-notificaties (indien gewenst)",
        "Basis analytics om succes te meten",
        "Geschikt als interne tool of content-gedreven app",
      ],
      priceIndication: "Vanaf €15.000",
      defaultMessage: "Hoi Guido,\n\nIk wil graag een compacte maar complete app laten ontwikkelen. Kunnen we de mogelijkheden bespreken?\n\nGroeten,",
    },
    {
      id: "app-consult",
      title: "App Advies & Concept: Voorkom Misstappen",
      description: "Twijfel je of een app de juiste oplossing is? Samen maken we jouw idee scherp, vóórdat we gaan bouwen.",
      features: [
        "Haalbaarheid en risico's in kaart",
        "Concept en eerste wireframes",
        "Advies over aanpak en prioriteiten",
        "Realistische kosteninschatting",
      ],
      priceIndication: "Vanaf €500",
      defaultMessage: "Hoi Guido,\n\nIk wil graag advies over mijn app-idee voordat ik ga investeren. Kunnen we een sessie plannen?\n\nGroeten,",
    },
    {
      id: "app-maintenance",
      title: "App Onderhoud: Zorgeloos Online",
      description: "Een app is nooit echt 'klaar'. Ik zorg dat jouw app veilig, stabiel en up-to-date blijft, ook bij updates van Apple en Google.",
      features: [
        "Compatibel houden met nieuwe iOS- en Android-versies",
        "Bugs oplossen en kleine verbeteringen",
        "Performance monitoren",
        "Doorlopende ondersteuning en onderhoud",
      ],
      priceIndication: "Vanaf €400 / maand",
      defaultMessage: "Hoi Guido,\n\nIk ben op zoek naar onderhoud voor mijn bestaande app. Kunnen we bespreken wat je hiervoor kunt bieden?\n\nGroeten,",
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
      title: "Succesverhalen van mensen",
      subtitle: "Mensen vertellen over hun ervaring met app development bij DigitaleDuif.",
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
    title: "DigitaleDuif: Ik geef jouw ",
    titleHighlight: "idee vleugels",
    subtitle: "Ik bouw VR, MR, websites en apps die écht werken. Van idee tot lancering, samen met jou.",
    backgroundImages: [xrImage, webappImage, ux1Image],
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
