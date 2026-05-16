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

export const DESTINATIONS = [
  {
    name: "Everest",
    slug: "everest",
    tagline: "Khumbu & legendary peaks",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Kathmandu",
    slug: "kathmandu",
    tagline: "Temples, culture & heritage",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Pokhara",
    slug: "pokhara",
    tagline: "Lakes, Annapurna views & calm",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Chitwan",
    slug: "chitwan",
    tagline: "Jungle safaris & wildlife",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e58f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Annapurna",
    slug: "annapurna",
    tagline: "Classic treks & village trails",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop",
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
    trip: "Best of Nepal Tour",
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

export const TEAM = {
  founder: {
    name: "Rajesh Thapa",
    role: "Founder & Lead Guide",
    bio: "Born in Solukhumbu, Rajesh has led treks across Nepal for over a decade. He started Easy Travel Nepal to offer honest, locally rooted journeys — the kind he wished existed when family visited from abroad.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
  },
  highlights: [
    "Licensed trekking guides & insured operations",
    "Small groups and private departures",
    "Partnerships with community lodges",
  ],
} as const;

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
  "best-of-nepal-tour": ["Family Friendly", "Private Tour"],
  "luxury-annapurna-trek": ["Premium", "Private Tour"],
};
