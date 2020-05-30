import { combineReducers } from "redux";
import miscsReducer from "./miscsReducer";

const routeReducer = () =>
  combineReducers({
    miscs: miscsReducer,
  });

export default routeReducer;
