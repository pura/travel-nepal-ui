import type { PublicTrip } from "@/types/trip";

export const FALLBACK_TRIP_KATHMANDU_POKHARA_EXPLORER_5_DAYS: PublicTrip = {
  id: 10,
  slug: "kathmandu-pokhara-explorer-5-days",
  title: "Nepal 5-Day Kathmandu & Pokhara Explorer",
  summary:
    "Private car and guide for five days between Nepal’s two busiest visitor hubs: Patan and two great shrines in Kathmandu, then a road trip to Pokhara for Sarangkot at dawn, a city loop with a one-hour lake boat ride, and the drive back for a final half-day before your flight.",
  description:
    "This is a compact private circuit—no domestic flights unless you add the optional Everest sightseeing flight. You get Patan’s carved courtyards and lanes on arrival day, roughly five and a half hours on the highway each way between the capital and Pokhara, and clear mountain-and-lake scenery from Sarangkot and Phewa. Entry tickets to monuments are left off the package price so you pay on the spot; breakfast is included four times as listed, while other meals are yours to choose.",
  durationDays: 5,
  tripType: "cultural_heritage",
  budgetLevel: "budget",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: [
    "culture",
    "pokhara",
    "kathmandu",
    "heritage",
    "lakes",
    "private_tour",
  ],
  priceFrom: { amount: "240", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  services: {
    included: [
      "Two nights in a Kathmandu hotel (twin room)",
      "Two nights in a Pokhara hotel (twin room)",
      "Breakfast on four mornings as per the programme",
      "Airport transfers in Kathmandu with meet-and-greet assistance",
      "Sightseeing in Kathmandu and Pokhara by private air-conditioned vehicle",
      "Private air-conditioned transfers within Kathmandu and within Pokhara as needed for the itinerary",
      "English-speaking local guide for sightseeing in Kathmandu and Pokhara",
      "Sarangkot sunrise excursion in Pokhara",
      "Complimentary one-hour boat ride on Phewa Lake",
      "Vehicle costs such as fuel, parking, and tolls",
      "Government taxes as applicable",
    ],
    excluded: [
      "Monument entrance fees in Kathmandu and Pokhara (pay locally at each site)",
      "Meals other than the breakfasts listed",
    ],
    optional: [
      "White-water rafting on the Trishuli en route Kathmandu–Pokhara—about US$25 per person",
      "Everest Experience mountain flight from Kathmandu, usually Day 2 early morning—about US$220 per person with a guaranteed window seat",
      "Paragliding in Pokhara—about US$90 per person (price can change with the operator)",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – arrival – Patan",
      description: "First look at Patan",
      details:
        "You land at Kathmandu Airport, meet the airport representative, and transfer to a central hotel. After check-in, your guide takes you to Patan, known for metalwork and wood carving.\n\nYou walk Patan Durbar Square and nearby UNESCO-listed courtyards, see Newar daily life in the lanes, and visit highlights such as the Krishna Mandir, the Mahabodhi stupa, and the Golden Temple.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – drive to Pokhara",
      description: "Road day to the lake city",
      details:
        "You cover roughly 200 km by private vehicle to Pokhara; the drive usually takes about five and a half hours, with breaks as you like. Hills, terraces, and river valleys roll past the window.\n\nPokhara sits under the Annapurna range and beside snow-fed lakes; on a clear day Machhapuchhre and high peaks reflect on Phewa. The city is the main gateway for Annapurna treks and shorter ridge walks. After hotel check-in, the evening is free to stroll the lakeside.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 3,
      title: "Sarangkot – Pokhara tour – Phewa Lake",
      description: "Sunrise and city sights",
      details:
        "You leave early for Sarangkot to watch sunrise over Annapurna, the Dhaulagiri massif, and Machhapuchhre (Fishtail), then return to the hotel for breakfast.\n\nLater the guide leads a city round: Bindhyabasini Temple, the Seti Gorge, Devi’s Fall, and Gupteshwor Mahadev Cave. The programme also includes a complimentary one-hour boat trip on Phewa Lake.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 4,
      title: "Pokhara – drive to Kathmandu",
      description: "Back to the capital",
      details:
        "You drive back to Kathmandu by the same broad route as on Day 2. The rest of the day is free—wander the old centre, revisit a site, or shop for souvenirs.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 5,
      title: "Pashupatinath – Boudhanath – airport",
      description: "Half-day tour and departure",
      details:
        "After breakfast you visit Pashupatinath on the Bagmati River, Nepal’s foremost Shiva temple, often described as the abode of Shiva. Non-Hindus stay outside the inner precincts but can observe rituals on the terraces and, at times, funeral rites at the ghats.\n\nYou then drive to Boudhanath, sometimes called a little Tibet: one of Nepal’s largest stupas, ringed by monasteries, flags, and shops. Watch pilgrims circling the dome before returning to the hotel to collect bags and transfer to the airport for your outward flight or onward plans.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
