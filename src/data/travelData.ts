import { Destination, Tour, Experience, Testimonial } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    subtitle: 'King Kashyapa Citadel',
    region: 'Cultural Triangle',
    duration: '2-3 Days',
    description: 'Ancient 5th-century palace citadel rising 200m above the jungle floor, surrounded by celestial frescoes and water gardens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjiG6Ye2giqShG0CydKGHFzJ4BqFuujfOWeybl3WEBE43L2_m34SxVzT6lK-pxVMoiPZvwisNcVkKR0xT2VPIXWrCh1ZuFNchYpShXb7YTKGqP8zj9myfZ-UkbfeDJk69V-b_dxlFY7FbcMQQksEetAP0oaEYK5VGfWQCscHTQz2NybSG2ym_SafaAVy9-4nxjjj-X90sk9G07ZNlr3AozAwNjK6aCCWBj82d8WrM',
    imageAlt: 'Sigiriya lion rock fortress seen from water gardens below, ancient red brick foundations, emerald green tropical trees',
    highlights: ['Sunrise ascent before heat & crowds', '5th-century Heavenly Maiden frescoes', 'Pidurangala Rock sunset panoramic vantage', 'Private village canoe ride & clay-pot lunch'],
    bestSeason: 'December to April, July to September',
    topStays: ['Water Garden Sigiriya', 'Vil Uyana by Jetwing', 'Heritance Kandalama']
  },
  {
    id: 'ella',
    name: 'Ella',
    subtitle: "Nine Arch & Little Adam's Peak",
    region: 'Tea Country Highlands',
    duration: '3 Days',
    description: 'Misty mountain gaps, colonial stone viaducts, endless emerald Ceylon tea hills, and panoramic cloud trails.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnb1aXjOaTVJwd2HrqhHX5vdDauQAOenysm0Jc90DPlAMoSYX7e-snyfhkFcMksPIa2J8SJhzWqOQR4v4DgWhDLHbQ-y3RN8_-Obe1Bw8vwHM5DOVlA0fexw4ACdcuxHHbWTpCKnCy-bHhFSoI4JoeA3G80E2-ADm-aBefcYN4AhrFOFRBQ5Cgx9fsaPmhT5b5pNRTFm_jepcUCgf3FABlBVz3jKDT-FyHIKiajE',
    imageAlt: 'Nine Arch Bridge in Ella Sri Lanka surrounded by lush green tea plantation terraces with iconic blue passenger train',
    highlights: ['Iconic Nine Arch Bridge train crossing', "Sunrise hike at Little Adam's Peak", 'Ravana Falls secret swimming pools', 'High-grown tea cupping and plucking experience'],
    bestSeason: 'January to March, June to September',
    topStays: ['98 Acres Resort & Spa', 'The Secret Ella', 'Nine Skies (Tea Trails Heritage)']
  },
  {
    id: 'kandy',
    name: 'Kandy',
    subtitle: 'Peradeniya & Sacred Shrines',
    region: 'Sacred Capital',
    duration: '2 Days',
    description: 'The spiritual sanctuary of the golden-roofed Temple of the Tooth Relic, serene lakeside strolls, and ancient royal botanics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrlhijGaJvhtScXp_3NZ8kdMMLi4DrIgYYQ2HXThjhvn-XHh3wDm7KnUMViOKxb6GhN02AzI3ZR08Rn7Qvit7dhyN3H_Xhz1Sh0Oe96aSy28N8hmMYZDzKFabtsObo5FqAfjZeGlFjfvuLzU2ssRAo-D7X1gYCAhhV9VQ1oeDt10XEgEsfXumJl2G8OsJBO3Vel96qy6iBcd012qIs2n7DX6X3gkU6cRK7mBtzZ1s',
    imageAlt: 'Temple of the Sacred Tooth Relic in Kandy overlooking serene Kandy Lake during twilight',
    highlights: ['Private evening Theva ceremony at Temple of the Tooth', 'Royal Botanical Gardens at Peradeniya with orchid pavilion', 'Scenic lakeside heritage walk', 'Traditional Kandyan drumming & dance performance'],
    bestSeason: 'December to April',
    topStays: ['W15 Hanthana Estate', 'Kings Pavilion Kandy', 'The Kandy House']
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    subtitle: 'UNESCO Living Fort',
    region: 'Colonial Coast',
    duration: '2-3 Days',
    description: 'Cobblestone alleyways lined with boutique gem emporiums, breezy ocean ramparts, and Dutch colonial manor houses.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcK9Lq_KYfKXoKSyn81uZrVCByfmddURDJ0uUCO_KU-34Ea1rEZeqqKLteKtr5C1kbeAf6XBbypg6wPoBlX1e1KE5JnK5y5V7p-0bqqR_pG1hSqs4bjLLSndWBbv_nB4-iIrwdQrEJxVPynOpRkTGdeAaq1OVTraMGLrBN1HIl4Sp3N_IiBTG2QdS8_z2fe5nR0KxdD1uC82sHEPEPAXCYrKrd6t1uT23j8sB6EAU',
    imageAlt: 'Historic Galle Fort lighthouse perched along stone sea ramparts with crashing turquoise ocean waves at sunset',
    highlights: ['Twilight rampart walk alongside the 1939 lighthouse', 'Private architectural walking tour with a local historian', 'Bespoke Ceylon sapphire and gem custom design', 'Sunset cocktails overlooking the Indian Ocean'],
    bestSeason: 'November to April',
    topStays: ['Amangalla', 'The Fort Printers', 'Galle Fort Hotel']
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    subtitle: 'Coconut Tree Hill & Blue Whales',
    region: 'Southern Ocean',
    duration: '3-4 Days',
    description: 'Turquoise bays, gently curving coconut groves, sunset catamaran charters, and encounters with blue whales.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_5WMwZ0dHcpDx_UEsiJovIIn5F0ZdfuJlq6h3Z7rxAoYCLUM7LrRJFpa6-WcuKpAumQX5bxDiO0F9NlA41Hzoq-rAvkEDZAIWuZBTETwr7ihHacykAtXr2Oy8uMVi3rrNpnfhJgZcsQ_bV30BgAtdEtmCFyZnNvn7TQoNDX3NnrbSCcOF0EaTJBWK9zrNxWoaUJL47_2M4XWl1KqurQZ2_7-555R3N6PZkbUneXs',
    imageAlt: 'Idyllic tropical sunset over Mirissa beach Sri Lanka',
    highlights: ['Responsible private luxury yacht whale expeditions', 'Sunrise photography at iconic Coconut Tree Hill', 'Secret Beach secluded lagoon lounging', 'Fresh catch seafood grilled under beachfront lanterns'],
    bestSeason: 'November to April',
    topStays: ['Cape Weligama (Relais & Châteaux)', 'Number One Mirissa', 'Sri Sharavi Beach Villas']
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    subtitle: 'Big Cat Expeditions',
    region: 'Wild Sanctuary',
    duration: '2-3 Days',
    description: "Home to the world's highest density of leopards, wild elephant herds, sloth bears, and secluded glamping under starfields.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKsfYd2L_S9IBPq5BZs5LOwDHLel2lPl6EpJwGft72vtFS7EHobxvJG9berPGLjFWvvkJRm_Ujrn3EL_9-PXLSHqg_imctwjx-hZOrDzaq4cNi-CBKbwfJU6HXWGkFaOTz7P3JqgPWDM44Fhj5a3DVT9Hvi_4xPmXR0FrU3A6Sg9P1tbMtRVKStCa6SvCRzJsRwETBgZSIucnLS2_53eEfg7qsWVmwS8D1JHxz7Ws',
    imageAlt: 'Majestic Sri Lankan leopard resting in Yala National Park',
    highlights: ['Exclusive customized open-top safari 4x4 with senior naturalist', 'Block 1 & quieter Lunugamvehera leopard tracking', 'Luxury tented bush glamping under lantern light', 'Sundowners along wild, secluded sand dunes'],
    bestSeason: 'February to July (Peak leopard sightings)',
    topStays: ['Wild Coast Tented Lodge', 'Chena Huts by Uga Escapes', 'Leopard Trails Yala']
  }
];

export const TOURS: Tour[] = [
  {
    id: 'classic-highlights',
    title: 'Sri Lanka Classic Highlights',
    category: 'signature',
    categoryLabel: '7 Days • Signature',
    duration: '7 Days / 6 Nights',
    route: 'Sigiriya • Kandy • Nuwara Eliya • Galle',
    description: 'The essential journey through island kingdoms, high altitude Ceylon tea trails, and Dutch colonial fort living.',
    startingPrice: 1650,
    priceUnit: '/ person',
    rating: 5.0,
    reviewsCount: 68,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKV1FcStc1Lugxxo8JaIGLxIR4jQ9ofwu-FbBYv6wGqJoCyhlmeauomCcQKfprMTwkps9gCGtk1VTXIBrs3OfWBOyX1j8nzkaBp8XQfT9nm2dSkxNqPrEPpnX33lA5KXdiifpSNzkcxCINsF_8jEAlNLt-jYAmvKifONKjb4IJJbsWfBhOtZ7Vp-8p46qDfBHOZBm4cEbpOXYAIHRPFUc9-JozHlE6hYXp9SZ1pyc',
    imageAlt: 'Scenic blue express train winding through misty Ella mountains in Sri Lanka',
    itinerary: [
      { day: 1, title: 'Arrival & Journey to the Cultural Triangle', description: 'VIP airport greeting in Colombo. Private chauffeur transfer to Sigiriya luxury boutique resort. Evening welcome sundowner amidst water gardens.' },
      { day: 2, title: 'Sigiriya Rock Fortress & Ancient Dambulla', description: 'Early sunrise ascent of the Lion Rock Citadel before crowds. Afternoon visit to the gold-gilded cave temples of Dambulla.' },
      { day: 3, title: 'Royal Kingdom of Kandy', description: 'Scenic drive south into the sacred hill capital. Afternoon visit to Peradeniya Royal Botanic Gardens and private Temple of the Tooth Relic ceremony.' },
      { day: 4, title: 'Misty Tea Country & Colonial Nuwara Eliya', description: 'Ascend to the highland tea country. Tour an artisanal tea factory, harvest tea leaves with master pickers, and afternoon high tea at Grand Hotel.' },
      { day: 5, title: 'Scenic Train to Ella & Nine Arch Bridge', description: 'First-class scenic train journey winding through clouds and emerald ravines. Sunset walk to the Nine Arch Bridge viaduct.' },
      { day: 6, title: 'Galle Fort Coastal Charm', description: 'Descend to the southern coast into the living UNESCO fortress of Galle. Sunset walking tour on cobblestone sea ramparts.' },
      { day: 7, title: 'Departure with Lasting Memories', description: 'Morning leisure in Galle Fort boutique shops. Private expressway transfer to Colombo International Airport for onward departure.' }
    ],
    inclusions: [
      'Dedicated English-speaking private chauffeur-guide with luxury air-conditioned SUV',
      '6 nights in curated 5-star boutique heritage hotels & eco-resorts',
      'Daily gourmet breakfasts and selected dinner experiences',
      'Reserved first-class scenic mountain train tickets',
      'All site entry fees and VIP priority access permits',
      '24/7 Concierge line with Dana'
    ]
  },
  {
    id: 'ultimate-adventure',
    title: 'The Ultimate Sri Lankan Adventure',
    category: 'wildlife',
    categoryLabel: '10 Days • Wildlife & Coast',
    duration: '10 Days / 9 Nights',
    route: 'Colombo • Wilpattu • Kandy • Yala • Tangalle',
    description: 'Complete loop expedition: private open-top 4x4 leopard game drives, tea planter bungalows, and pristine ocean suites.',
    startingPrice: 2490,
    priceUnit: '/ person',
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKsfYd2L_S9IBPq5BZs5LOwDHLel2lPl6EpJwGft72vtFS7EHobxvJG9berPGLjFWvvkJRm_Ujrn3EL_9-PXLSHqg_imctwjx-hZOrDzaq4cNi-CBKbwfJU6HXWGkFaOTz7P3JqgPWDM44Fhj5a3DVT9Hvi_4xPmXR0FrU3A6Sg9P1tbMtRVKStCa6SvCRzJsRwETBgZSIucnLS2_53eEfg7qsWVmwS8D1JHxz7Ws',
    imageAlt: 'Majestic Sri Lankan leopard resting in Yala National Park',
    itinerary: [
      { day: 1, title: 'Colombo Heritage & Orientation', description: 'Arrive in Colombo, private transfer to boutique city manor. Sunset drinks at Galle Face Hotel overlooking the Indian Ocean.' },
      { day: 2, title: 'Wilpattu National Park Wilderness', description: 'Drive north to Wilpattu. Private afternoon safari tracking elusive leopards, sloth bears, and spotted deer around natural lakes.' },
      { day: 3, title: 'Sacred Anuradhapura & Minneriya Gathering', description: 'Explore ancient stupas and witness hundreds of wild Asian elephants gathering at Minneriya reservoir tank.' },
      { day: 4, title: 'Sigiriya Rock & Countryside Cooking', description: 'Sunrise climb up Sigiriya rock fortress followed by a hands-on clay-pot village culinary lunch with local spices.' },
      { day: 5, title: 'Kandy & Knuckles Mountain Vista', description: 'Journey through spice gardens to Kandy. Evening cultural immersion and visit to the Temple of the Sacred Tooth.' },
      { day: 6, title: 'Ella Gaps & Waterfalls', description: 'Scenic highland rail journey. Hike Little Adam’s Peak and enjoy evening cocktails with mountain gap vistas.' },
      { day: 7, title: 'Yala National Park Safari In-Depth', description: 'Descend to Yala. Check into luxury safari tent. Late afternoon 4x4 safari with expert naturalist tracking big cats.' },
      { day: 8, title: 'Dawn Bush Tracking & Coastal Tangalle', description: 'Early morning game drive. Proceed to the secluded golden sands and coconut cliffs of Tangalle.' },
      { day: 9, title: 'Secluded Beach Haven & Marine Conservation', description: 'Day of ocean leisure, private catamaran ride, and sunset turtle nesting observation.' },
      { day: 10, title: 'Galle Fort Ramparts to Airport', description: 'Morning coffee in Galle Fort, souvenir shopping, and smooth private transfer to Colombo airport.' }
    ],
    inclusions: [
      'Private 4x4 bespoke game drives with dedicated naturalists in Wilpattu & Yala',
      '9 nights in premier boutique lodges, luxury safari tents, and beach villas',
      'All national park entrance fees, permits, and tracker gratuities',
      'Daily breakfast and curated bush dinners under starlight',
      'VIP Airport assistance both on arrival and departure'
    ]
  },
  {
    id: 'beaches-relaxation',
    title: 'Beaches & Island Relaxation',
    category: 'signature',
    categoryLabel: '5 Days • Coastal Retreat',
    duration: '5 Days / 4 Nights',
    route: 'Bentota • Weligama • Mirissa Private Cove',
    description: 'Private catamaran cruises, Ayurvedic open-air spa treatments, coconut garden lunches, and secluded golden sands.',
    startingPrice: 1250,
    priceUnit: '/ person',
    rating: 4.9,
    reviewsCount: 53,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_5WMwZ0dHcpDx_UEsiJovIIn5F0ZdfuJlq6h3Z7rxAoYCLUM7LrRJFpa6-WcuKpAumQX5bxDiO0F9NlA41Hzoq-rAvkEDZAIWuZBTETwr7ihHacykAtXr2Oy8uMVi3rrNpnfhJgZcsQ_bV30BgAtdEtmCFyZnNvn7TQoNDX3NnrbSCcOF0EaTJBWK9zrNxWoaUJL47_2M4XWl1KqurQZ2_7-555R3N6PZkbUneXs',
    imageAlt: 'Idyllic tropical sunset over Mirissa beach Sri Lanka',
    itinerary: [
      { day: 1, title: 'Coastal Arrival in Bentota', description: 'Arrive and transfer directly along the southern coast to an Geoffrey Bawa architectural beach estate. Relaxation by the pool.' },
      { day: 2, title: 'Madu River Mangroves & Weligama Bay', description: 'Private boat safari through Madu River mangrove islands. Transfer to Weligama oceanfront sanctuary.' },
      { day: 3, title: 'Whale Watching & Sunset Coconut Hill', description: 'Sunrise private catamaran charter off Mirissa to spot blue whales and pods of dolphins. Late afternoon walk at Coconut Tree Hill.' },
      { day: 4, title: 'Ayurvedic Wellness & Beachfront Dining', description: 'Holistic Ayurvedic rejuvenation massage with herbal oils. Candlelit seafood BBQ dinner right on the shoreline.' },
      { day: 5, title: 'Morning Swim & Leisurely Departure', description: 'Final refreshing dip in the Indian Ocean before private limousine transfer to Colombo.' }
    ],
    inclusions: [
      '4 nights in 5-star beachfront boutique resort',
      'Private sunrise catamaran yacht charter for whale watching',
      '90-minute signature Ayurvedic treatment per guest',
      'Private driver with Mercedes SUV throughout the journey'
    ]
  },
  {
    id: 'culture-mountains-wildlife',
    title: 'Culture, Mountains & Wildlife',
    category: 'cultural',
    categoryLabel: '8 Days • Culture & Wild',
    duration: '8 Days / 7 Nights',
    route: 'Dambulla • Sigiriya • Ella • Yala',
    description: 'Golden cave temples, sunrise fortress ascents, private train journeys, and sunset tracking of leopards and elephants.',
    startingPrice: 1890,
    priceUnit: '/ person',
    rating: 5.0,
    reviewsCount: 81,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByJZXMRVOd14NklVnoZBqrTONBI0wIBvOVOQT6M_8ZFZsZcd81w_jHpcQx9qw8nv_Jo3g1LD11IidBHuPdO2tMuPoTiuRZbmtK1x6WJy08iUlBhHvXL0VpoDn8IheKhAMnETbrDypcWm7_-S3MJZGFhMxziTd9-GSZQL_nr7EoT9Oxu6O5Kij3hapuvRlQUVGtgmid9QBzkVBV5VWAMVUsMm1fjjHq8Kgpv082d_g',
    imageAlt: 'Sigiriya fortress rock peak reaching toward cloudless morning sky surrounded by pristine tropical rainforest',
    itinerary: [
      { day: 1, title: 'Arrival & Sigiriya Foothills', description: 'Arrive at Bandaranaike Airport, meet your private chauffeur-guide, transfer to luxury eco-haven with Sigiriya rock views.' },
      { day: 2, title: 'The Sky Palace of Sigiriya', description: 'Private sunrise ascent. Afternoon exploration of the historic ruins and water irrigation engineering marvels.' },
      { day: 3, title: 'Dambulla Golden Caves to Kandy Hills', description: 'Marvel at 150+ Buddha statues in ancient painted cave grottos. Drive through fragrant spice plantations to Kandy.' },
      { day: 4, title: 'Sacred Kandy Relics & Botanical Walks', description: 'Morning guided walk through Peradeniya Royal Botanic Gardens. Evening spiritual immersion at Temple of the Tooth.' },
      { day: 5, title: 'First-Class Scenic Highland Train', description: 'Board the historic blue train to Ella. Marvel at tea valleys, misty mountain passes, and waterfalls.' },
      { day: 6, title: 'Highland Trails to Yala Wilderness', description: 'Morning walk to Nine Arch Bridge. Drive down into Yala National Park for evening campfire under the stars.' },
      { day: 7, title: 'Full Day Wildlife Safari Tracking Leopards', description: 'Early morning and late afternoon game drives with expert tracker in private customized jeep.' },
      { day: 8, title: 'Southern Coastline to Colombo', description: 'Scenic drive along the southern coast with brief stop in historic Galle Fort before airport departure.' }
    ],
    inclusions: [
      'Comprehensive private chauffeur-guided transportation',
      '7 nights luxury accommodations in top-tier eco retreats and safari lodges',
      'Two private safari drives in Yala National Park with professional tracker',
      'All entrance fees and train tickets'
    ]
  },
  {
    id: 'romantic-honeymoon',
    title: 'Romantic Sri Lanka Honeymoon',
    category: 'honeymoon',
    categoryLabel: '9 Days • Romance',
    duration: '9 Days / 8 Nights',
    route: 'Tea Trails • Galle Manor • Tangalle Cliff',
    description: 'Private pool villas, candlelit cliffside dinners, high-country planter bungalows, and secluded Indian Ocean beaches.',
    startingPrice: 3100,
    priceUnit: '/ couple',
    rating: 5.0,
    reviewsCount: 39,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAky3YBTZdB-VNY1aynTC2lCM8i-0uLRmX2nCjTmu3bDWr426Iiz1FWaJSEgaQWpU-xkAD_uuf2D69l5mt2jqzCzdm1kHT9mFgX93hZyeMXWmpo8nNE2BeQ5ONAcgXRDY1kUo5NldA_CAvvge9oHkNAmq90xNnAIGfjzLmrd9pZUW_e-AcxOIQ1RaIQeCQ4MPAbohotyJCcTZmeRMzw9-6FAeI2rmHpIrHK3k3wqB8',
    imageAlt: 'Luxurious colonial Dutch heritage boutique hotel veranda in Galle Sri Lanka with candlelit dinner table set for two',
    itinerary: [
      { day: 1, title: 'Private Helicopter or Luxury Drive to Tea Country', description: 'Direct transfer to an ultra-private colonial tea planter bungalow overlooking Castlereagh Reservoir.' },
      { day: 2, title: 'Tea Trails Romance & High-Country Walks', description: 'Private butler breakfast on the lawn. Private tea tasting session and couples massage overlooking tea fields.' },
      { day: 3, title: 'High-Altitude Picnic by the Lake', description: 'Gourmet lakeside picnic with champagne prepared by your private chef. Relax by the fireplace in the evening.' },
      { day: 4, title: 'Descent to the South Coast: Galle Manor', description: 'Scenic transfer south. Check into romantic suite at historic Amangalla inside Galle Fort.' },
      { day: 5, title: 'Sunset Cocktails on Galle Fort Ramparts', description: 'Private horse-drawn carriage or relaxed walking tour with Dana’s handpicked local storyteller.' },
      { day: 6, title: 'Secluded Cliffside Haven in Tangalle', description: 'Arrive at your private ocean-facing pool villa perched atop coconut-fringed cliffs.' },
      { day: 7, title: 'Private Beach Day & Catamaran Sunset Cruise', description: 'Champagne sunset sail on a private catamaran along the southern coastline.' },
      { day: 8, title: 'Romantic Candlelight Dinner on the Sands', description: 'Five-course bespoke dinner right on the sand with ambient acoustic music and warm sea breezes.' },
      { day: 9, title: 'Fond Farewell to Paradise', description: 'Private luxury transfer to Colombo Airport with lounge access.' }
    ],
    inclusions: [
      '8 nights in premium honeymoon suites with private plunge pools',
      'All-inclusive dining at Ceylon Tea Trails with fine wines and private chef',
      'Private sunset champagne catamaran cruise',
      'Couple Ayurvedic spa ceremonies & romantic cliffside dinner',
      'Dedicated personal concierge on 24-hour call'
    ]
  },
  {
    id: 'family-adventure',
    title: 'Sri Lanka Family Adventure',
    category: 'signature',
    categoryLabel: '8 Days • Family Curated',
    duration: '8 Days / 7 Nights',
    route: 'Pinnawala • Kandy • Ella • Weligama Surf Bay',
    description: 'Gentle surf lessons in safe bays, baby turtle hatcheries, interactive spice garden cooking, and scenic mountain rail cars.',
    startingPrice: 3400,
    priceUnit: '/ family',
    rating: 4.9,
    reviewsCount: 34,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNg8KMwvjrTvwTWe-JduMbrm8XlTZ7mkNa-60ZxfIuZQtfE7yLmKCeWW59mcENp7Se5cSvgs5QwqreRW8VoWN_71LrjXKCGiPdEABO57SgUDdMA8cAbiX4575znc6cV307TagFNxnu5uTGKiURjL0cmm_U163g22hu36GPfK8r9NCtnX6wV6DLEnQmt57ZqRwNPue1OJSDyZH5-4b6Rw1vasw8JvfrSDZYCxhJUtU',
    imageAlt: 'Happy family exploring green tea plantation garden in Sri Lanka mountain hillside with friendly local guide',
    itinerary: [
      { day: 1, title: 'Warm Welcome in Colombo & Family Chill', description: 'Family-friendly hotel with large gardens and swimming pool. Child-friendly orientation dinner.' },
      { day: 2, title: 'Elephant Transit Home & Kandy', description: 'Visit ethical elephant transit home where orphaned calves are fed and rehabilitated into the wild.' },
      { day: 3, title: 'Interactive Spice Gardens & Kandyan Crafts', description: 'Hands-on organic spice garden exploration, traditional mask carving workshop for children.' },
      { day: 4, title: 'The Great Blue Mountain Train Ride', description: 'Fun observation train car ride through tunnels and waterfalls. Pack snacks and tea plantation picnic.' },
      { day: 5, title: 'Tea Master Experience in Ella', description: 'Pick tea leaves alongside plantation families, taste golden tea, and explore Nine Arch viaduct.' },
      { day: 6, title: 'Weligama Bay Gentle Surf Lessons', description: 'Private ISA-certified surf coaches teaching kids and parents on gentle sand-bottom beach breaks.' },
      { day: 7, title: 'Turtle Conservation & Boat Safari', description: 'Release newly hatched sea turtles into the ocean at sunset and explore mangrove river wildlife.' },
      { day: 8, title: 'Beach Fun & Easy Airport Return', description: 'Relaxed checkout and private family van transfer to Colombo for departure.' }
    ],
    inclusions: [
      'Spacious luxury family van with booster seats and dedicated child-friendly guide',
      'Family interconnecting suites or 2-bedroom villas throughout',
      'All family activity fees (surfing lessons, mask carving, elephant sanctuary, turtle hatchery)',
      'Kid-friendly meal options and flexible pacing'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'wildlife-safaris',
    title: 'Wildlife Safaris',
    description: 'Private game trackers in Yala, Udawalawe and Wilpattu targeting leopards, elephants, and rare birdlife.',
    iconName: 'pest_control_rodent',
    highlights: ['Yala Leopard Dens', 'Wilpattu Sloth Bears', 'Udawalawe Elephant Herds']
  },
  {
    id: 'tea-estate',
    title: 'Tea Estate & Factories',
    description: 'Walk colonial tea gardens with seasoned planters, plucking golden tips and cupping rare high-grown Ceylon teas.',
    iconName: 'emoji_nature',
    highlights: ['Private Planter Walk', 'Tea Cupping Masterclass', 'Historic Bungalow High Tea']
  },
  {
    id: 'scenic-train',
    title: 'Scenic Train Journeys',
    description: 'Reserved first-class observation carriages winding through misty cloud forests, viaducts, and waterfalls.',
    iconName: 'train',
    highlights: ['Kandy to Ella Route', 'Nine Arch Bridge Crossing', 'Panoramic Cloud Pass']
  },
  {
    id: 'surfing',
    title: 'Surfing & Coastlines',
    description: 'From gentle beginner point breaks in Weligama to the legendary world-class right-hand point in Arugam Bay.',
    iconName: 'surfing',
    highlights: ['Weligama Beginner Waves', 'Midigama Reef Breaks', 'Arugam Bay Right Points']
  },
  {
    id: 'culinary',
    title: 'Culinary & Spice Trails',
    description: 'Clay-pot cooking in rural village kitchens, organic spice gardens of Matale, and fragrant ocean seafood curries.',
    iconName: 'restaurant',
    highlights: ['Village Clay Pot Kitchen', 'Matale Cinnamon Peeling', 'Galle Seafood Markets']
  },
  {
    id: 'temples',
    title: 'Ancient Temple Shrines',
    description: 'Private historian guides exploring UNESCO rock sanctuaries at Dambulla, Polonnaruwa, and Anuradhapura.',
    iconName: 'temple_buddhist',
    highlights: ['Dambulla Golden Caves', 'Temple of the Tooth Relic', 'Polonnaruwa Vatadage']
  },
  {
    id: 'hiking',
    title: 'Peak & Mountain Hikes',
    description: "Adam's Peak sunrise pilgrimage, Horton Plains World's End precipices, and Knuckles Mountain Range cloud forests.",
    iconName: 'hiking',
    highlights: ["Adam's Peak Sunrise", "World's End Sheer Drop", 'Knuckles Cloud Forest']
  },
  {
    id: 'whales',
    title: 'Whale & Dolphin Cruising',
    description: 'Private luxury yachts tracking blue whales and super-pods of spinner dolphins off Mirissa and Trincomalee.',
    iconName: 'water',
    highlights: ['Blue Whale Encounters', 'Spinner Dolphin Pods', 'Private Sunset Yacht']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    quote: '“Go Lanka by Dana made our honeymoon utterly unforgettable. Every boutique stay, private driver, and secluded cliff dinner was pure perfection.”',
    author: 'Marcus & Elena Vance',
    location: 'London, United Kingdom',
    initials: 'MV',
    rating: 5
  },
  {
    id: 'review-2',
    quote: '“Traveling with two teenagers can be daunting, but Dana balanced thrilling leopard safaris with relaxing surf days effortlessly.”',
    author: 'The Lindqvist Family',
    location: 'Stockholm, Sweden',
    initials: 'LF',
    rating: 5
  },
  {
    id: 'review-3',
    quote: '“The scenic train journey through Ella and the private sunrise climb at Sigiriya before crowds arrived was pure magic. Dana’s local insight is priceless.”',
    author: 'Sophie Moreau',
    location: 'Paris, France',
    initials: 'SM',
    rating: 5
  }
];
