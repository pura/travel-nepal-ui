import type { PublicTrip } from "@/types/trip";
import { FALLBACK_TRIP_GHOREPANI_POON_HILL } from "@/lib/fallback-trips/fallback-trips-ghorepani-poon-hill";
import { FALLBACK_TRIP_BUDDHIST_PILGRIMAGE_TOUR } from "@/lib/fallback-trips/fallback-trips-buddhist-pilgrimage-tour";
import { FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS } from "@/lib/fallback-trips/fallback-trips-scenic-nepal-7-days";
import { FALLBACK_TRIP_ANNAPURNA_CIRCUIT_CLASSIC_TREK } from "@/lib/fallback-trips/fallback-trips-annapurna-circuit-trek-classic-trek";
import { FALLBACK_TRIP_KATHMANDU_POKHARA_CHITWAN_EXPERIENCE_NEPAL } from "@/lib/fallback-trips/fallback-trips-kathmandu-pokhara-chitwan-experience-nepal";
import { FALLBACK_TRIP_EXPLORE_ANNAPURNA_BASE_CAMP_17_DAYS } from "@/lib/fallback-trips/fallback-trips-explore-annapurna-base-camp-17-days";
import { FALLBACK_TRIP_EVEREST_BASE_CAMP } from "@/lib/fallback-trips/fallback-trips-everest-base-camp";
import { FALLBACK_TRIP_POON_HILL_TASTER_POKHARA_5_DAYS } from "@/lib/fallback-trips/fallback-trips-poon-hill-taster-pokhara-5-days";
import { FALLBACK_TRIP_UPPER_MUSTANG_TREK_HIDDEN_KINGDOM } from "@/lib/fallback-trips/fallback-trips-upper-mustang-trek-hidden-kingdom";
import { FALLBACK_TRIP_EVEREST_MOUNTAIN_FLIGHT_1_DAY } from "@/lib/fallback-trips/fallback-trips-everest-mountain-flight-1-day";
import { FALLBACK_TRIP_LANGTANG_VALLEY_GANJA_LA_PASS_14_DAYS } from "@/lib/fallback-trips/fallback-trips-langtang-valley-ganja-la-pass-14-days";
import { FALLBACK_TRIP_THE_ROYAL_ANNAPURNA_TREKKING } from "@/lib/fallback-trips/fallback-trips-the-royal-annapurna-trekking";
import { FALLBACK_TRIP_MARDI_HIMAL_BASE_CAMP_TREK } from "@/lib/fallback-trips/fallback-trips-mardi-himal-base-camp-trek";
import { FALLBACK_TRIP_GHANDRUK_LANDRUK_ANNAPURNA_TREK_EXPERIENCE } from "@/lib/fallback-trips/fallback-trips-ghandruk-landruk-annapurna-trek-experience";
import { FALLBACK_TRIP_LANGTANG_VALLEY_WITH_GOSAIKUNDA_TREK } from "@/lib/fallback-trips/fallback-trips-langtang-valley-with-gosaikunda-trek";
import { FALLBACK_TRIP_CHISAPANI_HELAMBU_TREK } from "@/lib/fallback-trips/fallback-trips-chisapani-helambu-trek-itinerary-cost";
import { FALLBACK_TRIP_PIKEY_BASE_CAMP_TREK_EVEREST_VIEW } from "@/lib/fallback-trips/fallback-trips-pikey-base-camp-trek-everest-view";
import { FALLBACK_TRIP_EBC_TREK_WITH_GOKYO_LAKE_TREKKING } from "@/lib/fallback-trips/fallback-trips-ebc-trek-with-gokyo-lake-trekking";
import { FALLBACK_TRIP_HIGHLIGHTS_OF_NEPAL_TOUR } from "@/lib/fallback-trips/fallback-trips-highlights-of-nepal-tour";
import { FALLBACK_TRIP_NEPAL_ROUND_TRIP } from "@/lib/fallback-trips/fallback-trips-nepal-round-trip";
import { FALLBACK_TRIP_MONK_FOR_A_MONTH_NEPAL } from "@/lib/fallback-trips/fallback-trips-monk-for-a-month-nepal";
import { FALLBACK_TRIP_LUMBINI_POKHARA_TOUR } from "@/lib/fallback-trips/fallback-trips-lumbini-pokhara-tour";

/** Used when Symfony is unavailable or NEXT_PUBLIC_USE_TRIP_MOCKS=true */
export const FALLBACK_TRIPS: PublicTrip[] = [
  FALLBACK_TRIP_GHOREPANI_POON_HILL,
  FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS,
  FALLBACK_TRIP_BUDDHIST_PILGRIMAGE_TOUR,
  FALLBACK_TRIP_ANNAPURNA_CIRCUIT_CLASSIC_TREK,
  FALLBACK_TRIP_KATHMANDU_POKHARA_CHITWAN_EXPERIENCE_NEPAL,
  FALLBACK_TRIP_EXPLORE_ANNAPURNA_BASE_CAMP_17_DAYS,
  FALLBACK_TRIP_EVEREST_BASE_CAMP,
  FALLBACK_TRIP_POON_HILL_TASTER_POKHARA_5_DAYS,
  FALLBACK_TRIP_UPPER_MUSTANG_TREK_HIDDEN_KINGDOM,
  FALLBACK_TRIP_EVEREST_MOUNTAIN_FLIGHT_1_DAY,
  FALLBACK_TRIP_LANGTANG_VALLEY_GANJA_LA_PASS_14_DAYS,
  FALLBACK_TRIP_THE_ROYAL_ANNAPURNA_TREKKING,
  FALLBACK_TRIP_MARDI_HIMAL_BASE_CAMP_TREK,
  FALLBACK_TRIP_GHANDRUK_LANDRUK_ANNAPURNA_TREK_EXPERIENCE,
  FALLBACK_TRIP_LANGTANG_VALLEY_WITH_GOSAIKUNDA_TREK,
  FALLBACK_TRIP_CHISAPANI_HELAMBU_TREK,
  FALLBACK_TRIP_PIKEY_BASE_CAMP_TREK_EVEREST_VIEW,
  FALLBACK_TRIP_EBC_TREK_WITH_GOKYO_LAKE_TREKKING,
  FALLBACK_TRIP_HIGHLIGHTS_OF_NEPAL_TOUR,
  FALLBACK_TRIP_NEPAL_ROUND_TRIP,
  FALLBACK_TRIP_MONK_FOR_A_MONTH_NEPAL,
  FALLBACK_TRIP_LUMBINI_POKHARA_TOUR,
];
