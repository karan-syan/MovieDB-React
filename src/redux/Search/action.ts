import { createAsyncAction } from "typesafe-actions";
import { FetchSearchPayload, IMovie } from "../../utils/type";

export const CallSearch = createAsyncAction(
  "FETCH_SEARCH_REQUEST",
  "FETCH_SEARCH_SUCCESS",
  "FETCH_SEARCH_FAILURE"
)<FetchSearchPayload, IMovie[], Error>();
