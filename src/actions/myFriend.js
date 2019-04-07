export const setMyFriend = myFriend => ({
  type: "Set my friends",
  payload: myFriend,
  reducer: (state, myFriendPayload) => {
    return { ...state, myFriend: myFriendPayload };
  }
});
