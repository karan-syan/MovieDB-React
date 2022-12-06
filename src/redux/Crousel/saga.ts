import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { IMovie } from "../../utils/type";
import { FetchApi } from "../../utils/FetchApi";
import { CallCrouselSlider } from "./action";

export function* CrouselSlider(
  params: ActionType<typeof CallCrouselSlider.request>
) {
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
