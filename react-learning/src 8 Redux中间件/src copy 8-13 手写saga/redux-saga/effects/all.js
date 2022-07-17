import { createEffectObj, effectTypes } from "../effectHelper";
import { proc } from "../runSaga";

export function all(generators) {
  return createEffectObj(effectTypes.ALL, {
    generators: generators || [],
  });
}

export function runAllEffect(env, effect, next) {
  const generators = effect.payload.generators;
  const tasks = generators.map((g) => proc(env, g));
  const proms = tasks.map((t) => t.toPromise());
  Promise.all(proms).then((v) => next());
}
