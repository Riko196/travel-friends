exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("trips")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("trips").insert([
        {
          userId: 1,
          destinationId: 3,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 9,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 9,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 9,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 14,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 5,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 10,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 8,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 7,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 13,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 11,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 2,
          destinationId: 2,
          planned: false,
          dateFrom: "2019-03-12T23:00:00.000Z",
          dateTo: "2019-03-18T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 3,
          destinationId: 3,
          planned: false,
          dateFrom: "2019-03-03T23:00:00.000Z",
          dateTo: "2019-03-29T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 4,
          destinationId: 1,
          planned: false,
          dateFrom: "2019-03-09T23:00:00.000Z",
          dateTo: "2019-04-01T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 5,
          destinationId: 1,
          planned: false,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 4,
          destinationId: 1,
          planned: true,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 1,
          destinationId: 1,
          planned: true,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 6,
          destinationId: 1,
          planned: true,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 7,
          destinationId: 1,
          planned: false,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 8,
          destinationId: 1,
          planned: true,
          dateFrom: "2019-04-03T23:00:00.000Z",
          dateTo: "2019-04-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 9,
          destinationId: 1,
          planned: false,
          dateFrom: "2019-09-03T23:00:00.000Z",
          dateTo: "2019-09-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        },
        {
          userId: 9,
          destinationId: 1,
          planned: true,
          dateFrom: "2019-09-03T23:00:00.000Z",
          dateTo: "2019-09-19T23:00:00.000Z",
          tripInfo: "Very good trip"
        }
      ]);
    });
};
