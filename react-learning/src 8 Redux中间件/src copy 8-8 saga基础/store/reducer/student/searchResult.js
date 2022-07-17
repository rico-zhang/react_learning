import { actionTypes } from '../../action/student/searchResult'

const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

const searchResult = (state = initialState, { type, payload }) => {
    console.log(payload);
    switch (type) {
        case actionTypes.setStudentsAndTotal:
            return { ...state, ...payload };
        case actionTypes.setIsLoading:
            return { ...state, isLoading: payload }
        default:
            return state
    }
}
export default searchResult;