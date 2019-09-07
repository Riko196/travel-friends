import { createStore, applyMiddleware } from "redux";
import { initialAuthState } from "./state/auth";
import { initialUserState } from "./state/user";
import { initialMyFriendsState } from "./state/myFriends";
import { initialDestinationsState } from "./state/destinations";
import { initialTripsState } from "./state/trips";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

export const getInitialState = () => {
  return {
    ...initialAuthState,
    ...initialUserState,
    ...initialMyFriendsState,
    ...initialDestinationsState,
    ...initialTripsState
  };
};

const rootReducer = (state, action) => {
  console.log(process.env);
  if (process.env.NODE_ENV === "development") {
    console.log("Action: ", action.type);
    console.log("Old state: ", state);
  }

  if (action.reducer === undefined) {
    return state;
  } else {
    const newState = action.reducer(state, action.payload);
    if (process.env.NODE_ENV === "development") {
      console.log("New state: ", newState);
    }
    return newState;
  }
};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configuredStore = () => {
  let store = createStore(
    persistedReducer,
    getInitialState(),
    applyMiddleware(thunk)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
