import apiRequest from "./apiRequest";
import { setUser } from "./user";
import { initialUserState } from "../state/user";

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
  }).then(() => {
    window.location = "/";
    dispatch(setUser(initialUserState));
    dispatch(setLoggedIn(false));
  });
};
