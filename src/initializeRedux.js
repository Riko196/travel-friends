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
  console.log("Old state: ", state);
  if (action.reducer === undefined) {
    return state;
  } else {
    const newState = action.reducer(state, action.payload);
    console.log("New state: ", newState);
    return newState;
  }
};

export const configuredStore = () => {
  return createStore(rootReducer, getInitialState(), applyMiddleware(thunk));
};
