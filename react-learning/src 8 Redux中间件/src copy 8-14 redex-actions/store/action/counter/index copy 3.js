import { createActions, handleActions } from 'redux-actions'

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
    [actionTypes.increase]: null,
    [actionTypes.decrease]: null,
    [actionTypes.asyncIncrease]: null, //异步增加
    [actionTypes.asyncDecrease]: null,
    [actionTypes.autoIncrease]: null,
    [actionTypes.stopAutoIncrease]: null,
    [actionTypes.add]: n => n
});
export const { increase, decrease, asyncIncrease, asyncDecrease, autoIncrease, stopAutoIncrease, add } = actions;

export default handlections({
    [increase]: (state) => state + 1,
    [decrease]: (state) => state - 1,
    [add]: (state, action) => state + acion.payload
})

