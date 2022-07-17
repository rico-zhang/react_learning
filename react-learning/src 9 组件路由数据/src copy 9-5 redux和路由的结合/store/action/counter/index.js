import { combineActions, createActions, handleActions } from 'redux-actions'

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

const actions = createActions({
    [actionTypes.increase]: () => 1,
    [actionTypes.decrease]: () => -1,
    [actionTypes.asyncIncrease]: null, //异步增加
    [actionTypes.asyncDecrease]: null,
    [actionTypes.autoIncrease]: null,
    [actionTypes.stopAutoIncrease]: null,
    [actionTypes.add]: n => n
});
export const { increase, decrease, asyncIncrease, asyncDecrease, autoIncrease, stopAutoIncrease, add } = actions;

// export default handlections({
//     [increase]: (state, action) => state + action.payload,
//     [decrease]: (state, action) => state + acion.payload,
//     [add]: (state, action) => state + acion.payload
// },10)

//由于increase decrease add 的reducer处理函数都一样 
//即多个action对应同一个reducer 所以可以用combinActions进行合并action
const fn = combineActions(increase, decrease, add);
export default handleActions({
    [fn]: (state, action) => state + action.payload,
},10)
