import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie } from "../../utils/type";
import { FetchSearchApi } from "../../utils/FetchApi";
import { CallSearch } from "./action";

export function* Search(params: ActionType<typeof CallSearch.request>) {
  try {
    const payload: IMovie = yield call(FetchSearchApi, params.payload);
    yield put(CallSearch.success(payload));
  } catch (error) {
    yield put({ type: CallSearch.failure, error });
  }
}
