import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { ICast, IMovie, IMovieDetails, ITvDetails } from "../../utils/type";
import * as actions from "../action/ActionCallApi";
import { CallCrouselSlider } from "../action/ActionCallApi";

interface IState {
  loading: boolean;
  Data: IMovie[];
}

export interface IStateDetails {
  loading: boolean;
  Data: ITvDetails;
}
export interface IMovieStateDetails {
  loading: boolean;
  Data: IMovieDetails;
}
interface IStateCast {
  loading: boolean;
  Data: ICast[];
}
const InitialStateCast: IStateCast = {
  Data: [],
  loading: true,
};

const InitialState: IState = {
  Data: [],
  loading: true,
};

const InitialStateTvDetail: IStateDetails = {
  Data: {
    adult: false,
    backdrop_path: "",
    created_by: [],
    episode_run_time: [],
    first_air_date: "",
    genres: [],
    homepage: "",
    id: 0,
    in_production: false,
    languages: [],
    last_air_date: "",
    last_episode_to_air: {
      air_date: "",
      episode_number: 0,
      id: 0,
      name: "",
      overview: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
      vote_average: 0,
      vote_count: 0,
    },
    name: "",
    next_episode_to_air: {
      air_date: "",
      episode_number: 0,
      id: 0,
      name: "",
      overview: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
      vote_average: 0,
      vote_count: 0,
    },
    networks: [],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    seasons: [],
    spoken_languages: [],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
  },
  loading: true,
};
const InitialStateMovieDetail: IMovieStateDetails = {
  Data: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  loading: true,
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
});

export const tvReducer = combineReducers({
  CrouselSlider: CrouselSliderReducer,
  PopularShows: PopularShowsReducer,
  TvRecommend: RecommendReducer,
  Tvs: MainReducer,
});
