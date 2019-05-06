exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("destinations")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("destinations").insert([
        {
          destinationName: "Abu Dhabi",
          destinationPhoto: "Abu Dhabi.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Agra (Taj Mahal)",
          destinationPhoto: "Agra (Taj Mahal).jpeg",
          aboutDestination: ""
          },
          {
          destinationName: "Amsterdam",
          destinationPhoto: "Amsterdam.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Antalya",
          destinationPhoto: "Antalya.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Artvin",
          destinationPhoto: "Artvin.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Athens",
          destinationPhoto: "Athens.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Auckland",
          destinationPhoto: "Auckland.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "BANGKOK",
          destinationPhoto: "BANGKOK.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Barcelona",
          destinationPhoto: "Barcelona.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Beijing",
          destinationPhoto: "Beijing.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Berlin",
          destinationPhoto: "Berlin.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Brussels",
          destinationPhoto: "Brussels.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Budapest",
          destinationPhoto: "Budapest.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "buenos aires",
          destinationPhoto: "buenos aires.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Cairo",
          destinationPhoto: "Cairo.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Cancun",
          destinationPhoto: "Cancun.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Chennai",
          destinationPhoto: "Chennai.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Chiang Mai",
          destinationPhoto: "Chiang Mai.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Chiba",
          destinationPhoto: "Chiba.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Colombo",
          destinationPhoto: "Colombo.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Copenhagen",
          destinationPhoto: "Copenhagen.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Dammam City",
          destinationPhoto: "Dammam City.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Delhi",
          destinationPhoto: "Delhi.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Denpasar",
          destinationPhoto: "Denpasar.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Doha",
          destinationPhoto: "Doha.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "dubai",
          destinationPhoto: "dubai.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Dublin",
          destinationPhoto: "Dublin.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Edirne",
          destinationPhoto: "Edirne.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Florence",
          destinationPhoto: "Florence.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Frankfurt",
          destinationPhoto: "Frankfurt.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Guangzhou",
          destinationPhoto: "Guangzhou.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Guilin",
          destinationPhoto: "Guilin.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Ha Long",
          destinationPhoto: "Ha Long.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Ha Noi",
          destinationPhoto: "Ha Noi.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Heraklion",
          destinationPhoto: "Heraklion.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Ho Chi Minh City",
          destinationPhoto: "Ho Chi Minh City.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Hong kong",
          destinationPhoto: "Hong kong.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Honolulu",
          destinationPhoto: "Honolulu.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Istanbul",
          destinationPhoto: "Istanbul.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Jaipur",
          destinationPhoto: "Jaipur.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Jakarta",
          destinationPhoto: "Jakarta.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Jeju",
          destinationPhoto: "Jeju.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Jerusalem",
          destinationPhoto: "Jerusalem.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Johanesburg",
          destinationPhoto: "Johanesburg.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Johor Bahru",
          destinationPhoto: "Johor Bahru.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Kolkata",
          destinationPhoto: "Kolkata.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "krakow",
          destinationPhoto: "krakow.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "kuala lumpur",
          destinationPhoto: "kuala lumpur.JPG",
          aboutDestination: ""
          },
          {
          destinationName: "Kyoto",
          destinationPhoto: "Kyoto.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Las Vegas",
          destinationPhoto: "Las Vegas.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Lima",
          destinationPhoto: "Lima.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Lisbon",
          destinationPhoto: "Lisbon.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "london",
          destinationPhoto: "london.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Los Angeles",
          destinationPhoto: "Los Angeles.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "macau",
          destinationPhoto: "macau.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Madrid",
          destinationPhoto: "Madrid.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Marrakech",
          destinationPhoto: "Marrakech.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Mecca",
          destinationPhoto: "Mecca.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "melbourne",
          destinationPhoto: "melbourne.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Mexico City",
          destinationPhoto: "Mexico City.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Miami",
          destinationPhoto: "Miami.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Milan",
          destinationPhoto: "Milan.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Moscow",
          destinationPhoto: "Moscow.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Mumbai",
          destinationPhoto: "Mumbai.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Munich",
          destinationPhoto: "Munich.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "New York",
          destinationPhoto: "New York.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Nice",
          destinationPhoto: "Nice.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Orlando",
          destinationPhoto: "Orlando.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Osaka",
          destinationPhoto: "Osaka.JPG",
          aboutDestination: ""
          },
          {
          destinationName: "paris",
          destinationPhoto: "paris.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Pattaya",
          destinationPhoto: "Pattaya.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Penang Island",
          destinationPhoto: "Penang Island.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Phnom Penh",
          destinationPhoto: "Phnom Penh.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Phuket",
          destinationPhoto: "Phuket.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Prague",
          destinationPhoto: "Prague.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Punta Cana",
          destinationPhoto: "Punta Cana.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Rhodes",
          destinationPhoto: "Rhodes.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Rio De Janeiro",
          destinationPhoto: "Rio De Janeiro.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Riyadh",
          destinationPhoto: "Riyadh.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Rome",
          destinationPhoto: "Rome.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Saint Petersburg",
          destinationPhoto: "Saint Petersburg.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "San Francisco",
          destinationPhoto: "San Francisco.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Seoul",
          destinationPhoto: "Seoul.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Shanghai",
          destinationPhoto: "Shanghai.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Siem Reap",
          destinationPhoto: "Siem Reap.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "singapore",
          destinationPhoto: "singapore.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Snenzen",
          destinationPhoto: "Snenzen.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "stockholm",
          destinationPhoto: "stockholm.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Sydney",
          destinationPhoto: "Sydney.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Taichung",
          destinationPhoto: "Taichung.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Taipei",
          destinationPhoto: "Taipei.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Tel Aviv",
          destinationPhoto: "Tel Aviv.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Tokyo",
          destinationPhoto: "Tokyo.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Toronto",
          destinationPhoto: "Toronto.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Vancouver",
          destinationPhoto: "Vancouver.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Venic",
          destinationPhoto: "Venic.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Vienna",
          destinationPhoto: "Vienna.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "warsaw",
          destinationPhoto: "warsaw.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Washington DC",
          destinationPhoto: "Washington DC.jpg",
          aboutDestination: ""
          },
          {
          destinationName: "Zhuhai",
          destinationPhoto: "Zhuhai.jpg",
          aboutDestination: ""
          }
      ]);
    });
};
