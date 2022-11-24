import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IMovie } from "../../util/type";
import {
  CallMoviePopular,
  CallMovieSLider,
  CallMovieUpcoming,
  CallTvPopular,
  CallTvRecommend,
  CallTvTrending,
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
function* MovieUpcoming(params: ActionType<typeof CallMovieUpcoming.request>) {
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
function* TvTrending(params: ActionType<typeof CallTvTrending.request>) {
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

function* TvRecommend(params: ActionType<typeof CallTvRecommend.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallTvRecommend.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallTvRecommend.failure, error });
  }
}

export function* Movie_Saga() {
  yield all([
    takeEvery(getType(CallMovieSLider.request), MovieSlider),
    takeEvery(getType(CallMoviePopular.request), MoviePopular),
    takeEvery(getType(CallMovieUpcoming.request), MovieUpcoming),
    takeEvery(getType(CallTvPopular.request), TvPopular),
    takeEvery(getType(CallTvTrending.request), TvTrending),
    takeEvery(getType(CallTvRecommend.request), TvRecommend),
  ]);
}
