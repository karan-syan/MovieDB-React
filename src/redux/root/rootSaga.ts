import { all, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { CallCrouselSlider } from "../Crousel/action";
import { CrouselSlider } from "../Crousel/saga";
import { CallDetails } from "../Detail/action";
import { Details } from "../Detail/saga";
import { CallMovies } from "../Main/action";
import { Movies } from "../Main/saga";
import { CallMoviePopular, CallMovieUpcoming } from "../Movie/action";
import { MoviePopular, MovieUpcoming } from "../Movie/saga";
import { CallCast, CallCastDetails } from "../People/action";
import { CastDetails, TvCast } from "../People/saga";
import { CallRecommend } from "../Recommend/action";
import { Recommend } from "../Recommend/saga";
import { CallSearch } from "../Search/action";
import { Search } from "../Search/saga";
import { CallTvPopular, CallTvTrending } from "../Tv/action";
import { TvPopular, TvTrending } from "../Tv/saga";

export function* RootSaga() {
  yield all([
    takeEvery(getType(CallCrouselSlider.request), CrouselSlider),
    takeEvery(getType(CallMoviePopular.request), MoviePopular),
    takeEvery(getType(CallMovieUpcoming.request), MovieUpcoming),
    takeEvery(getType(CallTvPopular.request), TvPopular),
    takeEvery(getType(CallRecommend.request), Recommend),
    takeEvery(getType(CallMovies.request), Movies),
    takeEvery(getType(CallDetails.request), Details),
    takeEvery(getType(CallCast.request), TvCast),
    takeEvery(getType(CallSearch.request), Search),
    takeEvery(getType(CallTvTrending.request), TvTrending),
    takeEvery(getType(CallCastDetails.request), CastDetails),
  ]);
}
