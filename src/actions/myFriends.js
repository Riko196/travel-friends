import apiRequest from "./apiRequest";

export const setSelectedFriend = selectedFriend => ({
  type: "Set selected Friend",
  payload: selectedFriend,
  reducer: (state, selectedFriendPayload) => {
    return { ...state, selectedFriend: selectedFriendPayload };
  }
});

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
    }/${data.gender}`,
    { method: "GET" }
  )
    .then(myFriends => {
      dispatch(setMyFriends(myFriends));
    })
    .catch(e => {
      throw e;
    });
};

export const getMyFriend = userId => dispatch => {
  return apiRequest(`getUserByUserId/${userId}`, { method: "GET" })
    .then(myFriend => {
      dispatch(setSelectedFriend(myFriend));
    })
    .catch(e => {
      throw e;
    });
};
