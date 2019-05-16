import apiRequest from "./apiRequest";

export const setDestinations = destinations => ({
  type: "Set my destinations",
  payload: destinations,
  reducer: (state, destinationsPayload) => {
    return { ...state, destinations: destinationsPayload };
  }
});

export const setSelectedDestination = selectedDestination => ({
  type: "Selected destination",
  payload: selectedDestination,
  reducer: (state, selectedDestinationPayload) => {
    return { ...state, selectedDestination: selectedDestinationPayload };
  }
});

export const getAllDestinationsName = () => {
  return apiRequest(`getAllDestinationsName`, { method: "GET" }).catch(e => {
    throw e;
  });
};

export const getMostPopularDestinations = limit => dispatch => {
  return apiRequest(`getMostPopularDestinations/${limit}`, { method: "GET" })
    .then(destinations => {
      dispatch(setDestinations(destinations));
    })
    .catch(e => {
      throw e;
    });
};
