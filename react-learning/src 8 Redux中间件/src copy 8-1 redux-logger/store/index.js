import { createStore, bindActionCreators, applyMiddleware } from "redux";
import { createLoginUserAction } from "./action/loginUserAction";
import { createusersAction } from "./action/usersAction";
import reducer from "./reducer/index";
import logger, { craeteLogger } from "redux-logger";

// const log = createLogger({
//     duration :true
// })
const store = createStore(reducer, applyMiddleware(logger));

const bindLoginUserAction = bindActionCreators(
  createLoginUserAction,
  store.dispatch
);
const bindUsersAction = bindActionCreators(createusersAction, store.dispatch);
bindLoginUserAction.createSetLoginUserAction({ id: "001", name: "rico" });
bindUsersAction.createAddUserAction({ id: "002", name: "zhang" });
bindUsersAction.createUpdateUserAction("0002", { id: "002", name: "long" });
bindUsersAction.createDeleteUserAction("001");
