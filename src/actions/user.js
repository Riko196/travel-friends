import apiRequest from "./apiRequest";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = (updatedUserValues, userRedux) => {
  updatedUserValues.userId = userRedux.userId;

  const data = JSON.stringify(updatedUserValues);
  return apiRequest(`updateUser/${data}`, { method: "PUT" }).catch(e => {
    throw e;
  });
};
