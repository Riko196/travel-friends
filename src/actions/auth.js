import apiRequest from "./apiRequest";
import { getInitialState } from "../initializeRedux";
import storage from "redux-persist/lib/storage";
import cookie from "react-cookies";

export const setLoggedIn = loggedIn => ({
  type: "Set loggedIn value",
  payload: loggedIn,
  reducer: (state, loggedInPayload) => {
    return { ...state, loggedIn: loggedInPayload };
  }
});

export const setInitialState = initialState => ({
  type: "Set initial state",
  payload: initialState,
  reducer: (state, initialStatePayload) => {
    storage.removeItem("persist:root");
    return { ...initialStatePayload };
  }
});

export const cleanState = () => dispatch => {
  dispatch(setInitialState(getInitialState()));
};

export const getUser = user => {
  return apiRequest(`getUser/${user.email}`, {
    method: "GET"
  }).catch(e => {});
};

export const insertUser = user => {
  const data = {
    name: user.name,
    email: user.email
  };
  return apiRequest(`insertUser`, {
    method: "POST",
    body: data
  }).catch(e => {});
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
    resolve();
  }).then(() => {
    dispatch(setInitialState(getInitialState()));
    cookie.remove("facebookToken");
    cookie.remove("token");
    cookie.remove("userId");
    window.location = "/";
  });
};
