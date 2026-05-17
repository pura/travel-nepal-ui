import type { PublicTrip } from "@/types/trip";

export type TripCatalogSectionId = "trekking" | "tours_experience" | "pilgrimage";

export type TrekkingRegionId = "annapurna" | "everest" | "other";

export const TRIP_CATALOG_SECTIONS: {
  id: TripCatalogSectionId;
  title: string;
  description: string;
  anchor: string;
}[] = [
  {
    id: "trekking",
    title: "Trekking",
    description:
      "Multi-day hikes through the Himalayas—from classic teahouse routes to quieter village trails.",
    anchor: "trekking",
  },
  {
    id: "tours_experience",
    title: "Tours & Experiences",
    description:
      "Culture, wildlife, lakes, and city itineraries with comfortable lodges and guided sightseeing.",
    anchor: "tours-experiences",
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage & Spiritual Journeys",
    description:
      "Buddhist and Hindu heritage, monastery stays, Lumbini, and reflective journeys across Nepal.",
    anchor: "pilgrimage",
  },
];

export const TREKKING_REGIONS: { id: TrekkingRegionId; title: string }[] = [
  { id: "annapurna", title: "Annapurna Region" },
  { id: "everest", title: "Everest Region" },
  { id: "other", title: "Other Regions" },
];

/** Explicit overrides for known catalog slugs (fallback + Symfony). */
const TREKKING_REGION_BY_SLUG: Partial<Record<string, TrekkingRegionId>> = {
  "annapurna-circuit-trek-classic-trek": "annapurna",
  "explore-annapurna-base-camp-in-17-days": "annapurna",
  "ghandruk-landruk-annapurna-trek-experience": "annapurna",
  "ghorepani-poon-hill": "annapurna",
  "mardi-himal-base-camp-trek": "annapurna",
  "poon-hill-taster-pokhara-5-days": "annapurna",
  "the-royal-annapurna-trekking": "annapurna",
  "everest-base-camp-trek": "everest",
  "ebc-trek-with-gokyo-lake-trekking": "everest",
  "pikey-base-camp-trek-everest-view": "everest",
  "chisapani-helambu-trek-itinerary-cost": "other",
  "langtang-valley-trek-with-ganja-la-pass": "other",
  "langtang-valley-with-gosaikunda-trek": "other",
  "upper-mustang-trek-hidden-kingdom": "other",
};

export type GroupedTripsCatalog = {
  trekking: Record<TrekkingRegionId, PublicTrip[]>;
  toursExperience: PublicTrip[];
  pilgrimage: PublicTrip[];
};

function compareTripsByTitle(a: PublicTrip, b: PublicTrip): number {
  return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
}

export function getTripCatalogSection(trip: PublicTrip): TripCatalogSectionId {
  if (trip.tripType === "spiritual_pilgrimage") return "pilgrimage";
  if (trip.tripType === "trekking_hiking") return "trekking";
  return "tours_experience";
}

export function getTrekkingRegion(trip: PublicTrip): TrekkingRegionId {
  const override = TREKKING_REGION_BY_SLUG[trip.slug];
  if (override) return override;

  const haystack = [
    trip.slug,
    trip.title,
    ...(trip.interestTags ?? []),
    trip.startingRegion?.slug ?? "",
    trip.startingRegion?.name ?? "",
  ]
    .join(" ")
    .toLowerCase();

  if (/\b(everest|ebc|khumbu|gokyo|lukla|sagarmatha|solu|pikey)\b/.test(haystack)) {
    return "everest";
  }

  if (
    /\b(annapurna|poon[\s-]?hill|ghorepani|mardi|ghandruk|landruk|abc\b|machhapuchhre|fishtail)\b/.test(
      haystack,
    )
  ) {
    return "annapurna";
  }

  return "other";
}

export function groupTripsForCatalog(trips: PublicTrip[]): GroupedTripsCatalog {
  const catalog: GroupedTripsCatalog = {
    trekking: { annapurna: [], everest: [], other: [] },
    toursExperience: [],
    pilgrimage: [],
  };

  for (const trip of trips) {
    const section = getTripCatalogSection(trip);
    if (section === "trekking") {
      const region = getTrekkingRegion(trip);
      catalog.trekking[region].push(trip);
    } else if (section === "pilgrimage") {
      catalog.pilgrimage.push(trip);
    } else {
      catalog.toursExperience.push(trip);
    }
  }

  for (const region of TREKKING_REGIONS) {
    catalog.trekking[region.id].sort(compareTripsByTitle);
  }
  catalog.toursExperience.sort(compareTripsByTitle);
  catalog.pilgrimage.sort(compareTripsByTitle);

  return catalog;
}

export function countCatalogTrips(catalog: GroupedTripsCatalog): number {
  return (
    catalog.trekking.annapurna.length +
    catalog.trekking.everest.length +
    catalog.trekking.other.length +
    catalog.toursExperience.length +
    catalog.pilgrimage.length
  );
}

/**
 * Homepage featured picks. Order is display order on the home page.
 */
export const FEATURED_TRIP_SLUGS = [
  "ghorepani-poon-hill",
  "lumbini-pokhara-tour",
  "kathmandu-pokhara-chitwan-experience-nepal",
  "upper-mustang-trek-hidden-kingdom",
  "everest-base-camp-trek",
  "annapurna-circuit-trek-classic-trek",
] as const;

function pickDiverseFallback(
  trips: PublicTrip[],
  selected: PublicTrip[],
  limit: number,
): PublicTrip[] {
  const used = new Set(selected.map((t) => t.slug));
  const remaining = trips.filter((t) => !used.has(t.slug));
  const catalog = groupTripsForCatalog(remaining);

  const buckets: PublicTrip[][] = [
    catalog.trekking.annapurna,
    catalog.trekking.everest,
    catalog.trekking.other,
    catalog.toursExperience,
    catalog.pilgrimage,
  ];

  const picks: PublicTrip[] = [...selected];
  const sortByDuration = (a: PublicTrip, b: PublicTrip) =>
    a.durationDays - b.durationDays;

  for (const bucket of buckets) {
    if (picks.length >= limit) break;
    const next = [...bucket].sort(sortByDuration)[0];
    if (next) {
      picks.push(next);
      used.add(next.slug);
    }
  }

  if (picks.length < limit) {
    const rest = remaining
      .filter((t) => !used.has(t.slug))
      .sort(sortByDuration);
    picks.push(...rest.slice(0, limit - picks.length));
  }

  return picks.slice(0, limit);
}

export function getFeaturedTrips(trips: PublicTrip[], limit = 6): PublicTrip[] {
  const bySlug = new Map(trips.map((t) => [t.slug, t]));
  const featured: PublicTrip[] = [];

  for (const slug of FEATURED_TRIP_SLUGS) {
    const trip = bySlug.get(slug);
    if (trip) featured.push(trip);
    if (featured.length >= limit) break;
  }

  if (featured.length >= limit) return featured.slice(0, limit);

  return pickDiverseFallback(trips, featured, limit);
}
