import { createActions, handleActions } from 'redux-actions'

export const actionTypes = {
    setStudentsAndTotal: "setStudentsAndTotal",//Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading"),
    fetchStudents: Symbol('fetchStudent')
}

// export function setStudentsAndTotal(arr, total) {
//     return {
//         type: actionTypes.setStudentsAndTotal,
//         payload: {
//             datas: arr,
//             total
//         }
//     }
// }

// export function setLoading(isLoading) {
//     return {
//         type: actionTypes.setIsLoading,
//         payload: isLoading
//     }
// }

// export function fetchStudents() {
//     return {
//         type: actionTypes.fetchStudents
//     }
// }


export const { setStudentsAndTotal, setLoading, fetchStudents } = createActions({
    SET_STUDENT_AND_TOTAL: (arr, total) => { return { datas: arr, total } },
    SET_LOADING: (isLoading) => isLoading,
    FETCH_STUDENTS: null
});
export default handleActions({
    [setStudentsAndTotal]: (state, { type, payload }) => { return { ...state, ...payload } },
    [setLoading]: (state, { type, payload }) => { return { ...state, isLoading: payload } },
}, {
    datas: [],
    total: 0,
    isLoading: false
});