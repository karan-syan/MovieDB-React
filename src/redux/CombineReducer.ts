import { combineReducers } from "redux";
import { CrouselSliderReducer } from "./Crousel/reducer";
import { DetailReducer } from "./Detail/reducer";
import { MainReducer } from "./Main/reducer";
import { PopularMovieReducer, UpcomingMovieReducer } from "./Movie/reducer";
import { TvCastReducer, TvPersonReducer } from "./People/reducer";
import { RecommendReducer } from "./Recommend/reducer";
import { SearchReducer } from "./Search/reducer";
import { PopularShowsReducer, TvTrendingReducer } from "./Tv/reducer";

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
  Details: DetailReducer,
  TvCast: TvCastReducer,
  PersonDetails: TvPersonReducer,
});

export const tvReducer = combineReducers({
  CrouselSlider: CrouselSliderReducer,
  PopularShows: PopularShowsReducer,
  TvRecommend: RecommendReducer,
  Tvs: MainReducer,
});
