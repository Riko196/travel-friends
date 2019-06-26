import apiRequest from "./apiRequest";

export const editTripReview = editedReview => ({
  type: "Set trip review",
  payload: editedReview,
  reducer: (state, editedReviewPayload) => {
    const newMyTrips = state.myTrips.map(trip => {
      if (trip.tripId === editedReviewPayload.tripId) {
        return { ...trip, review: editedReviewPayload };
      }
      return trip;
    });

    return { ...state, myTrips: newMyTrips };
  }
});

export const editDestinationReview = editedReview => ({
  type: "Set destination review",
  payload: editedReview,
  reducer: (state, editedReviewPayload) => {
    if (state.destinations === null || state.destinations === undefined)
      return state;
    const newDestinations = state.destinations.map(destination => {
      if (destination.destinationId === editedReviewPayload.destinationId) {
        const editedReviews = destination.reviews.map(review => {
          if (review.tripId === editedReviewPayload.tripId) {
            return {
              ...review,
              reviewText: editedReviewPayload.reviewText,
              rating: editedReviewPayload.rating
            };
          }

          return review;
        });

        return { ...destination, reviews: editedReviews };
      } else {
        return destination;
      }
    });

    return {
      ...state,
      destinations: newDestinations
    };
  }
});

export const editTheMostPopularDestinationsReview = editedReview => ({
  type: "Set the most popular destination review",
  payload: editedReview,
  reducer: (state, editedReviewPayload) => {
    if (
      state.theMostPopularDestinations === null ||
      state.theMostPopularDestinations === undefined
    )
      return state;

    const newTheMostPopularDestinations = state.theMostPopularDestinations.map(
      destination => {
        if (destination.destinationId === editedReviewPayload.destinationId) {
          const editedReviews = destination.reviews.map(review => {
            if (review.tripId === editedReviewPayload.tripId) {
              return {
                ...review,
                reviewText: editedReviewPayload.reviewText,
                rating: editedReviewPayload.rating
              };
            }

            return review;
          });

          return { ...destination, reviews: editedReviews };
        } else {
          return destination;
        }
      }
    );

    return {
      ...state,
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
          dispatch(
            editTheMostPopularDestinationsReview(reviewWithDestinationId)
          );
        }
      );
    })
    .catch(e => {
      throw e;
    });
};
