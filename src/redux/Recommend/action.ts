import { createAsyncAction } from "typesafe-actions";
import { FetchMoviePayload, IMovie } from "../../utils/type";

export const CallRecommend = createAsyncAction(
  "FETCH_RECOMMEND_REQUEST",
  "FETCH_RECOMMEND_SUCCESS",
  "FETCH_RECOMMEND_FAILURE"
)<FetchMoviePayload, IMovie, Error>();
