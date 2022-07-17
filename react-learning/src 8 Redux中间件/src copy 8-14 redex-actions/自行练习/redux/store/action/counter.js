export const ActionTypes = {
    increase: "INCREASE",
    decrease: "DECREASE"
}

export function increaseActionCreator() {
    return { type: ActionTypes.increase }
}

export function decreaseActionCreator() {
    return { type: ActionTypes.decrease }
}

export default 1;