import { cancel, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

function* autoIncreasex() {
    while (true) {
        yield delay(2000);
        yield put(increase());
    }
}

function* autoIncreasey() {
    let task;
    while (true) {
        yield take(actionTypes.autoIncrease);
        if (task) {
            yield cancel(task);
        }
        task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(increase());
            }
        })
    }
}

export default function* counterTask() {
    yield takeLatest(actionTypes.autoIncrease, autoIncreasex);
    //使用fork 实现 takeLatest
    // yield fork(autoIncreasey);
}