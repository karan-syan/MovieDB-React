import { combineReducers } from "@reduxjs/toolkit";
import { movieReducer, tvReducer } from "../reducer/reducers";
const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
