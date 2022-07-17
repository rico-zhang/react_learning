import isPlainObj from './utils/isPlainObj';
import ActionType from './utils/ActionType';

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

    dispatch({ type:ActionType.INIT() });
    return {
        getState,
        dispatch,
        subscribe 
    }
}