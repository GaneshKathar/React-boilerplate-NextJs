import { createStore } from "redux";
import reducer from "../Home/reducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer);

export default store;
