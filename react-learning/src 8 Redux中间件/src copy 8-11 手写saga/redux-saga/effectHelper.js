//该模块为创建effect和判断effect提供支持

//effect的可用类型
export const effectTypes = {
  CALL: "CALL",
  TAKE: "TAKE",
  FORK: "FORK",
  ALL: "ALL",
};

const specialEffectName = "@@redux-saga/IO";

/**
 * 创建effect
 * @param {*} type 有效的effect类型
 * @param {*} payload
 */
export function createEffect(type, payload) {
  if (!Object.values(effectTypes).includes(type)) {
    throw new TypeError("这是一个无效的type值");
  }
  return {
    [specialEffectName]: true,
    type,
    payload,
  };
}

export function isEffect(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj[specialEffectName] === true) {
    return true;
  }
  return false;
}
