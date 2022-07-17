import { call, delay, put, select } from "../../redux-saga/effects";
import { decrease } from "../action/counter";

function test(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(arg);
      }
    }, 2000);
  });
}
/**
 * saga任务
 */
export default function* sagaTask() {
  const result = yield call(test, "abc");
  console.log(result);
  yield delay(2000);
  let state = yield select((state) => state.counter);
  console.log(state);
  yield put(decrease());
  state = yield select((state) => state.counter);
  console.log(state);
  console.log("saga完成");
}
