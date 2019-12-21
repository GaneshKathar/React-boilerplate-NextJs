import { takeEvery, put } from "@redux-saga/core/effects";
import { CHANGE_COUNTER, incrementCounter } from "./action";

function* changeCounterSaga(action) {
  console.log("counter saga");
  const { count } = action.payload;
  yield put(incrementCounter(count));
}

export function* homeSaga() {
  yield takeEvery(CHANGE_COUNTER, changeCounterSaga);
}
