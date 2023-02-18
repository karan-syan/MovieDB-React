import { ActionType, getType } from "typesafe-actions";
import * as actions from "./action";
import { InitialState, IState } from "../../utils/InitialState";

export const MainReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallMovies.request):
        return {
          ...state,
          loading: true,
          Data:{
            total_pages:0,
            results:[]
          }
        };

    case getType(actions.CallMovies.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
