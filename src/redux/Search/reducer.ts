import { ActionType, getType } from "typesafe-actions";
import { InitialState, IState } from "../../utils/InitialState";
import * as actions from "./action";

export const SearchReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallSearch.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallSearch.success):
      return {
        ...state,
        loading: false,
        Data: {
          total_pages: action.payload.total_pages,
          results: action.payload.results,
        },
      };

    default:
      return state;
  }
};
