import { createEffectObj, effectTypes } from "../effectHelper";

export function put(action) {
  return createEffectObj(effectTypes.PUT, {
    action,
  });
}

export function runPutEffect(env, value, next) {
  const { dispatch } = env.store;
  const { action } = value.payload;
  const result = dispatch(action);
  next(result);
}
