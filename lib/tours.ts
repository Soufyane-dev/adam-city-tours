export interface TourDay {
  day: number;
  title: string;
  description: string;
  /** Optional hero image for the day (falls back to the tour gallery rotation). */
  image?: string;
}

export interface Tour {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  duration: string;
  groupSize: string;
  difficulty: string;
  image: string;
  gallery: string[];
  program: TourDay[];
  highlights: string[];
}

export const tours: Tour[] = [
  {
    id: "beautiful-morocco-20-days",
    title: "Beautiful Morocco — 20 Days",
    shortDescription:
      "The ultimate grand tour of Morocco: imperial cities, Atlantic surf, two Sahara camps, Atlas crossings, and the Blue Pearl.",
    fullDescription:
      "Our flagship twenty-day journey is the most complete way to discover Morocco. From the storytellers of Jamaa El Fna to the windswept ramparts of Essaouira, the surf breaks of Taghazout, the saffron fields of Taliouine, and the immense dunes of Erg Chegaga and Erg Chebbi — this itinerary threads every landscape and culture that makes Morocco unforgettable. You'll cross the High Atlas cedar forests, sleep under desert stars in luxury camps, wander the medieval medina of Fes with an expert guide, walk the Roman ruins of Volubilis, lose yourself in the blue alleys of Chefchaouen, and finish at the immense Hassan II Mosque in Casablanca. Travel in comfort with private transfers, handpicked riads and hotels, and carefully paced days — the signature Adam City Tours experience, start to finish.",
    price: 990,
    duration: "20 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-beautiful-morocco-20-days.png",
    gallery: [
      "/images/tour-marrakech.png",
      "/images/tour-essaouira.png",
      "/images/agadir-sea-atlantic.jpg",
      "/images/tour-desert-camp.png",
      "/images/ait-benhadou-1.png",
      "/images/sahara-camp-drums-1.png",
      "/images/fes-grand-portal.png",
      "/images/tour-chefchaouen.png",
      "/images/dest-casablanca.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech — Arrival & Jamaa El Fna",
        description:
          "Private pickup at Marrakech airport and transfer to a traditional riad in the medina (15–20 min). Evening exploration of the legendary Jamaa El Fna Square — souks, storytellers, orange juice stalls, and food vendors at the foot of the Koutoubia Mosque. Overnight in riad.",
      },
      {
        day: 2,
        title: "Marrakech — Palaces, Souks & Gardens",
        description:
          "Half-day guided city tour through the kaleidoscopic souks (spices, silver, nuts, metalworkers) and into the opulent Palais Bahia with its landscaped 2-acre garden. Afternoon visit to the Jardin Majorelle — Yves Saint-Laurent's former home and the iconic Majorelle blue oasis. Overnight in riad — breakfast.",
      },
      {
        day: 3,
        title: "Essaouira — Atlantic Coast & Argan Country",
        description:
          "Scenic 3-hour drive to the Atlantic, watching the landscape shift from red dust to Argan orchards. Arrive in Essaouira, a UNESCO-listed port town with Berber, Portuguese, and French heritage. Wander the blue fishing harbor, ramparts, and craft shops. Overnight in riad — breakfast.",
      },
      {
        day: 4,
        title: "Essaouira — Surf, Hammam & Seafood",
        description:
          "Free day in the 'Wind City of Africa'. Surf, windsurf or kite-surf the lively Atlantic breaks, drift through the blue cobbled medina, try a traditional hammam, or take a Moroccan cookery class. Don't miss the fresh harbor seafood. Overnight in riad — breakfast.",
      },
      {
        day: 5,
        title: "Agadir — Drive to Taghazout Bay",
        description:
          "Drive down the coast (3–3.5h) through Argan forests and sleepy fishing villages to Taghazout Bay. Check in at a surf hotel in Tamraght with views over Anchor Point and Killer Point. Watch the sunset over world-famous surf breaks. Overnight in hotel — breakfast.",
      },
      {
        day: 6,
        title: "Agadir — Surfing Taghazout",
        description:
          "Full day of surfing in Taghazout, catering to everyone from first-timers on soft beach breaks to advanced surfers on reef points. The Fall-to-Spring swell is legendary. Overnight in hotel — breakfast.",
      },
      {
        day: 7,
        title: "Agadir — Imsouane Day",
        description:
          "Excursion to Imsouane, a tranquil surf village between Essaouira and Taghazout, famous for hosting one of the longest waves in the world. A favorite of surfers chasing calm and pristine scenery. Overnight in hotel — breakfast.",
      },
      {
        day: 8,
        title: "Taroudant — Berber Capital of the South",
        description:
          "Transfer (~2h) past banana plantations to Taroudant, the 16th-century former capital. Explore the silver Berber jewelry souks, medieval tanneries, and intact city ramparts — often called the 'Grandmother of Marrakech'. Overnight in riad — breakfast.",
      },
      {
        day: 9,
        title: "Erg Chegaga — Saffron Fields to the Great Dunes",
        description:
          "Long, spectacular drive (~6h) through Taliouine (capital of saffron) and Tazenakht (capital of carpets), lunch at the Foum Zguid palm grove, then a sandy track across the great southern desert to the towering dunes of Erg Chegaga. Overnight in a luxury desert camp — breakfast & dinner.",
      },
      {
        day: 10,
        title: "Zagora — Sunrise & Draa Valley",
        description:
          "Wake early for sunrise over the Chegaga dunes. Drive (~4h) to Zagora via the Draa Valley and Tamgroute, visiting the Quranic library and the Tamgroute pottery cooperative. Evening at leisure in the palm-lined oasis town. Overnight in riad — breakfast.",
      },
      {
        day: 11,
        title: "Dades Valley — Kasbah Route & Saghro Crossing",
        description:
          "Head north (4–5h) via Nkob along the long Draa oasis, dotted with ruined kasbahs and palm groves, then cross the Saghro Mountains to the dramatic Valley of Dades and its red-rock gorges. Overnight in riad — breakfast.",
      },
      {
        day: 12,
        title: "Merzouga — Todra Gorge & Camel Trek to Erg Chebbi",
        description:
          "Drive through the Valley of the Roses and the towering Todra Gorges with optional short walk. Arrive in Merzouga and mount camels for the short trek to the luxury desert camp in the great Erg Chebbi dunes. Climb a dune for sunset, dinner under the stars. Overnight in desert luxury camp — breakfast & dinner.",
      },
      {
        day: 13,
        title: "Fes — Scenic Drive through the Atlas",
        description:
          "Long but gorgeous drive north from the Sahara: past Ziz Gorge, through Midelt and the nomadic plains of Ait Atta, into the Middle Atlas cedar forests (home to Barbary macaques, wild boar, and deer). Descend through Alpine Ifrane and continue to Fes. Overnight in riad — breakfast.",
      },
      {
        day: 14,
        title: "Fes — Medieval Medina Tour",
        description:
          "Full day guided tour of Morocco's oldest imperial city. Explore the Royal Palace, the world's largest car-free medina, medieval tanneries, and sprawling artisan souks. Sample a charcoal tagine or fresh mint tea in a side-street café. Overnight in riad — breakfast.",
      },
      {
        day: 15,
        title: "Chefchaouen — Volubilis & the Blue Pearl",
        description:
          "Drive (3.5–4h) north via the small lakes of the Middle Atlas, stopping at the UNESCO-listed Volubilis Roman ruins — Triumphal Arch, Capitol, Basilica, and remarkable mosaics. Continue into the Rif foothills to the dreamy blue-washed town of Chefchaouen. Overnight in riad — breakfast.",
      },
      {
        day: 16,
        title: "Chefchaouen — Talassemtane National Park",
        description:
          "Day in the Talassemtane National Park (created 2004, 58,950 ha) — endemic Moroccan fir, Atlas cedar, deep valleys, torrential gorges, and rare wildlife including Golden Eagles and Bearded Vultures. Part of the Mediterranean Transcontinental Biosphere Reserve. Overnight in riad — breakfast.",
      },
      {
        day: 17,
        title: "Tangier — Rif Mountains to the Strait",
        description:
          "Transfer (2–2.5h) through mountain terrain to the coastal city of Tangier. Morning orientation with a local guide — Grand and Petit Socco, Silversmith Street, medina and old souks. Free afternoon for the beach or further exploration. Overnight in riad or hotel — breakfast.",
      },
      {
        day: 18,
        title: "Rabat — Coastal Drive via Asilah & Lixus",
        description:
          "Travel down the coast (3–3.5h) with optional stops at the whitewashed fishing town of Asilah and the Roman remains of Lixus near Larache. Arrive in Rabat, Morocco's calm and cosmopolitan capital. Overnight in riad or hotel — breakfast.",
      },
      {
        day: 19,
        title: "Casablanca — Kasbah, Chellah & Hassan II Mosque",
        description:
          "Morning exploring Rabat's 12th-century Kasbah des Oudaïas and the UNESCO-listed Chellah (Roman ruins turned Islamic necropolis). Short transfer (1–1.5h) to Casablanca for the breathtaking Hassan II Mosque — the largest in Africa, perched on the Atlantic, with the world's tallest minaret at 210m. Overnight in riad or hotel — breakfast.",
      },
      {
        day: 20,
        title: "Casablanca — Departure",
        description:
          "Private transfer from your Casablanca hotel to the airport for your onward flight (40–60 minutes). End of an unforgettable journey.",
      },
    ],
    highlights: [
      "Jamaa El Fna, Palais Bahia & Jardin Majorelle",
      "Essaouira harbor, surfing in Taghazout & Imsouane",
      "Two luxury desert camps — Erg Chegaga & Erg Chebbi",
      "Todra Gorges, Valley of Roses & Dades red rocks",
      "Medieval Fes medina with expert local guide",
      "Volubilis Roman ruins & Chefchaouen Blue Pearl",
      "Hassan II Mosque & Rabat's Chellah (UNESCO)",
      "Private transfers, riads & hotels throughout",
    ],
  },
  {
    id: "casa-to-casa-essaouira-10-days",
    title: "Casa to Casa via Essaouira — 10 Days",
    shortDescription:
      "A loop from Casablanca through Rabat, Chefchaouen, Fes, the Sahara, Marrakech and the Atlantic coast.",
    fullDescription:
      "Ten carefully paced days that begin and end in Casablanca, threading the country's imperial heart with its bluest and wildest corners. Arrive at the great Hassan II Mosque, sleep in the Blue Pearl of Chefchaouen, walk the Roman ruins of Volubilis and the monumental gate of Bab Mansour in Meknes, lose yourself in the medieval medina of Fes, ride camels across Erg Chebbi at sunset, wander the Dades Valley and the UNESCO-listed Aït Benhaddou, and finish on the windswept Atlantic ramparts of Essaouira before looping back to Casablanca. Private driver-guide, hand-picked riads and a balanced pace throughout.",
    price: 590,
    duration: "10 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-casablanca.png",
    gallery: [
      "/images/dest-casablanca.png",
      "/images/tour-chefchaouen.png",
      "/images/chefchaouen-alley-blue.png",
      "/images/fes-grand-portal.png",
      "/images/tour-desert-camp.png",
      "/images/ait-benhadou-1.png",
      "/images/tour-marrakech.png",
      "/images/tour-essaouira.png",
    ],
    program: [
      {
        day: 1,
        title: "Casablanca Arrival → Rabat",
        description:
          "Private pickup at Casablanca airport. Depending on arrival time, visit the spectacular Hassan II Mosque before driving up the coast to Rabat, the present-day imperial capital. Explore the UNESCO-listed Kasbah of the Oudaïas, the iconic Hassan Tower, and the Mausoleum of Mohammed V. Overnight in Rabat.",
      },
      {
        day: 2,
        title: "Rabat → Chefchaouen (The Blue Pearl)",
        description:
          "Optional morning tour of Rabat's highlights, then drive north into the Rif Mountains to reach Chefchaouen. Check in and enjoy an orientation walk — past the Kanar River 'laundromat', through the winding blue medina to Place Outa el Hammam. Free afternoon to explore the 15th-century Kasbah and its museum, and climb to the Spanish Mosque for the legendary sunset over the blue city.",
      },
      {
        day: 3,
        title: "Chefchaouen → Volubilis → Meknes → Fes",
        description:
          "Leave Chefchaouen and drive south to the UNESCO-listed Roman ruins of Volubilis (3rd century BCE). Guided tour, then continue to the imperial city of Meknes — the marble-columned Bab Mansour gate, the mausoleum of Moulay Ismail, and the impressive Agdal reservoir and Heri es-Souani (which once stabled 12,000 horses). Short drive to Fes for overnight.",
      },
      {
        day: 4,
        title: "Fes — Guided Medina Tour",
        description:
          "Full day with a local guide: the Royal Palace, the Mellah (Jewish Quarter), panoramic views from the Borj towers, a pottery demonstration by Fassi artisans, and a deep dive into the medina's ancient lanes — artisan districts, the legendary tanneries, the Tomb of Idriss II, and Al-Qarawiyyin, the world's oldest continuously operating university. Free afternoon.",
      },
      {
        day: 5,
        title: "Fes → Ifrane → Cedar Forest → Merzouga",
        description:
          "Drive south through Ifrane, the 'Switzerland of Morocco', with a stop in the cedar forest near Azrou — home to Barbary macaques. Continue via the Middle Atlas to Midelt for lunch, through the Tizi Ntalghamt pass and the dramatic Ziz Gorge, then along the palm-lined Ziz Valley via Erfoud and Rissani. Arrive in Merzouga in the afternoon for welcome mint tea, then camel trek across Erg Chebbi to your desert camp for overnight.",
      },
      {
        day: 6,
        title: "Merzouga Sunrise → Todra Gorge → Dades Valley",
        description:
          "Wake before dawn to climb a dune and watch the sunrise turn the sand red. Breakfast at the camp, then return by camel (or 4x4 if preferred). Visit a fossil museum and ancient desert irrigation (khettaras). Lunch in the Todra Valley — a half-hour walk through the palm grove and Jewish quarter to the towering Todra Gorges, Morocco's highest and narrowest. Evening drive to the Dades Valley with its 'monkey toes' rock formations. Overnight in an elegant guesthouse with valley views.",
      },
      {
        day: 7,
        title: "Dades → Aït Benhaddou → Marrakech",
        description:
          "Take the Road of a Thousand Kasbahs to Ouarzazate (quick stop), then on to the UNESCO World Heritage kasbah of Aït Benhaddou. Explore the spectacular clay architecture, then cross the High Atlas via the Tizi n'Tichka pass (nearly 2,133 m) with plenty of tea and photo stops. Arrive in Marrakech by late evening.",
      },
      {
        day: 8,
        title: "Marrakech — Sightseeing",
        description:
          "After breakfast, meet a local guide for a grand tour of Marrakech — Bahia Palace, Saadian Tombs, Ben Youssef Madrasa, and/or the Koutoubia Mosque. Wander the maze-like souks to watch artisans at work. Free afternoon to explore on your own or relax at your riad.",
      },
      {
        day: 9,
        title: "Marrakech → Essaouira",
        description:
          "Drive west to the coast, stopping at an Argan oil cooperative (and, if lucky, the tree-climbing goats!). Arrive in Essaouira and check in. Pick your lunch fresh from the wharf — seafood grilled Moroccan-style. Afternoon to explore the medina, try kite- or wind-surfing, and watch sunset from the ramparts over the Atlantic.",
      },
      {
        day: 10,
        title: "Essaouira → Casablanca (Departure)",
        description:
          "Leisurely breakfast, then private transfer (≈ 4.5 h) back to Casablanca — either to your hotel or directly to the airport for your onward flight.",
      },
    ],
    highlights: [
      "Hassan II Mosque & Kasbah des Oudaïas (Rabat)",
      "Chefchaouen Blue Pearl & Spanish Mosque sunset",
      "Volubilis Roman ruins & Bab Mansour in Meknes",
      "Al-Qarawiyyin & tanneries in medieval Fes",
      "Cedar forest macaques & camel trek at Erg Chebbi",
      "Todra Gorges & Dades Valley monkey toes",
      "Aït Benhaddou UNESCO site & Tizi n'Tichka",
      "Essaouira ramparts, Argan goats & Atlantic seafood",
    ],
  },
  {
    id: "authentic-morocco-desert-5-days",
    title: "Authentic Morocco Desert Tour — 5 Days",
    shortDescription:
      "High Atlas, ancient caravan routes, Aït Benhaddou, Ouzina hidden dunes, and a camel sunset at Erg Chebbi.",
    fullDescription:
      "A five-day immersion into the very soul of southern Morocco — from Marrakech across the High Atlas via the Tichka Pass (2,260 m), along ancient caravan routes through the Draa Valley, into the off-the-beaten-track Ouzina desert, and onward to the golden dunes of Erg Chebbi. Along the way you'll discover the UNESCO-listed kasbah of Aït Benhaddou (famous from Gladiator and Lawrence of Arabia), share mint tea with a family in the 14-household village of Ouzina, hear traditional Gnawa music in Khamlia, ride camels over the Erg Chebbi dunes to a Bedouin-style camp for a star-lit dinner, and explore the dramatic 300 m cliffs of Todra Gorge and the rose-scented Dades Valley. A genuine, cultural desert adventure — not a rush.",
    price: 439,
    duration: "5 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/camel-caravan-sunset.png",
      "/images/ait-benhadou-1.png",
      "/images/ait-benhadou-2.png",
      "/images/ait-benhadou-3.png",
      "/images/ait-benhadou-4.png",
      "/images/sahara-camp-drums-1.png",
      "/images/tour-desert-camp.png",
      "/images/ourika-valley-1.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Zagora via Tichka Pass & Aït Benhaddou",
        description:
          "Early departure from Marrakech. Cross the High Atlas via the Tichka Pass (2,260 m) — Morocco's highest road pass — with panoramic views, serpentine roads and Berber villages clinging to the mountainsides. Visit the kasbahs of Tamnougalte and the 16th-century UNESCO-listed Aït Benhaddou, used as a filming location for Gladiator and many other blockbusters. Continue through the palm-lined Draa River valley. Overnight in a traditional kasbah in Zagora.",
      },
      {
        day: 2,
        title: "Zagora → Ouzina Desert (off-the-beaten-track)",
        description:
          "A full day through magnificent desert scenery rarely visited by tourists — on the crossroads of the old caravan routes that once carried sugar, cotton and rice across Morocco, and part of the historic Paris-Dakar Rally. Cross the Draa Valley and the Oum Geran Plateau, pass hidden Berber villages and black desert ergs. Picnic lunch under an acacia tree. Arrive in the afternoon to your hotel in the Ouzina desert.",
      },
      {
        day: 3,
        title: "Ouzina → Khamlia → Erg Chebbi Camel Trek",
        description:
          "Morning visit to the 14-family village of Ouzina — adobe houses, communal bakery where women gather to bake bread, the local school, and mint tea with a local family. Continue to Khamlia, a traditional Saharan village whose people originally came from Mali — enjoy live Gnawa drumming and dance, then walk through its farmed plots in the sand. On arrival in Merzouga, mount your personal camel and trek over the great dunes of Erg Chebbi to a Bedouin-style camp. Hike to a dune top for sunset, then dinner by the fire under the stars.",
      },
      {
        day: 4,
        title: "Erg Chebbi → Todra Gorge → Dades Valley",
        description:
          "Rise early for a spectacular desert sunrise and open-air breakfast at the camp. Leave Merzouga for the oasis town of Tinghir and the towering Todra Gorge — dramatic cliffs up to 300 m high, with streams running into palmeraies. Time to walk the canyon with a local guide and lunch riverside. Continue to Boumalne Dades and detour up into the Dades Gorges — stunning rock formations, kasbahs, and pisé villages along one of the most scenic drives in the world.",
      },
      {
        day: 5,
        title: "Dades Valley → Valley of Roses → Marrakech",
        description:
          "Short morning walk in the Dades Gorges, then follow the Dades Valley through El Kelaâ M'Gouna (the Valley of Roses and the 'Road of a Thousand Kasbahs'). Stop in Ouarzazate and lunch in Aït Benhaddou village with time to explore the UNESCO-listed site — the nest of films such as Gladiator and Lawrence of Arabia. Cross the Tichka Pass back into the High Atlas and return to Marrakech by evening.",
      },
    ],
    highlights: [
      "Tichka Pass (2,260 m) — Morocco's highest road",
      "UNESCO Aït Benhaddou — Hollywood's kasbah",
      "Off-the-beaten-path Ouzina desert",
      "Gnawa music in Khamlia village",
      "Camel trek & Bedouin camp in Erg Chebbi",
      "Todra Gorge — 300 m cliffs & palmeraies",
      "Dades Valley & Road of a Thousand Kasbahs",
    ],
  },
  {
    id: "sahara-desert-retreat-6-days",
    title: "Sahara Desert Retreat — 6 Days",
    shortDescription:
      "Slow-paced retreat through the Dades Valley, Erg Chebbi dunes, and the hidden oasis of Agdz in the Draa Valley.",
    fullDescription:
      "A relaxed six-day Sahara retreat designed for travelers who want to savor Morocco rather than rush it. From Marrakech, cross the High Atlas via the famous Tizi n'Tichka pass and pause at the UNESCO-listed Kasbah Aït Ben Haddou, then settle in for two nights in the fertile Dades Valley — home to dramatic rock formations, the Monkey Fingers Canyon, and quiet Berber villages. Camel trek into the Erg Chebbi dunes at Merzouga for a night in a luxury desert camp under a star-dense sky, spend a day at leisure among the dunes meeting nomad families, then wind back via Alnif to the peaceful palm-grove oasis of Agdz in the Draa Valley. Return to Marrakech through Ouarzazate, 'the Hollywood of Morocco'.",
    price: 619,
    duration: "6 Days",
    groupSize: "2-8",
    difficulty: "Easy",
    image: "/images/camel-caravan-sunset.png",
    gallery: [
      "/images/ait-benhadou-1.png",
      "/images/ait-benhadou-2.png",
      "/images/camel-caravan-sunset.png",
      "/images/tour-desert-camp.png",
      "/images/sahara-camp-drums-1.png",
      "/images/ourika-valley-1.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Dades Valley",
        description:
          "Scenic drive over the High Atlas via the Tizi n'Tichka pass. Stop at UNESCO-listed Kasbah Aït Ben Haddou to admire Morocco's most iconic earthen architecture. Continue into the Dades Valley — the 'Valley of a Thousand Kasbahs'. Settle into a local guesthouse for two nights.",
      },
      {
        day: 2,
        title: "Exploring Dades Valley",
        description:
          "Full day discovering the Dades Valley at a leisurely pace. Visit the Monkey Fingers Canyon with its extraordinary rock formations, hike through small Berber villages tucked into the cliffs, and enjoy the dramatic scenery without the rush. Overnight in the same guesthouse.",
      },
      {
        day: 3,
        title: "Dades → Todra Gorge → Merzouga",
        description:
          "After breakfast, drive through the towering walls of the Todra Gorge. Continue east to the great Sahara and the Erg Chebbi dunes at Merzouga. Check into your luxury desert camp, mount your camel for a sunset trek over the dunes, and spend the night under a star-crammed desert sky in your comfortable tent.",
      },
      {
        day: 4,
        title: "Merzouga — Full Desert Day",
        description:
          "A day of pure desert immersion. Ride camels further into the dunes, visit nearby nomad families, or simply relax at camp with a book. In the evening, live Berber music around the campfire and the serenity of the Sahara at night.",
      },
      {
        day: 5,
        title: "Merzouga → Alnif → Agdz (Draa Valley)",
        description:
          "Leave the dunes behind and drive the ancient caravan routes through small Berber towns such as Alnif. Arrive in Agdz, a peaceful oasis town in the Draa Valley surrounded by palm groves and old kasbahs. Overnight in a cozy guesthouse — the perfect quiet retreat.",
      },
      {
        day: 6,
        title: "Agdz → Ouarzazate → Marrakech",
        description:
          "Drive back to Marrakech with a stop in Ouarzazate — the 'Hollywood of Morocco' with its film studios and the stunning Kasbah Taourirt. Cross the High Atlas once more and arrive in Marrakech in the late afternoon.",
      },
    ],
    highlights: [
      "Tizi n'Tichka pass through the High Atlas",
      "UNESCO Kasbah Aït Ben Haddou",
      "Two nights in the Dades 'Valley of a Thousand Kasbahs'",
      "Monkey Fingers Canyon & Berber village hikes",
      "Luxury camp & sunset camel trek on Erg Chebbi",
      "Hidden oasis of Agdz in the Draa Valley",
      "Kasbah Taourirt in Ouarzazate",
    ],
  },
  {
    id: "fes-to-marrakech-desert-3-days",
    title: "Fes to Marrakech Desert Tour — 3 Days",
    shortDescription:
      "A fast, scenic desert crossing from Fes to Marrakech via the Cedar Forest, Erg Chebbi, Todra Gorge and Aït Benhaddou.",
    fullDescription:
      "A well-paced three-day Sahara crossing that links the two imperial capitals. From Fes, climb into the Middle Atlas through the alpine town of Ifrane ('Little Switzerland'), wander the cedar forests around Azrou where Barbary macaques roam, and lunch in Midelt before descending through the Ziz Valley and its fortified ksars to Erfoud — the gateway to the desert. Camel-trek over the Erg Chebbi dunes at sunset to a luxury Berber camp for dinner under the stars. Wake for the sunrise, then journey west via the Todra Gorge, the Dades Valley, the Valley of Roses, the palm groves of Skoura, and the UNESCO-listed Aït Benhaddou before crossing the Tizi n'Tichka pass into the energetic streets of Marrakech.",
    price: 210,
    duration: "3 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/fes-grand-portal.png",
    gallery: [
      "/images/fes-grand-portal.png",
      "/images/camel-caravan-sunset.png",
      "/images/tour-desert-camp.png",
      "/images/sahara-camp-drums-1.png",
      "/images/ait-benhadou-1.png",
      "/images/tour-marrakech.png",
    ],
    program: [
      {
        day: 1,
        title: "Fes → Ifrane → Cedar Forest → Merzouga",
        description:
          "Depart Fes at 8 AM and climb into the Middle Atlas through the Alpine-style town of Ifrane ('Switzerland of Morocco') and Azrou, renowned for its cedar wood crafts and Barbary macaques. Lunch stop in Midelt. Continue south through the Ziz Valley — vast palm groves and fortified ksars — to Erfoud at the Sahara's edge. A 4x4 transfer brings you to Erg Chebbi, where camels wait to carry you over the dunes at sunset. Arrive at a luxury camp with en-suite private tents, Berber music and dinner under a star-crammed sky.",
      },
      {
        day: 2,
        title: "Merzouga → Todra Gorge → Dades Valley",
        description:
          "Rise for a spectacular Sahara sunrise and open-air breakfast at the camp, then return by camel or 4x4 toward Erfoud — famous for its fossil finds. Drive through palm groves and savanna-like desert, stopping for lunch. Short but breathtaking walk through the Todra Gorges, then on to Dades Gorge for a relaxing evening at a comfortable local hotel with dinner and a peaceful sleep amid the canyon walls.",
      },
      {
        day: 3,
        title: "Dades → Valley of Roses → Aït Benhaddou → Marrakech",
        description:
          "Short morning walk in the gorges, then follow the Dades Valley via El Kelaâ M'Gouna — the legendary 'Valley of the Roses' — and the Road of a Thousand Kasbahs. Stop in Ouarzazate, then lunch in Aït Benhaddou with time to explore the UNESCO site (Lawrence of Arabia, Gladiator, Game of Thrones). Cross the High Atlas via the Tizi n'Tichka pass with sweeping panoramas and arrive in the lively medina of Marrakech by evening.",
      },
    ],
    highlights: [
      "Ifrane 'Little Switzerland' & Middle Atlas cedars",
      "Barbary macaques in Azrou forest",
      "Ziz Valley palm groves & fortified ksars",
      "Sunset camel trek on Erg Chebbi & luxury camp",
      "Todra Gorge canyon walk",
      "Valley of the Roses & Road of a Thousand Kasbahs",
      "UNESCO Aït Benhaddou + Tizi n'Tichka pass",
    ],
  },
  {
    id: "marrakech-imperial",
    title: "Imperial Marrakech",
    shortDescription:
      "Discover the vibrant souks, stunning palaces, and rich culture of the Red City.",
    fullDescription:
      "Immerse yourself in the magic of Marrakech, Morocco's most enchanting city. Wander through the labyrinthine souks filled with aromatic spices, handcrafted leather goods, and shimmering lanterns. Visit the iconic Jemaa el-Fnaa square, explore the stunning Bahia Palace, and find peace in the Majorelle Garden. This tour offers an authentic glimpse into the heart of Moroccan culture, with expert local guides who bring centuries of history to life.",
    price: 209,
    duration: "3 Days",
    groupSize: "2-12",
    difficulty: "Easy",
    image: "/images/tour-marrakech.png",
    gallery: [
      "/images/tour-marrakech.png",
      "/images/tour-chefchaouen.png",
      "/images/tour-atlas.png",
    ],
    program: [
      {
        day: 1,
        title: "Arrival & Medina Discovery",
        description:
          "Welcome at the airport and transfer to a luxury riad. Afternoon guided walk through the ancient Medina, visiting the Koutoubia Mosque and Ben Youssef Madrasa. Evening dinner at a rooftop restaurant overlooking the city.",
      },
      {
        day: 2,
        title: "Palaces, Gardens & Souks",
        description:
          "Full day exploring the Bahia Palace, Saadian Tombs, and the lush Majorelle Garden. Afternoon shopping experience in the traditional souks with our expert guide. Cooking class with a local chef in the evening.",
      },
      {
        day: 3,
        title: "Atlas Mountains Excursion",
        description:
          "Day trip to the foothills of the Atlas Mountains. Visit a traditional Berber village, enjoy mint tea with locals, and take in breathtaking panoramic views. Return to Marrakech for a farewell dinner.",
      },
    ],
    highlights: [
      "Guided Medina tour",
      "Bahia Palace visit",
      "Majorelle Garden",
      "Traditional cooking class",
      "Atlas Mountains day trip",
    ],
  },
  {
    id: "sahara-desert-adventure",
    title: "Sahara Desert Adventure",
    shortDescription:
      "Experience the magic of the Sahara with camel treks and luxury desert camping.",
    fullDescription:
      "Embark on an unforgettable journey into the heart of the Sahara Desert. Ride camels across towering golden dunes as the sun paints the sky in breathtaking hues. Spend your nights in a luxury desert camp under a canopy of stars, enjoying traditional Berber music and cuisine around a crackling campfire. This is the ultimate Moroccan adventure, combining raw natural beauty with comfort and authentic cultural experiences.",
    price: 419,
    duration: "4 Days",
    groupSize: "2-10",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/tour-desert-camp.png",
      "/images/camel-caravan-sunset.png",
      "/images/tour-atlas.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech to Ouarzazate",
        description:
          "Depart Marrakech and cross the dramatic Tizi n'Tichka pass through the High Atlas Mountains. Visit the UNESCO World Heritage site of Ait Benhaddou. Overnight in Ouarzazate, the gateway to the Sahara.",
      },
      {
        day: 2,
        title: "Todra Gorge & Dades Valley",
        description:
          "Travel through the Valley of a Thousand Kasbahs to the spectacular Todra Gorge. Explore the dramatic canyon walls rising 300 meters. Continue through the Dades Valley to Merzouga.",
      },
      {
        day: 3,
        title: "Camel Trek & Desert Camp",
        description:
          "Morning free to explore Merzouga. Afternoon camel trek into the Erg Chebbi dunes. Watch a magnificent sunset from the dunes before arriving at your luxury desert camp. Evening of stargazing, Berber music, and traditional dinner.",
      },
      {
        day: 4,
        title: "Sunrise & Return",
        description:
          "Wake before dawn to witness a spectacular desert sunrise over the dunes. Camel ride back to Merzouga. Return journey to Marrakech with stops at scenic viewpoints along the way.",
      },
    ],
    highlights: [
      "Ait Benhaddou UNESCO site",
      "Todra Gorge",
      "Camel trek in Erg Chebbi",
      "Luxury desert camping",
      "Sahara sunrise experience",
    ],
  },
  {
    id: "blue-city-chefchaouen",
    title: "Blue City of Chefchaouen",
    shortDescription:
      "Wander the dreamy blue streets of Morocco's most photogenic city.",
    fullDescription:
      "Discover the mesmerizing blue-washed streets of Chefchaouen, nestled in the Rif Mountains. This enchanting town, with its striking blue buildings set against a backdrop of lush mountains, is one of Morocco's most magical destinations. Explore artisan workshops, hike to the Spanish Mosque for panoramic views, and sample the unique cuisine influenced by both Moroccan and Andalusian traditions. A photographer's paradise and a traveler's dream.",
    price: 295,
    duration: "3 Days",
    groupSize: "2-8",
    difficulty: "Easy",
    image: "/images/tour-chefchaouen.png",
    gallery: [
      "/images/tour-chefchaouen.png",
      "/images/tour-marrakech.png",
      "/images/tour-essaouira.png",
    ],
    program: [
      {
        day: 1,
        title: "Arrival in the Blue Pearl",
        description:
          "Arrive in Chefchaouen and check into a charming blue-washed riad. Afternoon free to wander the blue streets and soak in the magical atmosphere. Welcome dinner featuring local specialties.",
      },
      {
        day: 2,
        title: "Medina & Mountain Hike",
        description:
          "Morning guided tour of the medina, visiting the Kasbah and Grand Mosque. Afternoon hike to the Spanish Mosque for breathtaking panoramic views. Visit local artisan workshops and try goat cheese from the Rif Mountains.",
      },
      {
        day: 3,
        title: "Akchour Waterfalls",
        description:
          "Full day excursion to the stunning Akchour Waterfalls and God's Bridge natural arch. Swim in crystal-clear pools surrounded by pristine nature. Farewell lunch before departure.",
      },
    ],
    highlights: [
      "Blue-washed medina exploration",
      "Spanish Mosque sunset hike",
      "Akchour Waterfalls",
      "Local artisan workshops",
      "Rif Mountains scenery",
    ],
  },
  {
    id: "atlas-mountains-trek",
    title: "Atlas Mountains Trek",
    shortDescription:
      "Trek through breathtaking mountain landscapes and visit authentic Berber villages.",
    fullDescription:
      "Challenge yourself with an epic trek through the majestic High Atlas Mountains, home to North Africa's highest peak, Mount Toubkal. Journey through terraced valleys, alpine meadows, and remote Berber villages where time seems to stand still. Experience the legendary hospitality of mountain communities, savor traditional meals prepared by local families, and witness landscapes that will take your breath away at every turn.",
    price: 419,
    duration: "5 Days",
    groupSize: "4-12",
    difficulty: "Challenging",
    image: "/images/tour-atlas.png",
    gallery: [
      "/images/tour-atlas.png",
      "/images/camel-caravan-sunset.png",
      "/images/tour-marrakech.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech to Imlil",
        description:
          "Transfer from Marrakech to the mountain village of Imlil (1,740m). Afternoon acclimatization walk through walnut groves and terraced fields. Meet your mountain guides and mule team.",
      },
      {
        day: 2,
        title: "Imlil to Toubkal Refuge",
        description:
          "Trek through the Mizane Valley, passing waterfalls and Berber settlements. Ascend to the Toubkal Refuge at 3,207m with stunning views of surrounding peaks. Evening briefing for summit day.",
      },
      {
        day: 3,
        title: "Summit Day - Mount Toubkal",
        description:
          "Early morning departure for the summit of Mount Toubkal (4,167m), the highest peak in North Africa. Enjoy 360-degree views stretching to the Sahara. Descend to a mountain gîte for overnight.",
      },
      {
        day: 4,
        title: "Valley of Azzadene",
        description:
          "Trek through the remote Azzadene Valley, one of the most beautiful in the Atlas. Visit isolated Berber villages and enjoy lunch prepared by a local family. Overnight in a traditional gîte.",
      },
      {
        day: 5,
        title: "Return to Marrakech",
        description:
          "Final morning trek descending back to Imlil. Celebratory lunch at a local restaurant. Transfer back to Marrakech with a stop at a traditional Argan oil cooperative.",
      },
    ],
    highlights: [
      "Mount Toubkal summit (4,167m)",
      "Remote Berber villages",
      "Azzadene Valley trek",
      "Traditional mountain meals",
      "Argan oil cooperative visit",
    ],
  },
  {
    id: "coastal-essaouira",
    title: "Coastal Essaouira Escape",
    shortDescription:
      "Relax in the charming coastal town famous for its art, music, and fresh seafood.",
    fullDescription:
      "Escape to the windswept charm of Essaouira, Morocco's most beloved coastal city. This UNESCO-listed port town captivates visitors with its stunning ramparts, vibrant art galleries, and legendary surf breaks. Stroll through the bustling fishing port, explore the historic medina filled with local artists and craftsmen, and indulge in the freshest seafood at the harbor. Essaouira offers the perfect blend of culture, relaxation, and coastal beauty.",
    price: 209,
    duration: "2 Days",
    groupSize: "2-15",
    difficulty: "Easy",
    image: "/images/tour-essaouira.png",
    gallery: [
      "/images/tour-essaouira.png",
      "/images/tour-marrakech.png",
      "/images/tour-chefchaouen.png",
    ],
    program: [
      {
        day: 1,
        title: "Argan Country to the Coast",
        description:
          "Drive from Marrakech through scenic Argan forests, stopping at a women's cooperative. Arrive in Essaouira and explore the UNESCO-listed medina, ramparts, and Skala de la Ville. Fresh seafood dinner at the port.",
      },
      {
        day: 2,
        title: "Beach, Art & Culture",
        description:
          "Morning visit to the fishing port and art galleries in the medina. Afternoon free for beach activities, surfing, or windsurfing. Optional visit to the purple islands by boat. Return to Marrakech in the evening.",
      },
    ],
    highlights: [
      "UNESCO-listed medina",
      "Fresh seafood at the port",
      "Argan oil cooperative",
      "Beach & water sports",
      "Art gallery visits",
    ],
  },
  {
    id: "grand-morocco-tour",
    title: "Grand Morocco Tour",
    shortDescription:
      "The ultimate Morocco experience covering imperial cities, desert, and coast.",
    fullDescription:
      "Experience the very best of Morocco on this comprehensive grand tour. Flexible start options include Casablanca or Marrakech. From the bustling streets of Marrakech to the ancient medina of Fes, from the golden dunes of the Sahara to the blue streets of Chefchaouen, this tour covers all of Morocco's iconic destinations. Travel in comfort with private transfers, stay in handpicked luxury riads, and enjoy exclusive experiences that reveal the true soul of this magnificent country.",
    price: 490,
    duration: "10 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-marrakech.png",
    gallery: [
      "/images/tour-marrakech.png",
      "/images/tour-desert-camp.png",
      "/images/tour-chefchaouen.png",
      "/images/tour-atlas.png",
      "/images/tour-essaouira.png",
    ],
    program: [
      {
        day: 1,
        title: "Welcome to Marrakech",
        description: "Airport transfer and medina exploration. Welcome dinner at a palatial riad.",
      },
      {
        day: 2,
        title: "Marrakech Discovery",
        description: "Full day touring palaces, gardens, and souks of the Red City.",
      },
      {
        day: 3,
        title: "Atlas Mountains & Ait Benhaddou",
        description: "Cross the High Atlas and visit the famous kasbah. Continue to Ouarzazate.",
      },
      {
        day: 4,
        title: "Todra Gorge to Merzouga",
        description: "Dramatic gorge visit and journey to the edge of the Sahara.",
      },
      {
        day: 5,
        title: "Sahara Desert Experience",
        description: "Camel trek, sunset, and luxury desert camp under the stars.",
      },
      {
        day: 6,
        title: "Desert to Fes",
        description: "Sunrise in the Sahara, then journey through the Middle Atlas to Fes.",
      },
      {
        day: 7,
        title: "Ancient Fes",
        description: "Explore the world's largest car-free urban area and visit the tanneries.",
      },
      {
        day: 8,
        title: "Fes to Chefchaouen",
        description: "Drive to the Blue City and explore its enchanting blue streets.",
      },
      {
        day: 9,
        title: "Chefchaouen & Rabat",
        description: "Morning in Chefchaouen, then visit the capital city and its monuments.",
      },
      {
        day: 10,
        title: "Essaouira & Farewell",
        description: "Coastal day in Essaouira before transfer for departure.",
      },
    ],
    highlights: [
      "4 Imperial Cities",
      "Sahara Desert camp",
      "Chefchaouen blue streets",
      "Luxury riad accommodations",
      "Private transfers throughout",
    ],
  },
  // ── Tours from PDF ──────────────────────────────────────────────────────────
  {
    id: "marrakech-ouarzazate-2-days",
    title: "Marrakech to Ouarzazate & Aït Benhaddou — 2 Days",
    shortDescription:
      "Cross the High Atlas via Tizi Ntichka, visit the UNESCO kasbah of Aït Benhaddou, and spend a night in the cinematic city of Ouarzazate.",
    fullDescription:
      "A two-day escape from Marrakech into the dramatic landscapes of southern Morocco. Depart at 8:00 AM and climb over the Tizi n'Tichka pass (2,260 m), pausing at the kasbah of Telouet before arriving at the UNESCO World Heritage site of Aït Benhaddou — the most famous kasbah in Morocco, setting for Gladiator, Lawrence of Arabia and Game of Thrones. Continue to Ouarzazate, nicknamed the 'Hollywood of Morocco', for dinner and an overnight stay. On day two, explore the Taourirt Kasbah and the Atlas Film Studios, then drive through the scenic Fint Oasis before returning to Marrakech.",
    price: 149,
    duration: "2 Days",
    groupSize: "2-8",
    difficulty: "Easy",
    image: "/images/ait-benhadou-1.png",
    gallery: [
      "/images/ait-benhadou-1.png",
      "/images/ait-benhadou-2.png",
      "/images/ait-benhadou-3.png",
      "/images/ait-benhadou-4.png",
      "/images/season-autumn-ait-ben-haddou.png",
      "/images/responsible-travel-dades-gorges-guests.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Tizi n'Tichka → Aït Benhaddou → Ouarzazate",
        description:
          "Depart Marrakech at 8:00 AM through the High Atlas via the Tizi-n-Tichka pass (2,260 m). Stop at the Telouet Kasbah, then visit the UNESCO World Heritage site of Aït Benhaddou — the most iconic kasbah in Morocco, featured in dozens of Hollywood productions. Continue to Ouarzazate for dinner and overnight.",
      },
      {
        day: 2,
        title: "Ouarzazate → Taourirt Kasbah → Fint Oasis → Marrakech",
        description:
          "After breakfast, visit the Taourirt Kasbah and the Atlas Film Studios in Ouarzazate. Drive through the beautiful Fint Oasis, a hidden gem nestled between rocky mountains. Lunch on the road, then return to Marrakech.",
      },
    ],
    highlights: [
      "Tizi n'Tichka High Atlas pass (2,260 m)",
      "Telouet Kasbah visit",
      "UNESCO Aït Benhaddou — Hollywood's favourite kasbah",
      "Ouarzazate film studios & Taourirt Kasbah",
      "Fint Oasis scenic drive",
    ],
  },
  {
    id: "marrakech-merzouga-3-days",
    title: "Marrakech to Merzouga Desert — 3 Days",
    shortDescription:
      "Three days through the Atlas, Dades Valley, Todra Gorge, and the legendary Erg Chebbi dunes — with a night in a desert camp.",
    fullDescription:
      "A classic three-day desert tour from Marrakech to the golden dunes of Merzouga. The first day crosses the High Atlas to the UNESCO kasbah of Aït Benhaddou and on to the Dades Valley. Day two takes you through the towering Todra Gorge and across the desert plains to Erg Chebbi, where camels carry you over the dunes to a traditional Berber camp under the stars. On the final day, ride back at sunrise and return to Marrakech via the Draa Valley.",
    price: 219,
    duration: "3 Days",
    groupSize: "2-8",
    difficulty: "Easy",
    image: "/images/camel-caravan-sunset.png",
    gallery: [
      "/images/camel-caravan-sunset.png",
      "/images/dest-merzouga.png",
      "/images/gallery-sahara-camel-caravan.png",
      "/images/sahara-camp-drums-1.png",
      "/images/gallery-sahara-camels-rainbow.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Dades Valley",
        description:
          "Pick-up at 8:00 AM. Cross the High Atlas and visit the UNESCO kasbah of Aït Benhaddou. Continue through Ouarzazate, past the Skoura palm grove and Rose Valley to the Dades Valley. Dinner and overnight in a hotel/riad.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "After breakfast, drive through the stunning Todra Gorges (300 m canyon walls). Continue via Erfoud to Merzouga. Mount your camel and trek over the Erg Chebbi dunes to the Berber camp. Sunset from the dunes, dinner by the fire, and a night under a sky full of stars.",
      },
      {
        day: 3,
        title: "Sunrise → Draa Valley → Marrakech",
        description:
          "Wake before dawn to watch the sunrise over the dunes. Camel ride back, then drive through the Draa Valley via Rissani, Nkob, Tamnougalt, and Ouarzazate for a final lunch before the road home over the Atlas to Marrakech.",
      },
    ],
    highlights: [
      "UNESCO Aït Benhaddou kasbah",
      "Todra Gorge — 300 m canyon walls",
      "Sunset camel trek on Erg Chebbi",
      "Night in a traditional desert camp",
      "Sunrise over the Sahara dunes",
    ],
  },
  {
    id: "marrakech-fes-desert-3-days",
    title: "Marrakech to Fes via Desert — 3 Days",
    shortDescription:
      "Link Morocco's two imperial cities in three days: High Atlas, Erg Chebbi dunes, Todra Gorge, and a scenic drive through the Middle Atlas to Fes.",
    fullDescription:
      "A well-paced three-day desert crossing connecting Marrakech and Fes. Depart through the High Atlas to Aït Benhaddou, then head to the Dades Valley for the first night. Day two crosses the Todra Gorge and Erfoud to the Erg Chebbi dunes, where camels take you to a luxury desert camp for dinner under the stars. On day three, drive north through the Ziz Valley, Midelt, the cedar forest at Azrou (Barbary macaques), and the Alpine town of Ifrane before dropping you in Fes.",
    price: 235,
    duration: "3 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-merzouga.png",
    gallery: [
      "/images/dest-merzouga.png",
      "/images/human-first-guest-guide-sahara-camels.png",
      "/images/fes-grand-portal.png",
      "/images/gallery-fes-arch.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Boumaln Dades",
        description:
          "Depart Marrakech at 8:00 AM over the Tizi-Ntichka pass. Visit the UNESCO kasbah of Aït Benhaddou, then continue through Ouarzazate and the Valley of Roses to the Dades Gorges. Dinner and overnight in a local hotel/riad.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erfoud → Erg Chebbi Desert Camp",
        description:
          "After breakfast, drive through Tinghir and walk in the Todra Gorge. Continue to Erfoud and on to Merzouga where camels await to carry you over the dunes to the desert camp. Enjoy the sunset, a traditional dinner, and Berber music under the stars.",
      },
      {
        day: 3,
        title: "Desert Camp → Ziz Valley → Cedar Forest → Fes",
        description:
          "Early morning camel ride back at sunrise. Drive north via the Ziz Valley panorama, Midelt (capital of apples), the cedar forest of Azrou, and the charming Alpine town of Ifrane. Arrive in Fes in the evening.",
      },
    ],
    highlights: [
      "UNESCO Aït Benhaddou & Dades Gorges",
      "Todra Gorge canyon walk",
      "Sunset camel trek to desert camp",
      "Ziz Valley palm grove panorama",
      "Barbary macaques in Azrou cedar forest",
      "Ifrane 'Little Switzerland of Morocco'",
    ],
  },
  {
    id: "marrakech-merzouga-4-days",
    title: "Marrakech to Merzouga Desert — 4 Days",
    shortDescription:
      "Four days into the heart of the Moroccan south: Atlas Mountains, Aït Benhaddou, Valley of Roses, Todra Gorge, and two nights around the Erg Chebbi dunes.",
    fullDescription:
      "A four-day private tour that immerses you in the best of southern Morocco. From Marrakech, cross the High Atlas to Aït Benhaddou and Ouarzazate, then follow the Valley of Roses and Dades Valley for the first night. Day two takes you through Todra Gorge and the desert plains to Erg Chebbi, where a camel trek leads to a Berber camp under the stars. Day three is a full desert day — nomad families, Gnawa music in Khamlia, and more dune time. Day four loops back via the Draa Valley and Ouarzazate Studios before returning to Marrakech.",
    price: 329,
    duration: "4 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/tour-desert-camp.png",
      "/images/gallery-sahara-camel-caravan.png",
      "/images/human-first-guest-guide-sahara-camels.png",
      "/images/ourika-valley-1.png",
      "/images/season-winter-atlas-berber-village.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate → Dades Valley",
        description:
          "Depart at 8:00 AM over the Tizi n'Tichka pass. Visit the UNESCO kasbah of Aït Benhaddou and Ouarzazate Studios, then continue to the Dades Valley through the Valley of Roses. Overnight in a local hotel/riad.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "After breakfast, drive through Tinghir and visit the impressive Todra Gorge. Continue via Erfoud to Merzouga. Camel trek over the Erg Chebbi dunes to the desert camp. Sunset, traditional dinner, and Berber music around the fire.",
      },
      {
        day: 3,
        title: "Merzouga — Full Desert Day",
        description:
          "After the sunrise camel ride back, spend the day exploring: meet nomad families, visit the Khamlia village for Gnawa music, and explore the nearby wild oasis. Overnight in a hotel/riad in Merzouga.",
      },
      {
        day: 4,
        title: "Merzouga → Draa Valley → Ouarzazate Studios → Marrakech",
        description:
          "Return via Rissani, Alnif, and the scenic Draa Valley. Stop at the Ouarzazate film studios, then cross the High Atlas back to Marrakech.",
      },
    ],
    highlights: [
      "Tizi n'Tichka pass & Aït Benhaddou UNESCO site",
      "Ouarzazate Studios — 'Hollywood of Africa'",
      "Todra Gorge & Valley of Roses",
      "Sunset camel trek to Erg Chebbi desert camp",
      "Gnawa music in Khamlia village",
      "Full desert day with nomad families",
    ],
  },
  {
    id: "marrakech-fes-merzouga-4-days",
    title: "Marrakech to Fes via Merzouga — 4 Days",
    shortDescription:
      "Four days linking Marrakech and Fes through the Sahara: Aït Benhaddou, Dades Gorges, Todra, camel trek at Erg Chebbi, and the scenic Ziz Valley.",
    fullDescription:
      "A four-day/three-night itinerary that connects Morocco's two imperial cities through the best of the south. Travel from Marrakech over the High Atlas to Aït Benhaddou, spend the first night in the Dades Gorges, explore the Todra Gorge and reach the Sahara on day two with a camel trek to a luxury desert camp. Day three takes you around the Merzouga region — nomad families, Gnawa music, and the wild Oasis of Hassi Labied. On the final day, drive north via the Ziz Valley, Middle Atlas, and Ifrane to arrive in Fes.",
    price: 355,
    duration: "4 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-merzouga.png",
    gallery: [
      "/images/gallery-sahara-camels-rainbow.png",
      "/images/sahara-camp-drums-1.png",
      "/images/fes-tannery-cityscape.png",
      "/images/fes-architecture-1.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Boumaln Dades",
        description:
          "Depart at 8:00 AM, cross the High Atlas, visit Aït Benhaddou (UNESCO) and the Taourirt Kasbah in Ouarzazate. Pass through the Skoura palm grove and Valley of Roses to the Dades Valley. Dinner and overnight.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Morning through the Todra Gorge. Continue via Tinjdad and Erfoud to the Erg Chebbi dunes. Board your camel for the sunset trek to a luxury desert camp with dinner and Berber music under the stars.",
      },
      {
        day: 3,
        title: "Merzouga — Desert Exploration",
        description:
          "Visit the village of Khamlia (Gnawa music), meet nomad families in Berber tents, explore the wild Oasis of Hassi Labied. Dinner and overnight in Merzouga hotel/riad.",
      },
      {
        day: 4,
        title: "Merzouga → Ziz Valley → Ifrane → Fes",
        description:
          "Drive north via Erfoud, along the palm-lined Ziz Valley to Errachidia. Stop in Midelt, then Azrou's cedar forest (Barbary macaques). Visit Ifrane and arrive in Fes by evening.",
      },
    ],
    highlights: [
      "UNESCO Aït Benhaddou & Dades Gorges",
      "Todra Gorge canyon",
      "Sunset camel trek to Erg Chebbi luxury camp",
      "Khamlia Gnawa music & nomad families",
      "Ziz Valley panorama & Barbary macaques",
      "Ifrane — Morocco's 'Little Switzerland'",
    ],
  },
  {
    id: "marrakech-fes-sahara-5-days",
    title: "Marrakech to Fes via Sahara — 5 Days",
    shortDescription:
      "Five days from Marrakech to Fes: Aït Benhaddou, Ouarzazate, Dades Gorges, Todra, Erg Chebbi camel trek, desert exploration, and the full Fes medina.",
    fullDescription:
      "A five-day journey from Morocco's red city to its cultural capital, taking the long and scenic desert route. Cross the High Atlas to Aït Benhaddou, sleep in the Dades Gorges, walk the Todra canyon, ride camels to a desert camp at Erg Chebbi, spend a full day exploring the Merzouga region with nomad families and Gnawa musicians, then drive north through the Middle Atlas — cedar forests and Barbary macaques at Azrou, the charming Alpine town of Ifrane — arriving in Fes for a full guided day of the medina.",
    price: 420,
    duration: "5 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/fes-grand-portal.png",
    gallery: [
      "/images/fes-grand-portal.png",
      "/images/dest-fes.png",
      "/images/gallery-sahara-camels-rainbow.png",
      "/images/authentic-tea-guests-berber-countryside.png",
      "/images/fes-architecture-2.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate",
        description:
          "Depart at 8:00 AM, cross the Tizi-Ntichka pass through the High Atlas with panoramic stops. Visit the UNESCO kasbah of Aït Benhaddou and the Ouarzazate film studios. Overnight in Ouarzazate.",
      },
      {
        day: 2,
        title: "Ouarzazate → Skoura → Roses Valley → Dades → Todra → Merzouga",
        description:
          "Drive through the Skoura palm grove, Kasbah Amridil, the Valley of Roses, Dades Valley, and Todra Gorge. Continue east to Merzouga. Overnight in hotel/riad.",
      },
      {
        day: 3,
        title: "Merzouga → Erg Chebbi Camel Trek → Desert Camp",
        description:
          "After breakfast, take a 4×4 tour of the dunes then mount camels for the legendary sunset trek to a desert camp. Berber music, dinner, and millions of stars overhead.",
      },
      {
        day: 4,
        title: "Desert → Errachidia → Midelt → Azrou → Ifrane → Fes",
        description:
          "Early morning sunrise at the camp. Drive north via the Ziz Valley, Midelt, Azrou cedar forest (Barbary macaques), and Ifrane. Arrive in Fes in the evening.",
      },
      {
        day: 5,
        title: "Fes — Full Medina Tour",
        description:
          "Full day guided tour of Fes: the Royal Palace, the Mellah, the ancient tanneries, the medersas, Al-Qarawiyyin University, and the labyrinthine artisan souks. Free afternoon to explore independently.",
      },
    ],
    highlights: [
      "Tizi-Ntichka Atlas pass & Aït Benhaddou",
      "Ouarzazate film studios",
      "Dades Gorges, Valley of Roses & Todra Gorge",
      "Sunset camel trek at Erg Chebbi",
      "Cedar forest macaques & Ifrane",
      "Full guided day in the medieval Fes medina",
    ],
  },
  {
    id: "marrakech-merzouga-5-days",
    title: "Marrakech to Merzouga & Back — 5 Days",
    shortDescription:
      "Five days of southern Morocco: Atlas, Aït Benhaddou, Dades Valley, Todra Gorge, two nights around Erg Chebbi, and the return via Draa Valley.",
    fullDescription:
      "A five-day round trip from Marrakech that covers the entire scenic south. Cross the High Atlas and visit Aït Benhaddou before reaching the Dades Valley for the first night. Day two brings you to the Todra Gorge and the vast Erg Chebbi dunes at sunset, where you'll sleep in a luxury desert camp. Day three is devoted to the Merzouga region — nomads, Gnawa music, oases, and more dunes. On day four, take the ancient Draa Valley route to Ouarzazate. Day five: Ouarzazate Studios, the Telouet Kasbah, and the high mountain road back to Marrakech.",
    price: 415,
    duration: "5 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/camel-caravan-sunset.png",
    gallery: [
      "/images/camel-caravan-sunset.png",
      "/images/ourika-valley-2.png",
      "/images/human-first-guests-guide-atlas-road.png",
      "/images/luxury-riad-lounge-guests-palm-view.png",
      "/images/gallery-marrakech-atlas-view.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate → Dades Valley",
        description:
          "Depart at 8:00 AM over the Tizi n'Tichka pass. Visit the argan oil cooperative, Aït Benhaddou (UNESCO), and Ouarzazate. Continue through the Skoura palm grove and Valley of Roses to the Dades Valley. Dinner included.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "After breakfast, cross the Todra Gorge. Continue to the Erg Chebbi dunes. Camel trek at sunset to the desert camp. Dinner and Berber music under the stars.",
      },
      {
        day: 3,
        title: "Merzouga — Nomads, Khamlia & Hassi Labied Oasis",
        description:
          "Full day exploring the Merzouga region by 4×4: an old eyeliner mine, nomad families in hand-woven tents, Khamlia village (Gnawa music), and the wild Oasis of Hassi Labied. Overnight in a hotel/riad.",
      },
      {
        day: 4,
        title: "Merzouga → Draa Valley → Anti-Atlas → Ouarzazate",
        description:
          "Drive back via the Draa Valley and Anti-Atlas mountains to Ouarzazate. Overnight in Ouarzazate.",
      },
      {
        day: 5,
        title: "Ouarzazate → Telouet Kasbah → Tizi n'Tichka → Marrakech",
        description:
          "Visit the Taourirt Kasbah and Atlas Studios in Ouarzazate. Drive via the Ounila Valley, the historic Telouet Kasbah, and the Tizi n'Tichka pass back to Marrakech.",
      },
    ],
    highlights: [
      "Aït Benhaddou UNESCO & Ouarzazate Studios",
      "Todra Gorge & Dades Valley",
      "Sunset camel trek to Erg Chebbi luxury camp",
      "Khamlia Gnawa village & nomad families",
      "Draa Valley scenic drive",
      "Historic Telouet Kasbah",
    ],
  },
  {
    id: "marrakech-casablanca-6-days",
    title: "Marrakech to Casablanca — 6 Days",
    shortDescription:
      "Six days from Marrakech to Casablanca, passing through Aït Benhaddou, the Sahara dunes, Fes medina, and the iconic Hassan II Mosque.",
    fullDescription:
      "A six-day itinerary that connects Marrakech with Casablanca via the most spectacular scenery in Morocco. The route takes you over the High Atlas to Aït Benhaddou and Ouarzazate, through the Dades Valley and Todra Gorge, across the Erg Chebbi dunes by camel, around the Merzouga desert with nomad families, north through the Ziz Valley and Atlas forests to Fes, and finishing with a visit to Casablanca and the magnificent Hassan II Mosque.",
    price: 529,
    duration: "6 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-casablanca.png",
    gallery: [
      "/images/dest-casablanca.png",
      "/images/casablanca-atlantic-corniche.png",
      "/images/gallery-fes-tannery.png",
      "/images/gallery-sahara-camel-caravan.png",
      "/images/ourika-valley-3.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate → Dades Valley",
        description:
          "Depart at 8:00 AM over the Atlas. Visit the UNESCO kasbah of Aït Benhaddou and Ouarzazate Studios. Continue through the Rose Valley to Boumaln Dades. Overnight.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Drive through Tinghir and the Todra Gorge. Reach Merzouga by afternoon. Camel trek to the desert camp for sunset, dinner, and Berber music.",
      },
      {
        day: 3,
        title: "Merzouga — Desert Day",
        description:
          "Sunrise at the camp, then explore the desert: nomads, Khamlia Gnawa village, the wild lake, and the dunes. Lunch in Merzouga. Overnight in hotel.",
      },
      {
        day: 4,
        title: "Merzouga → Ziz Valley → Ifrane → Fes",
        description:
          "Drive north via Erfoud, the panoramic Draa Valley, Midelt, Azrou cedar forest (Barbary macaques), and the clean Alpine town of Ifrane. Arrive in Fes.",
      },
      {
        day: 5,
        title: "Fes — Medina Tour",
        description:
          "Full guided tour of the Fes medina: Royal Palace, Mellah, tanneries, Al-Qarawiyyin University, and the artisan souks.",
      },
      {
        day: 6,
        title: "Fes → Casablanca — Hassan II Mosque",
        description:
          "Drive to Casablanca (4 h). Visit the spectacular Hassan II Mosque — the largest mosque in Africa, overlooking the Atlantic. Overnight in Casablanca.",
      },
    ],
    highlights: [
      "Aït Benhaddou UNESCO & Ouarzazate Studios",
      "Todra Gorge & desert camp at Erg Chebbi",
      "Khamlia Gnawa village & nomad families",
      "Medieval Fes medina with local guide",
      "Hassan II Mosque — largest in Africa",
    ],
  },
  {
    id: "morocco-week-7-days",
    title: "One Week in Morocco — 7 Days",
    shortDescription:
      "The perfect week: High Atlas, Aït Benhaddou, Dades & Todra, Merzouga dunes, Dakar race road, Draa Valley, and Ouarzazate Studios.",
    fullDescription:
      "Seven days from Marrakech that include every highlight of southern Morocco and some hidden gems too. Cross the Atlas to Aït Benhaddou, sleep in the Dades Valley, spend a full day in the Merzouga desert with a camel sunset trek, follow the legendary Paris-Dakar race route through the remote Ouzina village near the Algerian border, drive the scenic Draa Valley through Zagora and Agdz, and finish with Ouarzazate Studios and the Telouet Kasbah before returning to Marrakech.",
    price: 645,
    duration: "7 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/tour-desert-camp.png",
      "/images/gallery-sahara-camels-rainbow.png",
      "/images/sahara-camp-drums-1.png",
      "/images/ourika-valley-4.png",
      "/images/jemaa-el-fnaa-sunset.png",
    ],
    program: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Transfer from the airport to your riad/hotel. Explore Jemaa el-Fnaa Square in the evening.",
      },
      {
        day: 2,
        title: "Marrakech → Aït Benhaddou → Rose Valley → Dades Valley",
        description:
          "Early departure over the Tizi-N'Tichka pass. Visit Aït Benhaddou (UNESCO), continue through Rose Valley and Dades Gorges. Overnight.",
      },
      {
        day: 3,
        title: "Dades Valley → Todra Gorge → Merzouga",
        description:
          "Drive through Todra Valley, visit the 300 m canyon walls. Continue to Merzouga. Overnight in a hotel/riad near the dunes.",
      },
      {
        day: 4,
        title: "Merzouga — Full Desert Day & Camel Trek",
        description:
          "Morning 4×4 tour: Khamlia Gnawa village, nomad families, and wild oasis. Afternoon camel trek to the desert camp for sunset, Berber music and dinner.",
      },
      {
        day: 5,
        title: "Merzouga → Taouz → Dakar Road → Ouzina → Tafraoute Sidi Ali",
        description:
          "Follow the Paris-Dakar rally route through the remote desert. Visit the ancient Berber settlement of Ouzina near the Algerian border and Ramlia Village. Overnight in a Berber hotel in Tafraoute Sidi Ali.",
      },
      {
        day: 6,
        title: "Tafraoute → Zagora → Agdz → Tamnougalt → Ouarzazate",
        description:
          "Cross the Oumjrane desert towards Zagora. Stop at Agdz and the Tamnougalt Kasbah in the Draa Valley. Continue to Ouarzazate for the night.",
      },
      {
        day: 7,
        title: "Ouarzazate Studios → Telouet Kasbah → Marrakech",
        description:
          "Visit the Atlas Film Studios in Ouarzazate. Drive via the scenic Ounila Valley to the historic Telouet Kasbah. Cross the Tizi n'Tichka pass and arrive in Marrakech.",
      },
    ],
    highlights: [
      "Aït Benhaddou UNESCO kasbah",
      "Todra Gorge & Dades Valley",
      "Full desert day at Erg Chebbi with camel trek",
      "Paris-Dakar race route through remote Ouzina",
      "Draa Valley, Zagora & Tamnougalt Kasbah",
      "Ouarzazate Studios & Telouet Kasbah",
    ],
  },
  {
    id: "marrakech-casablanca-8-days",
    title: "Marrakech to Casablanca — 8 Days",
    shortDescription:
      "Eight days from Marrakech to Casablanca: the deep south, Fes medina, Chefchaouen, Tangier, Asilah, Rabat, and the Hassan II Mosque.",
    fullDescription:
      "A comprehensive eight-day journey that begins in Marrakech and travels the full length of Morocco to Casablanca. After two days in the southern desert — Aït Benhaddou, Erg Chebbi by camel, and a full Merzouga desert day — you drive north via the Ziz Valley and Middle Atlas forests to Fes. From Fes, the route continues through the Rif Mountains to Chefchaouen, then to Tangier, the artistic town of Asilah, Rabat (Hassan Tower, Kasbah), and finally Casablanca and the Hassan II Mosque.",
    price: 490,
    duration: "8 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-casablanca.png",
    gallery: [
      "/images/chefchaouen-alley-blue.png",
      "/images/fes-architecture-3.png",
      "/images/human-first-guest-guide-sahara-camels.png",
      "/images/casablanca-ain-diab-sunset.png",
      "/images/ourika-valley-5.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate → Dades Valley",
        description:
          "Depart at 8:00 AM, cross the High Atlas, visit Aït Benhaddou (UNESCO) and Ouarzazate. Continue to Boumaln Dades via Rose Valley. Overnight.",
      },
      {
        day: 2,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Morning through the Todra Gorge. Continue to Merzouga for a sunset camel trek to the Erg Chebbi desert camp. Dinner and Berber music under the stars.",
      },
      {
        day: 3,
        title: "Merzouga → Ziz Valley → Ifrane → Fes",
        description:
          "Sunrise at the camp. Drive north via Erfoud, Ziz Valley, Midelt, Azrou cedar forest, and Ifrane to Fes.",
      },
      {
        day: 4,
        title: "Fes → Rif Mountains → Chefchaouen",
        description:
          "After breakfast, drive through the Rif Mountains to the iconic Blue City of Chefchaouen. Free afternoon to explore the blue medina on foot.",
      },
      {
        day: 5,
        title: "Chefchaouen → Tetouan → Tangier",
        description:
          "Drive via Tetouan (the White Dove) through the Rif Mountains to Tangier — Morocco's gateway to Europe.",
      },
      {
        day: 6,
        title: "Tangier → Asilah",
        description:
          "Coastal drive to the whitewashed artistic town of Asilah, with its Atlantic ramparts and vibrant street art. Overnight.",
      },
      {
        day: 7,
        title: "Asilah → Rabat",
        description:
          "Drive to Rabat, Morocco's capital. Visit the Hassan Tower, the Kasbah of the Oudaïas, and the Mausoleum of Mohammed V.",
      },
      {
        day: 8,
        title: "Rabat → Casablanca — Hassan II Mosque",
        description:
          "Coastal drive to Casablanca. Tour the spectacular Hassan II Mosque, the largest in Africa, perched on the Atlantic. End of tour.",
      },
    ],
    highlights: [
      "Aït Benhaddou UNESCO & Erg Chebbi camel trek",
      "Fes medina & Chefchaouen Blue City",
      "Tangier — gateway to Europe",
      "Asilah Atlantic ramparts & street art",
      "Rabat Hassan Tower & Kasbah",
      "Hassan II Mosque — largest mosque in Africa",
    ],
  },
  {
    id: "marrakech-casablanca-9-days",
    title: "Marrakech to Casablanca — 9 Days",
    shortDescription:
      "Nine days across Morocco's greatest highlights: from the Sahara dunes and Merzouga to Fes, Chefchaouen, Volubilis, Meknes, Tangier, Rabat, and Casablanca.",
    fullDescription:
      "A comprehensive nine-day grand tour from Marrakech to Casablanca. The journey weaves through Aït Benhaddou, Ouarzazate, the Sahara dunes of Erg Chebbi, Fes with a full guided medina tour, the Roman ruins of Volubilis, the imperial Bab Mansour gate in Meknes, the blue streets of Chefchaouen, Tangier with Cap Spartel and the Caves of Hercules, the colorful town of Asilah, Rabat, and finally Casablanca and the Hassan II Mosque.",
    price: 840,
    duration: "9 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-casablanca.png",
    gallery: [
      "/images/chefchaouen-courtyard-blue.png",
      "/images/gallery-fes-tannery.png",
      "/images/casablanca-atlantic-corniche.png",
      "/images/gallery-marrakech-jemaa.png",
      "/images/about-hero-group-dades.jpg",
    ],
    program: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description: "Transfer from the airport to your riad. Evening at leisure in Jemaa el-Fnaa.",
      },
      {
        day: 2,
        title: "Marrakech → Telouet Kasbah → Aït Benhaddou → Ouarzazate",
        description:
          "Cross the High Atlas via Tizi n'Tichka, stop at the Glaoui Kasbah of Telouet, visit UNESCO Aït Benhaddou, and explore Ouarzazate Studios and Kasbah Taourirt.",
      },
      {
        day: 3,
        title: "Ouarzazate → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Drive through the Skoura palm grove, Rose Valley, Dades Valley, and Todra Gorge. Reach Merzouga for a sunset camel trek to the desert camp.",
      },
      {
        day: 4,
        title: "Desert → Ziz Valley → Ifrane → Fes",
        description:
          "Sunrise in the Sahara. Drive north via Rissani souk, Ziz Valley, Midelt, Azrou cedar forest, and Ifrane to Fes.",
      },
      {
        day: 5,
        title: "Fes — Full Medina Tour",
        description:
          "Guided tour: Royal Palace, Jewish Quarter, Al-Qarawiyyin University, tanneries, and artisan souks. Free afternoon.",
      },
      {
        day: 6,
        title: "Fes → Meknes → Volubilis → Chefchaouen",
        description:
          "Visit Meknes (Bab Mansour, Moulay Ismail Mausoleum). Stop at the UNESCO Roman ruins of Volubilis. Continue to Chefchaouen.",
      },
      {
        day: 7,
        title: "Chefchaouen → Tetouan → Tangier",
        description:
          "Morning free in Chefchaouen. Drive via Tetouan to Tangier. Overnight.",
      },
      {
        day: 8,
        title: "Tangier → Cap Spartel → Asilah → Rabat → Casablanca",
        description:
          "Guided Tangier tour: Cap Spartel, Caves of Hercules, the Kasbah. Stop in Asilah. Visit Rabat's Hassan Tower. Arrive in Casablanca.",
      },
      {
        day: 9,
        title: "Casablanca → Hassan II Mosque → Marrakech (optional)",
        description:
          "Guided tour of the Hassan II Mosque, then transfer to Marrakech airport or drop-off in Casablanca.",
      },
    ],
    highlights: [
      "Telouet Kasbah & Aït Benhaddou UNESCO",
      "Sunset camel trek at Erg Chebbi",
      "Full guided day in medieval Fes",
      "Volubilis Roman ruins & Meknes imperial city",
      "Chefchaouen Blue Pearl & Tangier",
      "Hassan II Mosque Casablanca",
    ],
  },
  {
    id: "marrakech-casablanca-10-days",
    title: "Marrakech to Casablanca — 10 Days",
    shortDescription:
      "Ten days across Morocco from south to north: Sahara dunes, Fes medina, Chefchaouen, Tangier, Asilah, Rabat, and Casablanca.",
    fullDescription:
      "A ten-day comprehensive Morocco itinerary starting in Marrakech and ending in Casablanca. The tour covers all the essential stops: High Atlas, Aït Benhaddou, Ouarzazate, Dades and Rose Valley, Todra Gorge, Erg Chebbi dunes and desert camp, a full day with the Merzouga nomads, the Ziz Valley and Middle Atlas cedar forests, the imperial city of Fes, Chefchaouen, Tangier, the Atlantic town of Asilah, Rabat, and the magnificent Hassan II Mosque in Casablanca.",
    price: 459,
    duration: "10 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/dest-casablanca.png",
    gallery: [
      "/images/chefchaouen-door-blue.png",
      "/images/fes-architecture-4.png",
      "/images/casablanca-habous-quarter.png",
      "/images/gallery-marrakech-lanterns.png",
      "/images/season-summer-oasis-canyon.png",
    ],
    program: [
      {
        day: 1,
        title: "Marrakech → Aït Benhaddou → Ouarzazate",
        description:
          "Pick-up and drive over the Atlas to Aït Benhaddou (UNESCO) and Ouarzazate Studios. Overnight.",
      },
      {
        day: 2,
        title: "Ouarzazate → Rose Valley → Dades Valley",
        description:
          "Drive through Rose Valley and Kalaat Mgouna to Boumaln Dades. Overnight.",
      },
      {
        day: 3,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Visit Todra Gorge in Tinghir. Continue to Merzouga for a sunset camel trek and night in the desert camp.",
      },
      {
        day: 4,
        title: "Merzouga — Full Desert Day",
        description:
          "Visit nomad people, Khamlia Gnawa village, and the Hassilabied oasis. Overnight in a Merzouga hotel.",
      },
      {
        day: 5,
        title: "Merzouga → Ziz Valley → Midelt",
        description:
          "Drive via Errachidia and the Ziz Valley panorama to Midelt. Overnight.",
      },
      {
        day: 6,
        title: "Midelt → Azrou → Ifrane → Fes",
        description:
          "Stop at Azrou cedar forest (wild Barbary monkeys) and Ifrane. Arrive in Fes.",
      },
      {
        day: 7,
        title: "Fes → Chefchaouen",
        description:
          "Drive through the Rif Mountains to the iconic Blue City of Chefchaouen. Free evening to explore.",
      },
      {
        day: 8,
        title: "Chefchaouen → Asilah",
        description:
          "Scenic Rif Mountain drive to Asilah, the whitewashed Atlantic art town. Overnight.",
      },
      {
        day: 9,
        title: "Asilah → Rabat",
        description:
          "Coastal drive to Rabat. Visit the Hassan Tower, Kasbah of the Oudaïas, and Mausoleum of Mohammed V.",
      },
      {
        day: 10,
        title: "Rabat → Casablanca — Hassan II Mosque",
        description:
          "Drive to Casablanca via the coast. Guided visit of the Hassan II Mosque. End of tour.",
      },
    ],
    highlights: [
      "Aït Benhaddou UNESCO & Ouarzazate Studios",
      "Todra Gorge, Rose Valley & Dades Valley",
      "Camel trek & desert camp at Erg Chebbi",
      "Full desert day with nomad families",
      "Medieval Fes medina & Chefchaouen Blue City",
      "Rabat & Hassan II Mosque Casablanca",
    ],
  },
  {
    id: "morocco-11-days",
    title: "Morocco Grand Tour — 11 Days",
    shortDescription:
      "The ultimate 11-day loop from Marrakech: Casablanca, Rabat, Chefchaouen, Fes, Merzouga Sahara, Dades, Aït Benhaddou, and back to Marrakech.",
    fullDescription:
      "An eleven-day circular grand tour that starts and ends in Marrakech, taking in Morocco's greatest cities and landscapes in one flowing itinerary. Head first to Casablanca and the Hassan II Mosque, then up to Rabat, Chefchaouen, and Fes for a full guided medina day. Continue south through the Middle Atlas to the Merzouga desert, ride camels to the camp, explore the dunes with nomad families, then drive back through the Todra Gorge, Dades Valley, and Aït Benhaddou before returning to Marrakech.",
    price: 529,
    duration: "11 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-marrakech.png",
    gallery: [
      "/images/tour-marrakech.png",
      "/images/chefchaouen-plaza-uta.png",
      "/images/gallery-fes-arch.png",
      "/images/casablanca-ain-diab-sunset.png",
      "/images/gallery-marrakech-souk-rugs.png",
      "/images/bahia-palace.png",
    ],
    program: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description: "Airport transfer. Evening at Jemaa el-Fnaa Square.",
      },
      {
        day: 2,
        title: "Marrakech → Casablanca → Rabat",
        description:
          "Drive to Casablanca and visit the Hassan II Mosque, then on to Rabat — Kasbah of the Oudaïas, Hassan Tower, Mausoleum of Mohammed V.",
      },
      {
        day: 3,
        title: "Rabat → Chefchaouen",
        description:
          "Drive to the Blue City of Chefchaouen. Orientation walk through the blue medina and viewpoint visit.",
      },
      {
        day: 4,
        title: "Chefchaouen → Fes",
        description: "Drive to Fes. Arrive in the afternoon.",
      },
      {
        day: 5,
        title: "Fes — Medina Tour",
        description:
          "Full day guided tour with a local Fes guide: medina, Royal Palace, tanneries, Al-Qarawiyyin, souks.",
      },
      {
        day: 6,
        title: "Fes → Ifrane → Azrou → Merzouga",
        description:
          "Drive south through Ifrane, Azrou cedar forest (Barbary macaques), Midelt, and the Ziz Valley to Merzouga.",
      },
      {
        day: 7,
        title: "Merzouga — Gnawa Music & Camel Trek",
        description:
          "Visit Khamlia (Gnawa music), meet Berber nomads, then mount camels for the sunset trek to the desert camp. Dinner and traditional music.",
      },
      {
        day: 8,
        title: "Desert Camp → Rissani → Todra Gorge → Dades Valley",
        description:
          "Sunrise at the camp. Drive via Rissani souk and Tinghir to the Todra Gorge and Dades Valley. Overnight.",
      },
      {
        day: 9,
        title: "Dades → Aït Benhaddou → Marrakech",
        description:
          "Follow the Road of a Thousand Kasbahs to Ouarzazate and the UNESCO Aït Benhaddou. Cross the Tizi n'Tichka pass back to Marrakech.",
      },
      {
        day: 10,
        title: "Marrakech — City Tour",
        description:
          "Full guided day: Majorelle Garden, Bahia Palace, Saadian Tombs, Koutoubia Mosque, and the souks of the medina.",
      },
      {
        day: 11,
        title: "Marrakech — Departure",
        description: "Free morning. Transfer to Marrakech airport.",
      },
    ],
    highlights: [
      "Hassan II Mosque & Rabat imperial sites",
      "Chefchaouen Blue Pearl",
      "Full guided day in medieval Fes",
      "Barbary macaques in Azrou cedar forest",
      "Sunset camel trek at Erg Chebbi",
      "Aït Benhaddou UNESCO & Marrakech city tour",
    ],
  },
  {
    id: "marrakech-merzouga-12-days",
    title: "Morocco Grand Tour — 12 Days",
    shortDescription:
      "Twelve days exploring all of Morocco: Marrakech, High Atlas, Sahara dunes, Fes medina, Meknes, Volubilis, Chefchaouen, Rabat, Casablanca, and Essaouira.",
    fullDescription:
      "A twelve-day circular grand tour from Marrakech that covers the breadth and depth of Morocco. Start with a full Marrakech city tour, then head south over the Atlas to Aït Benhaddou and the Dades Valley, cross the Todra Gorge to the Erg Chebbi dunes for a desert camp night, spend a full day with the Merzouga nomads, drive north via the Ziz Valley and cedar forests to Fes, explore the imperial city of Meknes and the Roman ruins of Volubilis, sleep in Chefchaouen, visit Rabat, see the Hassan II Mosque in Casablanca, and finish with the Atlantic charm of Essaouira.",
    price: 590,
    duration: "12 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-marrakech.png",
    gallery: [
      "/images/jemaa-el-fnaa-sunset.png",
      "/images/chefchaouen-view-1.png",
      "/images/fes-tannery-cityscape.png",
      "/images/essaouira-fishing-port.png",
      "/images/casablanca-atlantic-corniche.png",
      "/images/koutoubia-mosque.png",
      "/images/majorelle-garden.png",
    ],
    program: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description: "Airport transfer to your riad. Evening at Jemaa el-Fnaa.",
      },
      {
        day: 2,
        title: "Marrakech — City Tour",
        description:
          "Guided visit: Koutoubia minaret, Saadian Tombs, Bahia Palace, Majorelle Gardens, and the medina souks.",
      },
      {
        day: 3,
        title: "Marrakech → Aït Benhaddou → Ouarzazate → Dades Valley",
        description:
          "Cross the High Atlas via Tizi-Ntichka. Visit Aït Benhaddou (UNESCO) and Ouarzazate. Continue to Dades Valley for the night.",
      },
      {
        day: 4,
        title: "Dades → Todra Gorge → Erg Chebbi Desert Camp",
        description:
          "Drive through the Todra Gorge. Reach Merzouga for a sunset camel trek to the desert camp. Dinner and Berber music.",
      },
      {
        day: 5,
        title: "Merzouga — Full Desert Day",
        description:
          "Sunrise at the camp. Visit nomads, Khamlia village, and the wild oasis. Overnight in Merzouga hotel.",
      },
      {
        day: 6,
        title: "Merzouga → Ziz Valley → Ifrane → Fes",
        description:
          "Drive north via Erfoud, the Ziz Valley, Midelt, and Azrou cedar forest to Fes.",
      },
      {
        day: 7,
        title: "Fes — Full Medina Tour",
        description:
          "Guided tour: Royal Palace, tanneries, Al-Qarawiyyin, souks, and Jewish Quarter.",
      },
      {
        day: 8,
        title: "Fes → Meknes → Volubilis → Chefchaouen",
        description:
          "Visit Meknes (Bab Mansour, Moulay Ismail Mausoleum) and the UNESCO Roman ruins of Volubilis. Overnight in Chefchaouen.",
      },
      {
        day: 9,
        title: "Chefchaouen — Free Day",
        description:
          "Full day to explore the blue medina, hike to the Spanish Mosque, and visit artisan workshops.",
      },
      {
        day: 10,
        title: "Chefchaouen → Rabat",
        description:
          "Drive to Rabat. Visit the Hassan Tower, Kasbah of the Oudaïas, and Mausoleum of Mohammed V.",
      },
      {
        day: 11,
        title: "Rabat → Casablanca → Essaouira",
        description:
          "Visit the Hassan II Mosque in Casablanca, then drive to Essaouira's Atlantic medina for the night.",
      },
      {
        day: 12,
        title: "Essaouira → Marrakech — Departure",
        description:
          "Morning in Essaouira (fishing port, ramparts). Return to Marrakech for airport transfer.",
      },
    ],
    highlights: [
      "Full Marrakech city tour",
      "Aït Benhaddou UNESCO & Ouarzazate",
      "Sunset camel trek at Erg Chebbi & desert camp",
      "Full Fes medina with local guide",
      "Volubilis Roman ruins & Meknes",
      "Chefchaouen Blue Pearl & Hassan II Mosque",
      "Essaouira Atlantic coast",
    ],
  },
];

export function getTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}

const DEPARTURE_KEYS = ["marrakech", "fes", "casablanca"] as const;
export type TourDepartureKey = (typeof DEPARTURE_KEYS)[number];

/** Filter tours whose copy mentions the departure hub (Marrakech, Fes/Fez, or Casablanca). */
export function filterToursByDeparture(
  toursList: Tour[],
  from: string | undefined
): Tour[] {
  if (!from) return toursList;
  const key = from.trim().toLowerCase();
  if (!DEPARTURE_KEYS.includes(key as TourDepartureKey)) return toursList;

  return toursList.filter((t) => {
    const blob = `${t.title} ${t.shortDescription} ${t.fullDescription}`.toLowerCase();
    if (key === "marrakech") return blob.includes("marrakech");
    if (key === "fes") return /\bfes\b|\bfez\b/i.test(blob);
    if (key === "casablanca") return blob.includes("casablanca");
    return true;
  });
}
