import apiRequest from "./apiRequest";
import { setUser } from "./user";

export const setLoggedIn = loggedIn => ({
  type: "Set loggedIn value",
  payload: loggedIn,
  reducer: (state, loggedInPayload) => {
    return { ...state, loggedIn: loggedInPayload };
  }
});

export const existsUser = email => {
  return apiRequest(`getUser/${email}`, { method: "GET" }).catch(e => {});
};

export const signUp = user => {
  const data = JSON.stringify(user);
  console.log(data);
  return apiRequest(`insertUser/${data}`, { method: "POST" }).catch(e => {});
};

export const logIn = user => dispatch => {
  return existsUser(user.email)
    .then(data => {
      if (!data.exists) {
        signUp(user);
      } else {
        return Promise.resolve();
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
