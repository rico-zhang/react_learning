import { ADDUSER, UpdateUser, DeleteUser } from '../action/usersAction';

const initialState = [{ id: '001', name: 'rico' }]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return [...state, payload];
        case UpdateUser:
            return state.map(it => it.id == payload.id ? { ...it, ...payload } : it);
        case DeleteUser:
            return state.filter(it => it.id != payload);
        default:
            return state
    }
}
