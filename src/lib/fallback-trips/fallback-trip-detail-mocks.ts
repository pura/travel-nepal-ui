import type { PublicTrip } from "@/types/trip";

/** Shared mock blocks so every catalogue trip exercises the extended detail schema. */
export const FALLBACK_DETAIL_MOCK_CITY_TOUR: Partial<PublicTrip> = {
  totalDistanceKm: 85,
  altitudeMaxM: 1600,
  altitudeMinM: 1300,
  routeGrades: ["Grade A (sightseeing and short walks)"],
  fitnessNotes: ["Comfortable walking shoes for monuments and markets"],
  recommendedSeasons: ["Year-round (clearer skies Sep–Nov, Feb–May)"],
  mapImageUrl: null,
  bookingFeeItems: ["Monument tickets where listed", "City guide services"],
  gearChecklist: [
    "Comfortable walking shoes",
    "Light day pack",
    "Sun hat and sunglasses",
    "Reusable water bottle",
    "Light rain shell",
  ],
  trekkingGradeNotes:
    "Urban and cultural days are graded for gentle walking; optional add-ons may increase intensity.",
  faq: [
    {
      question: "Are monument fees included?",
      answer:
        "Check the Included list for your trip—many city tours price entrance tickets separately so you pay locally.",
    },
  ],
  reviewSnippets: [
    { name: "Samira K.", location: "UAE", date: "2025-11-02" },
    { name: "Jon & Lin", location: "USA", date: "2025-10-18" },
  ],
};

export const FALLBACK_DETAIL_MOCK_HILL_TREK: Partial<PublicTrip> = {
  totalDistanceKm: 140,
  altitudeMaxM: 3800,
  altitudeMinM: 1300,
  routeGrades: ["Grade B (moderate trekking)"],
  fitnessNotes: ["Regular hill walking", "Ascents of several hours"],
  recommendedSeasons: ["March–May", "September–November"],
  mapImageUrl: null,
  bookingFeeItems: ["TIMS / permits as listed", "Guide & porter allocation"],
  gearChecklist: [
    "Broken-in hiking boots",
    "Trekking poles",
    "Layered clothing",
    "Headlamp",
    "Sleeping bag (season rated)",
    "Water purification",
    "Sun protection",
  ],
  trekkingGradeNotes:
    "Moderate treks include sustained climbs; review our full grading PDF before booking.",
  faq: [
    {
      question: "What weather should I expect?",
      answer:
        "Spring and autumn are generally stable; mountain weather can still change quickly—pack layers.",
    },
  ],
  reviewSnippets: [
    { name: "Helena M.", location: "Germany", date: "2025-10-04" },
    { name: "Chris & Mo", location: "UK", date: "2025-09-21" },
  ],
};

export const FALLBACK_DETAIL_MOCK_HIGH_PASS: Partial<PublicTrip> = {
  totalDistanceKm: 220,
  altitudeMaxM: 5200,
  altitudeMinM: 1300,
  routeGrades: ["Grade C (difficult)", "Grade D (very strenuous sections)"],
  fitnessNotes: ["Prior multi-day trekking", "Strength and stamina for passes"],
  recommendedSeasons: ["March–May", "September–November"],
  mapImageUrl: null,
  bookingFeeItems: ["Restricted-area permits", "High-camp logistics"],
  gearChecklist: [
    "Crampons/micro-spikes if advised",
    "Four-season sleeping bag",
    "Insulated layers",
    "Goggles or sunglasses (high UV)",
    "Robust trekking boots",
    "Emergency whistle & warm hat",
  ],
  trekkingGradeNotes:
    "High-pass itineraries assume comfort at altitude and exposure to rough trails; confirm medical fitness.",
  faq: [
    {
      question: "Do I need prior trekking experience?",
      answer:
        "For Grade C/D routes we recommend documented multi-day mountain trekking before joining.",
    },
  ],
  reviewSnippets: [
    { name: "Ingrid V.", location: "Norway", date: "2025-08-30" },
    { name: "Leo T.", location: "France", date: "2025-08-12" },
  ],
};
