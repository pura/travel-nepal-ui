import type { PublicTrip } from "@/types/trip";
import { FALLBACK_TRIP_BEST_OF_NEPAL_TOUR } from "@/lib/fallback-trips/fallback-trips-best-of-nepal-tour";
import { FALLBACK_TRIP_GHOREPANI_POON_HILL } from "@/lib/fallback-trips/fallback-trips-ghorepani-poon-hill";
import { FALLBACK_TRIP_IMMERSIVE_BUDDHIST_SPIRITUAL_NEPAL } from "@/lib/fallback-trips/fallback-trips-immersive-buddhist-spiritual-nepal";
import { FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS } from "@/lib/fallback-trips/fallback-trips-scenic-nepal-7-days";
import { FALLBACK_TRIP_LUXURY_ANNAPURNA_TREK } from "@/lib/fallback-trips/fallback-trips-luxury-annapurna-trek";
import { FALLBACK_TRIP_YOGA_MEDITATION_NEPAL } from "@/lib/fallback-trips/fallback-trips-yoga-meditation-nepal";
import { FALLBACK_TRIP_NEPAL_PREMIUM_NATURE_CULTURE_8_DAYS } from "@/lib/fallback-trips/fallback-trips-nepal-premium-nature-culture-8-days";
import { FALLBACK_TRIP_KATHMANDU_POKHARA_EXPLORER_5_DAYS } from "@/lib/fallback-trips/fallback-trips-kathmandu-pokhara-explorer-5-days";
import { FALLBACK_TRIP_ANNAPURNA_HALF_CIRCUIT_15_DAYS } from "@/lib/fallback-trips/fallback-trips-annapurna-half-circuit-15-days";
import { FALLBACK_TRIP_EVEREST_BASE_CAMP } from "@/lib/fallback-trips/fallback-trips-everest-base-camp";
import { FALLBACK_TRIP_LANGTANG_GOSAINKUNDA_17_DAYS } from "@/lib/fallback-trips/fallback-trips-langtang-gosainkunda-17-days";
import { FALLBACK_TRIP_POON_HILL_TASTER_POKHARA_5_DAYS } from "@/lib/fallback-trips/fallback-trips-poon-hill-taster-pokhara-5-days";
import { FALLBACK_TRIP_UPPER_MUSTANG_20_DAYS } from "@/lib/fallback-trips/fallback-trips-upper-mustang-20-days";
import { FALLBACK_TRIP_EVEREST_MOUNTAIN_FLIGHT_1_DAY } from "@/lib/fallback-trips/fallback-trips-everest-mountain-flight-1-day";
import { FALLBACK_TRIP_LANGTANG_VALLEY_GANJA_LA_PASS_14_DAYS } from "@/lib/fallback-trips/fallback-trips-langtang-valley-ganja-la-pass-14-days";

/** Used when Symfony is unavailable or NEXT_PUBLIC_USE_TRIP_MOCKS=true */
export const FALLBACK_TRIPS: PublicTrip[] = [
  FALLBACK_TRIP_BEST_OF_NEPAL_TOUR,
  FALLBACK_TRIP_GHOREPANI_POON_HILL,
  FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS,
  FALLBACK_TRIP_IMMERSIVE_BUDDHIST_SPIRITUAL_NEPAL,
  FALLBACK_TRIP_LUXURY_ANNAPURNA_TREK,
  FALLBACK_TRIP_YOGA_MEDITATION_NEPAL,
  FALLBACK_TRIP_NEPAL_PREMIUM_NATURE_CULTURE_8_DAYS,
  FALLBACK_TRIP_KATHMANDU_POKHARA_EXPLORER_5_DAYS,
  FALLBACK_TRIP_ANNAPURNA_HALF_CIRCUIT_15_DAYS,
  FALLBACK_TRIP_EVEREST_BASE_CAMP,
  FALLBACK_TRIP_LANGTANG_GOSAINKUNDA_17_DAYS,
  FALLBACK_TRIP_POON_HILL_TASTER_POKHARA_5_DAYS,
  FALLBACK_TRIP_UPPER_MUSTANG_20_DAYS,
  FALLBACK_TRIP_EVEREST_MOUNTAIN_FLIGHT_1_DAY,
  FALLBACK_TRIP_LANGTANG_VALLEY_GANJA_LA_PASS_14_DAYS,
];
