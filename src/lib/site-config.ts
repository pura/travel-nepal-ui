/** Brand + contact constants for Easy Travel Nepal */

export const SITE = {
  name: "Easy Travel Nepal",
  tagline: "Authentic journeys, crafted by locals",
  url: "https://www.easytravelnepal.com",
  email: "info@easytravelnepal.com",
  phone: "+977 1 4423456",
  address: "Thamel, Kathmandu, Nepal",
} as const;

export function getWhatsAppUrl(message?: string): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "9779841234567";
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const TRUST_BADGES = [
  { label: "Local Experts", icon: "compass" },
  { label: "500+ Travelers", icon: "users" },
  { label: "Custom Tours", icon: "map" },
  { label: "24/7 Support", icon: "headset" },
] as const;

export const WHY_BOOK = [
  {
    title: "Local Experts",
    description: "Guides born and raised in the Himalayas who know every trail and temple.",
    icon: "compass",
  },
  {
    title: "Personalized Itineraries",
    description: "Trips shaped around your pace, interests, and travel style — not one-size-fits-all.",
    icon: "route",
  },
  {
    title: "Transparent Pricing",
    description: "Clear inclusions and honest quotes before you commit — no hidden surprises.",
    icon: "receipt",
  },
  {
    title: "Flexible Travel",
    description: "Adjust dates, add rest days, or extend your trek when plans shift.",
    icon: "calendar",
  },
  {
    title: "Handpicked Hotels",
    description: "Comfortable lodges and boutique stays we trust from Kathmandu to the mountains.",
    icon: "bed",
  },
  {
    title: "Fast Support",
    description: "WhatsApp replies within hours — before, during, and after your trip.",
    icon: "message",
  },
] as const;

export const DESTINATION_SLUGS = [
  "everest",
  "kathmandu",
  "pokhara",
  "chitwan",
  "annapurna",
] as const;

export type DestinationSlug = (typeof DESTINATION_SLUGS)[number];

export function isDestinationSlug(value: string): value is DestinationSlug {
  return (DESTINATION_SLUGS as readonly string[]).includes(value);
}

/** Marketing destinations grid + standalone /destinations/[slug] pages */
export const DESTINATIONS = [
  {
    name: "Everest",
    slug: "everest" satisfies DestinationSlug,
    tagline: "Khumbu & legendary peaks",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
    description:
      "The Everest region draws trekkers seeking Sherpa hospitality, roaring rivers, and the drama of Himalayan giants. Trails like Everest Base Camp and Gokyo’s turquoise lakes weave through Sagarmatha National Park—a landscape of glaciers, prayer flags, and lodges with unforgettable views.",
  },
  {
    name: "Kathmandu",
    slug: "kathmandu" satisfies DestinationSlug,
    tagline: "Temples, culture & heritage",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80&auto=format&fit=crop",
    description:
      "Nepal’s capital is more than a gateway: ornate durbar squares, Buddhist stupas, and labyrinthine alleyways reveal centuries of art and devotion. Blend guided heritage walks with mountain flights toward Everest, hillside sunrises in Nagarkot, and leisurely coffee stops in bustling Thamel before you head deeper into the country.",
  },
  {
    name: "Pokhara",
    slug: "pokhara" satisfies DestinationSlug,
    tagline: "Lakes, Annapurna views & calm",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80&auto=format&fit=crop",
    description:
      "Phewa Lake reflects Machhapuchhre on clear mornings—this is Nepal’s Lakeside sanctuary. Paddle at sunrise, soar on a paragliding glide path, circle the Peace Pagoda, or use Pokhara as the launchpad for gentler Annapurna foothill walks and viewpoints like Sarangkot.",
  },
  {
    name: "Chitwan",
    slug: "chitwan" satisfies DestinationSlug,
    tagline: "Jungle safaris & wildlife",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80&auto=format&fit=crop",
    description:
      "Chitwan’s lowlands feel worlds apart from snowline trails. Elephant grass, hardwood forest, and the Rapti river frame safari drives and canoe outings where rhinos, deer, crocodiles—and with luck—the Bengal tiger may appear. It’s ideal after a trek when you crave warmth, wildlife, and slower afternoons.",
  },
  {
    name: "Annapurna",
    slug: "annapurna" satisfies DestinationSlug,
    tagline: "Classic treks & village trails",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop",
    description:
      "The Annapurna massif offers some of Nepal’s most varied trekking—from short Ghorepani–Poon Hill sunrises to the full Annapurna Circuit over Thorung La. Tea houses dot rhododendron forests and high pastures; Gurung and Manangi villages lend warmth, dal bhat dinners, and stories between days on the trail.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    trip: "Everest Base Camp",
    quote:
      "From the first WhatsApp message to our final day in Lukla, the team felt genuinely invested in our safety and experience.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "James & Priya Chen",
    location: "Singapore",
    trip: "Highlights of Nepal Tour",
    quote:
      "We wanted culture without rushing — they redesigned the itinerary around our kids. Transparent pricing and brilliant guides.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    trip: "Annapurna Circuit",
    quote:
      "Felt like travelling with friends who happen to be mountain experts. Already planning our return for Upper Mustang.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Emma Walsh",
    location: "Dublin, Ireland",
    trip: "Pokhara & Poon Hill",
    quote:
      "Responsive on WhatsApp at odd hours, flexible when our flight was delayed, and the sunrise at Poon Hill was unforgettable.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
] as const;

export const HOMEPAGE_TRUST_CAROUSEL_SLIDES = [
  {
    kind: "partner" as const,
    id: "himalayan-circuit",
    name: "Himalayan Circuit",
    tagline: "Nepal destination management & trekking operator",
    description:
      "Licensed ground partner for itineraries, logistics, permits, and expert-led treks—from classic teahouse routes to cultural circuits. We collaborate closely so every departure meets the same standards we’d choose for family and friends.",
    logoUrl: "https://himalayancircuit.com/images/Company/logo.png",
    href: "https://himalayancircuit.com/",
    linkLabel: "Visit partner site",
  },
  {
    kind: "atol" as const,
    id: "atol-protection",
    name: "ATOL financial protection",
    tagline: "Peace of mind for qualifying bookings",
    description:
      "Where your trip is booked as an ATOL-protected flight-inclusive package arranged through an ATOL holder, you benefit from statutory protection if an airline fails or ceases trading. We’ll explain how this applies before you confirm and pay—we’re transparent every step.",
    href: "https://www.caa.co.uk/atol-protection",
    linkLabel: "How ATOL works (Civil Aviation Authority)",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How far in advance should I book a Nepal trip?",
    answer:
      "For peak trekking seasons (March–May and September–November), we recommend booking 2–3 months ahead. Custom itineraries can often be arranged sooner — contact us on WhatsApp for availability.",
  },
  {
    question: "Do you offer fully customized private tours?",
    answer:
      "Yes. Most of our travelers choose a published route as a starting point, then we tailor duration, hotels, pace, and add-ons to match your group.",
  },
  {
    question: "What is included in the quoted price?",
    answer:
      "Each trip page lists inclusions such as guides, permits, accommodation, and meals where applicable. We provide transparent breakdowns before you confirm — no hidden fees.",
  },
  {
    question: "Is it safe to trek in Nepal?",
    answer:
      "With experienced guides, proper acclimatization, and up-to-date weather awareness, trekking is very manageable. We assess fitness levels during planning and never push beyond safe limits.",
  },
] as const;

/** Tags shown on featured tour cards (mapped by slug or index) */
export const TRIP_FEATURE_TAGS: Record<string, string[]> = {
  "everest-base-camp-trek": ["Best Seller", "Challenging"],
  "annapurna-circuit-trek-classic-trek": ["Trekking", "Classic Circuit"],
  "the-royal-annapurna-trekking": ["Easy Trek", "Off the Beaten Path"],
  "mardi-himal-base-camp-trek": ["Ridgeline Trek", "Annapurna Views"],
  "upper-mustang-trek-hidden-kingdom": ["Restricted Area", "Tibetan Culture"],
  "ghandruk-landruk-annapurna-trek-experience": ["Family Friendly", "Gurung Villages"],
  "langtang-valley-with-gosaikunda-trek": ["Langtang", "Sacred Lakes"],
  "chisapani-helambu-trek-itinerary-cost": ["Short Trek", "Near Kathmandu"],
  "pikey-base-camp-trek-everest-view": ["Everest Views", "Pikey Peak"],
  "ebc-trek-with-gokyo-lake-trekking": ["EBC + Gokyo", "Best Seller"],
  "highlights-of-nepal-tour": ["Classic Tour", "Wildlife & Culture"],
  "nepal-round-trip": ["Round Trip", "Family Friendly"],
  "monk-for-a-month-nepal": ["Spiritual Journey", "Monastery Stay"],
  "lumbini-pokhara-tour": ["Pilgrimage", "Lakes & Himalaya"],
};
