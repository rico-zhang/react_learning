import {SETLOGINUSER} from '../action/loginUserAction';


const initialState = null;

const loginUser= (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case SETLOGINUSER:
            return payload;
        default:
            return state
    }
}
export default loginUser;