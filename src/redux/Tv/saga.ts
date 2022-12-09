import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie, ITvDetails } from "../../utils/type";
import { CallTvDetails, CallTvPopular, CallTvTrending } from "./action";
import { FetchApi, FetchApiDetails } from "../../utils/FetchApi";

export function* TvPopular(params: ActionType<typeof CallTvPopular.request>) {
  try {
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield put(CallTvPopular.success(payload));
  } catch (error) {
    yield put({ type: CallTvPopular.failure, error });
  }
}

export function* TvTrending(params: ActionType<typeof CallTvTrending.request>) {
  try {
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield put(CallTvTrending.success(payload));
  } catch (error) {
    yield put({ type: CallTvTrending.failure, error });
  }
}

export function* TvDetails(params: ActionType<typeof CallTvDetails.request>) {
  try {
    const payload: ITvDetails = yield call(FetchApiDetails, params.payload);
    yield put(CallTvDetails.success(payload));
  } catch (error) {
    yield put({ type: CallTvDetails.failure, error });
  }
}
