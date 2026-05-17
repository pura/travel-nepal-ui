import type { PublicTrip } from "@/types/trip";

const MAP_URL = "https://himalayancircuit.com/images/map/Group%20277.png";
const HERO_URL =
  "https://himalayancircuit.com/storage/media/chisapani-helambu-trek.jpg";

export const FALLBACK_TRIP_CHISAPANI_HELAMBU_TREK: PublicTrip = {
  id: 22,
  slug: "chisapani-helambu-trek-itinerary-cost",
  title: "Chisapani Helambu Trek",
  summary:
    "Seven days from Kathmandu through Shivapuri to Chisapani, Kutumsang, Thadepati, and Helambu’s Sherpa villages—rhododendron forests, Langtang and Ganesh Himal views, and a gentle loop north of the valley.",
  description:
    "The Chisapani Helambu Trek is a short, scenic adventure just north of Kathmandu—ideal for beginners or anyone with limited time. Low-altitude walking offers views of Langtang, Ganesh Himal, Gauri Shankar, Dorje Lakpa, and Jugal Himal, alongside authentic Sherpa and Hyolmo village life. The trail winds through rhododendron and bamboo forest, meadows, waterfalls, and quiet settlements. Spring brings blooms; autumn delivers the clearest panoramas. With easy paths and fewer crowds than major routes, it is a fulfilling Himalayan sampler within hours of the capital. A drive to Sundarijal starts the trek through Shivapuri National Park to Chisapani, then onward via Kutumsang and Thadepati to Tarke Ghyang—the largest village in Helambu—Sermathang, and Melamchi Bazaar before returning to Kathmandu.",
  durationDays: 7,
  tripType: "trekking_hiking",
  budgetLevel: "premium",
  comfortLevel: "basic",
  difficultyLevel: "easy",
  interestTags: [
    "chisapani",
    "helambu",
    "shivapuri",
    "sherpa",
    "hyolmo",
    "trekking",
    "langtang_views",
    "short_trek",
    "himalaya",
  ],
  priceFrom: { amount: "1234", currency: "USD" },
  imageUrl: HERO_URL,
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  totalDistanceKm: 135,
  altitudeMaxM: 3690,
  altitudeMinM: 870,
  routeGrades: ["Grade A (an easy endeavour)"],
  fitnessNotes: ["Aerobic fitness", "Stamina"],
  recommendedSeasons: ["All year round"],
  mapImageUrl: MAP_URL,
  galleryImageUrls: [HERO_URL, MAP_URL],
  sourceReferenceUrl:
    "https://himalayancircuit.com/tour/chisapani-helambu-trek-itinerary-cost",
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
        prices: { "2": "1450", "4": "1354", "8": "1234" },
      },
      {
        label: "Deluxe",
        prices: { "2": "1543", "4": "1447", "8": "1327" },
      },
    ],
  },
  bookingFeeItems: ["T-shirt", "Entrance fee", "Permit"],
  gearChecklist: [
    "Socks",
    "Trekking shorts",
    "T-shirts",
    "Thermals",
    "Quick-dry T-shirts",
    "Rain jacket",
    "Travel towels",
    "Sunglasses / sun hat",
    "First-aid kit",
    "Sleeping bag",
    "Sun block",
    "Hiking boots",
    "Backpack",
  ],
  trekkingGradeNotes:
    "Grade A: moderate hill walking without extreme altitude. Stone steps on the Shivapuri approach can be tiring—pace yourself on day one.",
  faq: [
    {
      question: "Is Nepal a safe destination for tourists?",
      answer:
        "Nepal is generally peaceful and welcoming. Use normal caution on trails and follow your guide’s advice, especially in forest sections near Shivapuri.",
    },
    {
      question: "What about Nepal visa information?",
      answer:
        "Tribhuvan International Airport in Kathmandu is Nepal’s main international gateway. Visa on arrival is available for most nationalities—confirm requirements before travel.",
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
      "Hotel pickup and international airport transfer",
      "Six nights accommodation in mountain teahouses",
      "Shivapuri National Park permit",
      "Optional porter for seven days",
      "Seven breakfasts, seven lunches, and six dinners on trek",
      "Experienced trekking guide",
      "Ground transportation by private vehicle",
      "Airport drop-off at end of trip",
    ],
    excluded: [
      "Bar bills, bottled water, cold drinks, cigarettes, and personal insurance",
      "Single supplementary",
      "Rescue expenses and natural calamities beyond our control",
      "Travel and medical insurance",
      "Meals not listed in the programme",
      "Gratuity to staff",
    ],
    optional: [
      "Porter service",
      "Extra nights in Kathmandu",
      "Farewell dinner in Kathmandu (as arranged locally)",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Drive Kathmandu to Sundarijal — trek to Chisapani",
      description: "Shivapuri National Park",
      details:
        "After breakfast, drive about 1.5 hours to Sundarijal and climb stone steps through Shivapuri’s oak, rhododendron, and pine forest past Mulkharka and Dhap Dam to Chisapani—one of the finest short viewpoints for Langtang, Ganesh Himal, and distant Everest range.",
      destinationName: "Chisapani",
      distanceKm: 29,
      altitudeMaxM: 2171,
      altitudeMinM: 1400,
      durationHours: 5,
      accommodation: "Tea house / mountain lodge",
      meals: "Lunch, dinner",
    },
    {
      dayNumber: 2,
      title: "Trek Chisapani to Kutumsang",
      description: "Sunrise and ridge villages",
      details:
        "Sunrise over Annapurna, Manaslu, Ganesh Himal, and Langtang precedes a day through Pati Bhanjyang, Gul Bhanjyang, and Chipling to Kutumsang—a Tamang and Sherpa village with terraced fields and rhododendron forest.",
      destinationName: "Kutumsang",
      distanceKm: 16,
      altitudeMaxM: 2470,
      altitudeMinM: 2171,
      durationHours: 7,
      accommodation: "Tea house / mountain lodge",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 3,
      title: "Trek Kutumsang to Thadepati",
      description: "Yurin Danda ridge",
      details:
        "Climb through sal, oak, pine, and rhododendron to Yurin Danda and the pass area before a short final ascent to Thadepati, with views of Langtang Lirung, Dorje Lakpa, Gaurishankar, and Jugal Himal.",
      destinationName: "Thadepati",
      distanceKm: 11,
      altitudeMaxM: 3623,
      altitudeMinM: 2470,
      durationHours: 7,
      accommodation: "Tea house / mountain lodge",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 4,
      title: "Trek Thadepati to Tarke Ghyang",
      description: "Heart of Helambu",
      details:
        "Cross rhododendron and fir forest, shepherd huts, and the Melamchi River valley to Nakote and Tarke Ghyang—ancient monasteries, apple orchards, and the largest Sherpa village in Helambu.",
      destinationName: "Tarke Ghyang",
      distanceKm: 10,
      altitudeMaxM: 3690,
      altitudeMinM: 2560,
      durationHours: 6,
      accommodation: "Tea house / mountain lodge",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 5,
      title: "Trek Tarke Ghyang to Sermathang",
      description: "Sherpa culture",
      details:
        "A day of ups and downs for acclimatisation through terraced land and forest to Sermathang (about 2,610 m), with museum visits and possible first glimpses of Everest from the ridge near Tenzing Norgay’s memorial.",
      destinationName: "Sermathang",
      distanceKm: 10,
      altitudeMaxM: 3690,
      altitudeMinM: 2560,
      durationHours: 7,
      accommodation: "Tea house / mountain lodge",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 6,
      title: "Trek Sermathang to Melamchi Bazaar",
      description: "Descent to the valley",
      details:
        "Forest trail downhill to Melamchi Bazaar at 870 m—a cultural mix of Brahmin, Chhetri, Tamang, and Newar communities at the edge of Langtang National Park’s southern slopes.",
      destinationName: "Melamchi Bazaar",
      distanceKm: 14,
      altitudeMaxM: 2590,
      altitudeMinM: 870,
      durationHours: 6,
      accommodation: "Tea house / mountain lodge",
      meals: "Breakfast, lunch, dinner",
    },
    {
      dayNumber: 7,
      title: "Drive Melamchi Bazaar to Kathmandu",
      description: "Journey’s end",
      details:
        "Scenic drive back to Kathmandu (about three hours). Evening free for a farewell walk or dinner before overnight in the capital.",
      destinationName: "Kathmandu",
      distanceKm: 45,
      altitudeMaxM: 1400,
      altitudeMinM: 870,
      durationHours: 3,
      accommodation: "Hotel",
      meals: "Breakfast, lunch",
    },
  ],
};
