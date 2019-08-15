exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          userId: 1,
          tripId: 1,
          reviewText: "Really good trip, I recommend it!",
          rating: 3
        },
        {
          userId: 1,
          tripId: 1,
          reviewText: "Really good trip, I recommend it!eally good trip, I recommend it!Reeally good trip, I recommend it!Reeally good trip, I recommend it!Re",
          rating: 2
        },
        {
          userId: 1,
          tripId: 1,
          reviewText: "Really good trip, I recommend it!eally good trip, I recommend it!Re",
          rating: 5
        },{
          userId: 1,
          tripId: 1,
          reviewText: "Really good trip, I recommend it!Really good trip, I recommend it!Really good trip, I recommend it!Really good trip, I recommend it!Really good trip, I recommend it!",
          rating: 3
        }
      ]);
    });
};
