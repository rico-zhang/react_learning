import isPromise from "is-promise";
import { createEffectObj, effectTypes } from "../effectHelper";

export function call(fn, ...args) {
  let context = null;
  let func = fn;
  if (Array.isArray(fn)) {
    context = fn[0];
    func = fn[1];
  }
  return createEffectObj(effectTypes.CALL, {
    context,
    fn: func,
    args,
  });
}

export function runCallEffect(env, value, next) {
  const { context, fn, args } = value.payload;
  const result = fn.call(context, ...args);
  if (isPromise(result)) {
    result.then((r) => next(r)).catch((e) => next(null, e));
  } else {
    next(result);
  }
}
