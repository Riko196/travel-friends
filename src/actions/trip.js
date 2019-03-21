import apiRequest from "./apiRequest";

export const insertTrip = data => {
  return apiRequest(`insertTrip`, { method: "POST", body: data }).catch(e => {
    throw e;
  });
};
