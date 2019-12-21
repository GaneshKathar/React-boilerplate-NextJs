export const createReducer = (initialState, reducerHandlers) => (
  state = initialState,
  action
) => {
  return reducerHandlers[action.type]
    ? reducerHandlers[action.type](state, action)
    : state;
};

export const createAction = (type, ...argKeys) => {
  return (...argValues) => {
    const payload = {};
    argKeys.forEach((argKey, index) => (payload[argKey] = argValues[index]));
    return {
      type,
      payload
    };
  };
};

export const mergeObject = (target, source) => {
  return Object.assign({}, target, source);
};
