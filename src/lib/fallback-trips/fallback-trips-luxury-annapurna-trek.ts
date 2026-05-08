import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_HILL_TREK } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_LUXURY_ANNAPURNA_TREK: PublicTrip = {
  id: 7,
  slug: "luxury-annapurna-trek-ker-downey",
  title: "10-Day Luxury Annapurna Trek in Nepal",
  summary:
    "See a wide slice of the Annapurna area on a trip that mixes local culture and history with mountain scenery. The trail is one of Nepal’s busiest and most varied, with strong views and villages without going very high—good for first-time Himalayan walkers.",
  description:
    "The Annapurna foothills draw a lot of trekkers for good reason: you get big peaks, terraced hills, and Gurung villages in a route that stays at moderate heights. Many families here have links to the Gurkhas, and people are often happy to chat over tea. Nights are in Ker & Downey’s lodge network—the most comfortable option in this part of the range—with full board on the walking section. Kathmandu and Pokhara bookend the trip with proper hotels and guided sightseeing.",
  durationDays: 10,
  tripType: "luxury_leisure",
  budgetLevel: "premium",
  comfortLevel: "premium",
  difficultyLevel: "easy",
  interestTags: [
    "trekking",
    "annapurna",
    "luxury",
    "lodges",
    "pokhara",
    "culture",
    "ghandruk",
  ],
  priceFrom: { amount: "1430", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_HILL_TREK,
  galleryImageUrls: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80"],
  services: {
    included: [
      "Domestic flights Kathmandu–Pokhara–Kathmandu at the rate in force when you book",
      "Three nights in a five-star Kathmandu hotel with breakfast",
      "One night in a four-star deluxe Pokhara hotel with breakfast",
      "Five nights / six days in Ker & Downey lodges as per the programme",
      "All meals at the lodges: breakfast, lunch, and dinner",
      "Airport transfers in Kathmandu and Pokhara as needed",
      "Guided sightseeing in Kathmandu and Pokhara with an English-speaking guide",
      "Monument entry fees where listed",
      "Boat trip on Phewa Lake as described",
      "English-speaking trekking guide for the six-day trek",
      "Porters on a 2 guests : 1 porter basis",
      "Daily wages and insurance for trekking staff",
      "Happy hour (6–7 p.m.) at Ker & Downey lodges on the trek",
      "ACAP and TIMS permit fees",
      "Government taxes as applicable",
    ],
    excluded: [
      "Meals outside the trekking section, personal spending, and your Nepal visa",
    ],
    optional: [
      "Everest Experience mountain flight—extra cost if you want to add it",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – Arrival",
      description: "Welcome to Kathmandu",
      details:
        "When you land at Kathmandu’s international airport, your driver will be waiting in the arrivals area. They will help with bags and take you by private car to a central hotel where you check in for the night. On the drive you get a first look at the capital’s streets and rooftops. After you settle in, the evening is free—rest, walk nearby, or eat out as you like.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – UNESCO sites",
      description: "Temples and squares in the valley",
      details:
        "After breakfast you start a full-day tour of key valley sites.\n\nYou first visit Pashupatinath on the Bagmati River, Nepal’s most important Shiva temple. Only Hindus may enter the inner courtyards, but from the bank you can watch morning worship and, at the cremation ghats, traditional Hindu funeral rites.\n\nNext is Boudhanath, among the largest stupas in the country, ringed by Tibetan shops and monasteries, then Swayambhunath on its hill west of the centre, with wide views over Kathmandu and the central Himalaya on a clear day.\n\nThe day ends at Patan Durbar Square, the old royal quarter often called the City of Beauty, with palace courtyards and fine metal and stone work.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Fly to Pokhara – city tour – lake",
      description: "Lakeside Pokhara",
      details:
        "You are transferred to the domestic terminal for the short flight to Pokhara. After landing, staff take you to the hotel to check in and unpack.\n\nPokhara sits under the Annapurna range and is known for Phewa Lake, where Machhapuchhre and the high peaks mirror on still mornings. It is the main gateway for treks in this region.\n\nIn the afternoon a local tour covers Bindhyabasini Temple, the Seti Gorge, Devi’s Fall, and Gupteshwor Cave, then finishes with a boat ride on Phewa Lake.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 4,
      title: "Drive to Nayapul – trek to Birethanti",
      description: "First day on the trail",
      details:
        "You leave Pokhara by road for Nayapul and begin walking in the lower Annapurna foothills. The path follows ridges above the Pokhara valley before dropping toward the Modi River and Sanctuary Lodge, a Ker & Downey property with a clear view of Machhapuchhre (Fishtail), which local belief treats as sacred and off-limits to summits.\n\nLunch is a picnic en route; you reach the lodge in the late afternoon to check in and relax.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Birethanti",
    },
    {
      dayNumber: 5,
      title: "Birethanti – trek to Ghandruk",
      description: "Village above the Modi Khola",
      details:
        "From the lodge you climb toward Ghandruk, a large Gurung village reached only on foot. The trail crosses small farms, follows the Modi Khola, and keeps Machhapuchhre in front of you as the valley narrows.\n\nThe climb is steady work but the payoff is open views back down the valley. You pass terraces and forest and reach Himalaya Lodge in Ghandruk in time for a hot lunch on arrival, with the Annapurna massif filling the skyline.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ghandruk",
    },
    {
      dayNumber: 6,
      title: "Ghandruk – trek to Landruk",
      description: "River crossing and climb",
      details:
        "You leave Ghandruk on a steep descent to the Modi River, cross a suspension bridge, then climb again to Landruk. Annapurna views open along the way; in places you may see cliff faces where honey hunters still work from ropes.\n\nLunch is served when you reach the lodge. You can stay in your room and enjoy the mountain outlook or walk the village with your guide before dinner.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Landruk",
    },
    {
      dayNumber: 7,
      title: "Landruk – trek to Majgaon",
      description: "Short day with sunset views",
      details:
        "Porters load up after breakfast while you set off with the guide through fields and hamlets, with the Annapurnas behind you for much of the walk.\n\nToday’s stage to Majgaon is fairly gentle. At the Ker & Downey lodge you can rest in the room, sit in the garden, or take a short village walk before watching the sun go down behind the peaks.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Majgaon",
    },
    {
      dayNumber: 8,
      title: "Majgaon – trek to Dhampus",
      description: "Ridge villages toward Pothana",
      details:
        "After breakfast you walk from Majgaon toward Dhampus, your last night in the hills. The route passes Patlekhet and other small settlements on the way to Pothana; some stalls here sell souvenirs from Tibetan traders catering to trekkers on the Annapurna Base Camp trails.\n\nDhampus lodge again looks out across the full Annapurna range. Hot lunch is served on arrival, then you may stroll through Dhampus village with your guide.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Dhampus",
    },
    {
      dayNumber: 9,
      title: "Dhampus – Pokhara – fly to Kathmandu",
      description: "Back to the capital",
      details:
        "You walk down to Phedi this morning and meet a vehicle for the drive to Pokhara. From there you go to the domestic airport for the roughly 25-minute flight to Kathmandu, with mountain views from the plane on a clear day.\n\nA driver meets you in Kathmandu and takes you to your hotel. The rest of the day is free to pack, rest, or wander the city on your own.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 10,
      title: "Kathmandu – Departure",
      description: "Leaving Nepal",
      details:
        "You have free time this morning until your flight time; some guests use it for last-minute shopping or a short walk.\n\nWhen it is time to leave, you are driven to the international airport. We hope the mix of mountains, history, and the people you met made the trip worthwhile and that you travel home with clear memories of Nepal.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
