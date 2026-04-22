import type { PublicTrip } from "@/types/trip";
import { FALLBACK_TRIP_BEST_OF_NEPAL_TOUR } from "@/lib/fallback-trips/fallback-trips-best-of-nepal-tour";
import { FALLBACK_TRIP_GHOREPANI_POON_HILL } from "@/lib/fallback-trips/fallback-trips-ghorepani-poon-hill";
import { FALLBACK_TRIP_IMMERSIVE_BUDDHIST_SPIRITUAL_NEPAL } from "@/lib/fallback-trips/fallback-trips-immersive-buddhist-spiritual-nepal";
import { FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS } from "@/lib/fallback-trips/fallback-trips-scenic-nepal-7-days";

/** Used when Symfony is unavailable or NEXT_PUBLIC_USE_TRIP_MOCKS=true */
export const FALLBACK_TRIPS: PublicTrip[] = [
  FALLBACK_TRIP_BEST_OF_NEPAL_TOUR,
  FALLBACK_TRIP_GHOREPANI_POON_HILL,
  FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS,
  FALLBACK_TRIP_IMMERSIVE_BUDDHIST_SPIRITUAL_NEPAL,
];
