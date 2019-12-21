import { INCREMENT_COUNTER } from "./action";
import { createReducer, mergeObject } from "../Redux/helpers";
const initialState = {
  count: 0
};

const incrementCount = (state, { payload }) => {
  return mergeObject(state, {
    count: state.count + payload.count
  });
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCount
});
