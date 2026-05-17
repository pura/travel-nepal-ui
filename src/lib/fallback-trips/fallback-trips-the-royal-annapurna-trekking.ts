import type { PublicTrip } from "@/types/trip";

const MAP_URL = "https://himalayancircuit.com/images/map/Group%20277.png";
const HERO_URL =
  "https://himalayancircuit.com/storage/media/annapurna-royal-trekking-1.webp";

export const FALLBACK_TRIP_THE_ROYAL_ANNAPURNA_TREKKING: PublicTrip = {
  id: 18,
  slug: "the-royal-annapurna-trekking",
  title: "The Royal Annapurna Trekking",
  summary:
    "Prince Charles’s 1980s route through quiet Annapurna foothills: ridge walks from Kalikasthan to Syaklung and Chisopani, Gurung villages, and Begnas Lake—an easy, uncrowded four-day trek below 1,730 m.",
  description:
    "The Royal Trek is named after Prince Charles, who walked this route in the 1980s. It passes through rice terraces and small villages with wide views of the Annapurna range, Machhapuchhre, and the Pokhara valley, offering an authentic glimpse of Gurung life without heavy tourist traffic. Starting from the Kalikasthan ridge and finishing at Begnas Lake, the trail runs through Shyaklung and Chisopani along the divide between Begnas and Rupa lakes. The path is well maintained, wide, and gentle—suitable for beginners, families, and older walkers. The highest point is about 1,730 m, so acclimatisation is minimal. This short trek is ideal if you want spectacular Annapurna scenery on an off-the-beaten-track loop from Pokhara.",
  durationDays: 4,
  tripType: "trekking_hiking",
  budgetLevel: "premium",
  comfortLevel: "basic",
  difficultyLevel: "easy",
  interestTags: [
    "royal_trek",
    "annapurna",
    "pokhara",
    "begnas",
    "gurung",
    "trekking",
    "easy_trek",
    "himalaya",
  ],
  priceFrom: { amount: "819", currency: "USD" },
  imageUrl: HERO_URL,
  startingRegion: { slug: "pokhara", name: "Pokhara" },
  totalDistanceKm: 54,
  altitudeMaxM: 1730,
  altitudeMinM: 820,
  routeGrades: ["Grade A (an easy endeavour)"],
  fitnessNotes: ["Aerobic fitness"],
  recommendedSeasons: ["All year round"],
  mapImageUrl: MAP_URL,
  galleryImageUrls: [HERO_URL, MAP_URL],
  sourceReferenceUrl:
    "https://himalayancircuit.com/tour/the-royal-annapurna-trekking",
  priceTable: {
    currency: "USD",
    supplementaryChargePercent: 30,
    footnote:
      "Indicative per-person pricing for the services described in this offer. Cost varies with customization. International flights are not included.",
    columns: [
      { key: "2", label: "2 travellers" },
      { key: "4", label: "4 travellers" },
      { key: "8", label: "8 travellers" },
    ],
    rows: [
      {
        label: "Standard",
        prices: { "2": "969", "4": "900", "8": "819" },
      },
      {
        label: "Deluxe",
        prices: { "2": "1390", "4": "1300", "8": "1169" },
      },
    ],
  },
  bookingFeeItems: [
    "T-shirt",
    "Private tour",
    "15 days advance booking required",
    "Trekking permits",
  ],
  gearChecklist: [
    "Sleeping bag",
    "Backpack",
    "Hiking boots",
    "Socks",
    "Thermals",
    "First-aid kit",
    "Rain jacket",
    "Personal medicines",
    "Down jacket",
    "Sleeping pad",
    "Trekking shorts",
    "Sleep wear / under clothes",
  ],
  trekkingGradeNotes:
    "Grade A: gentle ridge walking with no high altitude. Suitable for first-time trekkers and families; still pack for cool mornings and occasional rain.",
  faq: [
    {
      question: "Is altitude sickness a concern on the Royal Trek?",
      answer:
        "Below about 3,500 m the risk is low on this route, but everyone reacts differently. Stay hydrated and tell your guide if you feel unwell.",
    },
    {
      question: "What kind of food can I expect in Nepal?",
      answer:
        "Nepal offers diverse regional cuisine—from dal bhat and momos to international dishes in Pokhara. On trek, meals are hearty and geared toward walkers.",
    },
  ],
  reviewSnippets: [
    { name: "Christopher", location: "UK", date: "2026-04-20" },
    { name: "David", location: "Australia", date: "2026-04-09" },
    { name: "Mathis & Ida", location: "Germany", date: "2026-04-06" },
    { name: "Paul & Tim", location: "Germany", date: "2026-03-25" },
    { name: "Claudia", location: "Germany", date: "2026-03-18" },
  ],
  services: {
    included: [
      "Three nights tented camp",
      "All meals during trekking",
      "Personal trekking guide",
      "All camping gear, cook, and porters",
      "All entrance fees and permits",
      "Ground transportation to and from Pokhara",
      "All taxes",
    ],
    excluded: [
      "International flights and Nepal visa fees",
      "Travel / medical insurance",
      "Pokhara hotels",
      "Client personal and unforeseen expenses",
      "Bar bills, bottled water, and personal snacks",
      "Natural calamities beyond our control and rescue expenses",
    ],
    optional: [
      "Extra nights in Pokhara or Kathmandu",
      "Private transport upgrades",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Drive Pokhara to Bijayapur — trek to Kalikasthan",
      description: "First ridge views",
      details:
        "Drive from Pokhara to Bijayapur, the trailhead, then walk four to five hours on a relatively easy path. After crossing the river the trail climbs toward Kalikasthan, with lunch on the ascent. At the ridge, views open over Begnas Lake, Pokhara, and the Annapurna Himalayas.",
      destinationName: "Kalikasthan",
      distanceKm: 18,
      altitudeMaxM: 1370,
      altitudeMinM: 822,
      durationHours: 5,
      accommodation: "Tented camp",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 2,
      title: "Kalikasthan to Syaklung",
      description: "Gurung village on the ridge",
      details:
        "Walk along the hilltop ridge from Thulakhet to Mathithana and on through Lipeyani before a short climb into Syaklung (1,730 m), a Gurung village surrounded by rhododendron forest and constant Himalayan views.",
      destinationName: "Syaklung",
      distanceKm: 15,
      altitudeMaxM: 1730,
      altitudeMinM: 1370,
      durationHours: 6,
      accommodation: "Tented camp",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 3,
      title: "Syaklung to Chisopani",
      description: "Chautari and village trails",
      details:
        "A varied day of ups and downs: steep descent through a village, a rest at a local chautari—traditional stone shelters for hikers and gatherings—then the left fork past a police post toward Chisopani (the right fork drops to the Marshyangdi). Explore the village and local culture in the afternoon.",
      destinationName: "Chisopani",
      distanceKm: 10,
      altitudeMaxM: 1730,
      altitudeMinM: 1550,
      durationHours: 6,
      accommodation: "Tented camp",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 4,
      title: "Chisopani to Begnas Lake — drive to Pokhara",
      description: "Finale at the lake",
      details:
        "Cross the stream feeding Rupa Tal and climb the ridge between Rupa and Begnas lakes through rice fields and villages to Begnas Tal. Lunch by the lake, time to explore the town, and farewell to your trekking team before driving back to Pokhara.",
      destinationName: "Pokhara",
      distanceKm: 12,
      altitudeMaxM: 1550,
      altitudeMinM: 822,
      durationHours: 6,
      accommodation: "Hotel",
      meals: "Breakfast, lunch",
    },
  ],
};
