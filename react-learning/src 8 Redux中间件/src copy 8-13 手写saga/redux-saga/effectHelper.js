const specialEffectName = "@@redux-saga/IO";

export const effectTypes = {
  CALL: "CALL",
  SELECT: "SELECT",
  PUT: "PUT",
  TAKE: "TAKE",
  FORK: "FORK",
  CANCEL: "CANCEL",
  ALL: "ALL",
};
export function createEffectObj(type, payload) {
  if (!Object.values(effectTypes).includes(type)) {
    throw new TypeError("这是一个无效的type值");
  }
  return {
    [specialEffectName]: true,
    type,
    payload,
  };
}

export function isEffectObj(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj[specialEffectName] === true) {
    return true;
  }
  return false;
}
