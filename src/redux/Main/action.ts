import { createAsyncAction } from "typesafe-actions";
import { FetchMoviePayload, IMovie } from "../../utils/type";

export const CallMovies = createAsyncAction(
  "FETCH_MOVIES_REQUEST",
  "FETCH_MOVIES_SUCCESS",
  "FETCH_MOVIES_FAILURE"
)<FetchMoviePayload, IMovie[], Error>();
