import { INCREMENT_COUNTER } from "./action";

const initialState = {
  count: 0
};

const incrementCount = (state, { payload }) => {
  const updatedState = Object.assign({}, state, {
    count: state.count + payload.count
  });
  return updatedState;
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return incrementCount(state, action);
    default:
      return state;
  }
};

export default reducer;
