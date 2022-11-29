import { createAsyncAction } from "typesafe-actions";
import { ICast, IMovie, ITvDetails } from "../../utils/type";

export interface FetchMoviePayload {
  page?: number;
  id?: string | undefined;
  url: string;
  NewData: boolean;
}
export interface FetchDetailsPayload {
  url: string;
  id: string | undefined;
}

export interface FetchCastPayload {
  url: string;
  id: string | undefined;
  afterIdurl: string;
}

// Slider

export const CallCrouselSlider = createAsyncAction(
  "FETCH_MOVIE_SLIDER_REQUEST",
  "FETCH_MOVIE_SLIDER_SUCCESS",
  "FETCH_MOVIE_SLIDER_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Movie

export const CallMoviePopular = createAsyncAction(
  "FETCH_MOVIE_POPULAR_REQUEST",
  "FETCH_MOVIE_POPULAR_SUCCESS",
  "FETCH_MOVIE_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieUpcoming = createAsyncAction(
  "FETCH_MOVIE_UPCOMING_REQUEST",
  "FETCH_MOVIE_UPCOMING_SUCCESS",
  "FETCH_MOVIE_UPCOMING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Tv

export const CallTvPopular = createAsyncAction(
  "FETCH_TV_POPULAR_REQUEST",
  "FETCH_TV_POPULAR_SUCCESS",
  "FETCH_TV_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Recommend and Similar

export const CallMovieSimilar = createAsyncAction(
  "FETCH_MOVIE_NOW_PLAYING_REQUEST",
  "FETCH_MOVIE_NOW_PLAYING_SUCCESS",
  "FETCH_MOVIE_NOW_PLAYING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvRecommend = createAsyncAction(
  "FETCH_TV_RECOMMEND_REQUEST",
  "FETCH_TV_RECOMMEND_SUCCESS",
  "FETCH_TV_RECOMMEND_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Trending

export const CallTvTrending = createAsyncAction(
  "FETCH_TV_TRENDING_REQUEST",
  "FETCH_TV_TRENDING_SUCCESS",
  "FETCH_TV_TRENDING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieTrending = createAsyncAction(
  "FETCH_MOVIE_TRENDING_REQUEST",
  "FETCH_MOVIE_TRENDING_SUCCESS",
  "FETCH_MOVIE_TRENDING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Main

export const CallMovies = createAsyncAction(
  "FETCH_MOVIES_REQUEST",
  "FETCH_MOVIES_SUCCESS",
  "FETCH_MOVIES_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvs = createAsyncAction(
  "FETCH_TVS_REQUEST",
  "FETCH_TVS_SUCCESS",
  "FETCH_TVS_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Details
export const CallTvDetails = createAsyncAction(
  "FETCH_TV_DETAILS_REQUEST",
  "FETCH_TV_DETAILS_SUCCESS",
  "FETCH_TV_DETAILS_FAILURE"
)<FetchDetailsPayload, ITvDetails, Error>();

export const CallCast = createAsyncAction(
  "FETCH_TV_CAST_REQUEST",
  "FETCH_TV_CAST_SUCCESS",
  "FETCH_TV_CAST_FAILURE"
)<FetchCastPayload, ICast[], Error>();
