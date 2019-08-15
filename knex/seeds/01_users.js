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
            "https://image.flaticon.com/icons/svg/158/158420.svg",
          userName: "ivan.agarsky",
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
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=720&width=720&ext=1560179489&hash=AeRtmYf_KQ2bDeZC",
          userName: "ivan.agarsky",
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
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=720&width=720&ext=1560179489&hash=AeRtmYf_KQ2bDeZC",
          userName: "ivan.agarsky",
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
          name: "John Johnson",
          email: "test4@mail.com",
          profilePhoto:
            "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/cpp3gjnhuvkwwxzy2q0j",
          userName: "ivan.agarsky",
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
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2349738421716646&height=720&width=720&ext=1560179489&hash=AeRtmYf_KQ2bDeZC",
          userName: "ivan.agarsky",
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
          name: "John Johnson",
          email: "test4@mail.com",
          profilePhoto:
            "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/cpp3gjnhuvkwwxzy2q0j",
          userName: "ivan.agarsky",
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
          name: "John Johnson",
          email: "test4@mail.com",
          profilePhoto:
            "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/cpp3gjnhuvkwwxzy2q0j",
          userName: "ivan.agarsky",
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
        },{
          name: "John Johnson",
          email: "test4@mail.com",
          profilePhoto:
            "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/cpp3gjnhuvkwwxzy2q0j",
          userName: "ivan.agarsky",
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
        },{
          name: "John Johnson",
          email: "test4@mail.com",
          profilePhoto:
            "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/cpp3gjnhuvkwwxzy2q0j",
          userName: "ivan.agarsky",
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
      ]);
    });
};
