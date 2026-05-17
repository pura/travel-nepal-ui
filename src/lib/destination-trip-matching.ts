import type { PublicTrip } from "@/types/trip";
import type { DestinationSlug } from "@/lib/site-config";
import {
  FEATURED_TRIP_SLUGS,
  getTripCatalogSection,
  getTrekkingRegion,
} from "@/lib/trip-catalog";

/** Search text for heuristic destination matching */
function haystack(trip: PublicTrip): string {
  return [
    trip.slug,
    trip.title,
    trip.summary,
    trip.description ?? "",
    ...(trip.interestTags ?? []),
    trip.startingRegion?.name ?? "",
    trip.startingRegion?.slug ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

/** Everest: Khumbu treks & Everest aerial experiences */
function matchesEverest(trip: PublicTrip): boolean {
  if (trip.slug === "everest-mountain-flight-1-day") return true;
  return getTrekkingRegion(trip) === "everest";
}

/** Annapurna: classic Annapurna / Ghorepani / ABC / Circuit treks */
function matchesAnnapurna(trip: PublicTrip): boolean {
  return getTrekkingRegion(trip) === "annapurna";
}

/** Pokhara: lakeside escapes, gateways, and itineraries centered on Pokhara */
function matchesPokhara(trip: PublicTrip): boolean {
  const h = haystack(trip);
  if (trip.startingRegion?.slug === "pokhara") return true;
  if (/\bpokhara\b/.test(h) || /\bphewa\b/.test(h) || /\bfewa\b/.test(h)) return true;
  if (/\bsarangkot\b/.test(h) || /\blakeside\b/.test(h)) return true;

  /** Short treks often staged from Nayapul / Pokhara without “Pokhara” in every field */
  if (trip.slug === "poon-hill-taster-pokhara-5-days") return true;

  if (trip.tripType === "trekking_hiking" && matchesAnnapurna(trip)) {
    /** Keep circuit-style treks on Annapurna unless copy clearly ties to Pokhara */
    if (/besisahar|manang|thorung|circuit/i.test(h)) return /\bpokhara\b|\bphewa\b/i.test(h);
  }

  return false;
}

/** Chitwan & Terai wildlife */
function matchesChitwan(trip: PublicTrip): boolean {
  const h = haystack(trip);
  if (trip.tripType === "wildlife_jungle") return true;
  if (/\bchitwan\b/.test(h) || /\bjungle\b/.test(h) || /\bsafari\b/.test(h)) return true;
  if (/\bbardia\b/.test(h) || /\bnarayani\b/.test(h)) return true;
  return false;
}

/** Kathmandu Valley culture, viewpoints, pilgrimages departing the capital */
function matchesKathmandu(trip: PublicTrip): boolean {
  const h = haystack(trip);

  if (trip.slug === "everest-mountain-flight-1-day") return true;

  if (matchesEverest(trip) && trip.tripType === "trekking_hiking") return false;
  if (matchesAnnapurna(trip) && trip.tripType === "trekking_hiking") return false;
  if (trip.tripType === "trekking_hiking" && /\blangtang\b|\bhelambu\b|\bmustang\b/i.test(h)) {
    return false;
  }

  if (/\bkathmandu\b/.test(h) || /\bthamel\b/.test(h)) return true;
  if (/\bbhaktapur\b/.test(h) || /\bpatan\b/.test(h) || /\bdurbar\b/.test(h)) return true;
  if (/\bboudha\b/.test(h) || /\bbouddha\b/.test(h) || /\bbouddhanath\b/.test(h)) return true;
  if (/\bswayambhu\b/.test(h) || /\bswayambhunath\b/.test(h)) return true;
  if (/\bpashupati\b/.test(h) || /\bpashupatinath\b/.test(h)) return true;
  if (/\bnagarkot\b/.test(h)) return true;

  const section = getTripCatalogSection(trip);
  if (section === "pilgrimage" && trip.startingRegion?.slug === "kathmandu-valley") return true;

  return false;
}

function matchesSlug(destinationSlug: DestinationSlug, trip: PublicTrip): boolean {
  switch (destinationSlug) {
    case "everest":
      return matchesEverest(trip);
    case "annapurna":
      return matchesAnnapurna(trip);
    case "pokhara":
      return matchesPokhara(trip);
    case "chitwan":
      return matchesChitwan(trip);
    case "kathmandu":
      return matchesKathmandu(trip);
    default:
      return false;
  }
}

function featuredOrderingIndex(trip: PublicTrip): number {
  const slug = trip.slug as (typeof FEATURED_TRIP_SLUGS)[number];
  const ix = FEATURED_TRIP_SLUGS.indexOf(slug);
  return ix === -1 ? 999 : ix;
}

/**
 * Published trips tagged for this marketing destination — global featured picks surface first.
 */
export function getTripsForDestination(
  slug: DestinationSlug,
  trips: PublicTrip[],
): PublicTrip[] {
  const matched = trips.filter((t) => matchesSlug(slug, t));
  return matched.sort((a, b) => {
    const d = featuredOrderingIndex(a) - featuredOrderingIndex(b);
    if (d !== 0) return d;
    return a.durationDays - b.durationDays;
  });
}
