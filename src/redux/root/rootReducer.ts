import { combineReducers } from "@reduxjs/toolkit";
import {
  movieReducer,
  AllSearchReducer,
  DetailsReducer,
  TrendingReducer,
  tvReducer,
} from "../CombineReducer";
import { UserDetailReducer } from "../user/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  tv: tvReducer,
  trend: TrendingReducer,
  details: DetailsReducer,
  Search: AllSearchReducer,
  Userdetails: UserDetailReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
