export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  image: string;
  heroImage: string;
  icon: string;
};

export type Location = {
  id: string;
  name: string;
  description: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string[];
  postalCode: string;
  city: string;
  hours: {
    days: string;
    hours: string;
  }[];
};

export const services: Service[] = [
  {
    id: "solenergi",
    title: "Solenergi",
    description: "Miljövänliga solenergilösningar för ditt hem eller företag",
    longDescription: "Vi erbjuder kompletta solenergilösningar som hjälper dig att minska dina energikostnader och ditt koldioxidavtryck. Våra experter hjälper dig genom hela processen från planering till installation och underhåll.",
    benefits: [
      "Minskade energikostnader",
      "Miljövänlig energiproduktion",
      "Ökat fastighetsvärde",
      "Energioberoende"
    ],
    features: [
      "Högkvalitativa solpaneler",
      "Professionell installation",
      "Skräddarsydda lösningar",
      "Fullständig systemövervakning",
      "Långsiktig support och underhåll"
    ],
    image: "/images/wilhelm-gunkel-frJ4mqE5DNY-unsplash.jpg",
    heroImage: "/images/transmission towers.jpg",
    icon: "sun"
  },
  {
    id: "laddboxar",
    title: "Laddboxar",
    description: "Effektiva laddningslösningar för elbilar hemma och på arbetsplatsen",
    longDescription: "Vi installerar säkra och effektiva laddboxar för elbilar, anpassade efter dina behov. Våra lösningar är framtidssäkrade och ger dig bekväm laddning hemma eller på arbetsplatsen.",
    benefits: [
      "Snabbare laddning än med vanligt vägguttag",
      "Säker och pålitlig laddning",
      "Möjlighet till lastbalansering",
      "Framtidssäkrad investering"
    ],
    features: [
      "Professionell installation",
      "Olika effektalternativ",
      "Smart styrning och övervakning",
      "Kompatibel med alla elbilar",
      "Möjlighet till integration med solenergi"
    ],
    image: "/images/An electrician looking at a car charging box.jpg",
    heroImage: "/images/power switch box.jpg",
    icon: "charging-station"
  },
  {
    id: "villainstallation",
    title: "Villainstallation",
    description: "Kompletta elinstallationer för nybyggda villor och bostäder",
    longDescription: "Vi utför kompletta elinstallationer för nybyggda villor och bostäder. Med över 30 års erfarenhet säkerställer vi att din nya bostad får en säker och modern elinstallation som uppfyller alla krav och förväntningar.",
    benefits: [
      "Säker och modern elinstallation",
      "Energieffektiva lösningar",
      "Anpassad efter dina behov",
      "Framtidssäkrad installation"
    ],
    features: [
      "Komplett elinstallation",
      "Belysningsplanering",
      "Installation av vitvaror",
      "Jordfelsbrytare och säkerhetsåtgärder",
      "Dokumentation och besiktning"
    ],
    image: "/images/A man looking at his tools for an electrician job.jpg",
    heroImage: "/images/jimmy-nilsson-masth-xXytHCOv9ck-unsplash.jpg",
    icon: "home"
  },
  {
    id: "elrenovering",
    title: "Elrenovering",
    description: "Uppdatera och modernisera äldre elinstallationer för ökad säkerhet",
    longDescription: "Vi hjälper dig att uppdatera och modernisera äldre elinstallationer för att öka säkerheten och funktionaliteten i ditt hem eller företag. Våra elektriker har omfattande erfarenhet av att arbeta med äldre installationer.",
    benefits: [
      "Ökad elsäkerhet",
      "Modernare elinstallation",
      "Minskad risk för elavbrott",
      "Möjlighet till energibesparing"
    ],
    features: [
      "Byte av elcentral",
      "Installation av jordfelsbrytare",
      "Byte av gamla ledningar",
      "Uppdatering av vägguttag och strömbrytare",
      "Besiktning och dokumentation"
    ],
    image: "/images/Electrician repairing wires.jpg",
    heroImage: "/images/An electrician about to cut wires.jpg",
    icon: "tools"
  },
  {
    id: "omdragning-av-el",
    title: "Omdragning av el",
    description: "Professionell omdragning av el vid renovering eller ombyggnation",
    longDescription: "Vid renovering eller ombyggnation kan det behövas en omdragning av el. Vi hjälper dig med professionell planering och utförande av nya eldragningar som passar dina nya behov och planlösning.",
    benefits: [
      "Anpassad elinstallation efter ny planlösning",
      "Möjlighet att öka antalet uttag",
      "Förbättrad elsäkerhet",
      "Modern installation"
    ],
    features: [
      "Planering av nya eldragningar",
      "Demontering av gammal installation",
      "Installation av nya kablar och uttag",
      "Anpassning till nya behov",
      "Dokumentation och besiktning"
    ],
    image: "/images/A bunch of wires pulled out.jpg",
    heroImage: "/images/a bunch of wires pugged into a switchbox.jpg",
    icon: "bolt"
  },
  {
    id: "smart-teknik",
    title: "Smart teknik",
    description: "Smarta hemlösningar för ökad komfort och energibesparing",
    longDescription: "Vi installerar smarta hemlösningar som ger dig ökad komfort, säkerhet och möjlighet till energibesparing. Med smart styrning av belysning, värme, ventilation och säkerhet får du ett modernt hem som är enkelt att kontrollera.",
    benefits: [
      "Ökad komfort och bekvämlighet",
      "Energibesparing genom smart styrning",
      "Förbättrad säkerhet",
      "Möjlighet till fjärrstyrning"
    ],
    features: [
      "Smart belysningsstyrning",
      "Temperatur- och klimatstyrning",
      "Säkerhetssystem och övervakning",
      "Integration med röstassistenter",
      "Anpassade automationer"
    ],
    image: "/images/Several light bulbs turned on.jpg",
    heroImage: "/images/A bunch of wires connected to objects with a measuring tool.jpg",
    icon: "lightbulb"
  },
  {
    id: "energi-besparingar",
    title: "Energibesparingar",
    description: "Lösningar för att minska energiförbrukning och sänka dina kostnader",
    longDescription: "Vi erbjuder lösningar för att minska din energiförbrukning och sänka dina kostnader. Genom energieffektiva installationer, smart styrning och rådgivning hjälper vi dig att göra kloka val för både miljön och plånboken.",
    benefits: [
      "Minskade energikostnader",
      "Mindre miljöpåverkan",
      "Ökad medvetenhet om energiförbrukning",
      "Långsiktig besparing"
    ],
    features: [
      "Energikartläggning",
      "Installation av energieffektiv belysning",
      "Smart styrning av värme och ventilation",
      "Rådgivning om energibesparande åtgärder",
      "Uppföljning och optimering"
    ],
    image: "/images/electrical power generator.jpg",
    heroImage: "/images/A man measuring the amount of volt.jpg",
    icon: "leaf"
  }
];

export const locations: Location[] = [
  {
    id: "satila",
    name: "Sätila",
    description: "Vi erbjuder våra elektriska tjänster i Sätila och närliggande områden. Med lokal kännedom och snabb service är vi det självklara valet för alla dina elbehov i Sätila."
  }
];

export const contactInfo: ContactInfo = {
  phone: "070 740 61 16",
  email: "gunnarstorp1@gmail.com",
  address: ["Härkilavägen Gunnarstorp"],
  postalCode: "51199",
  city: "Sätila",
  hours: [
    {
      days: "Måndag - Fredag",
      hours: "07:00 - 16:00"
    },
    {
      days: "Lördag - Söndag",
      hours: "Stängt"
    }
  ]
};

export const companyInfo = {
  name: "Gunnarstorps Elektrifieringsfirma",
  description: "Vi utför professionella elinstallationer för både moderna och äldre fastigheter. Vår ägare Martin Andersson grundade företaget 2012 och har över 30 års gedigen erfarenhet inom elbranschen.",
  founded: "2012",
  employees: "4",
  experience: "30+ år"
};
