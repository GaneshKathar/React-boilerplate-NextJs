import { createStore } from "redux";
import reducer from "../Home/reducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import rootSaga from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
