import { createStore, bindActionCreators } from 'redux';
import { createLoginUserACtin } from './action/loginUserAction'
import { createusersAction } from './action/usersAction';
import reducer from './reducer/index';

const store = createStore(reducer);
const unsub=store.subscribe(()=>{console.log("状态改变了");});
const bindLoginUserAction = bindActionCreators(createLoginUserACtin, store.dispatch);
const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
bindLoginUserAction.createSetLoginUserAction({ id: '001', name: 'rico' });
bindUsersAction.createAddUserAction({ id: '002', name: 'zhang' });
bindUsersAction.createUpdateUserAction('0002', { id: '002', name: 'long' });
unsub();
bindUsersAction.createDeleteUserAction('001');
console.log(store.getState());