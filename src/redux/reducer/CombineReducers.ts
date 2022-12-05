import { combineReducers } from "redux";
import { CrouselSliderReducer } from "./CrouselReducer";
import { MainReducer } from "./MainReducer";
import {
  MovieDetailsReducer,
  PopularMovieReducer,
  UpcomingMovieReducer,
} from "./MoviesReducer";
import { TvCastReducer, TvPersonReducer } from "./PeopleReducer";
import { RecommendReducer } from "./RecommendReducer";
import { SearchReducer } from "./SearchReducer";
import {
  PopularShowsReducer,
  TvDetailsReducer,
  TvTrendingReducer,
} from "./TvReducer";

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
