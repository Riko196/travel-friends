const initialState = {
  user: {
    name: null,
    email: null,
    profilePhoto: null,
    aboutMe: null,
    birthday: null,
    country: null,
    city: null,
    occupation: null,
    joined: null,
    gender: null,
    relationship: null,
    education: null,
    smoking: null,
    drinking: null,
    speaking: null
  }
};

export const setInitialUser = state => {
  return { ...state, ...initialState };
};
