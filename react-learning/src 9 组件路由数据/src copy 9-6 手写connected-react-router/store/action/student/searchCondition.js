import { createAction, handleAction } from "redux-actions"

export const actionTypes = {
    change: Symbol("change")
}

export function change(condition) {
    return {
        type: actionTypes.change,
        payload: condition
    }
}
