import { searchStudents } from '../../../services/student'

export const actionTypes = {
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

export function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

export function setLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

export function fetchStudent() {
    return async function (dispatch, getState) {
        dispatch(setLoading(true));
        const { student: { searchCondition: condition } } = getState();
        const res = await searchStudents(condition);
        dispatch(setStudentsAndTotal( res.datas, res.cont ));
        dispatch(setLoading(false));
    }
}