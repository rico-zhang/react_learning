import { cancel, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"


function* stopTask() {
    if (task) {
        yield cancel(task);
    }
}

let task;
function* autoIncrease() {
    while (true) {
        yield take(actionTypes.autoIncrease)
        yield* stopTask();
        task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(increase());
            }
        })
    }
}
function* stopAutoIncrease() {
    yield* stopTask();
}

export default function* () {
    yield fork(autoIncrease);
    yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncrease)
    console.log("正在监听autoIncrease")
}