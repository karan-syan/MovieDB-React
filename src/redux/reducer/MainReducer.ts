import { ActionType, getType } from "typesafe-actions";
import * as actions from "../action/ActionCallApi";
import { InitialState, IState } from "../../utils/InitialState";

export const MainReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallMovies.request):
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

    case getType(actions.CallMovies.success):
      return {
        ...state,
        loading: false,
        Data: [...state.Data, ...action.payload],
      };

    default:
      return state;
  }
};
