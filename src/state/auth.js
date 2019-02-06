const initialState = {
  loggedIn: false
};

export const setInitialAuth = state => {
  return { ...state, ...initialState };
};
