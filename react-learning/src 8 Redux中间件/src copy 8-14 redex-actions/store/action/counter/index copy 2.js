import { createActions, createAction } from 'redux-actions'

//使用 createActions时 type必须为字符串
export const actionTypes = {
    increase: "INCREASE",
    decrease: "DECREASE",
    asyncIncrease: "ASYNC_INCREASE", //异步增加
    asyncDecrease: "ASYNC_DECREASE",
    autoIncrease: "AUTO_INCREASE",
    stopAutoIncrease: "STOP_INCREASE",
    add: "ADD"
}

//手写createActions
// function createActions(mapToActionCreators) {
//     const result = {};
//     for (const prop in mapToActionCreators) {
//         if (Object.hasOwnProperty.call(mapToActionCreators, prop)) {
//             const newPropName = toSmallCamel(prop);
//             const payloadCreator = mapToActionCreators[prop];
//             const actionCreator  = function actionCreator(...args) {
//                 if (typeof payloadCreator === "function") {
//                     return {
//                         type: prop,
//                         payload: payloadCreator(...args)
//                     }
//                 } else {
//                     return {
//                         type: prop
//                     }
//                 }
//             };
//             actionCreator.toString = function(){
//                 return prop;
//             }
//             result[newPropName] = actionCreator;
//         }
//     }
//     return result;
// }

function toSmallCamel(str) {
    return str.split('_').map((s, i) => {
        s = s.toLowerCase();
        if (i !== 0 && str.length >= 1) {
            s = s[0].toUpperCase + s.substr(1);
        }
        return s;
    }).join('')
}

const actions = createActions({
    [actionTypes.increase]: null,
    [actionTypes.decrease]: null,
    [actionTypes.asyncIncrease]: null, //异步增加
    [actionTypes.asyncDecrease]: null,
    [actionTypes.autoIncrease]: null,
    [actionTypes.stopAutoIncrease]: null,
    [actionTypes.add]: n => n
});
console.log(actions)
export const { increase, decrease, asyncIncrease, asyncDecrease, autoIncrease, stopAutoIncrease, add } = actions;

