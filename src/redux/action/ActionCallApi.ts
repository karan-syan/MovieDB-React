import { createAsyncAction } from "typesafe-actions";
import {
  ICast,
  IMovie,
  IMovieDetails,
  Iperson,
  ITvDetails,
} from "../../utils/type";

export interface FetchMoviePayload {
  page?: number;
  url: string;
  NewData: boolean;
}

export interface FetchDetailsPayload {
  url: string;
}

export interface FetchSearchPayload {
  url: string;
  page: number;
  query: string | null;
  NewData: boolean;
}

export interface FetchCastPayload {
  url: string;
}

export interface FetchCastDetailsPayload {
  url: string;
}

// Slider

export const CallCrouselSlider = createAsyncAction(
  "FETCH_MOVIE_SLIDER_REQUEST",
  "FETCH_MOVIE_SLIDER_SUCCESS",
  "FETCH_MOVIE_SLIDER_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

// Movie

export const CallHomePage = createAsyncAction(
  "FETCH_HOME_PAGE_REQUEST",
  "FETCH_HOME_PAGE_SUCCESS",
  "FETCH_HOME_PAGE_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

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

export const CallRecommend = createAsyncAction(
  "FETCH_RECOMMEND_REQUEST",
  "FETCH_RECOMMEND_SUCCESS",
  "FETCH_RECOMMEND_FAILURE"
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

export const CallSearch = createAsyncAction(
  "FETCH_SEARCH_REQUEST",
  "FETCH_SEARCH_SUCCESS",
  "FETCH_SEARCH_FAILURE"
)<FetchSearchPayload, IMovie[], Error>();

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

export const CallMovieDetails = createAsyncAction(
  "FETCH_MOVIE_DETAILS_REQUEST",
  "FETCH_MOVIE_DETAILS_SUCCESS",
  "FETCH_MOVIE_DETAILS_FAILURE"
)<FetchDetailsPayload, IMovieDetails, Error>();

export const CallCast = createAsyncAction(
  "FETCH_TV_CAST_REQUEST",
  "FETCH_TV_CAST_SUCCESS",
  "FETCH_TV_CAST_FAILURE"
)<FetchCastPayload, ICast[], Error>();

export const CallCastDetails = createAsyncAction(
  "FETCH_TV_CAST_DETAILS_REQUEST",
  "FETCH_TV_CAST_DETAILS_SUCCESS",
  "FETCH_TV_CAST_DETAILS_FAILURE"
)<FetchCastDetailsPayload, Iperson, Error>();
