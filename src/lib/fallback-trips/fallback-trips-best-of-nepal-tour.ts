import type { PublicTrip } from "@/types/trip";
import { FALLBACK_DETAIL_MOCK_CITY_TOUR } from "@/lib/fallback-trips/fallback-trip-detail-mocks";

export const FALLBACK_TRIP_BEST_OF_NEPAL_TOUR: PublicTrip = {
  id: 1,
  slug: "best-of-nepal-tour",
  title: "Best of Nepal Tour (14 Days) ",
  summary:
    "Heritage cities, jungle wildlife, and lakeside mountain views - a balanced first trip to Nepal for families or couples.",
  description:
    "Picture yourself discovering Nepal's most iconic destinations-all within just two unforgettable weeks. This 14-day journey takes you from the rich cultural heritage of the Kathmandu Valley to the adrenaline-filled adventures of Pokhara. Along the way, follow historic trade routes and explore the charming Newari town of Bandipur, before reaching the stunning landscapes of the Pokhara Valley, gateway to the Annapurna region. The experience continues in Chitwan National Park, where you'll venture into the wild and witness rare wildlife thriving in their natural environment-an encounter unlike any other. No trip to Nepal is truly complete without visiting Lumbini, the sacred birthplace of Lord Buddha. Immerse yourself in its peaceful atmosphere and discover its deep spiritual significance to millions around the world. Blending culture, nature, adventure, and spirituality, this thoughtfully designed itinerary is ideal for solo travelers, families, or groups seeking a well-rounded Nepal experience.",
  durationDays: 14,
  tripType: "family",
  budgetLevel: "mid_range",
  comfortLevel: "standard",
  difficultyLevel: "easy",
  interestTags: ["culture", "wildlife", "food", "scenic_drives"],
  priceFrom: { amount: "1590", currency: "USD" },
  imageUrl:
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
  startingRegion: { slug: "kathmandu-valley", name: "Kathmandu Valley" },
  ...FALLBACK_DETAIL_MOCK_CITY_TOUR,
  galleryImageUrls: [
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
  ],
  services: {
    included: [
      "Pick up and transfer to the hotel",
      "Accommodation in Kathmandu, Pokhara, Bandipur and Lumbini with breakfast",
      "Nine meals breakfast, lunch and dinner with accommodation in Chitwan",
      "Guided Tour in Kathmandu, Pokhara and Lumbini",
      "Nature guide in Chitwan",
      "2-3 hours of Rafting",
      "Private vehicle Kathmandu- Rafting- Pokhara- Chitwan for luxury and comfort",
      "City Tour ground transfer with private vehicle",
      "All entrance fees mentioned in the program",
      "Bhairawa (Lumbini) Kathmandu domestic flight",
      "Airport transfer and drop",
    ],
    excluded: [
      "Any bar bills (alcoholic drinks, mineral water & cold drinks)",
      "Personal insurance & any kind of unforeseen expenses",
      "Natural calamities beyond our control and expenses incurred during rescue services",
      "Travel/Medical Insurance",
      "Lunch and Dinner in Kathmandu, Pokhara, Bandipur and Lumbini",
      "Gratuities for staff",
    ],
    optional: ["Mountain Flight"],
  },
  days: [
    {
      dayNumber: 1,
      title: "Arrival In Kathmandu - Transfer To The Hotel",
      description: "Welcome To Nepal!",
      details:
        "Finally! You have arrived in Kathmandu, the capital of Nepal. Once you land in this magical country, you will be met and escorted to your hotel by our representative.\n\nThe city is yours to explore! So, go out and gather some first impressions of the astonishing Kathmandu.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 2,
      title: "Patan Durbar Square Tour",
      description: "Explore Patan Durbar Square!",
      details:
        "Rise and shine! Today you will have the unique opportunity to admire the beauty of Patan Durbar Square. It is a marvel of ancient Newari architecture. The famous Krishna Temple with its 21 golden pinnacles, built in Shikhar style, is the major highlight of this awesome square.\n\nEnjoy the beauty of Mahaboudha temple, a terracota masterpiece, originating from the 14th century. But this is not all - there are so many Buddhist landmarks in Durbar Square that you should visit such as Hiryana Verna Mahabihar, Rudra Verna Mahabihar and Ashokan stupas.\n\nDon't miss a visit to the courtyard or the Chowks, named Mul chowk, Sundari chowk, mani chowk and Narayan Chowk. Stroll around the old Newari residential houses and explore the beautiful Golden Temple, a magnificent example of courtyard temple architecture.",
      meals: "Meals: Breakfast",
      destinationName: "Patan",
    },
    {
      dayNumber: 3,
      title: "Pashupatinath - Boudhanath",
      description: "Enlighten yourself culturally!",
      details:
        "Today you will visit Pashupatinath Temple, a famous Hindu temple, listed as an UNESCO World Heritage Site. It is located on the bank of Bagmati River which is known as the \"abode of Shiva\". Pashupatinath Temple has gilt roofing and richly carved silver doors dedicated to Lord Shiva and is the holiest Hindu pilgrimage site in Nepal.\n\nThere you can witness rare ceremonies of cremation as per Hindu traditions. You might get a different perspective of the life cycle. Then, you will proceed to visit the largest Buddhist stupa in the world. The Boudnath stupa is known as \"Mini Tibet\".\n\nWalking through the main entrance from the hustling and bustling main street, as soon as you enter the holy premises of Boudhnath, you will find peace. There is no chance you won't enjoy the outstanding and colorful view of the stupa.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 4,
      title: "Kathmandu - Trishuli-rafting - Bandipur",
      description: "Time for rafting!",
      details:
        "Get ready to explore outside of Kathmandu valley and have fun! The winding road along Trishuli River will guide us to the rafting starting point. Upon arrival you will briefed and prepared for white water rafting. Embark on a journey, filled with adventures, through the constant rapids. After 3 hours of intense thrill you will then head towards Bandipur. Bandipur, an ancient Newari town, is a gem, waiting to be discovered. It could be easily described as \"a living museum of Newari culture\".\n\nUntouched by modernization, and laced with an abundance of ancient houses, temples of great significance, and historical architecture, this medieval-era town boasts of festivals all year around besides offering a plethora of cultures. Enjoy all the beauty which Bandipur offers!",
      meals: "Meals: Breakfast",
      destinationName: "Bandipur",
    },
    {
      dayNumber: 5,
      title: "Bandipur - Pokhara",
      description: "Off to Pokhara!",
      details:
        "After enjoying a delicious breakfast in the morning, go to Pokhara. Although it is a long 6-hours drive, once you get to Pokhara, you will be rewarded with an unforgettable experience.\n\nPokhara is one of the most famous tourist destinations in Nepal, because of the many trekking opportunities and the picturesque nature around. Admire the beauty of the stunning Himalayan range and the gorgeous lakes.\n\nThere is plenty to do in Pokhara: get on a boat, trek or try white water rafting or other thrilling and adventurous sports.",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 6,
      title:
        "Pokhara - Choice Of One Adventure Program - Paragliding-bungy- Zip Flyer",
      description: "Adventure day in Pokhara!",
      details:
        "Today is all about having fun and admiring the nature around you! Get on the tallest, the longest and the steepest zip line in the whole world, which is also surrounded by an astonishing landscape. An experience like no other!\n\nIf you are not a fan of zip lining, try bungee jumping or paragliding. No matter which activity you will choose, you will definitely love the experience!",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 7,
      title: "Pokhara City Tour",
      description: "Enjoy a city tour in Pokhara!",
      details:
        "You have already seen the adventurous side of Pokhara, but today you will visit the landmarks of this remarkable city. Enjoy a city tour which will take you to Phewa lake, Davi's fall, Gupteshwor Cave and the Mountain museum.\n\nAt Phewa lake, take delight in a boat trip which will take you around the coastline of Pokhara. Enjoy the beautiful scenery around you!\n\nHave you ever wanted to go sky diving? For the adventure lovers it will be a memorable experience. You can also hop on a bike and explore the mountains. It is your choice!",
      meals: "Meals: Breakfast",
      destinationName: "Pokhara",
    },
    {
      dayNumber: 8,
      title: "Pokhara - Chitwan National Park",
      description: "Get to Chitwan!",
      details:
        "Get ready to go! Today you will drive to Chitwan for a jungle adventure. The Chitwan National park is one of the finest national parks in Asia and lies in the lowlands of south-central Nepal. The World Heritage-listed reserve protects over 932 sq km of forests, marshland and rippling grassland, and is home to sizeable, local wildlife populations.\n\nIt is home to some endangered species such as the Royal Bengal Tiger, one horned Rhinoceros and Leopards. Apart from these rare animals, you will come across many different species of colorful birds. They will mesmerize you with their beauty and sweet songs.",
      meals: "Meals: Lunch, Dinner",
      destinationName: "Chitwan",
    },
    {
      dayNumber: 9,
      title: "Chitwan - Wild Adventure",
      description: "Explore the jungle!",
      details:
        "Today is all about exploring the Chitwan National Park. The highlights of the Chitwan adventure are elephant briefing, nature walks, canoeing, elephant safari and many others.\n\nChitwan National Park is the Homeland of the Tharu people who are the original tribe of this region. Enjoy a cultural programme from these friendly, local people and learn about their culture, tradition, religion and heritage.\n\nHop on a bullock cart and enjoy a unique ride that is slow, yet provides a great outdoor excursion experience.",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chitwan",
    },
    {
      dayNumber: 10,
      title: "Chitwan - Jeep Safari",
      description: "Enjoy a Jeep Safari in Chitwan National Park!",
      details:
        "You will continue your Chitwan jungle adventure program in comfort and leisure. Are you ready for a Jeep safari through the jungle? Don't forget to take your camera with you, as you might come across various species, some of which are very rare.\n\nGet some real excitement with the wildflife in Chitwan National Park and see the animals from a close range. Enjoy your day close to the nature!",
      meals: "Meals: Breakfast, Lunch, Dinner",
      destinationName: "Chitwan",
    },
    {
      dayNumber: 11,
      title: "Chitwan - Drive To Lumbini",
      description: "Step into the land of divinity!",
      details:
        "After breakfast, you will go on a long drive to Lumbini, the birthplace of Buddha, the symbol of peace and harmony. Lumbini is a magnificent city, closely linked with Buddhism. There you will find the Mayadevi temple, the birth place of Lord Buddha, as well as numerous monasteries. This is why Lumbini is considered to be the most important pilgrimage destination for all buddhists.\n\nOne of the main landmarks of Lumbini is the Sacred Garden. It is spread over 8 sq km and possesses all of the treasures of the historical area.",
      meals: "Meals: Breakfast",
      destinationName: "Lumbini",
    },
    {
      dayNumber: 12,
      title: "Lumbini - Fly To Kathmandu - Kathmandu Durbar Square",
      description: "Back to Kathmandu!",
      details:
        "In the early morning take part in a tricycle tour around greater Lumbini. After you have enjoyed this divine city for the last time, drive to Bhairahawa Airport where you will board a flight to Kathmandu.\n\nExplore Kathmandu Durbar Square also known as a city of temples. Visit The Kumari Ghar - the residence of the Kumari Living Goddess in Kathmandu Durbar Square. This 18th century wood panel building is set in an ornate courtyard. Admire the exquisite wood panel carvings all around the Kumari House and take some pictures.\n\nAfter you have explored the highlights of Kathmandu Durbar Square, do some shopping for souvenirs, spices, tea or the famous Pashmina shawal. You will love the immersive experience of the small, colorful markets!",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
    {
      dayNumber: 13,
      title: "Kathmandu - Bhaktapur Durbar Square - Farewell Dinner",
      description: "Stroll around Bhaktapur Durbar Squar!",
      details:
        "Today, you will drive to the beautiful ancient city of Bhaktapur. It is a UNESCO World Heritage Site and is often called a \"living museum\". Once you arrive there, you will get the feeling that you have gone back in time.\n\nEnjoy the beauty of Bhaktapur Durbar Square with its ancient palaces, traditional Nepalese houses, pagodas, and the breathtaking mountain ranges in the background. Stroll around the narrow alleys, observe the centuries-old pottery making techniques and immerse yourself into the Newari culture.\n\nAfter you have admired the sights of the breathtaking Bhaktapur Durbar Square, enjoy a luxurious Nepalese banquet to taste the local cuisine.",
      meals: "Meals: Breakfast, Dinner",
      destinationName: "Bhaktapur",
    },
    {
      dayNumber: 14,
      title: "Departure - Transfer To The Airport",
      description: "Farewell, Nepal!",
      details:
        "Even the greatest trips, such as yours, must come to an end. You've seen many things and had unforgettable experiences! We are sure that this amazing journey through Nepal will have a special place in your heart.\n\nYou will be transferred to Kathmandu International Airport for your next destination.",
      meals: "Meals: Breakfast",
      destinationName: "Kathmandu",
    },
  ],
};
