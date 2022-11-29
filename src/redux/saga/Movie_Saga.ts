import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ICast, IMovie, ITvDetails } from "../../utils/type";
import {
  CallCast,
  CallCrouselSlider,
  CallMoviePopular,
  CallMovies,
  CallMovieUpcoming,
  CallTvDetails,
  CallTvPopular,
  CallTvRecommend,
  CallTvTrending,
} from "../action/ActionCallApi";
import { getType, ActionType } from "typesafe-actions";
import { FetchApi, FetchApiCast, FetchApiDetails } from "./fetching/FetchApi";

function* CrouselSlider(params: ActionType<typeof CallCrouselSlider.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallCrouselSlider.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallCrouselSlider.failure, error });
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
function* Movies(params: ActionType<typeof CallMovies.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallMovies.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallMovies.failure, error });
  }
}
function* TvDetails(params: ActionType<typeof CallTvDetails.request>) {
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

function* TvCast(params: ActionType<typeof CallCast.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: ICast[] = yield call(FetchApiCast, params.payload);
    yield console.log("saga ", payload);
    yield put(CallCast.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallCast.failure, error });
  }
}

export function* Movie_Saga() {
  yield all([
    takeEvery(getType(CallCrouselSlider.request), CrouselSlider),
    takeEvery(getType(CallMoviePopular.request), MoviePopular),
    takeEvery(getType(CallMovieUpcoming.request), MovieUpcoming),
    takeEvery(getType(CallTvPopular.request), TvPopular),
    takeEvery(getType(CallTvTrending.request), TvTrending),
    takeEvery(getType(CallTvRecommend.request), TvRecommend),
    takeEvery(getType(CallMovies.request), Movies),
    takeEvery(getType(CallTvDetails.request), TvDetails),
    takeEvery(getType(CallCast.request), TvCast),
  ]);
}
