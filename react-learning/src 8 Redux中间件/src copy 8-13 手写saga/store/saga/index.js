import { call, delay, select, put, take, fork } from "../../redux-saga/effects";
import {
  decrease,
  asyncIncrease,
  increase,
  actionTypes,
} from "../action/counter";
import { dealy } from "redux-saga/effects";

function test(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arg);
    }, 2000);
  });
}
/**
 * saga任务
 */
export default function* sagaTask() {
  //   const result = yield call(test, "123");
  //   yield delay(2000);

  //   let state = yield select((state) => state);
  //   console.log(state);

  //   yield put(decrease());
  //   state = yield select((state) => state);

  //   console.log(state);

  //   yield take(actionTypes.asyncIncrease);
  //   yield delay(2000);
  //   yield put(increase());

  yield fork(task, 1, 2);
  console.log("fork");
}

function* task(a, b) {
  console.log(a, b);
  yield take(actionTypes.asyncIncrease);
  yield delay(2000);
  yield put(increase());
}
