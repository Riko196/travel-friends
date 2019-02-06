export const setLoggedIn = loggedIn => ({
  type: "Set loggedIn value",
  payload: loggedIn,
  reducer: (state, loggedInPayload) => {
    return { ...state, loggedIn: loggedInPayload };
  }
});

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: userPayload };
  }
});

export const facebookLogin = user => dispatch => {
  console.log(user);
  dispatch(
    setUser({
      name: user.name,
      email: user.email,
      profilePhoto: user.profilePhoto
    })
  );
  dispatch(setLoggedIn(true));
};

export const googleLogin = user => dispatch => {
  dispatch(
    setUser({
      name: user.profileObj.name,
      email: user.profileObj.email,
      profilePhoto: user.profileObj.imageUrl
    })
  );
  dispatch(setLoggedIn(true));
};
