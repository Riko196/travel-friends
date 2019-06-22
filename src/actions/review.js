import apiRequest from "./apiRequest";

export const editTripReview = review => ({
  type: "Set trip review",
  payload: review,
  reducer: (state, reviewPayload) => {
    const newMyTrips = state.myTrips.map(trip => {
      if (trip.tripId === reviewPayload.tripId) {
        return { ...trip, review: reviewPayload };
      }
      return trip;
    });

    return { ...state, myTrips: newMyTrips };
  }
});

export const editDestinationReview = review => ({
  type: "Set destination review",
  payload: review,
  reducer: (state, reviewPayload) => {
    const newDestinations = state.destinations.map(destination => {
      if (destination.destinationId === reviewPayload.destinationId) {
        destination.reviews.map(review => {
          if (review.reviewId === reviewPayload.reviewId) {
            return { ...review, reviewText: reviewPayload.reviewText };
          }

          return review;
        });
      }
      return destination;
    });

    const newTheMostPopularDestinations = state.theMostPopularDestinations.map(
      destination => {
        if (destination.destinationId === reviewPayload.destinationId) {
          destination.reviews.map(review => {
            if (review.reviewId === reviewPayload.reviewId) {
              return { ...review, reviewText: reviewPayload.reviewText };
            }

            return review;
          });
        }
        return destination;
      }
    );

    return {
      ...state,
      destinations: newDestinations,
      theMostPopularDestinations: newTheMostPopularDestinations
    };
  }
});

export const editReview = review => dispatch => {
  return apiRequest(`editReview`, {
    method: "PUT",
    body: review
  })
    .then(result => {
      apiRequest(`getDestinationIdByTripId/${review.tripId}`).then(
        resultDestinationId => {
          const reviewWithDestinationId = {
            ...review,
            destinationId: resultDestinationId.destinationId
          };

          dispatch(editTripReview(reviewWithDestinationId));
          dispatch(editDestinationReview(reviewWithDestinationId));
        }
      );
    })
    .catch(e => {
      throw e;
    });
};
