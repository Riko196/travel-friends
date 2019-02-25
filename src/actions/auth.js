import apiRequest from "./apiRequest";
import { setUser } from "./user";
import { initialUserState } from "../state/user";
import { isEmpty, merge } from "lodash";

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

export const signUp = user => {
  const data = JSON.stringify(user);
  return apiRequest(`insertUser/${data}`, { method: "POST" }).catch(e => {});
};

export const logIn = user => dispatch => {
  return getUser(user.email)
    .then(data => {
      const finalReduxUser = merge(user, data);
      if (isEmpty(data)) {
        const userId = signUp({ name: user.name, email: user.email });
        return merge(finalReduxUser, userId);
      } else {
        return finalReduxUser;
      }
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
