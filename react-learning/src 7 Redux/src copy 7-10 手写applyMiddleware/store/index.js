// import { createStore, bindActionCreators, applyMiddleware } from "redux";
import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
} from "./action/usersAction";

function log1(store) {
  return function (next) {
    return function (action) {
      console.log("旧状态1", store.getState());
      console.log("action1", action);
      next(action);
      console.log("新状态1", store.getState());
    };
  };
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
    };
  };
}
// const log2 = store => next => action => {
//     console.log("旧状态2", store.getState());
//     console.log("action2", action);
//     next(action);
//     console.log("新状态2", store.getState());
// }

//应用中间件 方式1
const store = createStore(reducer, applyMiddleware(log1, log2));

//应用中间件 方式2
// const store = applyMiddleware(log1, log2)(createStore)(reducer);

const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
};

const actions = bindActionCreators(actionCreators, store.dispatch);

actions.addUser({ id: 3, name: "abc", age: 111 });
actions.deleteUser(3);
