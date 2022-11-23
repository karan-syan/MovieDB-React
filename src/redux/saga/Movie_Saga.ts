import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IMovie } from "../../util/type";
import {
  CallMoviePopular,
  CallMovieSLider,
  CallTvPopular,
} from "../action/ActionCallApi";
import { getType, ActionType } from "typesafe-actions";
import { FetchApi } from "./fetching/FetchApi";

function* MovieSlider(params: ActionType<typeof CallMovieSLider.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallMovieSLider.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallMovieSLider.failure, error });
  }
}

function* MoviePopular(params: ActionType<typeof CallMoviePopular.request>) {
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
function* TvPopular(params: ActionType<typeof CallTvPopular.request>) {
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

export function* Movie_Saga() {
  yield all([
    takeEvery(getType(CallMovieSLider.request), MovieSlider),
    takeEvery(getType(CallMoviePopular.request), MoviePopular),
    takeEvery(getType(CallTvPopular.request), TvPopular),
  ]);
}
