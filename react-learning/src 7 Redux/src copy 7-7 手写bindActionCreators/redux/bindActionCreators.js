export default function (actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return AutoDispatchFunc(actionCreators, dispatch);
    } else if (typeof actionCreators == "object") {
        const result={};
        for (const key in actionCreators) {
            if (Object.hasOwnProperty.call(actionCreators, key)) {
                result[key] = AutoDispatchFunc(actionCreators[key],dispatch);
            }
        }
        return result;
    }
    else {
        throw new TypeError("param actionCreators must be a function or object");
    }
}

function AutoDispatchFunc(actionCreators, dispatch) {
    return function (...args) {
        const action = actionCreators(...args);
        dispatch(action);
    }
}