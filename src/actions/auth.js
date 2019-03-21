import apiRequest from "./apiRequest";
import { setUser } from "./user";
import { initialUserState } from "../state/user";
import { merge } from "lodash";

export const setLoggedIn = loggedIn => ({
  type: "Set loggedIn value",
  payload: loggedIn,
  reducer: (state, loggedInPayload) => {
    return { ...state, loggedIn: loggedInPayload };
  }
});

export const getUser = email => {
  return apiRequest(`getUser/${email}`, { method: "GET" }).catch(e => {});
};

export const logIn = user => dispatch => {
  const data = {
    name: user.name,
    email: user.email,
    profilePhoto: user.profilePhoto
  };
  return apiRequest(`logIn`, { method: "POST", body: data })
    .then(wholeUser => {
      return merge({ accessToken: user.accessToken }, wholeUser);
    })
    .then(finalReduxUser => {
      dispatch(setUser(finalReduxUser));
      dispatch(setLoggedIn(true));
    })
    .catch(e => {
      dispatch(setLoggedIn(false));
    });
};

export const logOut = () => dispatch => {
  new Promise((resolve, reject) => {
    window.FB.getLoginStatus(({ status }) => {
      if (status === "connected") {
        window.FB.logout(response => {
          resolve();
        });
      }
    });
  })
    .then(() => {
      dispatch(setUser(initialUserState));
      dispatch(setLoggedIn(false));
    })
    .then(() => {
      window.location = "/";
    });
};
