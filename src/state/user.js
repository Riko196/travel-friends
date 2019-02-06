const initialState = {
  user: {
    name: null,
    email: null,
    profilePhoto: null
  }
};

export const setInitialUser = state => {
  return { ...state, ...initialState };
};
