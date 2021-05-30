import { createStore, compose } from "redux";
import rootReducer from "./reducers";
// import { loadState, saveState } from "../helpers/state";

// const persistedState = loadState();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers()
//   persistedState,
);

// store.subscribe(() =>
//   saveState({
//     login: store.getState().login,
//   })
// );

export default store;