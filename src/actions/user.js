import apiRequest from "./apiRequest";
import { omit } from "lodash";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = user => {
  user = omit(user, ["accessToken"]);
  return apiRequest(`updateUser`, {
    method: "PUT",
    body: user,
    headers: { token: user.token }
  }).catch(e => {
    throw e;
  });
};
