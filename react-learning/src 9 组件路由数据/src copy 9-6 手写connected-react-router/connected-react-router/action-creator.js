import { LOCATION_CHANGE, CALL_HISTORY_METHOD } from "./actionTypes";

export function createLocationChangeAction(action, location) {
  return {
    type: LOCATION_CHANGE,
    payload: {
      action,
      location,
    },
  };
}

export function push(...args) {
  return {
    type: CALL_HISTORY_METHOD,
    payload: {
      method: "push",
      args,
    },
  };
}

export function replace(...args) {
  return {
    type: CALL_HISTORY_METHOD,
    payload: {
      method: "replace",
      args,
    },
  };
}
