import { DesignTier, StyleMatch, Property, Furniture, ServicePillar } from "./types";

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Curated collection of ultra-luxury properties managed with design-first principles.",
    cta: "Explore Portfolio",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7a099?q=80&w=2670&auto=format&fit=crop",
    link: "/properties",
  },
  {
    id: "furniture",
    title: "Bespoke Furniture",
    description: "Limited edition craftsmanship that defines the character of your architectural space.",
    cta: "View Collection",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2717&auto=format&fit=crop",
    link: "/furniture",
  },
  {
    id: "interior",
    title: "Design Studio",
    description: "Transformative interior decoration and renovation services to maximize ROI and aesthetic value.",
    cta: "Book Discovery",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    link: "/studio",
  },
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "prop-01",
    title: "The Observatory Villa",
    price: 12500000,
    location: "Malibu, CA",
    status: "For Sale",
    designTier: DesignTier.ZYLO_FURNISHED,
    style: StyleMatch.MINIMALIST,
    image: "https://images.unsplash.com/photo-1600607687940-c52af0a436e6?q=80&w=2670&auto=format&fit=crop",
    description: "A cantilevered architectural marvel overlooking the Pacific, fully staged with Zylo's Winter Collection.",
  },
  {
    id: "prop-02",
    title: "Metropolitan Loft",
    price: 4800000,
    location: "SoHo, NY",
    status: "Managed",
    designTier: DesignTier.BESPOKE,
    style: StyleMatch.INDUSTRIAL,
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2689&auto=format&fit=crop",
    description: "High-ceiling industrial living optimized for short-term rental yields through bespoke design integration.",
  },
];

export const MOCK_FURNITURE: Furniture[] = [
  {
    id: "furn-01",
    name: "Obsidian Slate Table",
    material: "Black Marble & Gold Inlay",
    dimensions: "240cm x 110cm",
    leadTime: "8-12 Weeks",
    price: 18000,
    style: StyleMatch.MINIMALIST,
    image: "https://images.unsplash.com/photo-1577145900571-bd48126e834b?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "furn-02",
    name: "Aether Velvet Sofa",
    material: "Silk Velvet & Walnut",
    dimensions: "320cm x 100cm",
    leadTime: "10-14 Weeks",
    price: 24500,
    style: StyleMatch.TRANSITIONAL,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2670&auto=format&fit=crop",
  },
];
