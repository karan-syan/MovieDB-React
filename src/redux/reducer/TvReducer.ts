import { ActionType, getType } from "typesafe-actions";
import {
  InitialState,
  InitialStateTvDetail,
  IState,
  IStateDetails,
} from "../../utils/InitialState";
import * as actions from "../action/ActionCallApi";

export const TvDetailsReducer = (
  state: IStateDetails = InitialStateTvDetail,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallTvDetails.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallTvDetails.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};

export const PopularShowsReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallTvPopular.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallTvPopular.success):
      return {
        ...state,
        loading: true,
        Data: action.payload,
      };

    default:
      return state;
  }
};
export const TvTrendingReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallTvTrending.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallTvTrending.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
