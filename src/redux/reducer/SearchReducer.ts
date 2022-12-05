import { ActionType, getType } from "typesafe-actions";
import { InitialState, IState } from "../../utils/InitialState";
import * as actions from "../action/ActionCallApi";

export const SearchReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallSearch.request):
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

    case getType(actions.CallSearch.success):
      return {
        ...state,
        loading: false,
        Data: [...state.Data, ...action.payload],
      };

    default:
      return state;
  }
};
