import apiRequest from "./apiRequest";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = user => {
  return apiRequest(`updateUser`, {
    method: "PUT",
    body: user
  }).catch(e => {
    throw e;
  });
};
