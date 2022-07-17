

function isPlainObj(obj) {
    if (obj === null || typeof (obj) !== "object")
        return false;
    if (Object.getPrototypeOf(obj) !== Object.prototype)
        return false
    return true;
}

function getRandomStr() {
    return Math.random().toString(36).substr(2).split("").join('.')
}
export default function createStore(reducer, defaultState) {
    let currentState = defaultState,
        currentReducer = reducer;
    let listeners = [];
    function getState() {
        return currentState;
    }
    function dispatch(action) {
        if (!isPlainObj(action))
            throw new TypeError("action must be a plain object");
        if (action.type === undefined)
            throw new TypeError("action must has a prop type");
        currentState = currentReducer(currentState, action);
        listeners.forEach(fn => { fn() })
    }
    function subscribe (fn) {
        if (typeof (fn) !== "function") {
            throw new TypeError("param must be a function");
        }
        listeners.push(fn);
        let isMove = false;
        return function () {
            if (!isMove) {
                listeners = listeners.filter(it => it !== fn);
                isMove = true;
            }
        }
    }

    dispatch({ type: getRandomStr() });
    return {
        getState,
        dispatch,
        subscribe 
    }
}