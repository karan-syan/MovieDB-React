import { ActionType, getType } from "typesafe-actions";
import {
  InitialStateCast,
  InitialStatePerson,
  IStateCast,
  IStateperson,
} from "../../utils/InitialState";
import * as actions from "./action";

export const TvCastReducer = (
  state: IStateCast = InitialStateCast,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallCast.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallCast.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
export const TvPersonReducer = (
  state: IStateperson = InitialStatePerson,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallCastDetails.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallCastDetails.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
