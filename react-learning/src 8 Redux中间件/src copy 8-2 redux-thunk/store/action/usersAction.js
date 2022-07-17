import { getAllStudents } from "../../services/student";

export const ADDUSER = Symbol("add-user");
export const UpdateUser = Symbol("update-user");
export const DeleteUser = Symbol("delete-user");
export const SETUsers = Symbol("set-users");
export const SETLOADING = Symbol("set-loading");
export const createAddUserAction = (user) => ({
  type: ADDUSER,
  payload: user,
});
export const createUpdateUserAction = (user) => ({
  type: UpdateUser,
  payload: user,
});
export const createDeleteUserAction = (id) => ({
  type: DeleteUser,
  payload: id,
});
export const createSetUsersAction = (users) => ({
  type: SETUsers,
  payload: users,
});
export const createFetchUsersAction = () => {
  //由于thunk的存在，允许action是一个带有副作用的函数
  return function (dispatch, getState, extraParams) {
    console.log("extraParams", extraParams);
    const action = createusersAction.createSetLoadingAction(true);
    dispatch(action);
    getAllStudents().then((res) => {
      const action = createusersAction.createSetUsersAction(res);
      dispatch(action);
      const noLoadingAction = createusersAction.createSetLoadingAction(false);
      dispatch(noLoadingAction);
    });
  };
};
export const createSetLoadingAction = (isLoading) => ({
  type: SETLOADING,
  payload: isLoading,
});

export const createusersAction = {
  createAddUserAction,
  createUpdateUserAction,
  createDeleteUserAction,
  createSetUsersAction,
  createSetLoadingAction,
  createFetchUsersAction,
};
