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
          profilePhoto:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=50&width=50&ext=1557075698&hash=AeRX-hOpIxqMe30u",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          city: "Test city",
          occupation: "test",
          joined: "22/02/2018",
          gender: "Male",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Never",
          drinking: "Never",
          speaking: "Nothing"
        },
        {
          name: "Test name2",
          email: "test2@mail.com",
          profilePhoto:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=50&width=50&ext=1557075698&hash=AeRX-hOpIxqMe30u",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          city: "Test city",
          occupation: "test",
          joined: "22/02/2018",
          gender: "Male",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Never",
          drinking: "Never",
          speaking: "Nothing"
        },
        {
          name: "Test name3",
          email: "test3@mail.com",
          profilePhoto:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=50&width=50&ext=1557075698&hash=AeRX-hOpIxqMe30u",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          city: "Test city",
          occupation: "test",
          joined: "22/02/2018",
          gender: "Male",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Never",
          drinking: "Never",
          speaking: "Nothing"
        },
        {
          name: "Test name4",
          email: "test4@mail.com",
          profilePhoto:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=50&width=50&ext=1557075698&hash=AeRX-hOpIxqMe30u",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          city: "Test city",
          occupation: "test",
          joined: "22/02/2018",
          gender: "Male",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Never",
          drinking: "Never",
          speaking: "Nothing"
        },
        {
          name: "Test name5",
          email: "test5@mail.com",
          profilePhoto:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=50&width=50&ext=1557075698&hash=AeRX-hOpIxqMe30u",
          aboutme: "test about me",
          birthday: "22/02/1999",
          country: "Test country",
          city: "Test city",
          occupation: "test",
          joined: "22/02/2018",
          gender: "Male",
          relationship: "In an opened relationship",
          education: "Nothing",
          smoking: "Never",
          drinking: "Never",
          speaking: "Nothing"
        }
      ]);
    });
};
