import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie, IMovieDetails } from "../../utils/type";
import { FetchApi, FetchApiDetails } from "../../utils/FetchApi";
import {
  CallMovieDetails,
  CallMoviePopular,
  CallMovieUpcoming,
} from "./action";

export function* MoviePopular(
  params: ActionType<typeof CallMoviePopular.request>
) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallMoviePopular.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallMoviePopular.failure, error });
  }
}
export function* MovieUpcoming(
  params: ActionType<typeof CallMovieUpcoming.request>
) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallMovieUpcoming.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallMovieUpcoming.failure, error });
  }
}

export function* MovieDetails(
  params: ActionType<typeof CallMovieDetails.request>
) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovieDetails = yield call(FetchApiDetails, params.payload);
    yield console.log("saga ", payload);
    yield put(CallMovieDetails.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallMovieDetails.failure, error });
  }
}
