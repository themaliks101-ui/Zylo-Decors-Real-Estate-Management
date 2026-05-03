export enum DesignTier {
  STANDARD = "Standard",
  ZYLO_FURNISHED = "Zylo-Furnished",
  BESPOKE = "Bespoke",
}

export enum StyleMatch {
  MID_CENTURY_MODERN = "Mid-Century Modern",
  MINIMALIST = "Minimalist",
  INDUSTRIAL = "Industrial",
  SCANDINAVIAN = "Scandinavian",
  TRANSITIONAL = "Transitional",
}

export interface Furniture {
  id: string;
  name: string;
  material: string;
  dimensions: string;
  leadTime: string;
  price: number;
  style: StyleMatch;
  image: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  status: "For Sale" | "Managed";
  designTier: DesignTier;
  style: StyleMatch;
  image: string;
  description: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  link: string;
}
