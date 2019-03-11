import apiRequest from "./apiRequest";

export const setUser = user => ({
  type: "Set user values",
  payload: user,
  reducer: (state, userPayload) => {
    return { ...state, user: { ...user, ...userPayload } };
  }
});

export const updateUser = updatedUser => {
  const userWithoutPhoto = updatedUser;
  delete userWithoutPhoto.profilePhoto;
  delete userWithoutPhoto.accessToken;
  const data = JSON.stringify(userWithoutPhoto);
  return apiRequest(`updateUser/${data}`, { method: "PUT" }).catch(e => {
    throw e;
  });
};
