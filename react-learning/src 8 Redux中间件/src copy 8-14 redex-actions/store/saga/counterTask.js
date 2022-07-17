import { cancel, delay, fork, put, take, takeEvery, takeLatest, call, race } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

//异步得到一个action
function asyncAction() {
    const duration = Math.floor(Math.random() * 4000 + 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            if (Math.random() > 0.5)
                resolve(increase());
            else
                resolve(decrease());
        }, duration);
    })
}


export default function* () {
    const result = yield race({
        action1: call(asyncAction),
        action2: call(asyncAction),
    });
    console.log(result);
}
