import { combineReducers } from "redux";
import homeReducer from "../Home/reducer";

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
