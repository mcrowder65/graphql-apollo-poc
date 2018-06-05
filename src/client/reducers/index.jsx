import { combineReducers } from "redux";

import { SET_INPUT, SET_PING, } from "../actions/types";
import initialState from "./initial-state";

const input = (state = initialState.input, action) => {
  if (action.type === SET_INPUT) {
    return action.input;
  }
  return state;
};

export const getInput = state => state.input;
const ping = (state = initialState.ping, action) => {
  if (action.type === SET_PING) {
    return action.ping;
  }
  return state;
};

export default combineReducers({
  ping,
  input
});