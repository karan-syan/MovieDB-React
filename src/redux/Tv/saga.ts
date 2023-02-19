import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { FetchApi } from "../../utils/FetchApi";
import { IMovie } from "../../utils/type";
import { CallTvPopular, CallTvTrending } from "./action";

export function* TvPopular(params: ActionType<typeof CallTvPopular.request>) {
  try {
    const payload: IMovie = yield call(FetchApi, params.payload);
    yield put(CallTvPopular.success(payload));
  } catch (error) {
    yield put({ type: CallTvPopular.failure, error });
  }
}

export function* TvTrending(params: ActionType<typeof CallTvTrending.request>) {
  try {
    const payload: IMovie = yield call(FetchApi, params.payload);
    yield put(CallTvTrending.success(payload));
  } catch (error) {
    yield put({ type: CallTvTrending.failure, error });
  }
}
