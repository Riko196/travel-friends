import apiRequest from "./apiRequest";

export const setTheMostPopularDestinations = theMostPopularDestinations => ({
  type: "Set the most popular destinations",
  payload: theMostPopularDestinations,
  reducer: (state, theMostPopularDestinationsPayload) => {
    return {
      ...state,
      theMostPopularDestinations: theMostPopularDestinationsPayload
    };
  }
});

export const setSelectedDestination = selectedDestination => ({
  type: "Selected destination",
  payload: selectedDestination,
  reducer: (state, selectedDestinationPayload) => {
    return { ...state, selectedDestination: selectedDestinationPayload };
  }
});

export const setSelectedDestinationReviews = reviews => ({
  type: "Set reviews for selected destination",
  payload: reviews,
  reducer: (state, reviewsPayload) => {
    const selectedDestination = state.selectedDestination;
    selectedDestination.reviews = reviewsPayload;

    return { ...state, selectedDestination: selectedDestination };
  }
});

export const setDestinationsName = destinationsName => ({
  type: "Set all destinations name",
  payload: destinationsName,
  reducer: (state, destinationsNamePayload) => {
    return { ...state, destinationsName: destinationsNamePayload };
  }
});

export const getAllDestinationsName = () => dispatch => {
  return apiRequest(`getAllDestinationsName`, { method: "GET" })
    .then(destinationsName => {
      dispatch(setDestinationsName(destinationsName));
    })
    .catch(e => {
      throw e;
    });
};

export const getMostPopularDestinations = limit => dispatch => {
  return apiRequest(`getMostPopularDestinations/${limit}`, { method: "GET" })
    .then(theMostPopularDestinations => {
      dispatch(setTheMostPopularDestinations(theMostPopularDestinations));
    })
    .catch(e => {
      throw e;
    });
};

export const getDestinationReviews = selectedDestination => dispatch => {
  return apiRequest(
    `getReviewsByDestinationId/${selectedDestination.destinationId}`,
    { method: "GET" }
  )
    .then(reviews => {
      dispatch(setSelectedDestinationReviews(reviews));
    })
    .catch(e => {
      throw e;
    });
};
