import { actionTypes, setLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { put, takeEvery, call, apply, select } from 'redux-saga/effects'
import { searchStudents } from '../../services/student'


function* fetchStudents() {
    yield put(setLoading(true));
    //使用call 可以绑定this 传递参数
    const resp = yield call(searchStudents);
    // const resp1 = yield apply(null,searchStudents);
    yield put(setStudentsAndTotal(resp.datas, resp.cont));
    yield put(setLoading(false))

    const storeData = yield select();
    console.log(storeData);
}

export default function* studentTask() {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}