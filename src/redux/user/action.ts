import { User } from "firebase/auth";
import { createAsyncAction } from "typesafe-actions";

export const CallUserDetail = createAsyncAction(
  "FETCH_USER_DETAIL_REQUEST",
  "FETCH_USER_DETAIL_SUCCESS",
  "FETCH_USER_DETAIL_FAILURE"
)<User, User, Error>();
