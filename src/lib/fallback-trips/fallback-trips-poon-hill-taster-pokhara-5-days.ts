import type { PublicTrip } from "@/types/trip";

export const FALLBACK_TRIP_POON_HILL_TASTER_POKHARA_5_DAYS: PublicTrip = {
  id: 14,
  slug: "poon-hill-taster-pokhara-5-days",
  title: "Trekking in Nepal: 5-Day Taster Trip",
  summary:
    "Poon Hill from Pokhara only: private transfers to Nayapul, four nights in twin-share teahouses, stone steps to Ghorepani, sunrise on the ridge, then forest trails to Tadapani and Ghandruk before exiting toward Phedi and the drive back—breakfast included each lodge morning; other meals you pay locally.",
  description:
    "This is a compact Ghorepani–Ghandruk loop marketed from Pokhara without Kathmandu nights in the bundle. You climb the Bhurungdi valley past Birethanti and Hille to Tikhedhunga, tackle the long stair climb toward Ulleri and Ghorepani, and walk out to Poon Hill before dawn for Dhaulagiri and Annapurna views. The middle days cross Deurali and rhododendron forest to Tadapani and descend to Ghandruk, then drop toward the Modi valley and roadhead at Phedi (with views toward Dhampus on clear days) for the return jeep or taxi to Pokhara. An English-speaking trekking guide and one porter per two clients cover TIMS and Annapurna Conservation Area permits; only four breakfasts are in the price, so budget separately for lunches, dinners, and drinks in lodges.",
  durationDays: 5,
  tripType: "trekking_hiking",
  budgetLevel: "mid_range",
  comfortLevel: "basic",
  difficultyLevel: "moderate",
  interestTags: [
    "trekking",
    "poon_hill",
    "ghorepani",
    "ghandruk",
    "annapurna",
    "pokhara",
    "gurung",
  ],
  priceFrom: { amount: "540", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  startingRegion: { slug: "pokhara", name: "Pokhara" },
  services: {
    included: [
      "Accommodation in twin-sharing teahouses on the trek",
      "Four breakfasts at lodges as per the programme",
      "All ground transfers for the itinerary (Pokhara–trailhead–Pokhara)",
      "English-speaking trekking guide on the Poon Hill trek",
      "One porter for every two trekkers",
      "TIMS and Annapurna Conservation Area permit fees",
      "All government taxes",
    ],
    excluded: [
      "Bar bills (alcohol, bottled water, soft drinks), cigarettes",
      "Personal insurance and any personal costs not listed",
      "Natural calamities beyond our control and rescue costs",
      "Travel or medical insurance",
      "International flights",
      "Nepal visa fees",
      "Lunch and dinner during the trek",
      "Tips for staff",
    ],
    optional: [
      "Adventure activities in Pokhara: paragliding, zip flyer, mountain biking, skydiving",
      "Other cultural tours",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Pokhara – Nayapul – Tikhedhunga",
      description: "Easy start beside the river",
      details:
        "Your guide meets you in Pokhara for the drive to Nayapul. You walk through Birethanti, follow the Bhurungdi Khola on its north bank, and climb through forest and terraced fields to Hille and on to Tikhedhunga for the first lodge night.",
      destinationName: "Tikhedhunga",
    },
    {
      dayNumber: 2,
      title: "Tikhedhunga – Ghorepani",
      description: "Stone steps and forest",
      details:
        "A longer day with a stiff climb on stone steps toward Ulleri, then steadier forest walking through oak and rhododendron past Banthanti and Nangethanti to Ghorepani, where lodges sit on a ridge with wide views toward Nilgiri, Dhaulagiri, and the Annapurna chain.",
      meals: "Meals: Breakfast",
      destinationName: "Ghorepani",
    },
    {
      dayNumber: 3,
      title: "Ghorepani – Poon Hill – Tadapani",
      description: "Sunrise ridge",
      details:
        "You leave before dawn for Poon Hill (about 3,210 m) for sunrise over Dhaulagiri and the Annapurna massif, then return to Ghorepani for breakfast. The trail continues over Deurali (about 3,160 m) through rhododendron jungle to Tadapani.",
      meals: "Meals: Breakfast",
      destinationName: "Tadapani",
    },
    {
      dayNumber: 4,
      title: "Tadapani – Ghandruk",
      description: "Down to the big Gurung village",
      details:
        "Mostly downhill through mixed forest with glimpses of Annapurna South and Machhapuchhre, crossing streams before the stone houses of Ghandruk—one of the largest Gurung settlements in the hills.",
      meals: "Meals: Breakfast",
      destinationName: "Ghandruk",
    },
    {
      dayNumber: 5,
      title: "Ghandruk – Nayapul – Pokhara",
      description: "Last views and road out",
      details:
        "A long descent from Ghandruk through villages and terraces, then forest and ridge walking toward Dhampus before dropping to Phedi for the vehicle back to Pokhara.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
  ],
};
