import { createEffectObj, effectTypes } from "../effectHelper";
import runSage from "../runSaga";

export function fork(generatorFunc, ...args) {
  return createEffectObj(effectTypes.FORK, {
    generatorFunc,
    args,
  });
}

export function runForkEffect(env, value, next) {
  const { generatorFunc, args } = value.payload;
  const task = runSage(env, generatorFunc, ...args);
  next(task);
}
