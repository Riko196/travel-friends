import apiRequest from "./apiRequest";

export const setMyFriends = myFriends => ({
  type: "Set my friends",
  payload: myFriends,
  reducer: (state, myFriendsPayload) => {
    return { ...state, myFriends: myFriendsPayload };
  }
});

export const getMyFriends = data => dispatch => {
  return apiRequest(
    `getMyFriends/${data.destinationName}/${data.dateFrom}/${data.dateTo}/${
      data.userId
    }`,
    { method: "GET" }
  )
    .then(myFriends => {
      console.log(myFriends);
      dispatch(setMyFriends(myFriends));
    })
    .catch(e => {
      throw e;
    });
};
