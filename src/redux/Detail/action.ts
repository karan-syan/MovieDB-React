import { createAsyncAction } from "typesafe-actions";
import { FetchDetailsPayload, IDetails } from "../../utils/type";

export const CallDetails = createAsyncAction(
  "FETCH_DETAILS_REQUEST",
  "FETCH_DETAILS_SUCCESS",
  "FETCH_DETAILS_FAILURE"
)<FetchDetailsPayload, IDetails, Error>();
