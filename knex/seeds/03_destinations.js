exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('destinations').del().then(() => {
    // Inserts seed entries
    return knex('destinations').insert([
      {
        destinationName: 'Abu Dhabi',
        destinationPhoto: 'Abu Dhabi.jpg',
        aboutDestination: "Proudly modern and cosmopolitan, Abu Dhabi is the UAE's forward-thinking cultural heart where nothing stands still – except perhaps the herons in its mangroves.",
        destinationLink: "https://www.lonelyplanet.com/united-arab-emirates/abu-dhabi"
      },
      {
        destinationName: 'Agra (Taj Mahal)',
        destinationPhoto: 'Agra (Taj Mahal).jpg',
        aboutDestination: "The magical allure of the Taj Mahal draws tourists to Agra like moths to a wondrous flame. And despite the hype, it’s every bit as good as you’ve heard. But the Taj is not a stand-alone attraction. The legacy of the Mughal empire has left a magnificent fort and a liberal sprinkling of fascinating tombs and mausoleums, and there’s also fun to be had in the bustling chowks (marketplaces). The downside comes in the form of hordes of rickshaw-wallahs, touts, unofficial guides and souvenir vendors, whose persistence can be infuriating at times.",
        destinationLink: "https://www.lonelyplanet.com/india/uttar-pradesh/agra"
      },
      {
        destinationName: 'Amsterdam',
        destinationPhoto: 'Amsterdam.jpg',
        aboutDestination: "Golden Age canals lined by tilting gabled buildings are the backdrop for Amsterdam's treasure-packed museums, vintage-filled shops and hyper-creative design, drinking and dining scenes.",
        destinationLink: "https://www.lonelyplanet.com/the-netherlands/amsterdam"
      },
      {
        destinationName: 'Antalya',
        destinationPhoto: 'Antalya.jpg',
        aboutDestination: "Once seen simply as the gateway to the Turkish Riviera, Antalya today is very much a destination in its own right. Situated right on the Gulf of Antalya (Antalya Körfezi), the largest city on Turkey's western Mediterranean coastline is both classically beautiful and stylishly modern. At its core is the wonderfully preserved old-city district of Kaleiçi (literally 'within the castle'), which offers atmospheric accommodation in the finely restored Ottoman houses on its winding lanes. The old city wraps around a splendid Roman-era harbour with clifftop views of hazy-blue mountain silhouettes that are worth raising a toast to. Just outside of the central city are two beaches and one of Turkey's finest museums.",
        destinationLink: "https://www.lonelyplanet.com/turkey/mediterranean-coast/antalya"
      },
      {
        destinationName: 'Artvin',
        destinationPhoto: 'Artvin.jpg',
        aboutDestination: "Artvin has a spectacular setting on a mountainside climbing up from the Çoruh River, with steep streets zigzagging from the bottom of town to the top. Sadly, the town itself is not in the least pretty, and kilometres of dam and road works have scarred the valley below. However, Artvin is a good jumping-off point for the beautiful mountain country and relics of old Georgian culture to its east, and a possible stopover between Yusufeli or Erzurum and the coast.",
        destinationLink: "https://www.lonelyplanet.com/turkey/artvin"
      },
      {
        destinationName: 'Athens',
        destinationPhoto: 'Athens.jpg',
        aboutDestination: "With equal measures of grunge and grace, Athens is a heady mix of ancient history and contemporary cool.",
        destinationLink: "https://www.lonelyplanet.com/greece/athens"
      },
      {
        destinationName: 'Auckland',
        destinationPhoto: 'Auckland.jpg',
        aboutDestination: "Paris may be the city of love, but Auckland is the city of many lovers, according to its Māori name, Tāmaki Makaurau. Those lovers so desired this place that they fought over it for centuries.",
        destinationLink: "https://www.lonelyplanet.com/new-zealand/auckland-1341384"
      },
      {
        destinationName: 'Bangkok',
        destinationPhoto: 'Bangkok.jpg',
        aboutDestination: "Same same, but different. This Thailish T-shirt philosophy sums up Bangkok, a city where the familiar and the exotic collide like the flavours on a plate of pàt tai.",
        destinationLink: "https://www.lonelyplanet.com/thailand/bangkok"
      },
      {
        destinationName: 'Barcelona',
        destinationPhoto: 'Barcelona.jpg',
        aboutDestination: "Barcelona is an enchanting seaside city with boundless culture, fabled architecture and a world-class drinking and dining scene.",
        destinationLink: "https://www.lonelyplanet.com/spain/barcelona"
      },
      {
        destinationName: 'Beijing',
        destinationPhoto: 'Beijing.jpg',
        aboutDestination: "Constantly reimagining itself as it races towards the future, yet inextricably linked to its glorious, notorious past, Běijīng is as compelling as it is complex.",
        destinationLink: "https://www.lonelyplanet.com/china/beijing"
      },
      {
        destinationName: 'Berlin',
        destinationPhoto: 'Berlin.jpg',
        aboutDestination: "Berlin's combo of glamour and grit is bound to mesmerise all those keen to explore its vibrant culture, cutting-edge architecture, fabulous food, intense parties and tangible history.",
        destinationLink: "https://www.lonelyplanet.com/germany/berlin"
      },
      {
        destinationName: 'Bratislava',
        destinationPhoto: '',
        aboutDestination: "Slovakia's capital since the country's independence in 1993, Bratislava is a mosaic of illustrious history: a medieval and Gothic old town, baroque palaces commissioned by Hungarian nobles, and the crowning castle, rebuilt to Renaissance finery. Slicing through the city are stark-angled, communist-era blocks and a futurist bridge.",
        destinationLink: "https://www.lonelyplanet.com/slovakia/bratislava"
      },
      {
        destinationName: 'Brussels',
        destinationPhoto: 'Brussels.jpg',
        aboutDestination: "Historic yet hip, bureaucratic yet bizarre, self-confident yet unshowy, Brussels is multicultural to its roots.",
        destinationLink: "https://www.lonelyplanet.com/belgium/brussels"
      },
      {
        destinationName: 'Budapest',
        destinationPhoto: 'Budapest.jpg',
        aboutDestination: "Budapest has something for everyone – from dramatic history and flamboyant architecture to healing thermal waters and a nightlife that is unrivalled in Eastern and Central Europe.",
        destinationLink: "https://www.lonelyplanet.com/hungary/budapest"
      },
      {
        destinationName: 'Buenos Aires',
        destinationPhoto: 'Buenos Aires.jpg',
        aboutDestination: "Buenos Aires combines faded European grandeur with Latin passion. Sexy and alive, this beautiful city gets under your skin.",         
        destinationLink: "https://www.lonelyplanet.com/argentina/buenos-aires"
      },
      {
        destinationName: 'Cairo',
        destinationPhoto: 'Cairo.jpg',
        aboutDestination: "Cairo is chaos at its most magnificent, infuriating and beautiful. From above, the distorted roar of the muezzins' call to prayer echoes out from duelling minarets. Below, car horns bellow tuneless symphonies amid avenues of faded 19th-century grandeur while donkey carts rattle down dusty lanes lined with colossal Fatimid and Mamluk monuments.",         
        destinationLink: "https://www.lonelyplanet.com/egypt/cairo"
      },
      {
        destinationName: 'Cancun',
        destinationPhoto: 'Cancun.jpg',
        aboutDestination: "Cancun is a tale of two cities, with the Zona Hotelera offering majestic Caribbean beaches and Maya culture and Cancún Centro providing the local flavor.",
        destinationLink: "https://www.lonelyplanet.com/mexico/cancun"
      },
      {
        destinationName: 'Chennai',
        destinationPhoto: 'Chennai.jpg',
        aboutDestination: "If you have time to explore Chennai (formerly Madras), this 400-sq-km conglomerate of urban villages and diverse neighbourhoods making up Tamil Nadu's capital will pleasantly surprise you. Its role is as keeper of South Indian artistic, religious and culinary traditions.",
        destinationLink: "https://www.lonelyplanet.com/india/tamil-nadu/chennai-madras"
      },
      {
        destinationName: 'Chiang Mai',
        destinationPhoto: 'Chiang Mai.jpg',
        aboutDestination: "The former seat of the Lanna kingdom is a blissfully calm and laid-back place to relax and recharge your batteries. Participate in a vast array of activities on offer, or just stroll around the backstreets, and discover a city that is still firmly Thai in its atmosphere and attitude.",
        destinationLink: "https://www.lonelyplanet.com/thailand/chiang-mai-province/chiang-mai"
      },
      {
        destinationName: 'Chiba',
        destinationPhoto: 'Chiba.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Colombo',
        destinationPhoto: 'Colombo.jpg',
        aboutDestination: "Although it's unlikely it will reclaim its 19th-century moniker 'the garden city of the East', Colombo has nevertheless emerged as a must-see stop in Sri Lanka. No longer just the sprawling city you have to endure on your way to the beaches, it has become a worthy destination in its own right and makes an excellent start – or finish – to your Sri Lankan adventures.",         
        destinationLink: "https://www.lonelyplanet.com/sri-lanka/colombo"
      },
      {
        destinationName: 'Copenhagen',
        destinationPhoto: 'Copenhagen.jpg',
        aboutDestination: "Copenhagen is the epitome of Scandi cool. Modernist lamps light New Nordic tables, bridges buzz with cycling commuters and eye-candy locals dive into pristine waterways.",         
        destinationLink: "https://www.lonelyplanet.com/denmark/copenhagen"
      },
      {
        destinationName: 'Dammam City',
        destinationPhoto: 'Dammam City.jpg',
        aboutDestination: "Dammam is the best place in the region for food and sleeping options. The city's cuisine has a truly international flavour to cater for its huge expat community, most of whom work for the Saudi Arabian Oil Company (Saudi Aramco). It is also where the causeway to Bahrain is located, making it popular with those wanting to hop across to the Kingdom's more liberal neighbour.",         
        destinationLink: "https://www.lonelyplanet.com/saudi-arabia/dammam"
      },
      {
        destinationName: 'Delhi',
        destinationPhoto: 'Delhi.jpg',
        aboutDestination: "Steeped in history yet overflowing with modern life, colourful, cacophonous Delhi pulsates with the relentless rhythms of humanity like few other cities on Earth.",         
        destinationLink: "https://www.lonelyplanet.com/india/delhi"
      },
      {
        destinationName: 'Denpasar',
        destinationPhoto: 'Denpasar.jpg',
        aboutDestination: "Sprawling, hectic and ever-growing, Bali's capital has been the focus of a lot of the island's growth and wealth over the last five decades. It can seem a daunting and chaotic place, but spend a little time on its tree-lined streets in the relatively affluent government and business district of Renon and you'll discover a more genteel side.",        
        destinationLink: "https://www.lonelyplanet.com/indonesia/bali/denpasar"
      },
      {
        destinationName: 'Doha',
        destinationPhoto: 'Doha.jpg',
        aboutDestination: "It’s rare to see a great city in the making these days, but here's your chance. Whether it's the stunning and constantly changing skyline or the massive investments Qatari authorities are making in landmark cultural icons, Doha is a city oozing confidence and style, and it's as much ease with its modern shopping malls as it is with its heritage and traditional souqs.",         
        destinationLink: "https://www.lonelyplanet.com/qatar/doha"
      },
      {
        destinationName: 'Dubai',
        destinationPhoto: 'Dubai.jpg',
        aboutDestination: "Dubai is a stirring alchemy of profound traditions and ambitious futuristic vision wrapped into starkly evocative desert splendour.",
        destinationLink: "https://www.lonelyplanet.com/united-arab-emirates/dubai"
      },
      {
        destinationName: 'Dublin',
        destinationPhoto: 'Dublin.jpg',
        aboutDestination: "A small capital with a huge reputation, Dublin has a mix of heritage and hedonism that will not disappoint. All you have to do is show up.",         
        destinationLink: "https://www.lonelyplanet.com/ireland/dublin"
      },
      {
        destinationName: 'Edirne',
        destinationPhoto: 'Edirne.jpg',
        aboutDestination: "Capital of the Ottoman empire before Mehmet II conquered Constantinople and moved his court there, Edirne is blessed with imperial building stock, a notable culinary heritage and a lingering and much-cherished sense of civic grandeur. Close to the Greek and Bulgarian borders, the city has a European flavour that is best appreciated in summer, when locals party on the banks of the Tunca and Meriç Rivers and cheer on the contestants at the world-famous Kırkpınar oil-wrestling festival.",         
        destinationLink: "https://www.lonelyplanet.com/turkey/edirne"
      },
      {
        destinationName: 'Florence',
        destinationPhoto: 'Florence.jpg',
        aboutDestination: "Cradle of the Renaissance, romantic, enchanting and utterly irresistible, Florence (Firenze) is a place to feast on world-class art and gourmet Tuscan cuisine.",         
        destinationLink: "https://www.lonelyplanet.com/italy/florence"
      },
      {
        destinationName: 'Frankfurt',
        destinationPhoto: 'Frankfurt.jpg',
        aboutDestination: "Glinting with glass, steel and concrete skyscrapers, Frankfurt-on-the-Main (pronounced ‘mine’) is unlike any other German city. The focal point of a conurbation of 5.5 million inhabitants, ‘Mainhattan’ is a high-powered finance and business hub, home to one of the world’s largest stock exchanges and the gleaming headquarters of the European Central Bank, and famously hosts some of the world's most important trade fairs, attracting thousands of business travellers.",         
        destinationLink: "https://www.lonelyplanet.com/germany/frankfurt-am-main"
      },
      {
        destinationName: 'Guangzhou',
        destinationPhoto: 'Guangzhou.jpg',
        aboutDestination: "Guǎngzhōu (广州), once better known internationally as Canton, has been China's busiest trading centre for centuries. Despite breakneck redevelopment up to and after the 2010 Asian Games, much of the metropolis still hums along at a pleasantly sedate pace, where narrow, leafy streets conceal temples and mosques, pockets of colonial-era heritage, traditional dim-sum eateries, distinctive qílóu shophouses and Lǐngnán architecture. Equally, you can embrace modernity via the 21st-century architectural landmarks of the showpiece Zhūjiāng New Town, such as the late Zaha Hadid's Opera House and the slim-waisted Canton Tower, rising up over the Pearl River, which cuts a lazy swathe through the city.",         
        destinationLink: "https://www.lonelyplanet.com/china/guangdong/guangzhou"
      },
      {
        destinationName: 'Guilin',
        destinationPhoto: 'Guilin.jpg',
        aboutDestination: "Guìlín (桂林) was China's first city to develop tourism after 1949. For decades, children's textbooks proclaimed 'Guìlín's landscape is the best under heaven' (桂林山水甲天下). It was the darling of Chinese politicians, the star city proudly presented to visiting dignitaries. Today Guìlín's natural endowments still amaze, yet, thanks to imperfect urban planning, there is a pervasive feeling that the city is past its prime.",         
        destinationLink: "https://www.lonelyplanet.com/china/guangxi/guilin"
      },
      {
        destinationName: 'Ha Long',
        destinationPhoto: 'Ha Long.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Ha Noi',
        destinationPhoto: 'Ha Noi.jpg',
        aboutDestination: "Vietnam's capital races to make up for time lost to the ravages of war and a government that as recently as the 1990s kept the outside world at bay. Its streets surge with scooters vying for right of way amid the din of constantly blaring horns, and all around layers of history reveal periods of French and Chinese occupation – offering a glimpse into the resilience of ambitious, proud Hanoians.",         
        destinationLink: "https://www.lonelyplanet.com/vietnam/hanoi"
      },
      {
        destinationName: 'Heraklion',
        destinationPhoto: 'Heraklion.jpg',
        aboutDestination: "Crete’s capital, Iraklio (also called Heraklion), is Greece’s fifth-largest city and the island’s economic and administrative hub. It's also home to Crete's blockbuster sights: the must-see Heraklion Archaeological Museum and the nearby Palace of Knossos, which both provide fascinating windows into Crete's ancient past.",         
        destinationLink: "https://www.lonelyplanet.com/greece/crete/iraklio"
      },
      {
        destinationName: 'Ho Chi Minh City',
        destinationPhoto: 'Ho Chi Minh City.jpg',
        aboutDestination: "Ho Chi Minh City (HCMC) is Vietnam at its most dizzying: a high-octane city of commerce and culture that has driven the country forward with its pulsating energy. A chaotic whirl, the city breathes life and vitality into all who settle here, and visitors cannot help but be hauled along for the ride.",         
        destinationLink: "https://www.lonelyplanet.com/vietnam/ho-chi-minh-city"
      },
      {
        destinationName: 'Hong kong',
        destinationPhoto: 'Hong kong.jpg',
        aboutDestination: "Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive.",
        destinationLink: "https://www.lonelyplanet.com/china/hong-kong"
      },
      {
        destinationName: 'Honolulu',
        destinationPhoto: 'Honolulu.jpg',
        aboutDestination: "Here in Honolulu, away from the crowded haunts of Waikiki, you get to shake hands with the real Hawaii. A boisterous Polynesian capital, Honolulu delivers an island-style mixed plate of experiences.",         
        destinationLink: "https://www.lonelyplanet.com/usa/honolulu-and-waikiki"
      },
      {
        destinationName: 'Istanbul',
        destinationPhoto: 'Istanbul.jpg',
        aboutDestination: "This magical meeting place of East and West has more top-drawer attractions than it has minarets (and that's a lot).",         
        destinationLink: "https://www.lonelyplanet.com/turkey/istanbul"
      },
      {
        destinationName: 'Jaipur',
        destinationPhoto: 'Jaipur.jpg',
        aboutDestination: "Enthralling, historical Jaipur, Rajasthan’s capital, is the gateway to India’s most flamboyant state.",         
        destinationLink: "https://www.lonelyplanet.com/india/rajasthan/jaipur"
      },
      {
        destinationName: 'Jakarta',
        destinationPhoto: 'Jakarta.jpg',
        aboutDestination: "One of the world’s greatest megalopolises, Jakarta is a dynamic and vibrant city. Its chaotic charm and juxtapositions can be found on every street.",         
        destinationLink: "https://www.lonelyplanet.com/indonesia/jakarta"
      },
      {
        destinationName: 'Jeju',
        destinationPhoto: 'Jeju.jpg',
        aboutDestination: "Jeju-do's capital, Jeju-si (제주시) makes a convenient base to explore the island, with a few historic structures, plenty of shopping, the island's hippest bars and a large range of places to eat. Within sniffing distance of the sea, Tapdong-ro has an incredible number of seafood and pork restaurants, which continue along the coastal road at Yongduam Rock with nice seaside views and ample bars and pensions. Boutique sleeping and eating can be found in Shin Jeju. The most interesting sights, such as Jeju Stone Park and Jeju Loveland, are out of town, but easily accessed either by bus or taxi.",         
        destinationLink: "https://www.lonelyplanet.com/south-korea/jejudo/jeju-si"
      },
      {
        destinationName: 'Jerusalem',
        destinationPhoto: 'Jerusalem.jpg',
        aboutDestination: "Destroyed and rebuilt over thousands of years, Jerusalem's spiritual magnetism endures. With interlacing histories, clashing cultures and constant reinvention, the city is an intense, multisensory experience.",         
        destinationLink: "https://www.lonelyplanet.com/israel-and-the-palestinian-territories/jerusalem"
      },
      {
        destinationName: 'Johanesburg',
        destinationPhoto: 'Johanesburg.jpg',
        aboutDestination: "Commonly known as Jo’burg or Jozi, this rapidly changing city is the vibrant heart of South Africa. After almost 20 years of decline and decay, Johannesburg is now looking optimistically towards the future. Its centre is smartening up and new loft apartments and office developments are being constructed at a rapid pace. The hipster-friendly neighbourhood of Maboneng is considered one of the most successful urban-renewal projects in the world. However, the wealth divide remains stark, and crime and poverty haven't been eliminated.",         
        destinationLink: "https://www.lonelyplanet.com/south-africa/gauteng/johannesburg"
      },
      {
        destinationName: 'Johor Bahru',
        destinationPhoto: 'Johor Bahru.jpg',
        aboutDestination: "Johor’s capital city of Johor Bahru (JB for short) has been repaved and replanted and is well on the way to rebranding itself, after years of being habitually criticised as a dirty, chaotic border town.",         
        destinationLink: "https://www.lonelyplanet.com/malaysia/peninsular-malaysia-east-coast/johor-bahru"
      },
      {
        destinationName: 'Kolkata',
        destinationPhoto: 'Kolkata.jpg',
        aboutDestination: "India’s third-largest city is a daily festival of human existence, simultaneously noble and squalid, cultured and desperate, decidedly futuristic while splendid in decay. By its old spelling, Calcutta readily conjures images of human suffering to most Westerners – although that's not a complete picture of this 330-year-old metropolis. Locally, Kolkata is regarded as India’s intellectual, artistic and cultural capital. Although poverty is certainly apparent, the self-made middle class drives the city's core machinery, a nascent hipster culture thrives among its millennial residents and its dapper Bengali gentry frequent grand colonial-era clubs.",         
        destinationLink: "https://www.lonelyplanet.com/india/kolkata-calcutta"
      },
      {
        destinationName: 'Krakow',
        destinationPhoto: 'Krakow.jpg',
        aboutDestination: "Poland's former royal capital effortlessly fuses medieval pomp and pageantry with modern-day, student-fuelled fun into a harmonious whole.",         
        destinationLink: "https://www.lonelyplanet.com/poland/malopolska/krakow"
      },
      {
        destinationName: 'Kuala Lumpur',
        destinationPhoto: 'Kuala Lumpur.jpg',
        aboutDestination: "A skyline punctuated by minarets, Mogul-style domes and skyscrapers; colourful, food-stall-lined streets shaded by a leafy canopy of banyan trees – this is Kuala Lumpur.",         
        destinationLink: "https://www.lonelyplanet.com/malaysia/kuala-lumpur"
      },
      {
        destinationName: 'Kyoto',
        destinationPhoto: 'Kyoto.jpg',
        aboutDestination: "Kyoto is old Japan writ large: atmospheric temples, sublime gardens, traditional teahouses and geisha scurrying to secret liaisons.",         
        destinationLink: "https://www.lonelyplanet.com/japan/kansai/kyoto"
      },
      {
        destinationName: 'Las Vegas',
        destinationPhoto: 'Las Vegas.jpg',
        aboutDestination: "An oasis of indulgence dazzling in the desert, Vegas' seduction is unrivaled. The Strip shimmers hypnotically, promising excitement, entertainment, fortune and fame. Seeing is believing.",         
        destinationLink: "https://www.lonelyplanet.com/usa/las-vegas"
      },
      {
        destinationName: 'Lima',
        destinationPhoto: 'Lima.jpg',
        aboutDestination: "After Cairo, this sprawling metropolis is the second-driest world capital, rising above a long coastline of crumbling cliffs. To enjoy it, climb on the wave of chaos that spans high-rise condos built alongside pre-Columbian temples and fast Pacific breakers rolling toward noisy traffic snarl-ups. Think one part southern Cali doused with a heavy dose of America Latina.",         
        destinationLink: "https://www.lonelyplanet.com/peru/lima"
      },
      {
        destinationName: 'Lisbon',
        destinationPhoto: 'Lisbon.jpg',
        aboutDestination: "Seven cinematic hillsides overlooking the Rio Tejo cradle Lisbon's postcard-perfect panorama of cobbled alleyways, ancient ruins and white-domed cathedrals – a captivating scene crafted over centuries.",         
        destinationLink: "https://www.lonelyplanet.com/portugal/lisbon"
      },
      {
        destinationName: 'London',
        destinationPhoto: 'London.jpg',
        aboutDestination: "One of the world's most visited cities, London has something for everyone: from history and culture to fine food and good times.",
        destinationLink: "https://www.lonelyplanet.com/england/london"
      },
      {
        destinationName: 'Los Angeles',
        destinationPhoto: 'Los Angeles.jpg',
        aboutDestination: "Ruggedly good looking, deeply creative, with a sunny disposition to boot…if LA were on Tinder, the app would crash.",         
        destinationLink: "https://www.lonelyplanet.com/usa/los-angeles"
      },
      {
        destinationName: 'Macau',
        destinationPhoto: 'Macau.jpg',
        aboutDestination: "Known as the 'Vegas of China', Macau is indeed an epicentre of gambling and glitz. While luxury entertainment here is world-class, the city has much more to offer than that. Macau was a Portuguese colony for 300 years, a heritage marked by a wonderful cultural hybridity that manifests itself in all aspects of life: Chinese temples stand on maritime-themed Portuguese tiles; the sound of Cantonese permeates streets with Portuguese names; and when you're hungry, it could be Chinese dim sum, pastéis de nata(Portuguese egg tarts) or Macanese minchi (ground meat stir-fried with potatoes) that come to the rescue.",         
        destinationLink: "https://www.lonelyplanet.com/china/macau"
      },
      {
        destinationName: 'Madrid',
        destinationPhoto: 'Madrid.jpg',
        aboutDestination: "Madrid is a beguiling place with an energy that carries one simple message: this city really knows how to live.",         
        destinationLink: "https://www.lonelyplanet.com/spain/madrid"
      },
      {
        destinationName: 'Marrakech',
        destinationPhoto: 'Marrakech.jpg',
        aboutDestination: "Prepare for your senses to be slapped. Marrakesh's heady sights and sounds will dazzle, frazzle and enchant. Put on your babouches(leather slippers) and dive right in.",         
        destinationLink: "https://www.lonelyplanet.com/morocco/marrakesh"
      },
      {
        destinationName: 'Mecca',
        destinationPhoto: 'Mecca.jpg',
        aboutDestination: "Mecca is only accessible by Muslims, who often describe the moment they first lay eyes on the city's sacred Kaaba as an overwhelmingly emotional experience. For those living outside the Kingdom, a visit to Mecca – generally spelt 'Makkah' by Muslims and in Saudi Arabia – is a lifelong dream. Coming here to perform the hajj pilgrimage is a religious obligation for all Muslims who are financially and physically able to do so.",         
        destinationLink: "https://www.lonelyplanet.com/saudi-arabia/mecca"
      },
      {
        destinationName: 'Melbourne',
        destinationPhoto: 'Melbourne.jpg',
        aboutDestination: "Equal parts dynamic, cosmopolitan, sports-mad and arty, Melbourne simultaneously exudes style and keeps its best spots hidden, inviting discovery by food and culture lovers.",         
        destinationLink: "https://www.lonelyplanet.com/australia/melbourne"
      },
      {
        destinationName: 'Mexico City',
        destinationPhoto: 'Mexico City.jpg',
        aboutDestination: "Mexico City is, and has always been, the sun in the Mexican solar system. Though much-maligned in the past, these days the city is cleaning up its act. Revamped public spaces are springing back to life, the culinary scene is exploding and a cultural renaissance is flourishing. On top of all that, by largely managing to distance itself from the drug war, the nation’s capital remains a safe haven of sorts. Far from shaking off visitors, the earthquakes of 2017 revealed a young society who attracted admiration through their solidarity.",         
        destinationLink: "https://www.lonelyplanet.com/mexico/mexico-city"
      },
      {
        destinationName: 'Miami',
        destinationPhoto: 'Miami.jpg',
        aboutDestination: "Beautiful beaches and art deco delights are just some of Miami’s many charms – there's also the blazing nightlife, tropical gardens, lively arts scene and sizzling cuisine.",         
        destinationLink: "https://www.lonelyplanet.com/usa/miami"
      },
      {
        destinationName: 'Milan',
        destinationPhoto: 'Milan.jpg',
        aboutDestination: "Milan is Italy’s city of the future, a fast-paced metropolis where money talks, creativity is big business and looking good is an art form.",         
        destinationLink: "https://www.lonelyplanet.com/italy/milan"
      },
      {
        destinationName: 'Moscow',
        destinationPhoto: 'Moscow.jpg',
        aboutDestination: "During any season, at any hour of the day, Moscow thrills visitors with its artistry, history and majesty.",         
        destinationLink: "https://www.lonelyplanet.com/russia/moscow"
      },
      {
        destinationName: 'Mumbai',
        destinationPhoto: 'Mumbai.jpg',
        aboutDestination: "Mumbai, formerly Bombay, is big. It’s full of dreamers and hard-labourers, starlets and gangsters, stray dogs and exotic birds, artists and servants, fisherfolk and crorepatis (millionaires), and lots and lots of people. It has India’s most prolific film industry, some of Asia’s biggest slums (as well as the world’s most expensive home) and the largest tropical forest in an urban zone. Mumbai is India’s financial powerhouse, fashion epicentre and a pulse point of religious tension.",         
        destinationLink: "https://www.lonelyplanet.com/india/mumbai-bombay"
      },
      {
        destinationName: 'Munich',
        destinationPhoto: 'Munich.jpg',
        aboutDestination: "Tall tankards and high-tech cars, edgy art and Lederhosen – Munich is a city where traditional and modern sit side by side like few places on earth.",         
        destinationLink: "https://www.lonelyplanet.com/germany/munich"
      },
      {
        destinationName: 'New York',
        destinationPhoto: 'New York.jpg',
        aboutDestination: "Epicenter of the arts. Architectural darling. Dining and shopping capital. Trendsetter. New York City wears many crowns, and spreads an irresistible feast for all.",         
        destinationLink: "https://www.lonelyplanet.com/usa/new-york-city"
      },
      {
        destinationName: 'Nice',
        destinationPhoto: 'Nice.jpg',
        aboutDestination: "With its mix of real-city grit, old-world opulence, year-round sunshine, vibrant street life and stunning seaside location, no place in France compares with Nice.",         
        destinationLink: "https://www.lonelyplanet.com/france/nice"
      },
      {
        destinationName: 'Orlando',
        destinationPhoto: 'Orlando.jpg',
        aboutDestination: "It's so easy to get caught up in Greater Orlando – in the isolated, fabricated worlds of Disney or Universal Orlando (for which, let's face it, you're probably here) – that you forget all about the downtown city of Orlando itself. It has a lot to offer: lovely tree-lined neighborhoods; a rich performing arts and museum scene; several fantastic gardens and nature preserves; fabulous cuisine; great craft cocktails; and a delightfully slower pace devoid of manic crowds. So, sure, enjoy the theme parks and the sparkles, nostalgia and adrenaline-pumped fantasy there, but also take time to 'Find Orlando.' Come down off the coasters for one day to explore the quieter, gentler side of the city. You may be surprised to find that you enjoy the theme parks all that much more as a result.",        
        destinationLink: "https://www.lonelyplanet.com/usa/florida/orlando"
      },
      {
        destinationName: 'Osaka',
        destinationPhoto: 'Osaka.jpg',
        aboutDestination: "If Kyoto was the city of the courtly nobility and Tokyo the city of the samurai, then Osaka (大阪) was the city of the merchant class. Osakans take pride in shedding the conservatism found elsewhere in Japan, and this spirited city – Japan's third-largest – is a place where people are a bit brasher and interactions are peppered with playful jabs.",         
        destinationLink: "https://www.lonelyplanet.com/japan/kansai/osaka"
      },
      {
        destinationName: 'Paris',
        destinationPhoto: 'Paris.jpg',
        aboutDestination: "Paris' monument-lined boulevards, museums, classical bistros and boutiques are enhanced by a new wave of multimedia galleries, creative wine bars, design shops and tech start-ups.",         
        destinationLink: "https://www.lonelyplanet.com/france/paris"
      },
      {
        destinationName: 'Pattaya',
        destinationPhoto: 'Pattaya.jpg',
        aboutDestination: "Even if you know exactly what to expect of Pattaya, it still comes as an eye-popping sensory explosion. Multicultural, hyper-touristy Pattaya (เมืองพัทยา) boasts some excellent and good value places to stay and eat, and the area is also a family-friendly resort coast. Nevertheless, the city itself is no tropical paradise; its reputation as a sex capital is totally deserved, with hundreds of beer bars, go-go clubs and massage parlours. Much of the rest is dedicated to mass-market sun-seeking tourism, with a huge retired expat population, and enormous tour groups hurried through town in an almost constant stream. For a relaxing stay in Pattaya, base yourself outside the central area.",         
        destinationLink: "https://www.lonelyplanet.com/thailand/chonburi-province/pattaya"
      },
      {
        destinationName: 'Penang Island',
        destinationPhoto: 'Penang Island.jpg',
        aboutDestination: "There are a few attractions scattered around this southeast part of Penang Island that are worth a look. However, most visitors arrive – either flying into the international airport or being deposited at Sungai Nibong Bus Station – and don't hang around, which, for visitors with limited time, is a wise choice.",         
        destinationLink: "https://www.lonelyplanet.com/malaysia/southeast-penang-island"
      },
      {
        destinationName: 'Phnom Penh',
        destinationPhoto: 'Phnom Penh.jpg',
        aboutDestination: "Phnom Penh (ភ្នំពេញ): the name can’t help but conjure up an image of the exotic. The glimmering spires of the Royal Palace, the fluttering saffron of the monks’ robes and the luscious location on the banks of the mighty Mekong – this is the Asia many daydream about from afar.",         
        destinationLink: "https://www.lonelyplanet.com/cambodia/phnom-penh"
      },
      {
        destinationName: 'Phuket',
        destinationPhoto: 'Phuket.jpg',
        aboutDestination: "Jade-hued waves concealing rainbows of fish wash white-gold beaches wrapped in Phuketian heritage: Phuket (ภูเก็ต), Thailand's dazzling largest island, is so diverse you may forget to leave.",         
        destinationLink: "https://www.lonelyplanet.com/thailand/phuket-province"
      },
      {
        destinationName: 'Prague',
        destinationPhoto: 'Prague.jpg',
        aboutDestination: "Prague is the equal of Paris in terms of beauty. Its history goes back a millennium. And the beer? The best in Europe.",         
        destinationLink: "https://www.lonelyplanet.com/czech-republic/prague"
      },
      {
        destinationName: 'Punta Cana',
        destinationPhoto: 'Punta Cana.jpg',
        aboutDestination: "A Caribbean workhorse of sun and sand, the southeast is synonymous with go-big-or-go-home tourism and carries the weight of the Dominican Republic’s most dramatic beaches and turquoise seas on its deeply tanned shoulders. ",         
        destinationLink: "https://www.lonelyplanet.com/dominican-republic/the-southeast"
      },
      {
        destinationName: 'Rhodes',
        destinationPhoto: 'Rhodes.jpg',
        aboutDestination: "By far the largest and historically the most important of the Dodecanese islands, Rhodes (ro-dos) abounds in beaches, wooded valleys and ancient history. Whether you arrive in search of buzzing nightlife, languid sun worshipping, diving in crystal-clear waters or to embark on a culture-vulture journey through past civilisations, it’s all here. The atmospheric Old Town of Rhodes is a maze of cobbled streets that will spirit you back to the days of the Byzantine Empire and beyond. Further south is the picture-perfect town of Lindos, a soul-warming vista of sugar-cube houses spilling down to a turquoise bay.",         
        destinationLink: "https://www.lonelyplanet.com/greece/dodecanese/rhodes"
      },
      {
        destinationName: 'Rio De Janeiro',
        destinationPhoto: 'Rio De Janeiro.jpg',
        aboutDestination: "Golden beaches and lush mountains, samba-fueled nightlife and spectacular football matches: welcome to the Cidade Maravilhosa (Marvelous City).",         
        destinationLink: "https://www.lonelyplanet.com/brazil/rio-de-janeiro"
      },
      {
        destinationName: 'Riyadh',
        destinationPhoto: 'Riyadh.jpg',
        aboutDestination: "Welcome to one of the wealthiest cities in the world, home to Saudi Arabia's best museum, a World Heritage Site that relates the Kingdom's genesis story, and some of the finest hotels and restaurants in the country.",         
        destinationLink: "https://www.lonelyplanet.com/saudi-arabia/riyadh"
      },
      {
        destinationName: 'Rome',
        destinationPhoto: 'Rome.jpg',
        aboutDestination: "A heady mix of haunting ruins, awe-inspiring art and vibrant street life, Italy’s hot-blooded capital is one of the world’s most romantic and charismatic cities.",         
        destinationLink: "https://www.lonelyplanet.com/italy/rome"
      },
      {
        destinationName: 'Saint Petersburg',
        destinationPhoto: 'Saint Petersburg.jpg',
        aboutDestination: "The sheer grandeur and history of Russia's imperial capital never fail to amaze, but this is also a city with a revolutionary spirit.",         
        destinationLink: "https://www.lonelyplanet.com/russia/st-petersburg"
      },
      {
        destinationName: 'San Francisco',
        destinationPhoto: 'San Francisco.jpg',
        aboutDestination: "Grab your coat and a handful of glitter, and enter a wonderland of fog and fabulousness. So long, inhibitions; hello, San Francisco.",         
        destinationLink: "https://www.lonelyplanet.com/usa/san-francisco"
      },
      {
        destinationName: 'Seoul',
        destinationPhoto: 'Seoul.jpg',
        aboutDestination: "Fashion- and technology-forward but also deeply traditional, this dynamic city mashes up palaces, temples, cutting-edge design and mountain trails, all to a nonstop K-Pop beat.",         
        destinationLink: "https://www.lonelyplanet.com/south-korea/seoul"
      },
      {
        destinationName: 'Shanghai',
        destinationPhoto: 'Shanghai.jpg',
        aboutDestination: "Shànghǎi: few cities in the world evoke so much history, excess, glamour, mystique and exotic promise in name alone.",         
        destinationLink: "https://www.lonelyplanet.com/china/shanghai"
      },
      {
        destinationName: 'Siem Reap',
        destinationPhoto: 'Siem Reap.jpg',
        aboutDestination: "The life-support system and gateway for the temples of Angkor, Siem Reap (see-em ree-ep; សៀមរាប) was always destined for great things. Visitors come here to see the temples, of course, but there is plenty to do in and around the city when you're templed out. Siem Reap has reinvented itself as the epicentre of chic Cambodia, with everything from backpacker party pads to hip hotels, world-class wining and dining across a range of cuisines, sumptuous spas, great shopping, local tours to suit both foodies and adventurers, and a creative cultural scene that includes Cambodia's leading contemporary circus.",         
        destinationLink: "https://www.lonelyplanet.com/cambodia/siem-reap"
      },
      {
        destinationName: 'Singapore',
        destinationPhoto: 'Singapore.jpg',
        aboutDestination: "Capitalising on its melting pot of cultures, Singapore is finally getting some spark, and is fast becoming one of Asia’s hit-list destinations.",
        destinationLink: "https://www.lonelyplanet.com/singapore"
      },
      {
        destinationName: 'Shenzhen',
        destinationPhoto: 'Snenzen.jpg',
        aboutDestination: "The gleaming manifestation of China's economic miracle, Shēnzhèn (深圳) has risen from the marshy Pearl River Delta into one of the world's most mega megacities in less time than it took London's St Paul's Cathedral to be built. Millions of migrants have been drawn to its golden gates from the Chinese countryside since the 1980s; now, Shēnzhèn attracts high-flying tech graduates and global corporations.",         
        destinationLink: "https://www.lonelyplanet.com/china/guangdong/shenzhen"
      },
      {
        destinationName: 'Stockholm',
        destinationPhoto: 'Stockholm.jpg',
        aboutDestination: "Stockholmers call their city 'beauty on water'. But despite the well-preserved historic core, Stockholm is no museum piece: it's modern, dynamic and ever-evolving.",         
        destinationLink: "https://www.lonelyplanet.com/sweden/stockholm"
      },
      {
        destinationName: 'Sydney',
        destinationPhoto: 'Sydney.jpg',
        aboutDestination: "Sydney, spectacularly draped around its glorious harbour and beaches, has visual wow factor like few other cities. Scratch the surface and it only gets better.",         
        destinationLink: "https://www.lonelyplanet.com/australia/sydney"
      },
      {
        destinationName: 'Taichung',
        destinationPhoto: 'Taichung.jpg',
        aboutDestination: "Under Japanese, and later KMT, economic planning, Kaohsiung became the centre of heavy industry, Taipei the centre of colonial administration, and Taichung? The centre of light industry. If your image of 'Made in Taiwan' still conjures up visions of cheap toys, shoes and electrical goods, then you’ve got old Taichung in mind.",         
        destinationLink: "https://www.lonelyplanet.com/taiwan/western-taiwan/taichung"
      },
      {
        destinationName: 'Taipei',
        destinationPhoto: 'Taipei.jpg',
        aboutDestination: "Taipei is a tough little city whose beauty lies in its blend of Chinese culture with a curious fusion of Japanese, Southeast Asian and American influences.",         
        destinationLink: "https://www.lonelyplanet.com/taiwan/taipei"
      },
      {
        destinationName: 'Tel Aviv',
        destinationPhoto: 'Tel Aviv.jpg',
        aboutDestination: "Tel Aviv (meaning 'Hill of Spring' in Hebrew) has an air of perpetual renewal: flowers bloom, new restaurants open and there's always a party somewhere.",         
        destinationLink: "https://www.lonelyplanet.com/israel-and-the-palestinian-territories/mediterranean-coast/tel-aviv"
      },
      {
        destinationName: 'Tokyo',
        destinationPhoto: 'Tokyo.jpg',
        aboutDestination: "Yoking past and future, Tokyo dazzles with its traditional culture and passion for everything new.",         
        destinationLink: "https://www.lonelyplanet.com/japan/tokyo"
      },
      {
        destinationName: 'Toronto',
        destinationPhoto: 'Toronto.jpg',
        aboutDestination: "Welcome to Toronto, the most multiculturally diverse city on the planet: over 140 languages are spoken. It's estimated that over half of Toronto's residents were born outside Canada, and despite its complex makeup, Torontonians generally get along. When the weather is fine, Toronto is a blast: a vibrant, big-time city abuzz with activity. Some of the world's finest restaurants are found here, alongside happening bars and clubs and eclectic festivals.",         
        destinationLink: "https://www.lonelyplanet.com/canada/toronto"
      },
      {
        destinationName: 'Vancouver',
        destinationPhoto: 'Vancouver.jpg',
        aboutDestination: "Explorable neighborhoods, drink-and-dine delights and memorable cultural and outdoor activities framed by striking natural vistas – there's a superfluity of reasons to fall for this ocean-fringed metropolis.",         
        destinationLink: "https://www.lonelyplanet.com/canada/vancouver"
      },
      {
        destinationName: 'Venice',
        destinationPhoto: 'Venice.jpg',
        aboutDestination: "Imagine the audacity of building a city of marble palaces on a lagoon – and that was only the start.",         
        destinationLink: "https://www.lonelyplanet.com/italy/venice"
      },
      {
        destinationName: 'Vienna',
        destinationPhoto: 'Vienna.jpg',
        aboutDestination: "Baroque streetscapes and imperial palaces set the stage for Vienna's artistic and musical masterpieces alongside its coffee-house culture and vibrant epicurean and design scenes.",         
        destinationLink: "https://www.lonelyplanet.com/austria/vienna"
      },
      {
        destinationName: 'Warsaw',
        destinationPhoto: 'Warsaw.jpg',
        aboutDestination: "A phoenix arisen from the ashes, Poland's capital impresses with its resilience, respect for history, contemporary style and sheer joie de vivre.",         
        destinationLink: "https://www.lonelyplanet.com/poland/warsaw"
      },
      {
        destinationName: 'Washington DC',
        destinationPhoto: 'Washington DC.jpg',
        aboutDestination: "The USA’s capital teems with iconic monuments, vast museums and the corridors of power where politicos roam.",         
        destinationLink: "https://www.lonelyplanet.com/usa/washington-dc"
      },
      {
        destinationName: 'Zhuhai',
        destinationPhoto: 'Zhuhai.jpg',
        aboutDestination: "Zhūhǎi (珠海) is close enough to Macau for a day trip without any maniacal driving. Never too hot or too frosty, Zhūhǎi is the just-right popular Chinese getaway – especially in summer – with plenty of seaside glitz. Yet it remains laid-back, and what helps it really shine is the natural beauty of its gardens and an attractive, relatively clean port.",         
        destinationLink: "https://www.lonelyplanet.com/china/guangdong/zhuhai"
      },
    ]);
  });
};
