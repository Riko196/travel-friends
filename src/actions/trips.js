import apiRequest from "./apiRequest";

export const setMyTrips = myTrips => ({
  type: "Set my trips",
  payload: myTrips,
  reducer: (state, myTripsPayload) => {
    return {
      ...state,
      myTrips: myTripsPayload
    };
  }
});

export const setNewTrip = newTrip => ({
  type: "Insert new trip",
  payload: newTrip,
  reducer: (state, newTripPayload) => {
    let myTrips = state.myTrips === null ? [] : state.myTrips.slice();
    myTrips.push(newTripPayload);

    return {
      ...state,
      myTrips: myTrips
    };
  }
});

export const deleteFromMyTrips = index => ({
  type: `Deleted ${index}. index from my trips`,
  payload: index,
  reducer: (state, indexPayload) => {
    return {
      ...state,
      myTrips: [
        ...state.myTrips.slice(0, indexPayload),
        ...state.myTrips.slice(indexPayload + 1)
      ]
    };
  }
});

export const getMyTrips = myUserId => dispatch => {
  return apiRequest(`getTripsByUserId/${myUserId}`, { method: "GET" })
    .then(myTrips => {
      dispatch(setMyTrips(myTrips));
    })
    .catch(e => {
      throw e;
    });
};

export const insertTrip = data => dispatch => {
  return apiRequest(`insertTrip`, { method: "POST", body: data })
    .then(response => {
      dispatch(setNewTrip(response));
    })
    .catch(e => {
      throw e;
    });
};

export const deleteTrip = (index, tripId) => dispatch => {
  return apiRequest(`deleteTrip/${tripId}`, { method: "DELETE" })
    .then(response => {
      dispatch(deleteFromMyTrips(index));
    })
    .catch(e => {
      throw e;
    });
};
