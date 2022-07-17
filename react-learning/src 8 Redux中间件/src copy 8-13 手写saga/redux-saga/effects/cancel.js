import { createEffectObj, effectTypes } from "../effectHelper";

export function cancel(task) {
  return createEffectObj(effectTypes.CANCEL, {
    task,
  });
}

export function runCancelEffect(env, effect, next) {
  effect.payload.task.cancel(); //cancel中的next指向的它对应任务的next
  next(); //这里的next是当前的next
}
