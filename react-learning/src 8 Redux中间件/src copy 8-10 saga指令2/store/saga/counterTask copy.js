import { cancel, delay, fork, put, take, takeEvery } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

// function* asyncIncrease() {
//     yield delay(2000);
//     yield put(increase());
//     console.log("触发了asyncIncrease")
// }

function* asyncIncrease() {
    let task;
    while (true) {
        yield take(actionTypes.asyncIncrease);
        //监听到了action 并且在开启新任务之前 取消之前的任务
        if (task) {
            yield cancel(task);
        }
        task = yield fork(function* () {
            yield delay(2000);
            yield put(increase());
        });
        console.log("触发了asyncIncrease");
    }
}

function* asyncDecrease() {
    yield delay(2000);
    yield put(decrease());
    console.log("触发了asyncDecrease")
}

export default function* counterTask() {
    // yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    //使用 fork 实现 takeEvery
    yield fork(asyncIncrease)
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease)
    console.log("正在监听asyncIncrease、asyncDecrease")
}