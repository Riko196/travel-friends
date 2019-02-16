import apiRequest from "./apiRequest";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = user => {
  const data = JSON.stringify(user);
  return apiRequest(`updateUser/${data}`, { method: "PUT" }).catch(e => {
    throw e;
  });
};
