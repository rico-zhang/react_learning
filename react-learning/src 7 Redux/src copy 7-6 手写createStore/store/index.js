import {bindActionCreators} from 'redux'
import { createStore } from '../redux/index'
import { createLoginUserACtion } from './action/loginUserAction'
import { createusersAction } from './action/usersAction';
import reducer from './reducer/index';

const store = createStore(reducer);
console.log(store);
const unsub = store.subscribe(() => { console.log("状态改变了"); });
const bindLoginUserAction = bindActionCreators(createLoginUserACtion, store.dispatch);
const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
bindLoginUserAction.createSetLoginUserAction({ id: '001', name: 'rico' });
bindUsersAction.createAddUserAction({ id: '002', name: 'zhang' });
bindUsersAction.createUpdateUserAction('0002', { id: '002', name: 'long' });
unsub();
bindUsersAction.createDeleteUserAction('001');
console.log(store.getState());