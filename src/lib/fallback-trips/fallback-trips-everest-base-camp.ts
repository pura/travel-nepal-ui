import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_HIGH_PASS } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_EVEREST_BASE_CAMP: PublicTrip = {
  id: 12,
  slug: "everest-base-camp-trek",
  title: "Everest Base Camp Trekking Adventure",
  summary:
    "Fourteen days with a private Lukla return flight, twelve lodge nights on the Khumbu trail to Everest Base Camp and Gorakshep, a dawn climb on Kala Patar for the Everest sunrise, then a steady descent to Lukla. Kathmandu bookends include Patan on arrival and airport transfers.",
  description:
    "The trip is built around twelve organised trekking days from Lukla: Namche with a rest loop toward Everest View Hotel and Khumjung, Tengboche monastery, Dingboche with a second rest day, then Lobuche, Gorakshep, and a round trip to Base Camp. Weather and fitness permitting, you go up Kala Patar early for the classic east-face view of Everest before dropping to Pheriche and retracing the valley to Lukla. Lodges are twin or triple rooms with full board on the mountain; in Kathmandu you get two nights with breakfast, sightseeing by private car, and round-trip domestic flights with taxes as listed. Your guide and porters (two guests to one porter from Lukla) handle permits, a basic medical kit, and loan sleeping bag and jacket.",
  durationDays: 14,
  tripType: "trekking_hiking",
  budgetLevel: "mid_range",
  comfortLevel: "basic",
  difficultyLevel: "challenging",
  interestTags: [
    "trekking",
    "everest",
    "ebc",
    "khumbu",
    "kalapatthar",
    "sherpa",
    "culture",
  ],
  priceFrom: { amount: "1130", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_HIGH_PASS,
  totalDistanceKm: 200,
  altitudeMaxM: 5644,
  galleryImageUrls: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  services: {
    included: [
      "Kathmandu–Lukla–Kathmandu round-trip airfare as applicable",
      "Domestic airport taxes as applicable",
      "Two nights at a hotel in Kathmandu (twin/triple share)",
      "12-day Everest Base Camp trek using local lodges (twin/triple share)",
      "Daily breakfast at hotels in Kathmandu",
      "All meals (breakfast, lunch, and dinner) during Everest Base Camp trekking at local lodges",
      "Airport transfers in Kathmandu with assistance by air-conditioned private vehicle",
      "Kathmandu sightseeing by air-conditioned private vehicle",
      "English-speaking guide for Kathmandu sightseeing",
      "English-speaking escort trekking guide from Kathmandu for the 12-day Everest trek",
      "Necessary porter for Everest trek (2 clients = 1 porter) from Lukla",
      "Trekking crew allowances, insurance, food, and accommodation",
      "First-aid box",
      "Toilet paper",
      "Sleeping bag and down jacket on returnable basis",
      "Trekking map",
      "Everest National Park fee (Sagarmatha entry), as applicable",
      "Trekkers' Information Management System (TIMS) fee, as applicable",
      "Free calls in emergency situations from cellular phone (guide will carry phone)",
      "Vehicle-related costs as applicable for fuel, parking, and toll taxes",
      "Government taxes as applicable",
    ],
    excluded: [
      "Monument entrance fees in Kathmandu (pay at the gate)",
      "Hot water, tea, coffee, hot shower, and battery charging on the trek",
      "Tips to guide, porter, and driver (recommended)",
    ],
    optional: [
      "Extra day in Kathmandu or extra hotel nights if Lukla flights are delayed or cancelled",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – arrival – Patan",
      description: "First day in the capital",
      details:
        "You land in Kathmandu, meet your guide, and transfer to a central hotel. Later you visit Patan Durbar Square and the lanes around it: Newar daily life, old palace courtyards, and carved shrines including the Krishna Mandir, Mahabodhi stupa, and Golden Temple, plus the metalwork and woodcarving Patan is known for.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – Lukla – Phakding",
      description: "Flight to the mountains",
      details:
        "You leave early for the domestic terminal and the short flight to Lukla, with wide views of the range on a clear day. After meeting the trekking crew you walk roughly three hours to Phakding to start acclimatising gently.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Phakding",
    },
    {
      dayNumber: 3,
      title: "Phakding – Namche Bazaar",
      description: "Into the Sherpa hub",
      details:
        "The trail follows the Dudh Kosi upstream, crosses the high twin suspension bridges at the foot of the climb, then zigzags up to Namche—the main market and administrative centre of the Khumbu. You have free time in town to wander, drink tea, and get used to the height.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Namche Bazaar",
    },
    {
      dayNumber: 4,
      title: "Namche – acclimatisation walk",
      description: "Everest View and Khumjung",
      details:
        "A rest day with walking: many groups hike toward Syangboche for panoramas of Tawache, Everest, Nuptse, Lhotse, Ama Dablam, and Thamserku, stop at Everest View Hotel, and optionally visit Khumjung monastery, known for the “Yeti skull” relic. You sleep again in Namche.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Namche Bazaar",
    },
    {
      dayNumber: 5,
      title: "Namche – Tengboche",
      description: "Monastery ridge",
      details:
        "The path drops to the river and climbs through forest to Tengboche, with a strong line of sight up the valley toward Everest and a fine view of Ama Dablam. Tengboche gompa is the largest monastery in the region and hosts the Mani Rimdu festival in season; in the evening you may sit in on prayers.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Tengboche",
    },
    {
      dayNumber: 6,
      title: "Tengboche – Dingboche",
      description: "Villages above the treeline",
      details:
        "About five hours of walking through Deboche, Pangboche, and Somare brings you to Dingboche on the open slopes above the Imja valley, with lodges scattered on the glacial moraine benches.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Dingboche",
    },
    {
      dayNumber: 7,
      title: "Dingboche – acclimatisation",
      description: "Easy day or short hike",
      details:
        "A second scheduled rest day for altitude. You can join a short ridge walk with your guide—common options include Nangkartshang or Chukhung Ri approaches—or rest, read, and drink plenty of fluids at the lodge.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Dingboche",
    },
    {
      dayNumber: 8,
      title: "Dingboche – Lobuche",
      description: "Toward the glacier",
      details:
        "You trek past mani walls and carved stones, climb toward Dughla, and may stop at the Himalayan Rescue Association clinic in Pheriche if you want a talk on altitude illness. Above Dughla the path crosses the Khumbu Glacier moraine past memorials to climbers including Scott Fischer and Babu Chiri Sherpa, then continues to Lobuche.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lobuche",
    },
    {
      dayNumber: 9,
      title: "Lobuche – Everest Base Camp – Gorakshep",
      description: "Foot of the mountain",
      details:
        "An early start over rocky moraine and glacial streams brings you through Gorakshep to Everest Base Camp in season, where expedition tents cluster on the ice and rubble. Views take in Nuptse, Khumbutse, and Pumori among others. You return to Gorakshep for the night—the last cluster of lodges in the valley.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Gorakshep",
    },
    {
      dayNumber: 10,
      title: "Kala Patar – Pheriche",
      description: "Sunrise, then descent",
      details:
        "You climb before dawn to Kala Patar (about 5,545 m) for sunrise on Everest, Nuptse, Lhotse, and the surrounding wall of peaks in clear weather; the upper Khumbu icefall and glacier lie below, and Base Camp shows as a small patch in the distance. After breakfast in Gorakshep you descend the main trail toward Pheriche for a lower sleep.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Pheriche",
    },
    {
      dayNumber: 11,
      title: "Pheriche – Namche Bazaar",
      description: "Long descent",
      details:
        "A full day of downhill walking back to Namche—often six hours or more—with time in the evening to revisit shops, bakeries, and the Saturday market if your dates line up.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Namche Bazaar",
    },
    {
      dayNumber: 12,
      title: "Namche Bazaar – Lukla",
      description: "Last trekking day",
      details:
        "You follow the Dudh Kosi valley down through Monjo and Phakding to Lukla, pacing yourself for the final lodge night before the flight out.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lukla",
    },
    {
      dayNumber: 13,
      title: "Lukla – Kathmandu",
      description: "Return flight",
      details:
        "Your guide walks you to Lukla airport for the flight to Kathmandu. After transfer to the hotel, the afternoon is free for packing or a last walk in the city.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 14,
      title: "Kathmandu – departure",
      description: "Airport transfer",
      details:
        "Private transfer to the international airport for your outward flight.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
