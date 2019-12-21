import { createAction } from "../Redux/helpers";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const changeCounter = createAction(CHANGE_COUNTER, "count");

export const incrementCounter = createAction(INCREMENT_COUNTER, "count");
