import { createStore,bindActionCreators } from 'redux';
import * as actionType from './action/action-type';
import * as numberAction from './action/number-action'
//假设仓库中仅存放了一个数字,该数字的变化可能是+1或者-1
//约定action的格式为:{type:'操作类型',payload:附加数据}

/**
 * reducer本质上就是一个函数
 * @param state 之前仓库中的状态(数据)
 * @param action 描述要作什么对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === actionType.INCREASE) {
        return state + 1;
    } else if (action.type === actionType.DECREASE) {
        return state - 1;
    }
    else if (action.type === actionType.SET) {
        return action.payload;
    }
    else {
        return state;
    }
}

const store = createStore(reducer, 10);
console.log(store);
console.log(store.getState());
const action = numberAction.getDecreaseAction();
store.dispatch(action);
console.log(store.getState());
const bindActions = bindActionCreators(numberAction,store.dispatch);
//store.dispatch(numberAction.getSetAction(3));
//等同于
bindActions.getSetAction(3);
console.log(store.getState());

