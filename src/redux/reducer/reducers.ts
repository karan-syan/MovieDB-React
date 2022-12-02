import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import {
  InitialState,
  IMovieStateDetails,
  IStateCast,
  IStateDetails,
  IStateperson,
  InitialStateCast,
  IState,
  InitialStateMovieDetail,
  InitialStatePerson,
  InitialStateTvDetail,
} from "../../utils/InitialState";
import * as actions from "../action/ActionCallApi";
import { CallCrouselSlider } from "../action/ActionCallApi";

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
      console.log("popular 12345678");
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
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
const RecommendReducer = (
  state: IState = InitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallRecommend.request):
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

    case getType(actions.CallRecommend.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
const MainReducer = (
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
const SearchReducer = (
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
const TvDetailsReducer = (
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
const MovieDetailsReducer = (
  state: IMovieStateDetails = InitialStateMovieDetail,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.CallMovieDetails.request):
      return {
        ...state,
        loading: true,
      };

    case getType(actions.CallMovieDetails.success):
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };

    default:
      return state;
  }
};
const TvCastReducer = (
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
const TvPersonReducer = (
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

export const movieReducer = combineReducers({
  CrouselSlider: CrouselSliderReducer,
  UpcomingMovie: UpcomingMovieReducer,
  PopularMovies: PopularMovieReducer,
  MovieRecommend: RecommendReducer,
  Movies: MainReducer,
});

export const TrendingReducer = combineReducers({
  TvTrending: TvTrendingReducer,
});
export const AllSearchReducer = combineReducers({
  Searched: SearchReducer,
});

export const DetailsReducer = combineReducers({
  TvDetails: TvDetailsReducer,
  MovieDetails: MovieDetailsReducer,
  TvCast: TvCastReducer,
  PersonDetails: TvPersonReducer,
});

export const tvReducer = combineReducers({
  CrouselSlider: CrouselSliderReducer,
  PopularShows: PopularShowsReducer,
  TvRecommend: RecommendReducer,
  Tvs: MainReducer,
});
