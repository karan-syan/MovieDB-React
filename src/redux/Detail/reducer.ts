import { ActionType, getType } from "typesafe-actions";
import { IStateDetails, InitialStateDetail } from "../../utils/InitialState";
import * as actions from "./action";

export const DetailReducer = (
  state: IStateDetails = InitialStateDetail,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallDetails.request):
      return {
        ...state,
        loading: true,
        Data: InitialStateDetail.Data,
      };

    case getType(actions.CallDetails.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
