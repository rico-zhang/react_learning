import { handleAction, handleActions } from 'redux-actions';
import { actionTypes, increase, decrease, add } from '../../action/counter'
const counter = (state = 10, { type, payload }) => {
    switch (type) {
        case actionTypes.increase:
            return state + 1;
        case actionTypes.decrease:
            return state - 1;
        case actionTypes.add:
            return state + payload;
        default:
            return state
    }
}

//handleAction 针对单个reducer 
// const reducer = handleAction("INCREASE", (state, action) => {
//     return state + 1;
// }, 10);
//第一个参数还可以为action创建函数 即increase 因为CreateAction(s)中返回的
//action创建函数重写了toString属性 返回action的type
// const reducer = handleAction(increase, (state, action) => {
//     return state + 1;
// }, 10)

//handleActions 针对多个reducer
// const reducer = handleActions({
//     INCREASE: (state, action) => state + 1,
//     DECREASE: (state, action) => state - 1,
//     ADD: (state, action) => state + action.payload
// })
//属性还可以为action创建函数
const reducer = handleActions({
    [increase]: (state, action) => state + 1,
    [decrease]: (state, action) => state - 1,
    [add]: (state, action) => state + action.payload
},10)

export default reducer;