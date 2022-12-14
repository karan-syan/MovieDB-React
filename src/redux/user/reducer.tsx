import { ActionType, getType } from "typesafe-actions";
import { IStateUserDetails } from "../../utils/InitialState";
import { IuserDetail } from "../../utils/type";
import * as actions from "./action";

export const UserDetailReducer = (
  state: IuserDetail = IStateUserDetails,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallUserDetail.request):
      return {
        ...state,
        loading: true,
      };
    case getType(actions.CallUserDetail.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };
    default:
      return state;
  }
};
