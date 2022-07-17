import { actionTypes, setLoading } from '../action/student/searchResult'
import { put, takeEvery } from 'redux-saga/effects'

function mockSearchStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5)
                resolve("学生数据");
            else
                reject("发生错误");
        }, 2000);
    })
}

function* fetchStudents() {
    yield put(setLoading());
    //当saga发现得到的结果是一个promise对象 它会自动等待改Promise完成
    //完成之后，会把完成的结果作为值传递到下一次next
    //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
    try {
        const resp = yield mockSearchStudents();
        console.log(resp);
    } catch (error) {
        //error为reject的结果
        console.log(error);
    }
}



export default function* studentTask() {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}