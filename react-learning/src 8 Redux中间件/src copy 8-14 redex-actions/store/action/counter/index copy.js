

import { createAction } from 'redux-actions'

export const actionTypes = {
    increase: Symbol("increase"),
    decrease: Symbol("decrease"),
    asyncIncrease: Symbol("async-increase"), //异步增加
    asyncDecrease: Symbol("async-decrease"),
    autoIncrease: Symbol("auto-incease"),
    stopAutoIncrease: Symbol("stop-auto-increase"),
    add: Symbol('add')
}

//手写createAction
// function createAction(type, payloadCreator, metaCreator) {
//     return function actionCreator(...args) {
//         let payload = undefined;
//         let meta = undefined;
//         if (typeof payloadCreator === "function") {
//             const payload = payloadCreator(...args);
//         }
//         if (typeof metaCreator === "function") {
//             meta = metaCreator();
//         }
//         return { type, payload, meta }
//     }
// }

export const increase = createAction(actionTypes.increase);
export const decrease = createAction(actionTypes.decrease);
export const asyncIncrease = createAction(actionTypes.asyncIncrease);
export const asyncDecrease = createAction(actionTypes.asyncDecrease);
export const autoIncrease = createAction(actionTypes.autoIncrease);
export const stopAutoIncrease = createAction(actionTypes.stopAutoIncrease);
export const add = createAction(actionTypes.add, n => n)


// export function increase() {
//     return { type: actionTypes.increase }
// }

// export function decrease() {
//     return { type: actionTypes.decrease }
// }

// export function asyncIncrease() {
//     return { type: actionTypes.asyncIncrease }
// }

// export function asyncDecrease() {
//     return { type: actionTypes.asyncDecrease }
// }

// export function autoIncrease() {
//     return { type: actionTypes.autoIncrease }
// }
// export function stopAutoIncrease() {
//     return { type: actionTypes.stopAutoIncrease }
// }

// export function add(number) {
//     return { type: actionTypes.add, payload: number }
// }

