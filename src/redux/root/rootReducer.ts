import { combineReducers } from "@reduxjs/toolkit";
import {
  AllSearchReducer,
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
  Search: AllSearchReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
