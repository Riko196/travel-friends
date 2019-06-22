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
          rating: 5
        }
      ]);
    });
};
