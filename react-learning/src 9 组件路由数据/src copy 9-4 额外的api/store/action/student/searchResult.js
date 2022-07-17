import { createActions, handleActions } from 'redux-actions'

export const actionTypes = {
    setStudentsAndTotal: "setStudentsAndTotal",//Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading"),
    fetchStudents: Symbol('fetchStudent')
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

export function fetchStudents() {
    return {
        type: actionTypes.fetchStudents
    }
}
