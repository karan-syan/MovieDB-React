import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { ICast, Iperson } from "../../utils/type";
import { CallCast, CallCastDetails } from "./action";
import { FetchApiCast, FetchApiDetails } from "../../utils/FetchApi";

export function* TvCast(params: ActionType<typeof CallCast.request>) {
  try {
    const payload: ICast[] = yield call(FetchApiCast, params.payload);
    yield put(CallCast.success(payload));
  } catch (error) {
    yield put({ type: CallCast.failure, error });
  }
}
export function* CastDetails(
  params: ActionType<typeof CallCastDetails.request>
) {
  try {
    const payload: Iperson = yield call(FetchApiDetails, params.payload);
    yield put(CallCastDetails.success(payload));
  } catch (error) {
    yield put({ type: CallCastDetails.failure, error });
  }
}
