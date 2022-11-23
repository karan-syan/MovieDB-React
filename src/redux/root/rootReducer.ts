import { combineReducers } from "@reduxjs/toolkit";
import { movieReducer, TrendingReducer, tvReducer } from "../reducer/reducers";
const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  trend: TrendingReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
