import { User } from "firebase/auth";
import { createAction } from "typesafe-actions";

export const setUser = createAction("USER_DETAIL")<User | null>();
