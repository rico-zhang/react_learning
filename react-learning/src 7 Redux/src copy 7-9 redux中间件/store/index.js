
import { createStore, bindActionCreators, applyMiddleware } from 'redux'
import { createLoginUserAction } from './action/loginUserAction'
import { createusersAction } from './action/usersAction';
import reducer from './reducer/index';


function log1(store) {
    return function (next) {
        return function (action) {
            console.log("旧状态1", store.getState());
            console.log("action1", action);
            next(action);
            console.log("新状态1", store.getState());
        }
    }
}
// const log1 = store => next => action => {
//     console.log("旧状态1", store.getState());
//     console.log("action1", action);
//     next(action);
//     console.log("新状态1", store.getState());
// }
function log2(store) {
    return function (next) {
        return function (action) {
            console.log("旧状态2", store.getState());
            console.log("action2", action);
            next(action);
            console.log("新状态2", store.getState());
        }
    }
}
// const log2 = store => next => action => {
//     console.log("旧状态2", store.getState());
//     console.log("action2", action);
//     next(action);
//     console.log("新状态2", store.getState());
// }

const store = createStore(reducer, applyMiddleware(log1, log2));


const bindLoginUserAction = bindActionCreators(createLoginUserAction, store.dispatch);
const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
bindLoginUserAction.createSetLoginUserAction({ id: '001', name: 'rico' });
bindUsersAction.createAddUserAction({ id: '002', name: 'zhang' });
bindUsersAction.createUpdateUserAction('0002', { id: '002', name: 'long' });
bindUsersAction.createDeleteUserAction('001');