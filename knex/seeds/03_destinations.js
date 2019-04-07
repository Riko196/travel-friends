exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("destinations")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("destinations").insert([
        {
          destinationName: "Bratislava",
          destinationPhoto: null,
          aboutDestination: "Zurich is much better"
        },
        {
          destinationName: "Vienna",
          destinationPhoto: null,
          aboutDestination: "Zurich is better"
        },
        {
          destinationName: "Prague",
          destinationPhoto: null,
          aboutDestination: "Good university"
        },
        {
          destinationName: "Zurich",
          destinationPhoto: null,
          aboutDestination: "I am in the heaven"
        },
        {
          destinationName: "Cernobyl",
          destinationPhoto: null,
          aboutDestination: "I am dead"
        }
      ]);
    });
};
