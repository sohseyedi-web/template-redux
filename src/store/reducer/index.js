import { combineReducers } from "redux";
import { examReducer } from "./reducer";

export const rootReducer = combineReducers({
  exam: examReducer,
});
