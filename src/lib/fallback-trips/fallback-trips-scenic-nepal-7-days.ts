import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_SCENIC_NEPAL_7_DAYS: PublicTrip = {
  id: 5,
  slug: "scenic-nepal-7-days",
  title: "Scenic Nepal in 7 Days — Kathmandu, Nagarkot & Pokhara",
  summary:
    "A compact week weaving valley temples, Nagarkot’s ridge panoramas, and Pokhara’s lakes and peaks—culture and scenery without long trekking days.",
  description:
    "Picture a wide horizon of snow-topped summits: on the clearest mornings you may glimpse Everest, yet the heart of this route is variety. You begin amid Kathmandu’s shrines and courtyards, then trade city noise for Nagarkot’s cool air and long Himalayan vistas. Two nights in Pokhara slow the pace—boat time on Phewa, a Sarangkot sunrise over Annapurna and Machhapuchhre, and gentle exploration of the lakeside. It suits first-time visitors who want heritage, viewpoints, and nature in one relaxed arc.",
  durationDays: 7,
  tripType: "cultural_heritage",
  budgetLevel: "budget",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: ["culture", "mountains", "lakes", "heritage", "scenic_drives"],
  priceFrom: { amount: "340", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  galleryImageUrls: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"],
  services: {
    included: [
      "3 nights in a hotel in Kathmandu (twin/shared basis)",
      "1 night in a hotel in Nagarkot (twin/share basis)",
      "2 nights in a hotel in Pokhara (twin/share basis)",
      "Daily breakfast at hotels in Kathmandu, Nagarkot, and Pokhara",
      "Necessary airport transfers in Kathmandu, with assistance",
      "Sightseeing tours in Kathmandu & Pokhara via air-conditioned private vehicle",
      "Private vehicle transfers in Kathmandu, Nagarkot, Pokhara, and Kathmandu",
      "English-speaking local guide for sightseeing tours in Kathmandu and Pokhara",
      "Sarangkot sunrise excursion in Pokhara",
      "Complimentary 1-hour boat ride at Pokhara",
      "Vehicle-related expenses such as fuel, parking, toll taxes, etc.",
      "Government taxes, if applicable",
    ],
    excluded: [
      "Monument entrance fees at monuments in Kathmandu and Pokhara (can be paid at the time of arrival)",
      "All meals, except breakfast",
    ],
    optional: [
      "White water rafting on the Trishuli River ($25 USD per/person)",
      "1-hour Mount Everest experience with flight - guaranteed window seat ($220 USD per/person)",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu Airport - Arrival Transfer",
      description: "Welcome To Kathmandu!",
      details:
        "Upon arrival at the Kathmandu Airport, you'll meet your friendly guide who will transfer you to your hotel located in city center.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title:
        "Pashupatinath Temple & Boudhnath Stupa - Swoyambhunath Stupa - Patan City",
      description: "UNESCO Sites Of Nepal",
      details:
        "After a delicious breakfast, get ready for your first day of sightseeing. First is a tour of Pashupatinath Temple, located on the bank of the Bagmati River where you can see the rituals of Hindu people and their morning activities. You might also witness the rare ceremony of funerals - as per Hindu traditions, cremation occurs on ghats on the bank of holy river Bagmati. Next, is a visit to The Boudhnath stupa, one of the largest Buddhist stupas in Nepal.\n\nIn the afternoon, you will drive to Swoyambhunath stupa located on the hill top overlooking Kathmandu valley where both Hindu and Buddhist pay homage to the site.\n\nFinally, you will head to Patan, known as 'City of Beauty' and famous for its metal works and wood carvings. You'll stroll the narrow lanes of Patan and visit Patan Durbar Square, Krishna Temple, Mahaboudhi stupa and The Golden Temple.\n\nAfterward, return back to your hotel and relax.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Kathmandu - Bhaktapur - Nagarkot",
      description: "Visit Magnificent Bhaktapur",
      details:
        "After breakfast, follow your guide for a short drive east from Kathmandu to visit the well-preserved ancient city of Bhaktapur. Bhaktapur is the cultural hub of Newari people and known for the 1934 and 2015 earthquakes, in which decorated buildings and shrines were destroyed. Nonetheless, the main square still contains a few temples and other architectural showpieces such as the Lion Gate, the statue of Bhupatindra Malla, the Palace of 55 windows, the Bell of the Barking Dogs, the Nyatapola Temple and more.\n\nNext, drive to Nagarkot Hill Station. Nagarkot is popular for its incredible sunrise and sunset views over the Himalayas, located at an altitude of 2100 meters! If the weather is very clear, you might be able to see Mount Everest – the highest peak in the world!\n\nAfterwards, enjoy free time to stroll around or simply relax at your hotel.",
      meals: "Meals: Breakfast",
      destinationName: "Nagarkot",
    },
    {
      dayNumber: 4,
      title: "Nagarkot - Pokhara",
      description: "Beautiful Himalaya Views",
      details:
        "Start your morning early to witness the magnificent sunrise over the Himalayas from your hotel. Afterwards, enjoy a well-deserved breakfast.\n\nAfter breakfast, you will drive to Pokhara, famous for its wonderful views of the Himalayas and its snow-fed lakes. The reflection of Mt. Fishtail and the Annapurna Range on Lake Phewa is breathtaking!\n\nPokhara is also the base camp for trekking in the Annapurna region, with other day-hike tours around valley rim. Use the afternoon to stroll around Phewa Lakeside area.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 5,
      title: "Sarangkot - Pokhara City - Phewa Lake",
      description: "See the Sunrise over Annapurna",
      details:
        "Begin your morning early with an excursion to Sarangkot to see the sunrise over Mt. Annapurna, Dhaulagiri massif and Mt. Fishtail.\n\nAfterward, you'll return to your hotel for breakfast and to relax a bit.\n\nLater in the afternoon, commence on a Pokhara City Tour which includes Bindavashini Temple, Seti Gorge, Devis fall and Gupteshwor Mahadev Cave. The tour includes a complimentary boat ride on Phewa Lake in Pokhara.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 6,
      title: "Pokhara - Kathmandu",
      description: "Gaze upon Breathtaking Landscapes",
      details:
        "In the morning, it is time to head back to Kathmandu. Use the ride to gaze out over the beautiful Nepalese landscape. Upon arrival in Kathmandu, transfer to your hotel where you can rest or spend the day as you wish! Get out and try an authentic Nepalese dish at one of the many excellent restaurants, perhaps?",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 7,
      title: "Kathmandu Airport - Departure Transfer",
      description: "Farewell Nepal",
      details:
        "Today marks your final day in Nepal. After a delicious breakfast at your hotel, transfer to Kathmandu Airport in time to board your flight back home or to continue your travels. Farewell Nepal, see you soon!",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
