const { createActions, handleAction, handleActions, combineActions } = window.ReduxActions;

const actions = createActions({
    INCREASE: () => 1,
    DECREASE: () => -1
})

export const { increase, decrease } = actions;

// const reducer = handleActions({
//     [increase]: (state, { type, payload }) => state + 1,
//     [decrease]: (state, { type, payload }) => state - 1,
// },10);
// console.log(reducer);

const fn = combineActions(increase, decrease);

const reducer = handleAction(fn, (state, { type, payload }) => state + payload, 10);
// const reducer = handleActions({
//     [fn]: (state, { type, payload }) => state + payload
// }, 10);
export default reducer;