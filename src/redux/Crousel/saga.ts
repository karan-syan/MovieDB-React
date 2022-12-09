import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie } from "../../utils/type";
import { FetchApi } from "../../utils/FetchApi";
import { CallCrouselSlider } from "./action";

export function* CrouselSlider(
  params: ActionType<typeof CallCrouselSlider.request>
) {
  try {
    const payload: IMovie[] = yield call(FetchApi, params.payload);
    yield put(CallCrouselSlider.success(payload));
  } catch (error) {
    yield put({ type: CallCrouselSlider.failure, error });
  }
}
