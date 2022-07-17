import isGenerator from "is-generator";
import isPromise from "is-promise";
import { isEffect } from "./effectHelper";
import { Task } from "./Task";
export default function runSaga(env, generatorFunc, ...args) {
  const iterator = generatorFunc(...args);
  if (isGenerator(iterator)) {
    next();
  } else {
    console.log("一个普通函数");
  }

  function next(nextvalue, err, isOVer) {
    let result; //记录迭代的结果 {value:xxx,done:false}
    if (err) {
      result = iterator.throw(err);
    } else if (isOVer) {
      result = iterator.return(); //结束整个迭代
    } else {
      result = iterator.next(nextvalue);
    }
    const { value, done } = result;
    if (done) {
      return; //迭代结束了
    }
    if (isEffect(value)) {
      //情况1 value是一个effect 对象
      console.log("是一个effect");
    } else if (isPromise(value)) {
      //情况2 value是一个promise
      value.then((r) => next(r)).catch((err) => next(null, err));
    } else {
      //情况3 其他
      next(value);
    }
  }
  return new Task();
}
