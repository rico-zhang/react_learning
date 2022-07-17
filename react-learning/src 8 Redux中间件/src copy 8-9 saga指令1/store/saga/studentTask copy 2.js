import { actionTypes, setLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { put, takeEvery } from 'redux-saga/effects'
import { searchStudents } from '../../services/student'


function* fetchStudents() {
    yield put(setLoading(true));
    //当saga发现得到的结果是一个promise对象 它会自动等待改Promise完成
    //完成之后，会把完成的结果作为值传递到下一次next
    //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
    const resp = yield searchStudents();
    yield put(setStudentsAndTotal(resp.datas, resp.cont));
    yield put(setLoading(false))
}

export default function* studentTask() {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}