

function createThunkMiddleware(extraParam) {
    const thunk = store => next => action => {
        if (typeof action === "function")
            return  action(store.dispatch, store.getState, extraParam);
        else
            return next(action);
    }
    return thunk;
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;