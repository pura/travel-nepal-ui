import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_IMMERSIVE_BUDDHIST_SPIRITUAL_NEPAL: PublicTrip = {
  id: 6,
  slug: "immersive-buddhist-spiritual-nepal",
  title: "Immersive Buddhist Spiritual Journey Across Nepal",
  summary:
    "Nine days tracing living Buddhist heritage: valley stupas and meditation caves, Lumbini’s sacred garden, Pharping and Swayambhu, then Namobuddha’s monastic calm—paced for reflection with guides and comfortable lodging.",
  description:
    "This route follows threads of devotion still knotted into the hills and plains of Nepal. You pause where texts place great masters—Naropa and Tilopa’s caves in Patan, Guru Rinpoche’s power spots at Pharping—and circle the great mandala of Boudhanath. Lumbini anchors the middle of the week: Maya Devi’s ground, monastic zones, and the quiet charge of the birthplace story. Namobuddha completes the arc with ridge light, ritual rhythm, and a farewell in Kathmandu. It is less a checklist of monuments than a sequence of spaces shaped for homage, listening, and slow understanding.",
  durationDays: 9,
  tripType: "spiritual_pilgrimage",
  budgetLevel: "premium",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: ["spiritual_pilgrimage", "culture", "heritage", "lumbini", "meditation"],
  priceFrom: { amount: "1340", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  galleryImageUrls: ["https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"],
  services: {
    included: [
      "Pick up and transfer to the hotel",
      "Accommodation on twin sharing basis in Kathmandu, Lumbini and Namo Buddha with breakfast",
      "Guided tour in Kathmandu with private vehicle",
      "Kathmandu – Namo Buddha – Kathmandu in private vehicle",
      "Guided tour in Namo Buddha",
      "Guided tour in Lumbini",
      "Rickshaw tour in Lumbini",
      "Kathmandu–Lumbini–Kathmandu by tourist-standard bus",
      "All entrance fees mentioned in the program",
      "Guide salary and remuneration",
      "Farewell dinner with Nepali cultural dance",
      "Airport transfer and drop",
      "All government taxes",
    ],
    excluded: [
      "Any bar bills (alcoholic drinks, mineral water and cold drinks), cigarettes",
      "Client personal insurance and unforeseen personal expenses",
      "Natural calamities beyond our control and costs of rescue services",
      "Travel and medical insurance",
      "Lunch and dinner in Kathmandu, Namobuddha and Lumbini",
      "Gratuities for staff",
    ],
    optional: [
      "Mountain flight",
      "Further visits to historical temples and stupas",
      "Meditation sessions",
      "Nature and wildlife excursions",
      "Yoga",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu",
      description: "Your journey in Nepal starts",
      details:
        "Welcome to Kathmandu! As soon as you land in this high Himalayan capital, you will be met and transferred to a comfortable hotel in the city center. Rest well—a week of meaningful sites and stories begins tomorrow.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Patan - Boudhanath - Pashupatinath",
      description: "Visit the ancient Patan",
      details:
        "Your first full day opens in Patan, one of the valley’s oldest royal cities, once laid out like a Buddhist dharmachakra. More than a thousand Buddhist monuments still punctuate its lanes.\n\nYou will visit Hiranya Varna Mahavihar, the Golden Window, the Golden Temple, and Mahaboudha, and enter two deeply venerated meditation caves linked to the mahasiddhas Naropa and Tilopa.\n\nThe day closes at Boudhanath—among the largest stupas on earth—about six kilometres east of central Kathmandu. Its thirty-six-metre silhouette, prayer wheels, and ring of smaller Buddha images make it a compelling place to simply walk, circumambulate, and absorb the murmur of devotion.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Kathmandu - Lumbini",
      description: "Visit the birthplace of Buddha - Lumbini",
      details:
        "An early start sets you on the road to Lumbini, arriving by evening. The long mountain highway rewards patience with shifting ridgelines and river valleys.\n\nLumbini marks where Siddhartha Gautama was born in 623 BCE. The conservation area gathers the Shakya tank, Maya Devi Temple remains with early brickwork, and the Ashoka pillar bearing its famous Brahmi inscription.\n\nAfter the journey, settle in and rest before deeper exploration of the sacred garden.",
      meals: "Meals: Breakfast",
      destinationName: "Lumbini",
    },
    {
      dayNumber: 4,
      title: "Lumbini",
      description: "Explore the most sacred place on Earth",
      details:
        "After breakfast, a guided circuit unfolds the heart of Buddhist Lumbini: Maya Devi Temple on the traditional birth site, the Sacred Garden, and important satellite sites including Tilaurakot, Ramagram Stupa, Gotihawa, Niglihawa, and Sagarhawa. The aim is not hurry but attunement—why this landscape drew monasteries from across Asia and still draws pilgrims today.",
      meals: "Meals: Breakfast",
      destinationName: "Lumbini",
    },
    {
      dayNumber: 5,
      title: "Lumbini - Kathmandu",
      description: "Back to Kathmandu",
      details:
        "Leave Lumbini by road for Kathmandu, tracing familiar bends with another chance to photograph river gorges and terraced hills. On arrival, check in and take the evening quietly—optional stroll or rest before the valley’s northern and eastern shrines.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 6,
      title: "Kathmandu - Pharping - Kathmandu",
      description: "Swayambhunath - a place of peace and power",
      details:
        "In Pharping, visit Asura Cave, where Padmasambhava—Guru Rinpoche—is said to have practised toward full realization. The site carries a concentrated sense of practice history.\n\nLater, climb to Swayambhunath, west of the city core, where chaityas, Hindu shrines, and painted deities cluster around the great stupa. Foreign visitors often call it the Monkey Temple; locals value its hilltop panorama. If skies allow, sunset over the valley crowns the day.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 7,
      title: "Kathmandu - Bhaktapur - Namobuddha",
      description: 'Bhaktapur - "The City of Devotees"',
      details:
        "After breakfast, a short drive brings you to Bhaktapur, the Newar city many describe as a living museum. Durbar Square concentrates palaces, pagodas, and carving that embody centuries of craft and faith.\n\nContinue to Namobuddha, ranked among Nepal’s holiest Buddhist sites—the legend tells how the Buddha, in a former life as a prince, offered himself to a starving tigress and her cubs. Statuary in a cave recalls the tale. The atmosphere here is unmistakably focused and calm.",
      meals: "Meals: Breakfast",
      destinationName: "Namobuddha",
    },
    {
      dayNumber: 8,
      title: "Namobuddha - Kathmandu",
      description: "Observe the Buddhist rituals in Namobuddha",
      details:
        "Rise before light for a short hike to a viewpoint over layered peaks. Back at the monastery area, observe monks in morning routine—measured, humble, and absorbed in practice.\n\nReturn to Kathmandu in the afternoon for hotel check-in. The rest of the day is open: rest, wander Thamel, or revisit a favourite shrine.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 9,
      title: "Kathmandu - Airport Transfer",
      description: "Goodbye, Nepal",
      details:
        "Your pilgrimage week concludes with a timed transfer to Tribhuvan International Airport for homeward flights or onward travel. Carry the stillness of stupas and hills into whatever comes next—and thank you for walking these paths with care.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
