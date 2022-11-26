import { combineReducers } from "@reduxjs/toolkit";
import {
  DetailsReducer,
  movieReducer,
  TrendingReducer,
  tvReducer,
} from "../reducer/reducers";
const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  trend: TrendingReducer,
  details: DetailsReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
