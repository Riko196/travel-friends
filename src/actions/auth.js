import apiRequest from "./apiRequest";
import { setUser } from "./user";
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
        signUp({ name: user.name, email: user.email }).then(userId => {
          console.log(userId);
          dispatch(setUser(merge(userId, finalReduxUser)));
          dispatch(setLoggedIn(true));
        });
      } else {
        dispatch(setUser(finalReduxUser));
        dispatch(setLoggedIn(true));
      }

      return Promise.resolve();
    })
    .catch(e => {
      dispatch(setLoggedIn(false));
    });
};
