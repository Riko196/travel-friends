import apiRequest from "./apiRequest";
import { omit } from "lodash";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = data => {
  data = omit(data, ["accessToken"]);
  return apiRequest(`updateUser`, { method: "PUT", body: data }).catch(e => {
    throw e;
  });
};
