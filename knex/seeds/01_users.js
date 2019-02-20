exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Ivan Agarský",
          email: "ivanuska@grdelicka.com",
          aboutme: "I am magic",
          birthday: "22/02/1999",
          country: "Serbia",
          city: "Pazova",
          occupation: "sleeper",
          joined: "22/02/1999",
          gender: "Other",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Regularly",
          drinking: "Addicted",
          speaking: "Nothing"
        }
      ]);
    });
};
