import { createEffectObj, effectTypes } from "../effectHelper";

export function select(fn) {
  return createEffectObj(effectTypes.SELECT, {
    fn,
  });
}

export function runSelectEffect(env, value, next) {
  const { fn } = value.payload;
  let state = env.store.getState();
  if (fn) {
    state = fn(state);
  }
  next(state);
}
