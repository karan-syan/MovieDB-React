import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { FetchApiDetails } from "../../utils/FetchApi";
import { IDetails } from "../../utils/type";
import { CallDetails } from "./action";

export function* Details(params: ActionType<typeof CallDetails.request>) {
  try {
    const payload: IDetails = yield call(FetchApiDetails, params.payload);
    yield put(CallDetails.success(payload));
  } catch (error) {
    yield put({ type: CallDetails.failure, error });
  }
}
