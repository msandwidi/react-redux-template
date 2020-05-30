import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

let middlewares = [];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancer(applyMiddleware(reduxThunk, ...middlewares))
  );
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }
  return store;
};
