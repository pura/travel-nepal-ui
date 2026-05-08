import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_YOGA_MEDITATION_NEPAL: PublicTrip = {
  id: 8,
  slug: "yoga-meditation-tour-nepal",
  title: "10-Day Yoga & Meditation Tour in Nepal",
  summary:
    "Start in Kathmandu, then spend three full days at a countryside yoga centre with vegetarian food and daily guidance. After that you fly to Pokhara for lakeside time, a Sarangkot sunrise, the Peace Stupa, and short tours with more sightseeing and easy walking.",
  description:
    "Nepal is often pictured for its peaks, but this trip leans on slower rhythms: breath work, posture practice, and quiet sits in a dedicated retreat setting. Yoga here is framed as connection—body, breath, and mind—through Hatha-style asana, pranayama, and meditation blocks led by an English-speaking teacher. Around that core you still see something of the country: Swayambhunath above the valley, Pokhara’s lake and viewpoints, and the bustle of Thamel before you leave. Ground transport and domestic flights are arranged so you can focus on practice and rest.",
  durationDays: 10,
  tripType: "spiritual_pilgrimage",
  budgetLevel: "premium",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: [
    "yoga",
    "meditation",
    "wellness",
    "pokhara",
    "kathmandu",
    "ayurveda",
    "culture",
  ],
  priceFrom: { amount: "1700", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  galleryImageUrls: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"],
  services: {
    included: [
      "Three nights in Kathmandu in a twin or double room",
      "Nine breakfasts, three lunches, and three dinners as per the programme",
      "Private vehicle for road transfers on the itinerary",
      "English-speaking cultural guide in Kathmandu with entry fees and private car and driver",
      "Three nights at the yoga centre in a twin or double room with vegetarian meals",
      "English-speaking yoga and meditation instructor at the centre",
      "Private transfer between the yoga centre and Kathmandu airport when needed for the Pokhara flight",
      "Kathmandu–Pokhara domestic flight",
      "Three nights in Pokhara in a twin or double room",
      "Guided Pokhara city and hiking programme with English-speaking guide, entry fees, private vehicle, and one hour of boating",
      "Pokhara–Kathmandu domestic flight",
      "Government tax",
      "Airport transfer at the end of the programme",
    ],
    excluded: [
      "Bar tabs (alcohol, bottled water, soft drinks), cigarettes",
      "Personal insurance and any personal costs not listed",
      "Events beyond our control and rescue costs",
      "Travel or medical insurance and Nepal visa fees",
    ],
    optional: [
      "Helicopter sightseeing toward the Annapurna area—from about US$1,000",
      "Paragliding in Pokhara—from about US$80",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – Arrival",
      description: "First night in the capital",
      details:
        "You land at Tribhuvan International Airport, meet your driver, and go to a hotel in central Kathmandu. The rest of the day is yours—sleep off the flight or take a short walk nearby.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – Swayambhunath",
      description: "Briefing and hilltop stupa",
      details:
        "After breakfast the team runs through the full schedule: where you will go day by day and how the yoga block will run.\n\nThen your guide takes you to Swayambhunath, the hilltop stupa many visitors call the Monkey Temple. The climb up the stone steps is steep; from the top you look out over much of the Kathmandu Valley.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Kathmandu – Yoga centre",
      description: "Three days at the retreat",
      details:
        "You leave Kathmandu by road in good time for the countryside yoga centre, where you stay three nights.\n\nOver the coming days the programme mixes physical practice and theory: asanas, sun salutations, pranayama, talks on detox ideas, kirtan, optional massage or steam, shirodhara, discussion of yoga philosophy, and cleansing practices such as laghu shankha prakshalana, kunjal kriya, ayurvedic massage, and jala neti. The exact mix follows what the centre schedules for your dates.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kathmandu Valley",
    },
    {
      dayNumber: 4,
      title: "Yoga centre",
      description: "Full retreat day",
      details:
        "Another day of yoga and meditation in a quiet rural setting. You keep working with asana, sun salutation, and breath work, and you can join optional sessions such as detox talks, kirtan, philosophy discussion, or body treatments—massage, steam, shirodhara, the shorter shankha prakshalana routine, kunjal, ayurvedic massage, or neti—as offered.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kathmandu Valley",
    },
    {
      dayNumber: 5,
      title: "Yoga centre",
      description: "Last full day on retreat",
      details:
        "A final full day at the centre with the same kind of schedule: practice, breath, and optional add-ons from the retreat menu—talks, kirtan, philosophy, or therapeutic sessions—so you can go deeper on what helped you most earlier in the stay.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kathmandu Valley",
    },
    {
      dayNumber: 6,
      title: "Yoga centre – fly to Pokhara",
      description: "Lakeside city",
      details:
        "You are taken to the airport for the short domestic flight to Pokhara (about half an hour). Pokhara is known for mountain views above Phewa Lake and a relaxed lakeside strip.\n\nOn arrival you transfer to the hotel. The afternoon and evening are free—walking the lakeshore is an easy way to settle in.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 7,
      title: "Pokhara – Sarangkot and half-day tour",
      description: "Sunrise and city sights",
      details:
        "You start before dawn to reach Sarangkot for sunrise over the Annapurna and Dhaulagiri ranges and Machhapuchhre (Fishtail). After time on the ridge you return to town for breakfast.\n\nLater your guide takes you on a half-day round of the International Mountain Museum, Devi’s Fall, and Gupteshwor Cave.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 8,
      title: "Pokhara – Peace Stupa",
      description: "Boat and short hike",
      details:
        "Your guide meets you at the hotel for the trip to the World Peace Pagoda. You cross Phewa Lake by boat, then walk roughly 45 minutes to the stupa on the far side of the lake.\n\nFrom the pagoda you get a wide view of the Annapurna massif, Machhapuchhre, and the Pokhara valley below—one of the classic half-day outings from the lakeside.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 9,
      title: "Pokhara – fly to Kathmandu",
      description: "Thamel and shopping",
      details:
        "The morning is unhurried; your flight to Kathmandu is usually late morning or early afternoon. You reach the Pokhara airport about an hour before departure.\n\nBack in Kathmandu you check in at the same style of hotel as at the start. The rest of the day is free to walk Thamel, browse shops, or pick up local tea and small gifts.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 10,
      title: "Kathmandu – Departure",
      description: "End of the programme",
      details:
        "Transfer to the international airport for your outward flight.\n\nYou leave with whatever stayed with you most—temple roofs, mountain light over the lake, the retreat routine, or conversations with people you met along the way.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
