import { BrandInfo, PrepMaterial, ServiceStep, AwardItem, TrustBadge, Testimonial, StoreInfo } from '@/types/paints';

export const BRANDS: BrandInfo[] = [
  {
    id: 'nerolac',
    name: 'Kansai Nerolac Paints',
    tagline: 'Beauty That Endures & Protects',
    badge: '13-Year Authorized Strategic Partner',
    description: 'Pioneers in high-performance Japanese polymer coatings, Beauty Gold washable emulsions, and metallic luxury designer wall accents.',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrCiSI_RHivNbrnCN6nX8rak4jChZrhavPzoTBLwRtacRdsQ__PZ3YtqqLcuzDZeC8nfAqJ98VmhtL6PN6rb6xhHygVoj6Iuj41Ol_BxHFb1wNBSl2Si_yQAO7i0n8wWI5si_uZ9VaCGromq5sljP-Sd6t4EtosOF8dXim4kxcMJVuHna3iw0iRZpXaUEMfGlh-bapoHyuTvoJp4HzgOM8VGpfUvDs6FBeBZ5XMkn5jT',
    finishes: ['HD Sheen', 'Velvet Matte', 'Mica Marble'],
    accentColor: '#FF5722',
    swatches: [
      { id: 'n1', name: 'Imperial Teal', hex: '#0D324D', code: 'NP-104', brand: 'nerolac' },
      { id: 'n2', name: 'Saffron Vermilion', hex: '#FF5722', code: 'NP-208', brand: 'nerolac' },
      { id: 'n3', name: 'Desert Ochre', hex: '#E0A96D', code: 'NP-312', brand: 'nerolac' },
      { id: 'n4', name: 'Sunburst Gold', hex: '#F9A825', code: 'NP-401', brand: 'nerolac' },
    ],
    catalogLink: '#contact'
  },
  {
    id: 'asian-paints',
    name: 'Asian Paints',
    tagline: 'Royale Luxury & Apex Ultima Durability',
    badge: 'Direct Authorized Dealer',
    description: 'The pinnacle of interior luxury emulsion with Royale Glitz, Teflon surface protector, and exterior weather-proof architectural defenses.',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrDPJK2_CeOVYArIQese0uquxzQFsdFce4PkCZ2GSL8QC83GH6pFEDaeo6CwoiHhe79zxoPkDq6TqKkU7M1p8Mx8-D3KAkttzY8PRve8FlXaRLiSEZkJcgOTKoUrH9CRZ_f3ejVFJGAgXbFnRZGvj1beT12m_EIKi9vLQueZ8bQ4SSvNQxUJSQVQEH8MfPGd6F7xU5bjSTRv-sfAmWUcEFtHS2ufs1h3H8s2b58fOLVc',
    finishes: ['Royale Glitz', 'Apex Ultima', 'Teflon Shield'],
    accentColor: '#FF6B6B',
    swatches: [
      { id: 'ap1', name: 'Morning Mist', hex: '#D6EBFB', code: 'AP-012', brand: 'asian_paints' },
      { id: 'ap2', name: 'Deep Marine', hex: '#1F333F', code: 'AP-505', brand: 'asian_paints' },
      { id: 'ap3', name: 'Terracotta Coral', hex: '#B02F00', code: 'AP-819', brand: 'asian_paints' },
      { id: 'ap4', name: 'Warm Canvas', hex: '#F5FAFF', code: 'AP-101', brand: 'asian_paints' },
    ],
    catalogLink: '#contact'
  },
  {
    id: 'birla-opus',
    name: 'Birla Opus Paints',
    tagline: 'Next-Gen Architectural Pigments',
    badge: 'Certified Flagship Retailer',
    description: 'Breakthrough polymer innovation with enhanced one-coat opacity, superior leveling, and zero-VOC eco-conscious formulations.',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrDcyTHUvH0QO108uUW80Hm9mVUIaHtc6BQdqCfWv3t6pfSi37gGiiCpOtuDpHW8q195BAY4hKfq1q7Zm3o_ciYM_x8Ao7Ds6MaRFwxrETYxwsEF4NupNCHrq6A9dKe7D6G8BeDamsNU1csffYingVw4F6DyFauOA5OZTk57O-2wQhHJoaWeARaXbEubGZ6WKrvlo2iEDJK3pgVDrNwX020AARaU0iPHwFT3XYwa_qqA',
    finishes: ['Infinity Luxe', 'Eco Ultra', 'Silken Touch'],
    accentColor: '#00897B',
    swatches: [
      { id: 'bo1', name: 'Celadon Breeze', hex: '#A9CAEC', code: 'BO-203', brand: 'birla_opus' },
      { id: 'bo2', name: 'Alabaster Crisp', hex: '#FFFFFF', code: 'BO-100', brand: 'birla_opus' },
      { id: 'bo3', name: 'Smoky Slate', hex: '#42474D', code: 'BO-722', brand: 'birla_opus' },
      { id: 'bo4', name: 'Golden Marigold', hex: '#FFB957', code: 'BO-450', brand: 'birla_opus' },
    ],
    catalogLink: '#contact'
  }
];

export const PREP_MATERIALS: PrepMaterial[] = [
  {
    id: 'putty',
    title: 'Polymer Wall Putty',
    subtitle: 'Ultra-Fine Surface Substrate',
    description: 'White cement-based water-resistant polymer putty creating a smooth, silky pore-free base for interior & exterior walls.',
    icon: 'format_paint',
    badge: 'Grade A Base',
    features: ['High Tensile Adhesion', 'Prevents Paint Flaking', 'Superior Whiteness']
  },
  {
    id: 'cement',
    title: 'Architectural White Cement',
    subtitle: 'Structural Masonry Base',
    description: 'High-grade Portland white cement for decorative terrazzo floors, pre-cast panels, tile grouting, and marble laying.',
    icon: 'domain',
    badge: 'High Compressive',
    features: ['Uniform Consistency', 'Crack-Resistant', 'Maximum Reflectance']
  },
  {
    id: 'pop',
    title: 'Plaster of Paris (POP)',
    subtitle: 'Gypsum Sculpting & Cornices',
    description: 'Ultra-fine hemihydrate gypsum for ornamental false ceilings, cornices, moldings, and leveling uneven plaster.',
    icon: 'architecture',
    badge: 'Quick Setting',
    features: ['Superfine 300 Mesh', 'Zero Shrinkage', 'Mirror-Smooth Finish']
  },
  {
    id: 'primer',
    title: 'Waterproof Primers & Sealers',
    subtitle: 'Moisture Damp-Proof Shield',
    description: 'Deep-penetrating acrylic primers blocking efflorescence, alkali attacks, and rising dampness behind luxury coatings.',
    icon: 'water_drop',
    badge: 'Damp-Proof Shield',
    features: ['Anti-Alkali Formulation', 'Strong Inter-Coat Grip', 'Breathable Film']
  },
  {
    id: 'textures',
    title: 'Rustic & Mineral Textures',
    subtitle: 'Designer Wall Tactility',
    description: 'Quartz-embedded specialty base coats delivering tactile rustic, travertine marble, and concrete-slate designer finishes.',
    icon: 'texture',
    badge: 'Designer Grade',
    features: ['High Impact Resistance', 'Weather UV Proof', 'Custom Stencil Ready']
  }
];

export const SERVICE_STEPS: ServiceStep[] = [
  {
    step: 1,
    title: 'Site Moisture Inspection & Laser Scan',
    timeframe: 'Day 1',
    description: 'Digital protimeter moisture measurement and surface substrate integrity checks to ensure zero bubbling or peeling.',
    icon: 'speed'
  },
  {
    step: 2,
    title: 'Surface Grinding & Deep Primer Seal',
    timeframe: 'Day 2',
    description: 'Automated vacuum sanding eliminating 98% dust, followed by anti-fungal deep penetrating primer coats.',
    icon: 'layers'
  },
  {
    step: 3,
    title: 'Double-Coat Polymer Putty Leveling',
    timeframe: 'Day 3',
    description: 'Dual cross-directional skim coats of white cement putty sanded with 220-grit for a glass-smooth canvas.',
    icon: 'format_paint'
  },
  {
    step: 4,
    title: 'Precision Emulsion / Enamel Topcoats',
    timeframe: 'Day 4-5',
    description: 'Two uniform roller-applied coats of authentic Kansai Nerolac, Asian Paints, or Birla Opus luxury finishes.',
    icon: 'roller_shades'
  },
  {
    step: 5,
    title: 'Post-Job Masking Removal & Deep Clean',
    timeframe: 'Day 5',
    description: 'Complete floor tape unwrapping, vacuum cleaning, and client walkthrough inspection with signed genuine paint certificate.',
    icon: 'verified_user'
  }
];

export const TRUST_BADGES: TrustBadge[] = [
  { id: 'dealer', title: '13-Time Nerolac Winner', subtitle: 'Regional Dealer of Excellence', icon: 'workspace_premium' },
  { id: 'csat', title: '99.4% Client CSAT', subtitle: '480+ Five-Star Verified Reviews', icon: 'thumb_up' },
  { id: 'performer', title: 'Star Performer', subtitle: 'Luxury Coatings & Finishes Leader', icon: 'star_rate' },
  { id: 'genuine', title: '100% Genuine Supplies', subtitle: 'Direct Sealed Mill Barcodes', icon: 'verified' }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'a1',
    title: 'Kansai Nerolac Dealer Excellence',
    year: '2023-2024',
    category: 'Highest Sales & Service Volume',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrBQ18pWPfOKVhdyVaVkWidDSF6okoX8h0s_cDZRiaYUlVGpb7ABAdpd_0cOnVh0UN7iSWVM1hzcTHTbaWE-8z3cH3vlnMANpyTq3-_5h0WrikPU6f3KoMK4l8jwjIdAKBRTIevLvCiNgW5lVigC93d10xpG_TWZz-AU-95QYOfISd68tDM_oehi-G8wNSHhTaXiPht4I-PPDBQq1CBUXNMm5JwNVBgMNs0seKvBpOcY',
    badge: 'Winner'
  },
  {
    id: 'a2',
    title: 'Regional Star Performer Trophy',
    year: '2022-2023',
    category: 'Premium Impressions & Excel Enamels',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrDXlfS2Gpv4o8jAhs4htRRKzArc7bbG2UZQ5QQ6T9__ojUQMIFO7hrSFuTvMc8kPkwSSqXWFGDYiJoaxRpOFo-1iuhcoFZgJOucsI9e058gAe5d5n_D5nEPqVVC6PIappLN1AwWtbquxQPnvmMGHmAZszd3p_DbZtRuEiBmiNPs7B-Pkk_5UzAF1uARQy5sL9aPVHTP4el3ZXqOhupxwo96O_BswTVHMk0OySsnq62X',
    badge: 'Winner'
  },
  {
    id: 'a3',
    title: 'Excellence in Decorative Coatings',
    year: '2021-2022',
    category: 'Authorized Distributor Milestone',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrBQ18pWPfOKVhdyVaVkWidDSF6okoX8h0s_cDZRiaYUlVGpb7ABAdpd_0cOnVh0UN7iSWVM1hzcTHTbaWE-8z3cH3vlnMANpyTq3-_5h0WrikPU6f3KoMK4l8jwjIdAKBRTIevLvCiNgW5lVigC93d10xpG_TWZz-AU-95QYOfISd68tDM_oehi-G8wNSHhTaXiPht4I-PPDBQq1CBUXNMm5JwNVBgMNs0seKvBpOcY',
    badge: 'Winner'
  },
  {
    id: 'a4',
    title: 'Growth in Impressions HD Trophy',
    year: '2020-2021',
    category: 'Luxury Interior Finishes',
    image: 'https://lh3.googleusercontent.com/aida/ALJJyrDXlfS2Gpv4o8jAhs4htRRKzArc7bbG2UZQ5QQ6T9__ojUQMIFO7hrSFuTvMc8kPkwSSqXWFGDYiJoaxRpOFo-1iuhcoFZgJOucsI9e058gAe5d5n_D5nEPqVVC6PIappLN1AwWtbquxQPnvmMGHmAZszd3p_DbZtRuEiBmiNPs7B-Pkk_5UzAF1uARQy5sL9aPVHTP4el3ZXqOhupxwo96O_BswTVHMk0OySsnq62X',
    badge: 'Winner'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh & Sneha Sharma',
    role: 'Verified Homeowner (3BHK Living Room)',
    date: '2 weeks ago',
    quote: 'Vinayak Paints matched our living room teal and ochre palette with pinpoint precision using their computerized machine. Their painters completed our 3BHK in 4 days with zero dust mess!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ar. Vikram Malhotra',
    role: 'Lead Architect, Studio AURA',
    date: '1 month ago',
    quote: 'For client projects requiring zero-compromise sheen and authentic Nerolac & Asian Paints batches, Vinayak Paints is our sole supplier. Their technical team understands architectural specifications.',
    rating: 5
  }
];

export const STORE_DATA: StoreInfo = {
  name: 'Vinayak Paints',
  tagline: 'Authorized Dealer Kansai Nerolac, Asian Paints & Birla Opus',
  address: 'Shop No. 4 & 5, Commercial Complex, Main Road',
  landmark: 'Near City Central Landmark',
  city: 'Mumbai',
  pincode: '400001',
  phone: '+91 92355 54652',
  whatsapp: '+919235554652',
  email: 'sales@vinayakpaints.com',
  hours: 'Mon – Sat: 9:00 AM – 8:30 PM | Sunday: 10:00 AM – 3:00 PM',
  tintingMachine: 'High-Precision Automated Kansai Nerolac & Asian Paints Computerized Tinting Machine with 2,500+ Instant Formulation Dispenser',
  mapImage: 'https://lh3.googleusercontent.com/aida/ALJJyrD9Emrnw953a311JwxJmgv8Pst64kgDgmve4hxctbZPyuUQQKktFmKcb9Qz_HcEKtjYpxBaU6-80rYHDljD0SurDQMVma1Hj7ZHFKY7T7ejHlCTh-UkZwg5ZvqkJWYymDQB7R0W0EYmII3PcVQv_zDKTLYrpUfx8Zfyjs-ASNh_N5CqUWCjNRr594qfUzTeanpQ8zbAQPEj_wnpVQPbFsC-NfwDIXmudItiFkfWeyYS',
  amenities: [
    'Air-Conditioned Swatch Studio',
    'Free Dedicated Parking',
    'Computerized Instant Mixing',
    '2,500+ Physical Fan Decks'
  ]
};
