import isGenerator from "is-generator";
import isPromise from "is-promise";
import { isEffectObj } from "./effectHelper";
import runEffect from "./runEffect";
import Task from "./Task";
export default function runSage(env, generatorFunc, ...args) {
  const iteritor = generatorFunc(...args);
  if (isGenerator(iteritor)) {
    return proc(env, iteritor);
  } else {
    console.log("这是一个普通函数");
  }
}

export function proc(env, iteritor) {
  let cbObj = {
    callback: null,
  };
  next();
  function next(nextValue, err, isOver) {
    let result = null;
    if (isOver) {
      cbObj.callback && cbObj.callback();
      result = iteritor.return();
    } else if (err) {
      result = iteritor.throw(err);
    } else {
      result = iteritor.next(nextValue);
    }
    const { done, value } = result;
    if (done) {
      cbObj.callback && cbObj.callback();
      return;
    }
    if (isEffectObj(value)) {
      runEffect(env, value, next);
    } else if (isPromise(value)) {
      value.then(
        (r) => next(r),
        (e) => next(null, e)
      );
    } else {
      next(value);
    }
  }
  return new Task();
}
