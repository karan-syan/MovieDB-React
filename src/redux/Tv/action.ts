import { createAsyncAction } from "typesafe-actions";
import { FetchMoviePayload, IMovie } from "../../utils/type";

export const CallTvPopular = createAsyncAction(
  "FETCH_TV_POPULAR_REQUEST",
  "FETCH_TV_POPULAR_SUCCESS",
  "FETCH_TV_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie, Error>();

export const CallTvTrending = createAsyncAction(
  "FETCH_TV_TRENDING_REQUEST",
  "FETCH_TV_TRENDING_SUCCESS",
  "FETCH_TV_TRENDING_FAILURE"
)<FetchMoviePayload, IMovie, Error>();
