import { User } from "firebase/auth";
import { createAction } from "typesafe-actions";

export const CallUserDetail = createAction("USER_DETAIL")<User>();
