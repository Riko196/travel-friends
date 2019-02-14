import apiRequest from "./apiRequest";
import { omit } from "lodash";

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

export const existsUser = email => {
  return apiRequest(`getUser/${email}`, { method: "GET" }).catch(e => {});
};

export const addNewUser = user => {
  const data = JSON.stringify(omit(user, "profilePhoto"));
  return apiRequest(`insertUser/${data}`, { method: "POST" }).catch(e => {});
};

export const logIn = user => dispatch => {
  existsUser(user.email)
    .then(data => {
      if (!data.exists) {
        addNewUser(user);
      }
    })
    .then(() => {
      dispatch(
        setUser({
          name: user.name,
          email: user.email,
          profilePhoto: user.profilePhoto
        })
      );
      dispatch(setLoggedIn(true));
    })
    .catch(e => {
      dispatch(setLoggedIn(false));
    });
};
