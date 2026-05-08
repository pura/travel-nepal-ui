import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_HIGH_PASS } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_ANNAPURNA_HALF_CIRCUIT_15_DAYS: PublicTrip = {
  id: 11,
  slug: "annapurna-half-circuit-trek-15-days",
  title: "15-Day Trekking Tour in Annapurna, Nepal",
  summary:
    "Lodge-to-lodge trekking on the Annapurna half-circuit: Marshyangdi villages to Manang, a rest day for altitude, then Yak Kharka and Thorung Phedi before crossing Thorung La to Muktinath and walking down to Jomsom. Shared bus and jeep to the trail, a Jomsom–Pokhara flight, then tourist bus back to Kathmandu.",
  description:
    "This is the classic half-circle route up the Manang side of the range and over Thorung La, not the full road loop. You travel by public bus to Besisahar, jeep to Syange, then trek through Chame, Pisang, and Manang with a built-in acclimatisation day. After Yak Kharka and Thorung Phedi you cross the pass to Muktinath—sacred to Hindus and Buddhists—then descend to Jomsom and fly to Pokhara before a deluxe tourist bus to Kathmandu. Lodges are simple twin or triple rooms; the crew includes an English-speaking escort and trekking guide from Kathmandu, porters on a 2:1 basis, permits, and basic trekking kit on loan.",
  durationDays: 15,
  tripType: "trekking_hiking",
  budgetLevel: "mid_range",
  comfortLevel: "basic",
  difficultyLevel: "challenging",
  interestTags: [
    "trekking",
    "annapurna",
    "thorung_la",
    "muktinath",
    "manang",
    "himalaya",
    "culture",
  ],
  priceFrom: { amount: "910", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_HIGH_PASS,
  totalDistanceKm: 180,
  altitudeMaxM: 5416,
  galleryImageUrls: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"],
  services: {
    included: [
      "Jomsom–Pokhara one-way flight ticket, if applicable",
      "Domestic airport tax, if applicable",
      "Two nights at a hotel in Kathmandu (shared occupancy)",
      "One night at a hotel in Pokhara (twin/triple share basis)",
      "12 days accommodation in local lodges (twin/triple share basis)",
      "Daily breakfast at hotels in Kathmandu and Pokhara",
      "All meals (breakfast, lunch, and dinner) during Annapurna half-circuit trekking at local lodges",
      "Airport transfers in Kathmandu by private vehicle with assistance",
      "Necessary bus-station transfers in Kathmandu and Pokhara via private vehicle",
      "Kathmandu sightseeing by private vehicle",
      "English-speaking guide for Kathmandu sightseeing",
      "Kathmandu to Besisahar by public bus (shared)",
      "Besisahar to Syange by shared jeep",
      "Pokhara to Kathmandu by deluxe tourist bus (shared)",
      "English-speaking escort and trekking guide from Kathmandu for 12 days trekking",
      "Necessary porter for trekking (2 clients = 1 porter)",
      "Trekking crew allowances, insurance, food, and accommodation",
      "First-aid box",
      "Toilet paper",
      "Dry fruit for high-altitude days",
      "Sleeping bag, down jacket, and kit bag on returnable basis",
      "Trekking map",
      "Permit-related paperwork and arrangements",
      "Annapurna Conservation Area permit fee, as applicable",
      "TIMS fee, as applicable",
      "Free calls in emergency situations from cellular phone (guide will carry phone)",
      "Vehicle-related costs as applicable for fuel, parking, and toll taxes",
      "Government taxes as applicable",
    ],
    excluded: [
      "Monument entrance fees at monuments in Kathmandu",
      "Personal insurance",
      "Tea, coffee, hot water, hot shower, and battery charging during trekking",
      "Tips to guide, porter, and driver (recommended)",
    ],
    optional: ["Extra nights in Kathmandu can be arranged at extra cost"],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – arrival – Patan",
      description: "The City of Beauty",
      details:
        "You are met at the airport and taken to a central Kathmandu hotel. Later your guide leads a half-day tour of Patan, the valley town known for metalwork and carving. You walk Durbar Square, the Krishna Mandir, the Mahabodhi shrine, and the Golden Temple, pass medieval palace courtyards, and see everyday Newar life in the back lanes before returning to the hotel.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – Besisahar – Syange",
      description: "Bus and jeep to the trailhead",
      details:
        "The guide meets you at the hotel and you go to Kathmandu’s bus station for the long public bus ride to Besisahar. There you change to a shared jeep for the rougher stretch to Syange, where you check into a lodge, have dinner, and turn in early.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Syange",
    },
    {
      dayNumber: 3,
      title: "Syange – Jagat",
      description: "First full trek day",
      details:
        "You leave Syange on foot through hills and scattered villages, breaking for lunch on the trail, and finish the day at a lodge in Jagat with dinner and a quiet evening.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Jagat",
    },
    {
      dayNumber: 4,
      title: "Jagat – Dharapani",
      description: "Toward the big peaks",
      details:
        "The path crosses Chamje and a suspension bridge over the Marshyangdi, then climbs toward Tal on a rough track. After lunch you continue to Dharapani for the night.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Dharapani",
    },
    {
      dayNumber: 5,
      title: "Dharapani – Chame",
      description: "Villages under Lamjung and Annapurna",
      details:
        "From Dharapani the trail lifts into forest and openings with Lamjung Himal, Annapurna II, and Annapurna IV on the skyline. You lunch along the way and reach Chame, the district hub, for dinner and sleep.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chame",
    },
    {
      dayNumber: 6,
      title: "Chame – Pisang",
      description: "Stone paths and wide views",
      details:
        "A mix of forest walking and carved stone stair sections brings you toward Pisang. After a midday break you continue into upper Pisang or lower Pisang (depending on the lodge plan) with strong views of Annapurna and Pisang Peak.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Pisang",
    },
    {
      dayNumber: 7,
      title: "Pisang – Manang",
      description: "Into the main valley",
      details:
        "This is a longer stage with a choice of upper or lower trails in places. After lunch you pass Braga with its monastery wall and stacked houses, then drop into Manang village for the night.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Manang",
    },
    {
      dayNumber: 8,
      title: "Manang – acclimatisation",
      description: "Rest or short walks",
      details:
        "No gain in sleeping altitude today. You can take a gentle side hike—toward Ice Lake or Gangapurna viewpoint—or explore Manang’s bakeries, clinics, and shops while your body adjusts to the height.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Manang",
    },
    {
      dayNumber: 9,
      title: "Manang – Yak Kharka",
      description: "Pastures below the pass",
      details:
        "The trail climbs the Marshyangdi valley through scrub and grassland where yaks graze, past mani walls and prayer flags, to Yak Kharka and a simple lodge night.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Yak Kharka",
    },
    {
      dayNumber: 10,
      title: "Yak Kharka – Thorung Phedi",
      description: "Below the pass",
      details:
        "A short but important day: you gain height to Thorung Phedi at the foot of Thorung Peak, with close views of Gangapurna and the rock walls leading to the col. Rest in the afternoon, eat well, and sleep early before the pass crossing.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Thorung Phedi",
    },
    {
      dayNumber: 11,
      title: "Thorung Phedi – Thorung La – Muktinath",
      description: "Pass day",
      details:
        "You start before dawn for the climb to Thorung La (5,416 m), then descend a long slope toward Muktinath. The temple complex draws Hindu and Buddhist pilgrims; you may see butter lamps, eternal flame, and 108 spouts. Lodge night in Ranipauwa or nearby.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Muktinath",
    },
    {
      dayNumber: 12,
      title: "Muktinath – Jomsom",
      description: "Wind down the Kali Gandaki",
      details:
        "Mostly downhill walking through the dry Kali Gandaki valley to Jomsom, the district airstrip town. After lunch there is time to look around before dinner at the lodge.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Jomsom",
    },
    {
      dayNumber: 13,
      title: "Jomsom – Pokhara",
      description: "Flight to the lake",
      details:
        "Breakfast, then transfer to the airport for the short flight to Pokhara (weather permitting). A driver takes you to the hotel; the rest of the day is free by the lake.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 14,
      title: "Pokhara – Kathmandu",
      description: "Tourist bus to the capital",
      details:
        "You are dropped at the Pokhara bus station for the deluxe tourist bus to Kathmandu, with a packed breakfast from the hotel for the road. In Kathmandu you transfer to the hotel for your last night.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 15,
      title: "Kathmandu – departure",
      description: "Airport transfer",
      details:
        "Timed private transfer to Tribhuvan International Airport for your outward flight.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
