/** Brand + contact constants for Easy Travel Nepal */

import { DESTINATION_IMAGES } from "@/lib/trip-images";

export const SITE = {
  name: "Easy Travel Nepal",
  tagline: "UK-based Nepal trekking specialists — Himalayan expertise delivered by trusted local partners.",
  /** Single-line strapline next to logo and in snippets */
  brandSlogan: "Guided in Nepal . Planned in the UK",
  url: "https://www.easytravelnepal.com",
  email: "info@easytravelnepal.com",
  /** Nepal operations coordination */
  phone: "+977 1 4423456",
  address: "Operations: Thamel, Kathmandu, Nepal",
  /** Editorial positioning — augment with registrar details when validated */
  ukRegistrationNote:
    "Easy Travel Nepal is a UK-arranged Himalayan trekking specialist: British continuity for quotations, escalation, briefing, revisions—synced with vetted Kathmandu operators delivering Everest-region, Annapurna, Langtang, Mustang & customised Nepal trekking programmes on the ground.",
  /** Narrow ATOL reference for flight-inclusive statutory packages only */
  atolTransparencyLine:
    "Where UK law mandates ATOL for a packaged flight-inclusive holiday, applicability is clarified before you commit. Most itineraries isolate Himalayan logistics while travellers secure long-haul seats independently.",
} as const;

export const SITE_SLOGAN = SITE.brandSlogan;

export const TRUST_BADGES = [
  { label: "Local Experts", icon: "compass" },
  { label: "UK Based Support", icon: "users" },
  { label: "Custom Tours", icon: "route" },
  { label: "24/7 Support", icon: "headset" },
] as const;

export const WHY_BOOK = [
  {
    title: "UK booking & accountability",
    description:
      "Plan and pay through a British travel specialist with clear replies in your timezone—before departure and if anything needs resolving.",
    icon: "users",
  },
  {
    title: "Nepal trekking teams on the trail",
    description:
      "Licensed local guides who live the routes: acclimatisation, lodges, pacing, weather calls, and real mountain judgement.",
    icon: "compass",
  },
  {
    title: "Truly personalised treks",
    description:
      "Everest Base Camp, Annapurna, Langtang—or a custom rhythm built around fitness, altitude comfort, rest days, and side trips.",
    icon: "route",
  },
  {
    title: "Airport meet & onward logistics",
    description:
      "Coordinated pickups, permits, transfers, and hotel nights so your first hours in Kathmandu feel effortless. You arrange flights; we own the Nepal ground.",
    icon: "map",
  },
  {
    title: "Safety-led mountain planning",
    description:
      "Conservative itineraries, communication protocols, evacuation awareness, and equipment checks—we don’t cut corners above the treeline.",
    icon: "shield",
  },
  {
    title: "Trusted Kathmandu partners",
    description:
      "Long-standing logistics operator relationships with shared standards—not anonymous subcontracting.",
    icon: "bed",
  },
  {
    title: "No hidden trekking fees",
    description:
      "Written inclusions/exclusions upfront: permits, guide wages, lodges, transfers—what you approve is what you pay for.",
    icon: "receipt",
  },
  {
    title: "Responsive communication",
    description:
      "AI assistant and email access to your planners and coordinators—typically within hours—evening UK time overlaps where it matters.",
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
    image: DESTINATION_IMAGES.everest,
    description:
      "The Everest region draws trekkers seeking Sherpa hospitality, roaring rivers, and the drama of Himalayan giants. Trails like Everest Base Camp and Gokyo’s turquoise lakes weave through Sagarmatha National Park—a landscape of glaciers, prayer flags, and lodges with unforgettable views.",
  },
  {
    name: "Kathmandu",
    slug: "kathmandu" satisfies DestinationSlug,
    tagline: "Temples, culture & heritage",
    image: DESTINATION_IMAGES.kathmandu,
    description:
      "Nepal’s capital is more than a gateway: ornate durbar squares, Buddhist stupas, and labyrinthine alleyways reveal centuries of art and devotion. Blend guided heritage walks with mountain flights toward Everest, hillside sunrises in Nagarkot, and leisurely coffee stops in bustling Thamel before you head deeper into the country.",
  },
  {
    name: "Pokhara",
    slug: "pokhara" satisfies DestinationSlug,
    tagline: "Lakes, Annapurna views & calm",
    image: DESTINATION_IMAGES.pokhara,
    description:
      "Phewa Lake reflects Machhapuchhre on clear mornings—this is Nepal’s Lakeside sanctuary. Paddle at sunrise, soar on a paragliding glide path, circle the Peace Pagoda, or use Pokhara as the launchpad for gentler Annapurna foothill walks and viewpoints like Sarangkot.",
  },
  {
    name: "Chitwan",
    slug: "chitwan" satisfies DestinationSlug,
    tagline: "Jungle safaris & wildlife",
    image: DESTINATION_IMAGES.chitwan,
    description:
      "Chitwan’s lowlands feel worlds apart from snowline trails. Elephant grass, hardwood forest, and the Rapti river frame safari drives and canoe outings where rhinos, deer, crocodiles—and with luck—the Bengal tiger may appear. It’s ideal after a trek when you crave warmth, wildlife, and slower afternoons.",
  },
  {
    name: "Annapurna",
    slug: "annapurna" satisfies DestinationSlug,
    tagline: "Classic treks & village trails",
    image: DESTINATION_IMAGES.annapurna,
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
      "From the first message to our final day in Lukla, the team felt genuinely invested in our safety and experience.",
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
      "Responsive by email at odd hours, flexible when our flight was delayed, and the sunrise at Poon Hill was unforgettable.",
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
    tagline: "Principal Nepal trekking & touring operator",
    description:
      "Our Kathmandu-ground partner manages permits, lodges, staffing, transports, teahouse relationships, and on-trail escalation—everything that turns a spreadsheet into a safe, memorable trek.",
    logoUrl: "https://himalayancircuit.com/images/Company/logo.png",
    href: "https://himalayancircuit.com/",
    linkLabel: "Visit Himalayan Circuit",
  },
  {
    kind: "positioning" as const,
    id: "uk-nepal-model",
    name: "UK standards. Himalayan delivery.",
    tagline: "One booking relationship, seamless execution",
    description:
      "You contract with Easy Travel Nepal in the UK for clarity and consumer confidence. Specialists in Kathmandu then execute—with the same trekking director checking permits, lodges, briefing notes, and guide assignments before your boots touch the trail.",
    href: "/#uk-nepal-trust-heading",
    linkLabel: "How we blend UK support & Nepal ops",
    headerIcon: "shield" as const,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you arrange international flights to Nepal?",
    answer:
      "Most guests book long-haul flights themselves so they can use miles, carriers they prefer, or flexible fares. Easy Travel Nepal focuses on onward Nepal logistics—airport meet-and-greet, Kathmandu hotels, domestic flights inside Nepal when needed (unless you prefer differently), trekking permits, teahouses, transfers, guides, and safety briefing. Tell us which flight you intend to arrive on and we build the trekking calendar around it.",
  },
  {
    question: "How far in advance should I book a Nepal trip?",
    answer:
      "For peak trekking seasons (March–May and September–November), we recommend booking 2–3 months ahead. Custom itineraries can often be arranged sooner — use our plan-your-trip form or AI assistant for availability.",
  },
  {
    question: "Do you offer fully customised private treks?",
    answer:
      "Yes—most groups start from a published route and we adjust lodges, pacing, contingency nights, summit buffers, photographic layovers, family-friendly variants, pilgrimage add-ons or jungle codas. Brief us openly on fitness and altitude history from the UK; we align routing with what your body realistically tolerates.",
  },
  {
    question: "What is included in the quoted trekking price?",
    answer:
      "Each trekking page inventories guide wages, teahouses, permits/TIMS, Kathmandu handling, outlined meals/transfers/window seats on domestic hops when spelled out, contingency buffer nights if stated—and how payments split consultation vs Nepal execution invoices. Hidden fee culture doesn’t survive our quoting workflow.",
  },
  {
    question: "Is trekking in Nepal safe with your teams?",
    answer:
      "Altitude carries inherent risk—we phase acclimatisation, cap daily ascent sensibly, run wellness checks higher on the hill, rehearse contingency comms including helicopter escalation literacy, deploy senior Sherpa-leading teams matched to itinerary grade, transparently reschedule when instability spikes. Candour beats bravado: we downgrade objectives before reckless optimism gambles guests.",
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
