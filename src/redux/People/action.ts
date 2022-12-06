import { createAsyncAction } from "typesafe-actions";
import {
  FetchCastDetailsPayload,
  FetchCastPayload,
  ICast,
  Iperson,
} from "../../utils/type";

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
