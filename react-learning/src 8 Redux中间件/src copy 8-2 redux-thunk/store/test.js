import { bindActionCreators } from "redux";
import store from "./index";
import { createLoginUserAction } from "./action/loginUserAction";
import { createusersAction } from "./action/usersAction";
import { getAllStudents } from "../services/student";

// const action = createusersAction.createSetLoadingAction(true);
// store.dispatch(action);
// getAllStudents().then(res => {
//     const action = createusersAction.createSetUsersAction(res);
//     store.dispatch(action);
//     const noLoadingAction = createusersAction.createSetLoadingAction(false);
//     store.dispatch(noLoadingAction);
// })

store.dispatch(createusersAction.createFetchUsersAction());
