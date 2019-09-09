import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
//List of reducers to be combined

const rootReducer = combineReducers({
  // List of reducers seperated by commas
  articleReducer
});

export default rootReducer;
