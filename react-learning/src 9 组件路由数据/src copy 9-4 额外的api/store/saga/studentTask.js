import { actionTypes, setLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { searchStudents } from '../../services/student'
import { put, takeEvery, cps, call, select } from 'redux-saga/effects'


function* fetchStudents() {
    //设置为正在加载中
    yield put(setLoading(true))
    try {
        const condition = yield select((state) => state.student.searchCondition);
        const resp = yield call(searchStudents, condition)
        yield put(setStudentsAndTotal(resp.datas, resp.cont))
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        yield put(setLoading(false));
    }
}
export default function* studentTask() {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}