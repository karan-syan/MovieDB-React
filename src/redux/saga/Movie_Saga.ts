import { all, call, put, takeEvery } from "redux-saga/effects";
import { ActionType, getType } from "typesafe-actions";
import { ICast, IMovie, IMovieDetails, ITvDetails } from "../../utils/type";
import {
  CallCast,
  CallCrouselSlider,
  CallMovieDetails,
  CallMoviePopular,
  CallMovies,
  CallMovieUpcoming,
  CallRecommend,
  CallSearch,
  CallTvDetails,
  CallTvPopular,
  CallTvTrending,
} from "../action/ActionCallApi";
import {
  FetchApi,
  FetchApiCast,
  FetchApiDetails,
  FetchApiRecommend,
  FetchSearchApi,
} from "./fetching/FetchApi";

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

function* Recommend(params: ActionType<typeof CallRecommend.request>) {
  try {
    yield console.log("saga ", params.payload.url);
    const payload: IMovie[] = yield call(FetchApiRecommend, params.payload);
    yield console.log("saga ", payload);
    yield put(CallRecommend.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallRecommend.failure, error });
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
function* MovieDetails(params: ActionType<typeof CallMovieDetails.request>) {
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
function* Search(params: ActionType<typeof CallSearch.request>) {
  try {
    const payload: IMovie[] = yield call(FetchSearchApi, params.payload);
    yield console.log("saga ", payload);
    yield put(CallSearch.success(payload));
  } catch (error) {
    yield console.log("saga ", error);
    yield put({ type: CallSearch.failure, error });
  }
}

export function* Movie_Saga() {
  yield all([
    takeEvery(getType(CallCrouselSlider.request), CrouselSlider),
    takeEvery(getType(CallMoviePopular.request), MoviePopular),
    takeEvery(getType(CallMovieUpcoming.request), MovieUpcoming),
    takeEvery(getType(CallTvPopular.request), TvPopular),
    takeEvery(getType(CallTvTrending.request), TvTrending),
    takeEvery(getType(CallRecommend.request), Recommend),
    takeEvery(getType(CallMovies.request), Movies),
    takeEvery(getType(CallTvDetails.request), TvDetails),
    takeEvery(getType(CallMovieDetails.request), MovieDetails),
    takeEvery(getType(CallCast.request), TvCast),
    takeEvery(getType(CallSearch.request), Search),
  ]);
}
