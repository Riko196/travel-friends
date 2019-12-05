exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Test name1",
          email: "test1@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male"
        },
        {
          name: "Test name2",
          email: "test2@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "Test name3",
          email: "test3@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "John Johnson",
          email: "test4@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "Test name5",
          email: "test5@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "John Johnson",
          email: "test4@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "John Johnson",
          email: "test4@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "John Johnson",
          email: "test4@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        },
        {
          name: "John Johnson",
          email: "test4@mail.com",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          gender: "Male",
        }
      ]);
    });
};
