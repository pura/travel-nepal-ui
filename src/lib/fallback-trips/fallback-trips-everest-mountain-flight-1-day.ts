import type { PublicTrip } from "@/types/trip";
import { DESTINATION_IMAGES, TRIP_HERO_IMAGES } from "@/lib/trip-images";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

const HERO_URL = TRIP_HERO_IMAGES["everest-mountain-flight-1-day"];

export const FALLBACK_TRIP_EVEREST_MOUNTAIN_FLIGHT_1_DAY: PublicTrip = {
  id: 16,
  slug: "everest-mountain-flight-1-day",
  title: "Everest Mountain Flight",
  summary:
    "A one-hour scenic morning flight from Kathmandu with a guaranteed window seat, flying along the Himalayan wall for views of Everest, Lhotse, Langtang, Ganesh Himal, Khumbu Glacier, and the Everest Base Camp area, with private hotel-airport transfers included.",
  description:
    "If you want Everest views but do not have time for a long trek, this is the simplest way to see the high Himalaya in one day. You are picked up early in Kathmandu and driven to the domestic terminal for a mountain flight of about one hour. The route usually tracks east across the ranges, with clear views of major peaks and glacier valleys in good weather. Cabin crew hand out a peak map so you can identify mountains like Langtang Lirung, Cho Oyu, Shishapangma, Everest, and Lhotse. After landing, a private car drops you back at your hotel. Typical group pricing is lower for larger parties (about US$250 for 1-3 people, US$240 for 4-10, and US$225 for 11-20).",
  durationDays: 1,
  tripType: "adventure",
  budgetLevel: "mid_range",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: [
    "mountain_flight",
    "everest",
    "himalaya",
    "scenic",
    "kathmandu",
    "aerial_views",
  ],
  priceFrom: { amount: "250", currency: "USD" },
  imageUrl: HERO_URL,
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  totalDistanceKm: 24,
  altitudeMaxM: 1400,
  altitudeMinM: 1300,
  routeGrades: ["Grade A (minimal walking; seated flight)"],
  galleryImageUrls: [HERO_URL, DESTINATION_IMAGES.everest],
  services: {
    included: [
      "Airport transfers by private car",
      "Scenic Everest panorama flight (about one hour)",
      "Airport tax",
      "Agency service charge and government tax/VAT",
    ],
    excluded: [
      "Accommodation and meals in Kathmandu",
      "Insurance, personal shopping, theft, and loss of property",
      "Beverages",
      "Tips to driver",
    ],
    optional: [
      "Everest helicopter tour",
      "Annapurna Base Camp helicopter tour",
      "Other scenic helicopter routes on request",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu - Mountain Flight - Kathmandu",
      description: "One-hour flight to the Himalaya",
      details:
        "Be ready early at your hotel in Kathmandu. A private car takes you to the airport for the scenic mountain flight, which lasts around one hour. In clear weather you can see Everest, Lhotse, Makalu, Kanchenjunga, Langtang peaks, Ganesh Himal, and major glacier valleys including the Khumbu side. After landing, your driver transfers you back to your hotel.",
      destinationName: "Kathmandu",
    },
  ],
};
