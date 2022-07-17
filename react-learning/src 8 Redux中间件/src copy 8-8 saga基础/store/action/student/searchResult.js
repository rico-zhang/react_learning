import { searchStudents } from '../../../services/student'


export const actionTypes = {
    setStudentsAndTotal: "setStudentsAndTotal",//Symbol("setStudentsAndTotal"),
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

