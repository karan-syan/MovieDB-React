import { ActionType, getType } from "typesafe-actions";
import { InitialState, IState } from "../../utils/InitialState";
import * as actions from "../action/ActionCallApi";

export const RecommendReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallRecommend.request):
      if (action.payload.NewData) {
        return {
          ...state,
          Data: [],
          loading: true,
        };
      } else {
        return {
          ...state,
          loading: true,
        };
      }

    case getType(actions.CallRecommend.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
