import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_HILL_TREK } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_GHOREPANI_POON_HILL: PublicTrip = {
  id: 3,
  slug: "ghorepani-poon-hill",
  title: "9-Day Annapurna Poon Hill Trek",
  summary:
    "A gentle Annapurna circuit sampler: sunrise from Poon Hill at 3,210 m, lodge nights in Gurung villages like Ghorepani and Ghandruk, and big views of Dhaulagiri, Annapurna, and Machhapuchhre—ideal as a first multi-day trek.",
  description:
    "Often called the Annapurna Sunrise Trek, this route climbs to one of Nepal’s most celebrated viewpoints without extreme altitude. You’ll sleep in simple teahouses, walk rhododendron forest and stone-step villages, and step onto Poon Hill for a dawn sweep across Dhaulagiri, the Annapurna massif, and the fishtail spike of Machhapuchhre. Along the way, Gurung hospitality in Ghorepani and Ghandruk adds culture to the drama of the ridges. Nine days including Kathmandu and Pokhara buffers keeps the pace approachable while still delivering the views you came for.",
  durationDays: 9,
  tripType: "trekking_hiking",
  budgetLevel: "mid_range",
  comfortLevel: "basic",
  difficultyLevel: "moderate",
  interestTags: ["trekking", "mountains", "villages", "sunrise", "culture"],
  priceFrom: { amount: "470", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_HILL_TREK,
  galleryImageUrls: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"],
  services: {
    included: [
      "2 nights in hotel in Kathmandu on twin/triple basis",
      "2 nights in hotel in Pokhara on twin/triple basis",
      "5 Days Poonhill trek using local lodges on twin/triple basis",
      "All meals (breakfast, lunch, dinner) during Poonhill trekking at local lodges",
      "Necessary airport transfers in Kathmandu via air-conditioned private vehicle",
      "Necessary airport and bus station transfers in Kathmandu & Pokhara via air-conditioned private vehicle",
      "Pokhara/Nayapool/Pokhara via private vehicle",
      "English-speaking trekking guide from Kathmandu for 5 days during Poonhill trek",
      "Necessary porter for Poonhill trek (2 Clients = 1 Porter)",
      "Toilet paper",
      "Sleeping bag and down jacket on returnable basis",
      "Trekking Information Management System fee (TIMS) as applicable",
      "Free calls in emergency situations from cellular phone (guide will carry phone)",
      "Vehicle-related cost as applicable for fuel, parking & toll taxes",
    ],
    excluded: [
      "Monument entrance fees at monuments in Kathmandu",
      "Meals except those mentioned",
      "Hot water, tea/coffee, hot showers and battery charges during trek",
      "Tips for guides, porter and driver (recommended)",
    ],
    optional: [
      "Optional adventure activities in Pokhara such as bungy jumping, paragliding or ziplining",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu Airport - Hotel In Kathmandu - Patan Durbar Square",
      description: "Welcome to Kathmandu!",
      details:
        "Welcome to Kathmandu! Begin your adventure in Nepal by arriving at Kathmandu airport. Today you will enjoy a guided sightseeing tour to Patan Durbar Square. Patan is known as the City of Beauty. A visit to Patan Durbar Square is an excellent opportunity to see local Newari people, ancient Royal complexes and architecture of the medieval era.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu - Pokhara",
      description: "Kathmandu to Pokhara",
      details:
        "In time for sunrise, you'll board your transfer bus, which will take you to Pokhara. On the bus, gaze out upon stunning mountain scenery. You won't be able to take your eyes off of this gorgeous landscape. After your arrival, you are free to stroll around and enjoy the afternoon.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 3,
      title: "Pokhara - Nayapool - Ulleri",
      description: "Scenic Drive to Nayapool",
      details:
        "In the morning, be greeted by your guide at your hotel for your trip to Nayapool. Drive the scenic, windy roads through the mountains that offer spectacular views of the valley floor and a panoramic view of the surrounding mountains. Cross a suspension bridge as you begin your trek through the forest. Climb 1000 stone steps towards the quaint Ulleri village.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ulleri",
    },
    {
      dayNumber: 4,
      title: "Ulleri - Ghorepani",
      description: "Trek from Ulleri to Ghorepani",
      details:
        "After a delicious breakfast at your local lodge you will be invited to climb to Ghorepani village. Ghorepani is a typical Gurung mountain village in the foothills of Annapurna Mountain. The view from up here will be unforgettable! From the village you will also have a great view of Annapurna South and the Nilgiri mountains.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ghorepani",
    },
    {
      dayNumber: 5,
      title: "Poonhill - Ghorepani - Tadapani",
      description: "Sunrise Excursion to Poonhill",
      details:
        "Imagine a 180 degree view of the Himalayan panorama! Get ready to see this spectacular sight for yourself. Today you will enjoy an excursion to Poonhill view point to catch a magnificent view of the mountains. Their colors change from white to orange, depending on the angle of the sun. Spend some time at the top before returning back to the lodge for breakfast.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Tadapani",
    },
    {
      dayNumber: 6,
      title: "Tadapani - Ghandruk Village",
      description: "From Tadapani to Ghandruk Village",
      details:
        "Watch the entire forest turn red as the rhododendron flowers blossom and light up the landscape. It is a magnificent show that can't be missed. Arrive at Ghandruk in the afternoon and enjoy an excursion to Old Ghandruk village with a visit to the local museum.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ghandruk",
    },
    {
      dayNumber: 7,
      title: "Ghandruk - Nayapool - Pokhara",
      description: "Trek to Nayapool",
      details:
        "In the morning, get ready to trek down to Nayapool. Enjoy every second of this unforgettable walk and take in the magnificent scenery. After that, hop in the car and drive to Pokhara. Spend the night at a lovely hotel in Pokhara.",
      meals: "Meals: Breakfast, Lunch",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 8,
      title: "Pokhara - Kathmandu",
      description: "Back to Kathmandu",
      details:
        "Early in the morning, transfer to Pokhara bus station after a hearty breakfast at your hotel. Enjoy the scenery along your ride and reflect upon your trekking adventures. Upon arrival you will be taken to your hotel to relax for the evening.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 9,
      title: "Kathmandu Hotel - Kathmandu Airport - Departure Transfer",
      description: "Time to Say Goodbye",
      details:
        "Packed with impressions of gorgeous mountain scenery, you will be taken to Kathmandu airport. It is time to say goodbye and board your flight back home. Come back soon!",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
