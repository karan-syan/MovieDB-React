import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "../action/ActionCallApi";
import { IMovie } from "../../util/type";
import { CallMovieSLider } from "../action/ActionCallApi";

interface IState {
  loading: boolean;
  Data: IMovie[];
}

const InitialState: IState = {
  Data: [],
  loading: false,
};

const MovieSliderReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(CallMovieSLider.request):
      return {
        ...state,
        loading: true,
      };

    case getType(CallMovieSLider.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
const PopularMovieReducer = (
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
const PopularShowsReducer = (
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

export const movieReducer = combineReducers({
  // upcomingMovie: TvApiReducer_4,
  PopularMovies: PopularMovieReducer,
  MovieSlider: MovieSliderReducer,
});
export const tvReducer = combineReducers({
  PopularShows: PopularShowsReducer,
  // trendingMovies: TvApiReducer_3,
});
