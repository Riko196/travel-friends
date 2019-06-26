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

export const deleteFromMyTrips = tripId => ({
  type: `Deleted review with trip id ${tripId}`,
  payload: tripId,
  reducer: (state, tripIdPayload) => {
    let index = null;
    for (let i = 0; i < state.myTrips.length; i += 1)
      if (state.myTrips[i].tripId === tripIdPayload) {
        index = i;
      }

    if (index === null) return state;

    return {
      ...state,
      myTrips: [
        ...state.myTrips.slice(0, index),
        ...state.myTrips.slice(index + 1)
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

export const deleteTrip = tripId => dispatch => {
  return apiRequest(`deleteTrip/${tripId}`, { method: "DELETE" })
    .then(response => {
      dispatch(deleteFromMyTrips(tripId));
    })
    .catch(e => {
      throw e;
    });
};
