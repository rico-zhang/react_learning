import { createEffect, effectTypes } from "../effectHelper";
import isPromise from "is-promise";

export function call(fn, ...args) {
  let context = null; //this指向
  let func = fn; //要运行的函数
  if (Array.isArray(fn)) {
    context = fn[0];
    func = fn[1];
  }
  return createEffect(effectTypes.CALL, {
    context,
    fn: func,
    args,
  });
}

export function runCallEffect(env, effect, next) {
  const { context, fn, args } = effect.payload;
  const result = fn.call(context, ...args);
  if (isPromise(result)) {
    result.then((r) => next(r)).catch((err) => next(null, err));
  } else {
    next(result);
  }
}
