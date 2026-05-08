import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_HIGH_PASS } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_UPPER_MUSTANG_20_DAYS: PublicTrip = {
  id: 15,
  slug: "upper-mustang-trek-nepal",
  title: "Upper Mustang Trekking Adventure in Nepal",
  summary:
    "Twenty days with heritage touring in Kathmandu, private road to Pokhara, flight to Jomsom, and a restricted-area trek to Lo Manthang and back via Yara and Tangge before dropping to Muktinath and flying out to Pokhara for a free day and private drive to the capital.",
  description:
    "Upper Mustang lies in the rain shadow north of Annapurna and feels closer to old Tibetan plateau culture than to the middle hills. You need a special restricted-area permit on top of ACAP and TIMS; this package includes those, twin or double hotels with breakfast in Kathmandu and Pokhara, full board on the trail, a trekking guide from Pokhara, and one porter per two clients for the Jomsom loop. The route follows the Kali Gandaki to Kagbeni, climbs through Samar, Gheling, Ghami, and Tsarang to walled Lo Manthang, adds a rest day for Garphu, Nyiphu, and the Ketcher Dzong viewpoint, then returns east by Dhi, Yara, Tangge, and a high pass before Muktinath and the flight back to Pokhara.",
  durationDays: 20,
  tripType: "trekking_hiking",
  budgetLevel: "premium",
  comfortLevel: "standard",
  difficultyLevel: "challenging",
  interestTags: [
    "trekking",
    "mustang",
    "lo_manthang",
    "restricted_area",
    "tibetan_culture",
    "muktinath",
    "annapurna",
  ],
  priceFrom: { amount: "2930", currency: "GBP" },
  imageUrl:
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_HIGH_PASS,
  totalDistanceKm: 240,
  altitudeMaxM: 4230,
  galleryImageUrls: ["https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=80"],
  services: {
    included: [
      "Airport pick-up and transfer to the hotel",
      "Double or twin room with breakfast in Kathmandu and Pokhara",
      "Entrance fees to listed cultural heritage sites, Durbar squares, stupas, museums, and temples on the programme",
      "Kathmandu–Pokhara by private vehicle",
      "Pokhara–Jomsom–Pokhara domestic flights",
      "Experienced trekking guide for the trek from Pokhara",
      "One porter for every two trekkers for luggage on the trek (Jomsom round trip)",
      "ACAP and TIMS permits",
      "Upper Mustang restricted-area permit",
      "Three meals a day (breakfast, lunch, and dinner) on the trekking section",
      "First-aid kit and water-purification tablets",
      "Guide and porter wages, insurance, and allowances",
      "Pokhara–Kathmandu by private vehicle",
      "Government tax",
      "Airport transfer at the end of the programme",
    ],
    excluded: [
      "Bar bills (alcohol, bottled water, soft drinks), cigarettes",
      "Personal insurance and any personal costs not listed",
      "Travel or medical insurance and Nepal visa fees",
    ],
    optional: [
      "Extra nights in Pokhara from about US$40",
      "Zip lining from about US$80",
      "Helicopter tour to Annapurna Base Camp from about US$600",
    ],
  },
  days: [
    {
      dayNumber: 1,
      title: "Kathmandu – arrival",
      description: "Welcome to the capital",
      details:
        "You land at Tribhuvan International Airport, meet your driver, and transfer to a hotel in central Kathmandu.",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Kathmandu – Swayambhunath",
      description: "Hilltop stupa",
      details:
        "Visit Swayambhunath, among the oldest large stupas in Nepal, crowded with side shrines and monkeys, with a stiff climb up stone steps and a full panorama over the Kathmandu Valley. Hindus and Buddhists both use the site.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 3,
      title: "Kathmandu – Pokhara",
      description: "Private drive to the lake",
      details:
        "Roughly eight hours by private car to Pokhara beneath Machhapuchhre and the Annapurna range. Evening free on the lakeside for last-minute gear or rest.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 4,
      title: "Pokhara – Jomsom – Kagbeni",
      description: "Flight into the Kali Gandaki",
      details:
        "Early flight to Jomsom (about 2,720 m), then trek north beside the windy Kali Gandaki with Nilgiri dominating the skyline to Kagbeni (about 2,810 m), a tight maze of lanes and roofs of grey stone.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Kagbeni",
    },
    {
      dayNumber: 5,
      title: "Kagbeni – Chusang",
      description: "Enter the restricted valley",
      details:
        "After permit checks in Kagbeni you start early to avoid afternoon dust and wind, walking the wide river gravels and cliffs toward Chusang (about 2,962 m) with Nilgiri catching morning light.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chusang",
    },
    {
      dayNumber: 6,
      title: "Chusang – Samar",
      description: "Climb to the caravan stop",
      details:
        "Leave the main valley floor and climb toward Samar (about 3,600 m), a common lunch and overnight stop where horse trains still appear in season; Annapurna summits can show far to the south in clear weather.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Samar",
    },
    {
      dayNumber: 7,
      title: "Samar – Gheling",
      description: "Gorges and juniper",
      details:
        "Ascend from Samar, pass a chorten, drop through a gorge to Syangmoche and teahouses, then climb and descend to Gheling (about 3,544 m), known for barley fields and white-washed houses.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Gheling",
    },
    {
      dayNumber: 8,
      title: "Gheling – Ghami",
      description: "Over Nyi La",
      details:
        "Climb to Nyi La (about 3,840 m), then branch toward Ghami (about 3,440 m)—long mani walls, red cliffs, and the third-largest settlement in Mustang.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Ghami",
    },
    {
      dayNumber: 9,
      title: "Ghami – Tsarang",
      description: "Dry canyon country",
      details:
        "Trek through Mustang’s driest scenery to Tsarang (about 3,620 m) on a shelf above Tsarang Chu, with a hilltop dzong and an important red gompa filled with statues and thangkas.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Tsarang",
    },
    {
      dayNumber: 10,
      title: "Tsarang – Lo Manthang",
      description: "The walled capital",
      details:
        "Morning time in Tsarang’s monastery, then climb toward a lone border chorten and a widening valley that reveals Lo Manthang (about 3,730 m) and its single gate through the mud-brick wall.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lo Manthang",
    },
    {
      dayNumber: 11,
      title: "Lo Manthang – Garphu and Nyiphu",
      description: "Caves and dzong ruins",
      details:
        "Optional horse rides or day walks to Garphu and Nyiphu for cave monasteries and cliff dwellings, with a detour to the ruins of Ketcher Dzong for views north and south across the plateau.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Lo Manthang",
    },
    {
      dayNumber: 12,
      title: "Lo Manthang – Yara via Dhi",
      description: "Begin the return loop",
      details:
        "Leave Lo Manthang to the north, cross Lo La (about 3,950 m), descend steeply to Dhi (about 3,410 m), then climb in the afternoon to Yara (about 3,600 m) along the Puyon Khola past many cliff caves.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Yara",
    },
    {
      dayNumber: 13,
      title: "Yara – Tangge",
      description: "High plateaux",
      details:
        "Cross a small pass, traverse a high plateau with Dhaulagiri views, cross a side stream, climb another pass near 3,900 m, then descend the long slope to Tangge (Tangye) at about 3,320 m.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Tangge",
    },
    {
      dayNumber: 14,
      title: "Tangge – Chusang",
      description: "Tangye La",
      details:
        "A long day over Tangye La (about 4,150 m) with repeated ups and downs through summer pastures before dropping to Chusang at the meeting of side streams and the Kali Gandaki.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chusang",
    },
    {
      dayNumber: 15,
      title: "Chusang – Muktinath",
      description: "Into the pilgrimage place",
      details:
        "Climb out of the gorge through scrub and occasional apple orchards toward Muktinath, where Hindu and Buddhist shrines share the same ridge—visit the 108 spouts, eternal flame, and the old monastery nearby.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Muktinath",
    },
    {
      dayNumber: 16,
      title: "Muktinath – Jomsom",
      description: "Windy valley floor",
      details:
        "Descend the broad Kali Gandaki riverbed toward Jomsom, aiming to arrive before the usual afternoon wind; lunch in Jomsom and a restful afternoon behind closed windows if dust blows.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Jomsom",
    },
    {
      dayNumber: 17,
      title: "Jomsom – Pokhara",
      description: "Mountain flight",
      details:
        "Early morning flight to Pokhara (about 25 minutes) with strong mountain views when skies are clear—including Annapurna I, Dhaulagiri, and Machhapuchhre. Afternoon free by Phewa Lake.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 18,
      title: "Pokhara – free day",
      description: "Optional activities",
      details:
        "No fixed programme: rest, boat on the lake, or add paragliding, zip line, or bungee through local agents.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 19,
      title: "Pokhara – Kathmandu",
      description: "Private drive to Thamel",
      details:
        "Breakfast, then private vehicle to Kathmandu through middle-hill towns and terraces. Check in and explore Thamel at your own pace.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 20,
      title: "Kathmandu – departure",
      description: "Airport transfer",
      details:
        "Timed transfer to the international airport for your outward flight.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
