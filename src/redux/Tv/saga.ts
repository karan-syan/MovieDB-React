import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie, ITvDetails } from "../../utils/type";
import { CallTvDetails, CallTvPopular, CallTvTrending } from "./action";
import { FetchApi, FetchApiDetails } from "../../utils/FetchApi";

export function* TvPopular(params: ActionType<typeof CallTvPopular.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallTvPopular.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallTvPopular.failure, error });
  }
}

export function* TvTrending(params: ActionType<typeof CallTvTrending.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallTvTrending.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallTvTrending.failure, error });
  }
}

export function* TvDetails(params: ActionType<typeof CallTvDetails.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: ITvDetails = yield call(FetchApiDetails, params.payload);
    yield console.log("saga ", payload);
    yield put(CallTvDetails.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallTvDetails.failure, error });
  }
}
