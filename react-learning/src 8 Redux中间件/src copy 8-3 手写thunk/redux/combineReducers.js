import isPlainObj from './utils/isPlainObj';
import ActionType from './utils/ActionType';

function validateReducers(reducers) {
    if (typeof reducers !== "object") {
        throw new TypeError("reducers must be an object");
    }
    if (!isPlainObj(reducers)) {
        throw new TypeError("reducers must be a plain object");
    }
    //验证reducer的返回结果是不是undefined
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];//拿到reducer
            //传递一个特殊的type值
            let state = reducer(undefined, {
                type: ActionType.INIT()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
            state = reducer(undefined, {
                type: ActionType.UNKNOWN()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
        }
    }
}

export default function combineReducers(reducers) {
    //1. 验证
    validateReducers(reducers);
    /**
     * 返回的是一个reducer函数
     */
    return function (state = {}, action) {
        const newState = {}; //要返回的新的状态
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState; //返回状态
    }
}
