import {SETLOGINUSER} from '../action/loginUserAction';


const initialState = null;

export default (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case SETLOGINUSER:
            return payload;
        default:
            return state
    }
}
