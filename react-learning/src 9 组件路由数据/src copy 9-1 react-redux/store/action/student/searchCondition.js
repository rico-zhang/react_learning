import { createAction, handleAction } from "redux-actions"

export const actionTypes = {
    change: Symbol("change")
}

// export function change(condition) {
//     return {
//         type: actionTypes.change,
//         payload: condition
//     }
// }

export const change = createAction("CHANGE", condition => condition);
export default handleAction(change, (state, action) => {
    return { ...state, ...action.payload }
}, {
    key: '',
    sex: -1,
    page: 1,
    limit: 10
});