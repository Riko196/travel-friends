import apiRequest from "./apiRequest";

export const insertTrip = trip => {
  const data = JSON.stringify(trip);
  return apiRequest(`insertTrip/${data}`, { method: "POST" }).catch(e => {
    throw e;
  });
};
