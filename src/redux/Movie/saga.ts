import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { FetchApi } from "../../utils/FetchApi";
import { IMovie } from "../../utils/type";
import { CallMoviePopular, CallMovieUpcoming } from "./action";

export function* MoviePopular(
  params: ActionType<typeof CallMoviePopular.request>
) {
  try {
    const payload: IMovie = yield call(FetchApi, params.payload);
    yield put(CallMoviePopular.success(payload));
  } catch (error) {
    yield put({ type: CallMoviePopular.failure, error });
  }
}
export function* MovieUpcoming(
  params: ActionType<typeof CallMovieUpcoming.request>
) {
  try {
    const payload: IMovie = yield call(FetchApi, params.payload);
    yield put(CallMovieUpcoming.success(payload));
  } catch (error) {
    yield put({ type: CallMovieUpcoming.failure, error });
  }
}
