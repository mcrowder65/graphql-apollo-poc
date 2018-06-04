import { call, put, select} from "redux-saga/effects";

import { setPing } from "actions/index";
import {getInput} from "reducers/index";

export const apiCall = async input => {
  // this is up to you whether or not you want to implement this server...
  const res = await fetch(`http://localhost:3000/ping/${input}`, { method: "GET" });
  return res.text();
};

// eslint-disable-next-line
export function* pingServer() {
  try {
    const input = yield select(getInput);
    const resp = yield call(apiCall, input);
    yield put(setPing(resp));
  } catch (e) {
    yield put(setPing(e.message));
  }
}
