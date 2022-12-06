import { combineReducers } from "@reduxjs/toolkit";
import {
  movieReducer,
  AllSearchReducer,
  DetailsReducer,
  TrendingReducer,
  tvReducer,
} from "../CombineReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  trend: TrendingReducer,
  details: DetailsReducer,
  Search: AllSearchReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
