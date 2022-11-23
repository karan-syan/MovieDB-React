import { Settings } from "http2";
import { put, takeLatest } from "redux-saga/effects";
import {
  SAVE_DATA_FOR_MOVIE,
  CALL_MOVIE_API,
  CALL_TV_API,
  SAVE_DATA_FOR_TV,
} from "../../util/constants";
import { MovieApiInteface, TvApiInteface } from "../../util/type";
import { fetchApiSlider } from "./fetching/FetchApi";

function* forMovie(action: { type: string; payload: string }) {
  try {
    let payload: MovieApiInteface[] = yield fetchApiSlider(action.payload);
    yield console.log("saga");

    yield put({ type: SAVE_DATA_FOR_MOVIE, payload });
  } catch (error) {
    yield console.log(error);
  }
}
function* fortv(action: { type: string; payload: string }) {
  try {
    let payload: TvApiInteface[] = yield fetchApiSlider(action.payload);
    yield console.log("saga");

    yield put({ type: SAVE_DATA_FOR_TV, payload });
  } catch (error) {
    yield console.log(error);
  }
}
export function* MovieDB_Saga() {
  yield takeLatest(CALL_MOVIE_API, forMovie);
  yield takeLatest(CALL_TV_API, fortv);
}
