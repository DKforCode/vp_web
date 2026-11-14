export interface Swatch {
  id: string;
  name: string;
  hex: string;
  code: string;
  brand: 'nerolac' | 'asian_paints' | 'birla_opus';
}

export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  image: string;
  finishes: string[];
  swatches: Swatch[];
  catalogLink: string;
  accentColor: string;
}

export interface PrepMaterial {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  features: string[];
}

export interface ServiceStep {
  step: number;
  title: string;
  timeframe: string;
  description: string;
  icon: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  badge: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  date: string;
  quote: string;
  rating: number;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  tintingMachine: string;
  mapImage: string;
  amenities: string[];
}
