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
      "Our flagship twenty-day journey is the most complete way to discover Morocco. From the storytellers of Jamaa El Fna to the windswept ramparts of Essaouira, the surf breaks of Taghazout, the saffron fields of Taliouine, and the immense dunes of Erg Chegaga and Erg Chebbi — this itinerary threads every landscape and culture that makes Morocco unforgettable. You'll cross the High Atlas cedar forests, sleep under desert stars in luxury camps, wander the medieval medina of Fes with an expert guide, walk the Roman ruins of Volubilis, lose yourself in the blue alleys of Chefchaouen, and finish at the immense Hassan II Mosque in Casablanca. Travel in comfort with private transfers, handpicked riads and hotels, and carefully paced days — the signature Mortours experience, start to finish.",
    price: 2899,
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
    price: 1599,
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
    price: 520,
    duration: "5 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/hero-desert.png",
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
    price: 730,
    duration: "6 Days",
    groupSize: "2-8",
    difficulty: "Easy",
    image: "/images/hero-desert.png",
    gallery: [
      "/images/ait-benhadou-1.png",
      "/images/ait-benhadou-2.png",
      "/images/hero-desert.png",
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
    price: 250,
    duration: "3 Days",
    groupSize: "2-8",
    difficulty: "Moderate",
    image: "/images/fes-grand-portal.png",
    gallery: [
      "/images/fes-grand-portal.png",
      "/images/hero-desert.png",
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
    price: 299,
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
    price: 499,
    duration: "4 Days",
    groupSize: "2-10",
    difficulty: "Moderate",
    image: "/images/tour-desert-camp.png",
    gallery: [
      "/images/tour-desert-camp.png",
      "/images/hero-desert.png",
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
    price: 349,
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
    price: 599,
    duration: "5 Days",
    groupSize: "4-12",
    difficulty: "Challenging",
    image: "/images/tour-atlas.png",
    gallery: [
      "/images/tour-atlas.png",
      "/images/hero-desert.png",
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
    price: 249,
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
    price: 1299,
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
