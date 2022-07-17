import { createStore, bindActionCreators } from 'redux'
import { createLoginUserAction } from './action/loginUserAction'
import { createusersAction } from './action/usersAction';
import reducer from './reducer/index';

const store = createStore(reducer);

let oldDispatch = store.dispatch;
store.dispatch = function (action) {
    console.log("旧状态1", store.getState());
    console.log("action1", action);
    oldDispatch(action);
    console.log("新状态1", store.getState());
}
const oldDispatch1 = store.dispatch;
store.dispatch = function(action){
    console.log("旧状态2", store.getState());
    console.log("action2", action);
    oldDispatch1(action);
    console.log("新状态2", store.getState());
}

const bindLoginUserAction = bindActionCreators(createLoginUserAction, store.dispatch);
const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
bindLoginUserAction.createSetLoginUserAction({ id: '001', name: 'rico' });
bindUsersAction.createAddUserAction({ id: '002', name: 'zhang' });
bindUsersAction.createUpdateUserAction('0002', { id: '002', name: 'long' });
bindUsersAction.createDeleteUserAction('001');