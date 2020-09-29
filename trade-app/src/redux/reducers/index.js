import { combineReducers } from "redux";
import stocks from "./stockReducer";

const rootReducer = combineReducers({
  stocks,
});

export default rootReducer;
