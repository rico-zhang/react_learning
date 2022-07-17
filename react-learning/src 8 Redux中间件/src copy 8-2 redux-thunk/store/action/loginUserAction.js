export const SETLOGINUSER = Symbol("set-login-user");

export const createSetLoginUserAction = (user) => ({
    type: SETLOGINUSER,
    payload: user
})
export const createLoginUserAction = { createSetLoginUserAction }