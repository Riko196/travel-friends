import apiRequest from "./apiRequest";

export const setDestinations = destinations => ({
    type: "Set my destinations",
    payload: destinations,
    reducer: (state, destinationsPayload) => {
      return { ...state, destinations: destinationsPayload };
    }
  });

export const getMostPopularDestinations = limit => dispatch => {
  console.log(limit);
  return apiRequest(`getMostPopularDestinations/${limit}`, { method: "GET"})
  .then(destinations => {
    console.log(destinations);
    dispatch(setDestinations(destinations));
  })
  .catch(e => {
    throw e;
  });
};