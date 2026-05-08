import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_NEPAL_PREMIUM_NATURE_CULTURE_8_DAYS: PublicTrip = {
  id: 9,
  slug: "nepal-premium-nature-culture-8-days",
  title: "Witness the Wonders of Nepal in 8 Days",
  summary:
    "Eight days in heritage hotels and lodges: Kathmandu’s great stupas and temples (including time around the old palace quarter), a flight to Chitwan for full-board jungle activities, overland to Pokhara at Fishtail Lodge, helicopter to Annapurna Base Camp, Sarangkot at dawn, then Everest-region mountain flight, Bhaktapur, and a farewell Nepali dinner.",
  description:
    "You cover the main valley sights—Boudhanath, Pashupatinath, and later Kathmandu and Bhaktapur Durbar Squares, where you might see the Living Kumari at her window if the schedule lines up—then Chitwan for wildlife on full board, and Pokhara for the lake and peaks. Internal flights link Kathmandu and Chitwan; you drive onward to Pokhara. The trip adds two flights for views alone: a helicopter run into the Annapurna sanctuary and a fixed-wing mountain flight toward Everest. Hotels are at the high end (Dwarika’s in Kathmandu, villa lodging in Chitwan, Fishtail Lodge in Pokhara) with private cars and guides in the cities.",
  durationDays: 8,
  tripType: "luxury_leisure",
  budgetLevel: "premium",
  comfortLevel: "premium",
  difficultyLevel: "easy",
  interestTags: [
    "culture",
    "wildlife",
    "chitwan",
    "pokhara",
    "helicopter",
    "mountain_flight",
    "heritage",
    "luxury",
  ],
  priceFrom: { amount: "3960", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  galleryImageUrls: ["https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80"],
  services: {
    included: [
      "Airport meet-and-greet and transfer to the hotel",
      "Heritage Deluxe room at Dwarika’s Hotel, Kathmandu, with breakfast",
      "Twin or double room as booked",
      "English-speaking tour guide for Kathmandu programme",
      "Entrance fees for listed heritage sites and temples",
      "Private air-conditioned vehicle with driver and guide for Kathmandu touring",
      "Flight Kathmandu to Chitwan (Bharatpur)",
      "Chitwan National Park entrance fees",
      "Luxury villa accommodation in Chitwan with all meals",
      "Chitwan programme: canoe, birdwatching, jungle walk, village visit, Tharu cultural show, sunset viewpoint, and jeep safari",
      "Road transfer Chitwan to Pokhara",
      "Heritage-category room at Fishtail Lodge, Pokhara",
      "Guided sightseeing in Pokhara",
      "Flight Pokhara to Kathmandu",
      "Helicopter excursion to Annapurna Base Camp",
      "Scenic mountain flight toward the Everest region",
      "Government tax",
      "Airport transfer at the end of the programme",
    ],
    excluded: [
      "Bar bills, drinks, and similar extras",
      "Personal insurance and any personal costs not listed",
      "Events beyond our control and rescue costs",
      "Travel or medical insurance",
      "Nepal visa fees",
      "Lunch and dinner in Kathmandu and Pokhara (except where meals are stated on the itinerary)",
    ],
    optional: [
      "Helicopter tour to the Everest region with breakfast",
      "Paragliding in Pokhara",
      "White-water rafting",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – Arrival",
      description: "Welcome to the capital",
      details:
        "After landing you are met and driven to Dwarika’s Hotel in central Kathmandu. In the evening you can join a short walk through a nearby market and sit down with your guide for a clear run-through of the week ahead.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Boudhanath – Pashupatinath – Chitwan",
      description: "Two great shrines, then the Terai",
      details:
        "The day opens at Boudhanath, among the largest stupas in the world, roughly six kilometres east of the city centre. Its height, prayer-wheel circuit, and ring of smaller Buddha images make it easy to spend real time here simply watching daily worship.\n\nYou continue to Pashupatinath, the riverside Shiva complex and World Heritage site: tiered roofs, carved silver doors, and cremation ghats on the Bagmati. From Kathmandu you fly to Chitwan and transfer into the park area for a first taste of the jungle—often a jeep outing—before dinner at the lodge.",
      meals: "Meals: Breakfast, Dinner",
      destinationName: "Meghauli",
    },
    {
      dayNumber: 3,
      title: "Chitwan National Park",
      description: "Jeep, walk, and canoe",
      details:
        "An early start suits a jeep safari through sal forest and grassland, with guides scanning for tiger, leopard, rhino, gaur, sloth bear, deer, monkeys, and crocodiles along the river edges.\n\nLater you take a slower walking safari on forest trails—good for birds and plants—then in the evening a dugout canoe ride on the river, where rhinos sometimes wallow in the shallows and mugger crocodiles lie still along the banks.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Meghauli",
    },
    {
      dayNumber: 4,
      title: "Chitwan – drive to Pokhara",
      description: "Half a day on the road",
      details:
        "You leave Chitwan by private vehicle for the roughly five-hour drive to Pokhara, Nepal’s second main city after the capital, set under the Annapurna skyline and beside Phewa Lake—a hub for trekking and lake activities.\n\nAfter checking in at Fishtail Lodge, the afternoon is open: many guests take a boat to the small temple on the lake island, or add extra sightseeing in town if they wish.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 5,
      title: "Pokhara – helicopter to Annapurna Base Camp",
      description: "Flight into the sanctuary",
      details:
        "The morning is yours for a slow lakeside walk, Devi’s Fall, Bat Cave, Mahendra Cave, or the Tibetan refugee settlement—paragliding is there for anyone who wants an add-on thrill.\n\nThe main event is a helicopter flight toward Annapurna Base Camp: close views of sharp peaks, deep valleys, and green hills cut by farm villages. The pilot and ground team handle routing and landing rules for the day’s weather.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 6,
      title: "Sarangkot – fly Kathmandu – Durbar Square",
      description: "Sunrise, then the old palace quarter",
      details:
        "You leave before dawn for Sarangkot for sunrise over Annapurna, Manaslu, Dhaulagiri, Machhapuchhre, and the Pokhara basin. After the viewpoint you walk down toward town for breakfast.\n\nYou then transfer to the domestic airport for a scheduled flight to Kathmandu, check in at the hotel, and later visit Kathmandu Durbar Square, a World Heritage palace quarter where major rituals and festivals still tie to the old courtyards. If the timetable allows, you may see the Living Kumari at her window.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 7,
      title: "Everest mountain flight – Bhaktapur – farewell dinner",
      description: "Peaks from the air, then Newar city",
      details:
        "An early mountain flight heads east toward the Everest massif, giving a sense of scale and glacier country that is hard to get from ground level alone.\n\nOn return you tour Bhaktapur Durbar Square with a guide: the Peacock Window, Golden Temple, Lion Gate, smaller shrines, a traditional paper workshop, and the bronze king’s figure on its column. Walking lanes, ponds, and weavers’ stalls show how tightly craft and daily life still sit together.\n\nIn the evening you sit down to a Nepali set meal with traditional music and dance—the usual send-off before an international flight the next day.",
      meals: "Meals: Breakfast, Dinner",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 8,
      title: "Kathmandu – Departure",
      description: "End of the trip",
      details:
        "Timed transfer to Tribhuvan International Airport for your outward flight.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
