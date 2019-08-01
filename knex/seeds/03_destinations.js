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
        destinationPhoto: 'BANGKOK.jpg',
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
        aboutDestination: "",
        destinationLink: "https://www.lonelyplanet.com/china/beijing"
      },
      {
        destinationName: 'Berlin',
        destinationPhoto: 'Berlin.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Brussels',
        destinationPhoto: 'Brussels.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Budapest',
        destinationPhoto: 'Budapest.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Buenos Aires',
        destinationPhoto: 'buenos aires.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Cairo',
        destinationPhoto: 'Cairo.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Cancun',
        destinationPhoto: 'Cancun.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Chennai',
        destinationPhoto: 'Chennai.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Chiang Mai',
        destinationPhoto: 'Chiang Mai.jpg',
        aboutDestination: "",
        destinationLink: ""
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
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Copenhagen',
        destinationPhoto: 'Copenhagen.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Dammam City',
        destinationPhoto: 'Dammam City.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Delhi',
        destinationPhoto: 'Delhi.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Denpasar',
        destinationPhoto: 'Denpasar.jpg',
        aboutDestination: "",        
        destinationLink: ""
      },
      {
        destinationName: 'Doha',
        destinationPhoto: 'Doha.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Dubai',
        destinationPhoto: 'dubai.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Dublin',
        destinationPhoto: 'Dublin.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Edirne',
        destinationPhoto: 'Edirne.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Florence',
        destinationPhoto: 'Florence.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Frankfurt',
        destinationPhoto: 'Frankfurt.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Guangzhou',
        destinationPhoto: 'Guangzhou.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Guilin',
        destinationPhoto: 'Guilin.jpg',
        aboutDestination: "",         
        destinationLink: ""
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
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Heraklion',
        destinationPhoto: 'Heraklion.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Ho Chi Minh City',
        destinationPhoto: 'Ho Chi Minh City.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Hong kong',
        destinationPhoto: 'Hong kong.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Honolulu',
        destinationPhoto: 'Honolulu.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Istanbul',
        destinationPhoto: 'Istanbul.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Jaipur',
        destinationPhoto: 'Jaipur.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Jakarta',
        destinationPhoto: 'Jakarta.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Jeju',
        destinationPhoto: 'Jeju.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Jerusalem',
        destinationPhoto: 'Jerusalem.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Johanesburg',
        destinationPhoto: 'Johanesburg.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Johor Bahru',
        destinationPhoto: 'Johor Bahru.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Kolkata',
        destinationPhoto: 'Kolkata.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Krakow',
        destinationPhoto: 'krakow.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Kuala Lumpur',
        destinationPhoto: 'kuala lumpur.JPG',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Kyoto',
        destinationPhoto: 'Kyoto.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Las Vegas',
        destinationPhoto: 'Las Vegas.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Lima',
        destinationPhoto: 'Lima.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Lisbon',
        destinationPhoto: 'Lisbon.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'London',
        destinationPhoto: 'london.jpg',
        aboutDestination: "",
        destinationLink: ""
      },
      {
        destinationName: 'Los Angeles',
        destinationPhoto: 'Los Angeles.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Macau',
        destinationPhoto: 'macau.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Madrid',
        destinationPhoto: 'Madrid.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Marrakech',
        destinationPhoto: 'Marrakech.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Mecca',
        destinationPhoto: 'Mecca.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'melbourne',
        destinationPhoto: 'melbourne.jpg',
        aboutDestination: "",         
        destinationLink: ""
      },
      {
        destinationName: 'Mexico City',
        destinationPhoto: 'Mexico City.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/mexico/mexico-city"
      },
      {
        destinationName: 'Miami',
        destinationPhoto: 'Miami.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/usa/miami"
      },
      {
        destinationName: 'Milan',
        destinationPhoto: 'Milan.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/italy/milan"
      },
      {
        destinationName: 'Moscow',
        destinationPhoto: 'Moscow.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/russia/moscow"
      },
      {
        destinationName: 'Mumbai',
        destinationPhoto: 'Mumbai.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/india/mumbai-bombay"
      },
      {
        destinationName: 'Munich',
        destinationPhoto: 'Munich.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/germany/munich"
      },
      {
        destinationName: 'New York',
        destinationPhoto: 'New York.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/usa/new-york-city"
      },
      {
        destinationName: 'Nice',
        destinationPhoto: 'Nice.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/france/nice"
      },
      {
        destinationName: 'Orlando',
        destinationPhoto: 'Orlando.jpg',
        aboutDestination: "",        
        destinationLink: "https://www.lonelyplanet.com/usa/florida/orlando"
      },
      {
        destinationName: 'Osaka',
        destinationPhoto: 'Osaka.JPG',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/japan/kansai/osaka"
      },
      {
        destinationName: 'Paris',
        destinationPhoto: 'paris.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/france/paris"
      },
      {
        destinationName: 'Pattaya',
        destinationPhoto: 'Pattaya.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/thailand/chonburi-province/pattaya"
      },
      {
        destinationName: 'Penang Island',
        destinationPhoto: 'Penang Island.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/malaysia/southeast-penang-island"
      },
      {
        destinationName: 'Phnom Penh',
        destinationPhoto: 'Phnom Penh.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/cambodia/phnom-penh"
      },
      {
        destinationName: 'Phuket',
        destinationPhoto: 'Phuket.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/thailand/phuket-province"
      },
      {
        destinationName: 'Prague',
        destinationPhoto: 'Prague.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/czech-republic/prague"
      },
      {
        destinationName: 'Punta Cana',
        destinationPhoto: 'Punta Cana.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/dominican-republic/the-southeast"
      },
      {
        destinationName: 'Rhodes',
        destinationPhoto: 'Rhodes.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/greece/dodecanese/rhodes"
      },
      {
        destinationName: 'Rio De Janeiro',
        destinationPhoto: 'Rio De Janeiro.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/brazil/rio-de-janeiro"
      },
      {
        destinationName: 'Riyadh',
        destinationPhoto: 'Riyadh.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/saudi-arabia/riyadh"
      },
      {
        destinationName: 'Rome',
        destinationPhoto: 'Rome.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/italy/rome"
      },
      {
        destinationName: 'Saint Petersburg',
        destinationPhoto: 'Saint Petersburg.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/russia/st-petersburg"
      },
      {
        destinationName: 'San Francisco',
        destinationPhoto: 'San Francisco.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/usa/san-francisco"
      },
      {
        destinationName: 'Seoul',
        destinationPhoto: 'Seoul.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/south-korea/seoul"
      },
      {
        destinationName: 'Shanghai',
        destinationPhoto: 'Shanghai.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/china/shanghai"
      },
      {
        destinationName: 'Siem Reap',
        destinationPhoto: 'Siem Reap.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/cambodia/siem-reap"
      },
      {
        destinationName: 'Singapore',
        destinationPhoto: 'singapore.jpg',
        aboutDestination: "",
        destinationLink: "https://www.lonelyplanet.com/singapore"
      },
      {
        destinationName: 'Shenzhen',
        destinationPhoto: 'Snenzen.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/china/guangdong/shenzhen"
      },
      {
        destinationName: 'Stockholm',
        destinationPhoto: 'stockholm.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/sweden/stockholm"
      },
      {
        destinationName: 'Sydney',
        destinationPhoto: 'Sydney.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/australia/sydney"
      },
      {
        destinationName: 'Taichung',
        destinationPhoto: 'Taichung.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/taiwan/western-taiwan/taichung"
      },
      {
        destinationName: 'Taipei',
        destinationPhoto: 'Taipei.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/taiwan/taipei"
      },
      {
        destinationName: 'Tel Aviv',
        destinationPhoto: 'Tel Aviv.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/israel-and-the-palestinian-territories/mediterranean-coast/tel-aviv"
      },
      {
        destinationName: 'Tokyo',
        destinationPhoto: 'Tokyo.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/japan/tokyo"
      },
      {
        destinationName: 'Toronto',
        destinationPhoto: 'Toronto.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/canada/toronto"
      },
      {
        destinationName: 'Vancouver',
        destinationPhoto: 'Vancouver.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/canada/vancouver"
      },
      {
        destinationName: 'Venice',
        destinationPhoto: 'Venic.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/italy/venice"
      },
      {
        destinationName: 'Vienna',
        destinationPhoto: 'Vienna.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/austria/vienna"
      },
      {
        destinationName: 'Warsaw',
        destinationPhoto: 'warsaw.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/poland/warsaw"
      },
      {
        destinationName: 'Washington DC',
        destinationPhoto: 'Washington DC.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/usa/washington-dc"
      },
      {
        destinationName: 'Zhuhai',
        destinationPhoto: 'Zhuhai.jpg',
        aboutDestination: "",         
        destinationLink: "https://www.lonelyplanet.com/china/guangdong/zhuhai"
      },
    ]);
  });
};
