import { cancel, delay, fork, put, take, takeEvery, takeLatest, call, race } from "redux-saga/effects"
import { actionTypes, increase, decrease, asyncIncrease, asyncDecrease } from "../action/counter"

function* asyncIncreaseTask() {
    yield delay(2000);
    yield put(increase());
}
function* asyncDecreaseTask() {
    yield delay(2000);
    yield put(decrease());
}

export default function* () {
    yield takeEvery(asyncIncrease.toString(), asyncIncreaseTask)
    yield takeEvery(asyncDecrease.toString(), asyncDecreaseTask)
}
