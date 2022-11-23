import { createAsyncAction } from "typesafe-actions";
import { IMovie } from "../../util/type";

export interface FetchMoviePayload {
  page?: number;
  id?: number;
  url: string;
}

export const CallMovieSLider = createAsyncAction(
  "FETCH_MOVIE_SLIDER_REQUEST",
  "FETCH_MOVIE_SLIDER_SUCCESS",
  "FETCH_MOVIE_SLIDER_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMoviePopular = createAsyncAction(
  "FETCH_MOVIE_POPULAR_REQUEST",
  "FETCH_MOVIE_POPULAR_SUCCESS",
  "FETCH_MOVIE_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieLatest = createAsyncAction(
  "FETCH_MOVIE_LATEST_REQUEST",
  "FETCH_MOVIE_LATEST_SUCCESS",
  "FETCH_MOVIE_LATEST_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieUpcoming = createAsyncAction(
  "FETCH_MOVIE_UPCOMING_REQUEST",
  "FETCH_MOVIE_UPCOMING_SUCCESS",
  "FETCH_MOVIE_UPCOMING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieTopRated = createAsyncAction(
  "FETCH_MOVIE_TOP_RATED_REQUEST",
  "FETCH_MOVIE_TOP_RATED_SUCCESS",
  "FETCH_MOVIE_TOP_RATED_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieNowPlaying = createAsyncAction(
  "FETCH_MOVIE_NOW_PLAYING_REQUEST",
  "FETCH_MOVIE_NOW_PLAYING_SUCCESS",
  "FETCH_MOVIE_NOW_PLAYING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallMovieSimilar = createAsyncAction(
  "FETCH_MOVIE_NOW_PLAYING_REQUEST",
  "FETCH_MOVIE_NOW_PLAYING_SUCCESS",
  "FETCH_MOVIE_NOW_PLAYING_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvSLider = createAsyncAction(
  "FETCH_TV_SLIDER_REQUEST",
  "FETCH_TV_SLIDER_SUCCESS",
  "FETCH_TV_SLIDER_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvPopular = createAsyncAction(
  "FETCH_TV_POPULAR_REQUEST",
  "FETCH_TV_POPULAR_SUCCESS",
  "FETCH_TV_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvTopRated = createAsyncAction(
  "FETCH_TV_TOP_RATED_REQUEST",
  "FETCH_TV_TOP_RATED_SUCCESS",
  "FETCH_TV_TOP_RATED_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvAiringToday = createAsyncAction(
  "FETCH_TV_AIRING_TODAY_REQUEST",
  "FETCH_TV_AIRING_TODAY_SUCCESS",
  "FETCH_TV_AIRING_TODAY_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvLatest = createAsyncAction(
  "FETCH_TV_LATEST_REQUEST",
  "FETCH_TV_LATEST_SUCCESS",
  "FETCH_TV_LATEST_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();

export const CallTvRecommend = createAsyncAction(
  "FETCH_TV_RECOMMEND_REQUEST",
  "FETCH_TV_RECOMMEND_SUCCESS",
  "FETCH_TV_RECOMMEND_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();