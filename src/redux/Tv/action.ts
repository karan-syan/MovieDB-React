import { createAsyncAction } from "typesafe-actions";
import {
  FetchDetailsPayload,
  FetchMoviePayload,
  IDetails,
  IMovie,
} from "../../utils/type";

export const CallTvPopular = createAsyncAction(
  "FETCH_TV_POPULAR_REQUEST",
  "FETCH_TV_POPULAR_SUCCESS",
  "FETCH_TV_POPULAR_FAILURE"
)<FetchMoviePayload, IMovie, Error>();

export const CallTvDetails = createAsyncAction(
  "FETCH_TV_DETAILS_REQUEST",
  "FETCH_TV_DETAILS_SUCCESS",
  "FETCH_TV_DETAILS_FAILURE"
)<FetchDetailsPayload, IDetails, Error>();

export const CallTvTrending = createAsyncAction(
  "FETCH_TV_TRENDING_REQUEST",
  "FETCH_TV_TRENDING_SUCCESS",
  "FETCH_TV_TRENDING_FAILURE"
)<FetchMoviePayload, IMovie, Error>();
