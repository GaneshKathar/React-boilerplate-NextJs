import { homeSaga } from "../Home/saga";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(homeSaga);
}
