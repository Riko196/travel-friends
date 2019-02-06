import { createStore, compose, applyMiddleware } from "redux";
import { setInitialAuth } from "./state/auth";
import { setInitialUser } from "./state/user";
import thunk from "redux-thunk";

const getInitialState = () =>
  compose(
    setInitialAuth,
    setInitialUser
  )({});

const rootReducer = (state, action) => {
  console.log("Action: ", action.type);
  console.log("State :", state);
  if (action.reducer === undefined) {
    return state;
  } else {
    return action.reducer(state, action.payload);
  }
};

export const configuredStore = () => {
  return createStore(rootReducer, getInitialState(), applyMiddleware(thunk));
};
