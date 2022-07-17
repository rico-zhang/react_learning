import { ActionTypes } from '../action/counter.js';

const initState = 10;
export default function counter(state = initState, { type, payload }) {

    switch (type) {
        case ActionTypes.increase:
            return state + 1;
        case ActionTypes.decrease:
            return state - 1;
        default:
            return state;
    }
}