
/** Static climate hints + month lists used with “current month in Morocco” for the season badge. */
export interface DestinationClimate {
  bestTimeRange: string;
  summary: string;
  /** Months (1–12) considered peak comfort for most travelers */
  idealMonths: number[];
  /** Still pleasant / workable; lighter crowds or trade-offs */
  goodMonths: number[];
  /** Optional caveat (heat, wind, rain, etc.) */
  avoidHint?: string;
}

/** A single milestone in a destination's "Walk Through Time" timeline. */
export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  /** Trivia / cultural hook displayed under the description. */
  fact: string;
  /** Public path to the image illustrating this milestone. */
  image: string;
}

export interface Destination {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  /** Representative coordinates for nearby weather (not spot forecasts). */
  coordinates: { lat: number; lon: number };
  climate: DestinationClimate;
  /** Optional editorial timeline rendered alternating left/right. */
  timeline?: TimelineEvent[];
}

export const destinations: Destination[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    shortDescription: "The vibrant heart of Moroccan culture and history.",
    fullDescription: "Marrakech, the 'Red City', is a place of magic and mystery. From the bustling Jemaa el-Fnaa square to the serene Majorelle Garden, it offers a sensory explosion of colors, scents, and sounds. Explore ancient palaces, get lost in the labyrinthine souks, and experience the ultimate Moroccan hospitality in world-class riads.",
    image: "/images/dest-marrakech-modern.png",
    coordinates: { lat: 31.6295, lon: -7.9811 },
    climate: {
      bestTimeRange: "March–May & mid-September–November",
      summary:
        "Warm days, cool evenings, and gardens at their best. Spring and autumn avoid the worst summer heat while staying mostly dry.",
      idealMonths: [3, 4, 5, 10, 11],
      goodMonths: [9, 12, 1, 2],
      avoidHint:
        "July–August can exceed 40°C; pace yourself and plan shade, water, and pool time.",
    },
    highlights: ["Jemaa el-Fnaa Square", "Bahia Palace", "Majorelle Garden", "Koutoubia Mosque", "Golf & Atlas Views"],
    timeline: [
      {
        id: "koutoubia",
        title: "The Koutoubia Mosque",
        description:
          "Begin your journey at the largest mosque in Marrakech, an architectural masterpiece of the Almohad dynasty.",
        fact: "The minaret is exactly 77 meters tall and inspired the Giralda of Seville and the Hassan Tower in Rabat.",
        image: "/images/koutoubia-mosque-interior.png",
      },
      {
        id: "bahia-palace",
        title: "Bahia Palace",
        description:
          "Wander through the intricate courtyards and lush gardens of this 19th-century palace, built to be the greatest of its time.",
        fact: "The name 'Bahia' translates to 'The Brilliant', and it was built for a former slave who rose to power.",
        image: "/images/bahia-palace.png",
      },
      {
        id: "majorelle",
        title: "Majorelle Garden",
        description:
          "Escape the bustling medina in this botanical and landscape garden created by artist Jacques Majorelle.",
        fact: "Yves Saint Laurent bought the garden in 1980 to save it from real-estate developers.",
        image: "/images/majorelle-garden.png",
      },
      {
        id: "jemaa-el-fnaa",
        title: "Jemaa el-Fnaa Square",
        description:
          "Experience the heart of the city as the sun sets, when the square fills with storytellers, musicians, and food stalls.",
        fact: "It was declared a 'Masterpiece of the Oral and Intangible Heritage of Humanity' by UNESCO.",
        image: "/images/jemaa-el-fnaa-sunset.png",
      },
      {
        id: "golf-atlas",
        title: "Golf & the Atlas",
        description:
          "End the journey on championship fairways framed by palm groves, with the snow-capped High Atlas as your backdrop — Marrakech's modern luxury chapter.",
        fact: "Marrakech is home to over a dozen world-class courses, including Royal Golf, Amelkis, and Samanah, all within a 20-minute drive of the medina.",
        image: "/images/golf-fairway-vertical.png",
      },
    ],
  },
  {
    slug: "fes",
    name: "Fes",
    shortDescription: "An ancient labyrinth of medieval architecture and tradition.",
    fullDescription: "Fes is the intellectual and spiritual capital of Morocco. Its medina, Fes el-Bali, is a UNESCO World Heritage site and the largest car-free urban area in the world. Witness the ancient craft of tanning at the Chouara Tannery, admire the intricate tilework of Al-Attarine Madrasa, and step back in time through its narrow, winding alleys.",
    image: "/images/fes-tannery-cityscape.png",
    coordinates: { lat: 34.0331, lon: -5.0003 },
    climate: {
      bestTimeRange: "April–June & September–October",
      summary:
        "Spring and early autumn balance comfortable walking temperatures in the medina with lower flood risk than winter rains.",
      idealMonths: [4, 5, 6, 9, 10],
      goodMonths: [3, 11, 12, 1, 2],
      avoidHint:
        "Mid-summer is hot for long medina walks; mid-winter nights are cool and rain is more common.",
    },
    highlights: [
      "Al-Qarawiyyin University",
      "Bou Inania Madrasa",
      "Chouara Tannery",
      "Bab Boujloud (Blue Gate)",
      "Fes el-Bali Medina",
    ],
    timeline: [
      {
        id: "al-qarawiyyin",
        title: "Al-Qarawiyyin University",
        description:
          "Step inside the courtyard of the world's oldest continuously operating university, founded in 859 by Fatima al-Fihri — a female scholar whose vision shaped centuries of learning.",
        fact: "UNESCO and Guinness World Records recognize Al-Qarawiyyin as the oldest existing, continually operating educational institution on Earth.",
        image: "/images/fes-architecture-1.png",
      },
      {
        id: "bou-inania",
        title: "Bou Inania Madrasa",
        description:
          "Wander through the finest Merinid madrasa in Morocco — zellij mosaics, carved cedar, and stucco calligraphy form a jewel of 14th-century Islamic architecture.",
        fact: "Built between 1350 and 1355 by Sultan Abu Inan Faris, it is one of the few religious buildings in Fes that non-Muslims are allowed to enter.",
        image: "/images/fes-architecture-2.png",
      },
      {
        id: "chouara-tannery",
        title: "Chouara Tannery",
        description:
          "Climb to a leather-shop terrace for the iconic view of Chouara's honeycomb of dye pits — a craft practiced here, unchanged, for more than a thousand years.",
        fact: "The tanners still use natural ingredients — pigeon droppings, cow urine, saffron, poppy, and indigo — exactly as they did in medieval Fes.",
        image: "/images/fes-tannery-cityscape.png",
      },
      {
        id: "bab-boujloud",
        title: "Bab Boujloud — The Blue Gate",
        description:
          "Pass through the emblematic western entrance to the medina, its cobalt-blue tilework (Fes's colour) facing out, and vivid green (Islam's colour) facing in.",
        fact: "The gate as you see it today was actually built by the French in 1913 — a faithful Moorish-revival reconstruction beside the original 12th-century Almohad gateway.",
        image: "/images/fes-grand-portal.png",
      },
      {
        id: "fes-el-bali",
        title: "Fes el-Bali Medina",
        description:
          "Lose yourself in the largest car-free urban area on the planet — a labyrinth of over nine thousand lanes, souks, fondouks, and hidden riads listed by UNESCO.",
        fact: "Fes el-Bali has been a UNESCO World Heritage site since 1981, recognised as the most complete medieval Islamic city still in use today.",
        image: "/images/fes-architecture-3.png",
      },
    ],
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    shortDescription: "Morocco's dreamy Blue Pearl nestled in the Rif Mountains.",
    fullDescription: "Chefchaouen is famous for its striking, blue-washed buildings that create a surreal and peaceful atmosphere. Nestled in the Rif Mountains, it's a photographer's dream. Wander through its cobalt-blue streets, enjoy the cool mountain air, and witness one of the most unique aesthetic wonderlands in the world.",
    image: "/images/chefchaouen-plaza-uta.png",
    coordinates: { lat: 35.1714, lon: -5.2636 },
    climate: {
      bestTimeRange: "April–June & September–October",
      summary:
        "Mountain air stays mild; spring flowers and clear autumn skies are ideal for walking the blue medina.",
      idealMonths: [4, 5, 6, 9, 10],
      goodMonths: [3, 11, 7, 8],
      avoidHint:
        "December–February is cooler and wetter in the Rif; pack layers and a rain shell.",
    },
    highlights: [
      "Kasbah & Plaza Uta el-Hammam",
      "Blue-washed Medina",
      "Artisan Doors & Courtyards",
      "Ras El Maa Spring",
      "Spanish Mosque Viewpoint",
    ],
    timeline: [
      {
        id: "kasbah-founding",
        title: "The Kasbah & Plaza Uta el-Hammam",
        description:
          "Begin at the ochre-red Kasbah on Plaza Uta el-Hammam — the fortified heart of Chefchaouen, built in 1471 by Ali ibn Rashid as a refuge from Portuguese incursions.",
        fact: "For nearly 450 years the town was closed to Christians — only three Westerners are known to have entered before 1920, all in disguise.",
        image: "/images/chefchaouen-plaza-uta.png",
      },
      {
        id: "blue-washing",
        title: "The Blue-Washing Tradition",
        description:
          "Step into the blue: cobalt walls, sapphire doors, and powder-blue steps turn the medina into a living watercolor — photographed more than almost any street on earth.",
        fact: "Locals say the Jewish refugees who arrived in the 1930s painted the walls blue to echo the sky and remind them of the divine — a tradition the whole town kept.",
        image: "/images/chefchaouen-alley-blue.png",
      },
      {
        id: "blue-doors",
        title: "Artisan Doors & Courtyards",
        description:
          "Pause at the hand-painted doors and tiled courtyards where daily life unfolds — craftsmen still mix their own indigo pigment the way their grandfathers did.",
        fact: "Chefchaouen's blue is re-painted every spring, just before the tourist season, in a community ritual called 'tajdid al-zarqa' — the renewal of the blue.",
        image: "/images/chefchaouen-door-blue.png",
      },
      {
        id: "ras-el-maa",
        title: "Ras El Maa Spring",
        description:
          "Follow the cool mountain stream rushing down from the Rif to the traditional washhouses where women still rinse carpets and linens in the turquoise water.",
        fact: "Ras El Maa means 'head of the water' in Arabic — the spring feeds the entire medina and is the reason Chefchaouen could survive its long siege centuries.",
        image: "/images/chefchaouen-courtyard-blue.png",
      },
      {
        id: "spanish-mosque",
        title: "The Spanish Mosque Viewpoint",
        description:
          "Climb the 30-minute trail at dusk to the hilltop Spanish Mosque for the most iconic panorama in Morocco — the entire blue medina set against the Rif mountains.",
        fact: "Built by the Spanish during their 1920s protectorate, the mosque was never actually used for prayer — today it's purely a pilgrimage for photographers at sunset.",
        image: "/images/chefchaouen-view-1.png",
      },
    ],
  },
  {
    slug: "merzouga",
    name: "Merzouga",
    shortDescription: "The gateway to the golden dunes of the Sahara Desert.",
    fullDescription: "Merzouga is where the real desert adventure begins. Home to the towering Erg Chebbi dunes, it offers a truly cinematic experience. Ride camels into the sunset, sleep under a million stars in a luxury desert camp, and witness the awe-inspiring silence and beauty of the Great Sahara.",
    image: "/images/tour-desert-camp.png",
    coordinates: { lat: 31.1042, lon: -4.0088 },
    climate: {
      bestTimeRange: "October–April",
      summary:
        "Cooler nights, bearable midday heat, and starry skies make desert camps most comfortable outside midsummer.",
      idealMonths: [10, 11, 12, 1, 2, 3, 4],
      goodMonths: [9, 5],
      avoidHint:
        "June–August brings extreme daytime heat on the dunes; sunrise/sunset activities are still possible but less forgiving.",
    },
    highlights: [
      "Erg Chebbi Dunes",
      "Golden-Hour Camel Caravan",
      "Luxury Desert Camp",
      "Berber Fires & Drums",
      "Sahara Sunrise",
    ],
    timeline: [
      {
        id: "erg-chebbi",
        title: "Arrival at Erg Chebbi",
        description:
          "The tarmac ends and the dunes begin — 22 kilometres of rust-gold sand rolling out of the Hamada plain, some peaks towering 150 metres above the desert floor.",
        fact: "Erg Chebbi is one of only two true ergs (sand seas) in Morocco — local legend says the dunes were sent as divine punishment for a family who refused hospitality to a pilgrim.",
        image: "/images/hero-desert.png",
      },
      {
        id: "camel-caravan",
        title: "Golden-Hour Camel Caravan",
        description:
          "Mount a Berber-trained dromedary and follow your guide in single file along the ridge line as the late sun turns every grain of sand into a small ember.",
        fact: "The dromedary can go 10 days without water and carry 200 kg — for over a thousand years these caravans linked Timbuktu's salt trade with Fes and the Atlantic ports.",
        image: "/images/camel-caravan-sunset.png",
      },
      {
        id: "luxury-camp",
        title: "The Luxury Desert Camp",
        description:
          "Arrive at a private camp tucked between the tallest dunes — hand-woven rugs, copper lanterns, a four-poster bed, and a tagine already bubbling over the fire.",
        fact: "Mortours works only with carpeted, en-suite camps that pack out every trace — the best ones rotate location each season so the desert keeps its silence.",
        image: "/images/tour-desert-camp.png",
      },
      {
        id: "berber-fires",
        title: "Berber Fires & a Million Stars",
        description:
          "After dinner, gather at the fire for gnaoua drums and stories of the nomads — when the music stops, the silence of the Sahara and the full band of the Milky Way take over.",
        fact: "The desert around Erg Chebbi is a Bortle 1 dark-sky site — on a moonless night the naked eye can pick out more than 4,000 stars.",
        image: "/images/sahara-camp-drums-1.png",
      },
      {
        id: "sahara-sunrise",
        title: "Sunrise Over the Great Dune",
        description:
          "Wake before dawn, climb the highest dune with tea in hand, and watch the first light paint the sand every shade of pink, copper, and gold.",
        fact: "The colour shift you're watching is caused by haematite — iron oxide coating each grain — the same pigment that gave Marrakech's walls their famous red.",
        image: "/images/gallery-sahara-camels-rainbow.png",
      },
    ],
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    shortDescription: "A modern metropolis blending tradition with cosmopolitan flair.",
    fullDescription: "Casablanca is Morocco's economic powerhouse and most modern city. It is home to the magnificent Hassan II Mosque, one of the largest and most beautiful mosques in the world, perched right on the Atlantic edge. Experience the blend of Art Deco architecture and contemporary Moroccan life in this vibrant seaside city.",
    image: "/images/dest-casablanca.png",
    coordinates: { lat: 33.5731, lon: -7.5898 },
    climate: {
      bestTimeRange: "May–October",
      summary:
        "Ocean breezes keep summers milder than inland; late spring through autumn is best for the Corniche and open-air dining.",
      idealMonths: [5, 6, 7, 8, 9, 10],
      goodMonths: [4, 11, 3],
      avoidHint:
        "Winter can be cloudy with occasional rain; the Hassan II Mosque esplanade is windier year-round.",
    },
    highlights: [
      "Hassan II Mosque",
      "The Atlantic Corniche",
      "Ain Diab Beaches",
      "Habous Quarter",
      "Art Deco Heritage",
    ],
    timeline: [
      {
        id: "hassan-ii-mosque",
        title: "Hassan II Mosque",
        description:
          "Begin where Casablanca meets the ocean — at the largest mosque in Africa, half of it built on reclaimed land so worshippers can pray above the Atlantic itself.",
        fact: "Its minaret rises 210 metres — the second tallest in the world — and a laser at the top points directly toward Mecca, 5,400 km away.",
        image: "/images/dest-casablanca.png",
      },
      {
        id: "corniche-atlantic",
        title: "The Atlantic Corniche",
        description:
          "Walk the seafront promenade from the mosque to Ain Diab: rolling waves on one side, palm-lined cafés, lighthouses, and a salt breeze that smells of the New World on the other.",
        fact: "The Corniche was redesigned for the Africa Cup of Nations 2025 — the whole 5-kilometre promenade was rebuilt with wooden decking, public art, and ocean-view lounges.",
        image: "/images/casablanca-atlantic-corniche.png",
      },
      {
        id: "ain-diab",
        title: "Ain Diab Beaches & Sunset Clubs",
        description:
          "End the afternoon on Ain Diab's crescent of golden sand, where white cabanas, rooftop pools, and beach restaurants give Casablanca its cosmopolitan rhythm.",
        fact: "Ain Diab is where Casablanca's famous nightlife starts — Rick's Café, the real-life tribute to the 1942 film, is a 10-minute drive from the beach.",
        image: "/images/casablanca-ain-diab-sunset.png",
      },
      {
        id: "habous-art-deco",
        title: "Habous Quarter & Art Deco Heritage",
        description:
          "Finish in the 'New Medina' — the Habous — where 1920s French Mauresque architecture meets Moroccan arches, olive vendors, and bookshops with handwritten signs.",
        fact: "Downtown Casablanca has one of the world's richest ensembles of Art Deco façades — more than 400 protected buildings built between 1912 and 1956.",
        image: "/images/casablanca-habous-quarter.png",
      },
    ],
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    shortDescription: "The windswept coastal charm of the Atlantic's 'Mogador'.",
    fullDescription: "Essaouira is a breezy coastal town known for its laid-back atmosphere, historic ramparts, and vibrant port. Formerly known as Mogador, it has inspired musicians and artists for decades. Enjoy fresh seafood at the harbor, stroll along the fortifications, and experience the unique blend of Portuguese, French, and Moroccan history.",
    image: "/images/tour-essaouira.png",
    coordinates: { lat: 31.5085, lon: -9.7595 },
    climate: {
      bestTimeRange: "April–June & September–November",
      summary:
        "Atlantic trade winds keep summers cooler than Marrakech; spring and autumn balance sunshine with less intense gusts for strolling the ramparts.",
      idealMonths: [4, 5, 6, 9, 10, 11],
      goodMonths: [3, 7, 8, 12],
      avoidHint:
        "The Alizée wind is famous — great for kitesurfing, less ideal if you want flat-calm beach days every day.",
    },
    highlights: [
      "Portuguese Ramparts",
      "Skala de la Ville",
      "Historic Fishing Port",
      "Seafood Market Grill",
      "Alizée Kite Beaches",
    ],
    timeline: [
      {
        id: "mogador-ramparts",
        title: "Mogador & the Portuguese Ramparts",
        description:
          "Begin at the 18th-century ramparts built by French architect Théodore Cornut on the bones of a Portuguese fort — Essaouira's whitewashed medina opens up inside their shelter.",
        fact: "Sultan Mohammed III commissioned the city in 1760 as a free port — he even named streets 'Rue de la Liberté' to entice European traders away from Agadir.",
        image: "/images/essaouira-mogador-ramparts.png",
      },
      {
        id: "skala-de-la-ville",
        title: "Skala de la Ville",
        description:
          "Walk the sea-facing ramparts of the Skala, where the old bronze cannons still face the Atlantic — their Spanish engravings polished smooth by three centuries of wind.",
        fact: "Orson Welles filmed his 1952 'Othello' here; Ridley Scott later used the same ramparts for the opening of 'Kingdom of Heaven' — Essaouira has doubled for Crusader Acre on screen.",
        image: "/images/essaouira-skala-seagulls.png",
      },
      {
        id: "fishing-port",
        title: "The Blue Fishing Port",
        description:
          "Down at the working harbour, cobalt-blue wooden boats called 'barques' are stacked like dominoes — the daily catch of sardines, sea bream and sea bass comes straight to the auction stalls.",
        fact: "Essaouira's fleet is one of the oldest sardine ports in the world — over 40% of Morocco's sardine catch still passes through these quays.",
        image: "/images/essaouira-fishing-port.png",
      },
      {
        id: "seafood-grills",
        title: "The Grill Market",
        description:
          "Pick your fish straight from the ice and hand it to one of the open-air grills at Place Moulay Hassan — within minutes it comes back charred, salted, and served with a wedge of lemon.",
        fact: "The same open-fire grill tradition inspired the name of Gnaoua music's biggest festival, held in the square every June and drawing more than 400,000 visitors.",
        image: "/images/essaouira-olive-market.png",
      },
      {
        id: "alizee-kite-beach",
        title: "The Alizée & the Kite Beaches",
        description:
          "End on the long crescent of Essaouira beach, where the famous Alizée trade wind makes this one of the top-ranked kite-surfing bays on the Atlantic.",
        fact: "The Alizée blows from the north-east most afternoons between April and September — reliable enough that kite-surf championships have been held here annually since 1998.",
        image: "/images/essaouira-alizee-beach.png",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
