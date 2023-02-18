import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie } from "../../utils/type";
import { FetchApiRecommend } from "../../utils/FetchApi";
import { CallRecommend } from "./action";

export function* Recommend(params: ActionType<typeof CallRecommend.request>) {
  try {
    const payload: IMovie = yield call(FetchApiRecommend, params.payload);
    yield put(CallRecommend.success(payload));
  } catch (error) {
    yield put({ type: CallRecommend.failure, error });
  }
}
