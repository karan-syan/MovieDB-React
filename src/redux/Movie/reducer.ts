import { ActionType, getType } from "typesafe-actions";
import { InitialState, IState } from "../../utils/InitialState";
import * as actions from "./action";

export const PopularMovieReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallMoviePopular.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallMoviePopular.success):
      return {
        ...state,
        loading: true,
        Data: action.payload,
      };

    default:
      return state;
  }
};

export const UpcomingMovieReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallMovieUpcoming.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallMovieUpcoming.success):
      return {
        ...state,
        loading: true,
        Data: action.payload,
      };

    default:
      return state;
  }
};
