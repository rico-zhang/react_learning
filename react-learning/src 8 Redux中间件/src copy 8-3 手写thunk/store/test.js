import { bindActionCreators } from 'redux'
import store from './index'
import { createLoginUserAction } from './action/loginUserAction'
import { createusersAction } from './action/usersAction';
import { getAllStudents } from '../services/student'


// const bindLoginUserAction = bindActionCreators(createLoginUserAction, store.dispatch);
// const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
// bindLoginUserAction.createSetLoginUserAction({ id: '001', name: 'rico' });
// bindUsersAction.createAddUserAction({ id: '002', name: 'zhang' });
// bindUsersAction.createUpdateUserAction('0002', { id: '002', name: 'long' });
// bindUsersAction.createDeleteUserAction('001');


// const action = createusersAction.createSetLoadingAction(true);
// store.dispatch(action);
// getAllStudents().then(res => {
//     const action = createusersAction.createSetUsersAction(res);
//     store.dispatch(action);
//     const noLoadingAction = createusersAction.createSetLoadingAction(false);
//     store.dispatch(noLoadingAction);
// })

store.dispatch(createusersAction.createFetchUsersAction());