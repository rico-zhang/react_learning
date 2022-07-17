import isPromise from 'is-promise'
import { isFSA } from "flux-standard-action";

const promiseMiddleware = ({ dispatch }) => next => action => {
    if (!isFSA(action)) {
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload)
        ? action.payload.then(res => {
            return dispatch({ ...action, payload: res })
        }).catch(error => {
            dispatch({ ...action, payload: error, error: true });
            return Promise.reject(error);
        })
        : next(action);
}
export default promiseMiddleware;
