import { createAsyncAction } from "typesafe-actions";
import { FetchMoviePayload, IMovie } from "../../utils/type";

export const CallCrouselSlider = createAsyncAction(
  "FETCH_MOVIE_SLIDER_REQUEST",
  "FETCH_MOVIE_SLIDER_SUCCESS",
  "FETCH_MOVIE_SLIDER_FAILURE"
)<FetchMoviePayload, IMovie, Error>();
