import { actionTypes, setLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { put, takeEvery,cps } from 'redux-saga/effects'

function mockSearchStudents(condition,callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            //callback是nodejs风格  第一个参数是错误 第二个参数是结果
            callback(null, {
                cont: 78,
                datas: [
                    { id: 1, name: "abc" },
                    { id: 2, name: "rico" },
                ]
            });
        }else{
            callback(new Error('出错了'),null); 
        }
    }, 2000);
}


function* fetchStudents() {
    //设置为正在加载中
    yield put(setLoading(true))
    try {
        const resp = yield cps(mockSearchStudents,"test")
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