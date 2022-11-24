import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "../action/ActionCallApi";
import { IMovie } from "../../util/type";
import { CallCrouselSlider } from "../action/ActionCallApi";

interface IState {
  loading: boolean;
  Data: IMovie[];
}

const InitialState: IState = {
  Data: [],
  loading: false,
};

const CrouselSliderReducer = (
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
const UpcomingMovieReducer = (
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
const TvTrendingReducer = (
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
        loading: true,
        Data: action.payload,
      };

    default:
      return state;
  }
};

const RecommendShowsReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallTvRecommend.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallTvRecommend.success):
      return {
        ...state,
        loading: true,
        Data: action.payload,
      };

    default:
      return state;
  }
};

const MoviesReducer = (
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
        loading: true,
        Data: [...state.Data, ...action.payload],
      };

    default:
      return state;
  }
};
const TvsReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallTvs.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallTvs.success):
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
  UpcomingMovie: UpcomingMovieReducer,
  PopularMovies: PopularMovieReducer,
  Movies: MoviesReducer,
  CrouselSlider: CrouselSliderReducer,
});

export const TrendingReducer = combineReducers({
  TvTrending: TvTrendingReducer,
  // MovieTrending: MovieTrendingReducer
});

export const tvReducer = combineReducers({
  PopularShows: PopularShowsReducer,
  TvRecommend: RecommendShowsReducer,
  Tvs: TvsReducer,
});
