import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie } from "../../utils/type";
import { FetchApi } from "../../utils/FetchApi";
import { CallMovies } from "./action";

export function* Movies(params: ActionType<typeof CallMovies.request>) {
  try {
    const payload: IMovie = yield call(FetchApi, params.payload);
    yield put(CallMovies.success(payload));
  } catch (error) {
    yield put({ type: CallMovies.failure, error });
  }
}
