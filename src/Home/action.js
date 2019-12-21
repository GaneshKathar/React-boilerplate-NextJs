export const CHANGE_COUNTER = "CHANGE_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const changeCounter = count => ({
  type: CHANGE_COUNTER,
  payload: {
    count
  }
});

export const incrementCounter = count => ({
  type: INCREMENT_COUNTER,
  payload: {
    count: count
  }
});
