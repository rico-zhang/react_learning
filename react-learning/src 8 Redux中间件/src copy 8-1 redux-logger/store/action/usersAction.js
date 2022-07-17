export const ADDUSER = Symbol("add-user");
export const UpdateUser = Symbol("update-user");
export const DeleteUser = Symbol("delete-user");
export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})
export const createUpdateUserAction = (user) => ({
    type: UpdateUser,
    payload: user
})
export const createDeleteUserAction = (id) => ({
    type: DeleteUser,
    payload: id
})
export const createusersAction = { createAddUserAction, createUpdateUserAction, createDeleteUserAction }


