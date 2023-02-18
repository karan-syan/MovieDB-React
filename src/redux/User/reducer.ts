import { User } from "firebase/auth";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./action";

export const UserDetailReducer = (
  state: User | null = null,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.setUser):
      console.log("dddd");
      state = action.payload;
      return state;

    default:
      return state;
  }
};
