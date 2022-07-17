import { delay, put, takeEvery } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

function* asyncIncrease() {
    yield delay(2000);
    yield put(increase());
    console.log("触发了asyncIncrease")
}

function* asyncDecrease() {
    yield delay(2000);
    yield put(decrease());
    console.log("触发了asyncDecrease")
}

export default function* counterTask() {
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease)
    console.log("正在监听asyncIncrease、asyncDecrease")
}