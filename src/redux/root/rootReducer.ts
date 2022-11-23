import { combineReducers } from "@reduxjs/toolkit";
import { BaseApiReducer, TvApiReducer } from "../reducer/reducers";
const rootReducer = combineReducers({
  BaseApiReducer,
  TvApiReducer,
});
export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
