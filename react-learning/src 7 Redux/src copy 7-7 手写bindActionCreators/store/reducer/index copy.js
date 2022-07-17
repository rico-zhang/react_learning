import loginUser from './loginUser';
import users from './users';

const initialState = {}

export default (state = initialState, action) => {
    const newState = {
        loginUser: loginUser(state.loginUser, action),
        users: users(state.users, action)
    }
    return newState;
}
