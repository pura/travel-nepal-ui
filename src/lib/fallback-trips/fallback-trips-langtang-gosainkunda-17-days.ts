import type { PublicTrip } from "@/types/trip";

export const FALLBACK_TRIP_LANGTANG_GOSAINKUNDA_17_DAYS: PublicTrip = {
  id: 13,
  slug: "langtang-gosainkunda-helambu-trek-17-days",
  title: "Nepal's Langtang Trek: Nature Meets Spirit",
  summary:
    "Seventeen days from Kathmandu up the Langtang valley to Kyanjin Gompa, over Laurebina La past Gosainkunda, and down through Helambu to Sundarijal—teahouse nights, Tamang and Sherpa villages, rhododendron forest, and two buffer days in the capital for sightseeing and your flight out.",
  description:
    "The Langtang–Gosainkunda–Helambu loop stays within a day’s road reach of Kathmandu yet feels remote: bamboo and oak forest, yak pastures, the rebuilt Langtang village area, and ice flutes above Kyanjin. You take a rest day there for Kyanjin Ri and the local yak-cheese workshop, then descend and climb again toward Gosainkunda, cross Laurebina La (about 4,610 m), and drop through fir and oak toward Chisapani before exiting Shivapuri–Nagarjun National Park at Sundarijal. Lodging is teahouses and chosen-category hotels in Kathmandu; one English-speaking guide covers treks and city tours, with one porter per two trekkers, hot tea or coffee three times daily on the trail, TIMS and Langtang National Park permits, and full support costs for staff.",
  durationDays: 17,
  tripType: "trekking_hiking",
  budgetLevel: "premium",
  comfortLevel: "basic",
  difficultyLevel: "challenging",
  interestTags: [
    "trekking",
    "langtang",
    "gosainkunda",
    "helambu",
    "tamang",
    "sherpa",
    "himalaya",
    "culture",
  ],
  priceFrom: { amount: "1910", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  services: {
    included: [
      "16 nights in a double room in the booked hotel category (teahouses on trek)",
      "16 breakfasts, 13 lunches, and 13 dinners as per the programme",
      "English-speaking guide for trekking and sightseeing",
      "1 porter for every 2 trekkers",
      "Hot drinks (tea or coffee) three times a day on the trek",
      "All ground transport on the itinerary",
      "TIMS and Langtang National Park permits",
      "All food, drinks, lodging, salary, insurance, medical kit, and transport for trekking staff",
      "All government taxes",
    ],
    excluded: [
      "International flights",
      "Extra food and drinks outside the included meals",
      "Natural calamities beyond our control and rescue costs",
      "Travel or medical insurance",
      "Nepal visa fees",
      "Tips and gratuities for staff",
    ],
    optional: [
      "Single room supplement",
      "Add-ons in Kathmandu: bungy jumping, rafting, mountain flight",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – arrival",
      description: "Rest before the road north",
      details:
        "You land at Tribhuvan Airport, meet your representative, and transfer to a hotel in central Kathmandu. The evening is free to recover from the flight.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – sightseeing",
      description: "Valley highlights",
      details:
        "A full day tour of the Kathmandu Valley: Swayambhunath on its hill, Durbar Square and the Kumari courtyard, Jagannath Temple with carved roof struts, and other palaces and shrines from the medieval period. The aim is a clear first look at Newar architecture and living ritual before you leave for the mountains.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Kathmandu – Dhunche – Syabrubesi",
      description: "Drive to the trailhead",
      details:
        "You leave the city by private vehicle, pass roadside villages, and reach Dhunche on the ridge before dropping to Syabrubesi beside the Langtang Khola. First night in a teahouse.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Syabrubesi",
    },
    {
      dayNumber: 4,
      title: "Syabrubesi – Rimche – Lama Hotel",
      description: "Into the gorge",
      details:
        "The trail follows the river, crosses suspension bridges, drops into the deep valley, then climbs through bamboo forest toward Rimche and on to Lama Hotel—good forest habitat for monkeys; red panda and black bear are possible but rare sightings.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lama Hotel",
    },
    {
      dayNumber: 5,
      title: "Lama Hotel – Langtang village",
      description: "Above the treeline",
      details:
        "You walk up through Langtang National Park past Gumanechok and Ghoda Tabela, leave thick forest as the valley opens, and reach Langtang village on open pasture with broad views of the range.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Langtang",
    },
    {
      dayNumber: 6,
      title: "Langtang – Kyanjin Gompa",
      description: "Easy gain to the upper valley",
      details:
        "A shorter stage past small settlements and yak pastures, minor stream crossings, and moraine benches to Kyanjin Gompa, where lodges sit below Langtang Lirung and the ice slopes. Afternoon free to walk locally and acclimatise.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kyanjin Gompa",
    },
    {
      dayNumber: 7,
      title: "Kyanjin Gompa – rest day",
      description: "Viewpoint and yak cheese",
      details:
        "Climb Kyanjin Ri (or a similar viewpoint) for a wide panorama of Langtang peaks, then visit the government yak-cheese factory, the monastery, or a short walk toward the glacier tongue—light activity to help altitude adjustment.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kyanjin Gompa",
    },
    {
      dayNumber: 8,
      title: "Kyanjin Gompa – Lama Hotel",
      description: "Descent the same valley",
      details:
        "Retrace the main trail downstream to Lama Hotel, with more time to photograph peaks you passed quickly on the way up.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lama Hotel",
    },
    {
      dayNumber: 9,
      title: "Lama Hotel – Thulo Syabru",
      description: "Ridge village",
      details:
        "Drop to the river, then climb steeply to Thulo Syabru, a Tamang village with views toward Ganesh Himal and the Langtang massif; watch for birds and occasional wildlife in the forest.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Thulo Syabru",
    },
    {
      dayNumber: 10,
      title: "Thulo Syabru – Sing Gompa",
      description: "Forest and potato terraces",
      details:
        "Climb through Dimsa and mixed rhododendron, hemlock, and oak forest; higher fields show traditional potato cultivation and open views up and down the Langtang range.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Sing Gompa",
    },
    {
      dayNumber: 11,
      title: "Sing Gompa – Gosainkunda",
      description: "Sacred lakes basin",
      details:
        "Forest trail high above the Trishuli with chances to spot wildlife in red-panda habitat. You reach Gosainkunda, a Hindu pilgrimage lake linked to Shiva in local tradition, and stay nearby.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Gosainkunda",
    },
    {
      dayNumber: 12,
      title: "Gosainkunda – Ghopte",
      description: "Over Laurebina La",
      details:
        "A strenuous day past several small lakes, then up and over Laurebina La (about 4,610 m) and down rough moraine and forested side valleys to Ghopte.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ghopte",
    },
    {
      dayNumber: 13,
      title: "Ghopte – Kutumsang",
      description: "Into Helambu",
      details:
        "Long descent through fir, rhododendron, and oak with Helambu Sherpa villages along the way, then short climbs through gullies to Kutumsang.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kutumsang",
    },
    {
      dayNumber: 14,
      title: "Kutumsang – Chisapani",
      description: "Ridge walking",
      details:
        "Sunrise over the range from Kutumsang if skies are clear, then moderate ups and downs on forested ridges to Chisapani for the night.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chisapani",
    },
    {
      dayNumber: 15,
      title: "Chisapani – Sundarijal – Kathmandu",
      description: "Leave the park by stone steps",
      details:
        "Tamang-settlement trails cross Shivapuri–Nagarjun forest with birds and greenery, then the stone stairway drops to Sundarijal where a vehicle takes you back to Kathmandu.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 16,
      title: "Kathmandu – sightseeing",
      description: "Pashupatinath and Patan",
      details:
        "Visit Pashupatinath’s riverside temples and cremation ghats, then Patan Durbar Square at Mangal Bazaar—Krishna Mandir’s carved roof, museum courtyards, and fine Newar metalwork.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 17,
      title: "Kathmandu – departure",
      description: "Airport transfer",
      details:
        "Private transfer to the international airport for your outward flight.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
