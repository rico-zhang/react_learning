import { createEffectObj, effectTypes } from "../effectHelper";

export function take(type) {
  return createEffectObj(effectTypes.TAKE, {
    type,
  });
}

export function runTakeEffect(env, value, next) {
  const { chanel } = env;
  const { type } = value.payload;
  chanel.take(type, (action) => {
    next(action);
  });
}
