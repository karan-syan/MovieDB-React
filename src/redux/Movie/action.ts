import { createAsyncAction } from "typesafe-actions";
import { FetchMoviePayload, IMovie } from "../../utils/type";

export const CallMoviePopular = createAsyncAction(
  "FETCH_MOVIE_POPULAR_REQUEST",
  "FETCH_MOVIE_POPULAR_SUCCESS",
  "FETCH_MOVIE_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie, Error>();

export const CallMovieUpcoming = createAsyncAction(
  "FETCH_MOVIE_UPCOMING_REQUEST",
  "FETCH_MOVIE_UPCOMING_SUCCESS",
  "FETCH_MOVIE_UPCOMING_FAILURE"
)<FetchMoviePayload, IMovie, Error>();
