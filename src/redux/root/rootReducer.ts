import { combineReducers } from "@reduxjs/toolkit";
import {
  movieReducer,
  AllSearchReducer,
  DetailsReducer,
  TrendingReducer,
  tvReducer,
} from "../CombineReducer";
import { UserDetailReducer } from "../User/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  trend: TrendingReducer,
  details: DetailsReducer,
  user: UserDetailReducer,
  Search: AllSearchReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
