import apiRequest from "./apiRequest";
import { getInitialState } from "../initializeRedux";

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
    return { ...initialStatePayload };
  }
});

export const getUser = email => {
  return apiRequest(`getUser/${email}`, { method: "GET" }).catch(e => {});
};

export const getUserIdByEmail = email => {
  return apiRequest(`getUserIdByEmail/${email}`, { method: "GET" }).catch(
    e => {}
  );
};

export const insertUser = user => {
  const data = {
    name: user.name,
    email: user.email,
    profilePhoto: user.profilePhoto
  };
  return apiRequest(`insertUser`, { method: "POST", body: data }).catch(
    e => {}
  );
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
    window.location = "/";
  });
};
