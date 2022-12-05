import { ActionType, getType } from "typesafe-actions";
import { InitialState, IState } from "../../utils/InitialState";
import { CallCrouselSlider } from "../action/ActionCallApi";
import * as actions from "../action/ActionCallApi";

export const CrouselSliderReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(CallCrouselSlider.request):
      return {
        ...state,
        loading: true,
      };

    case getType(CallCrouselSlider.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
