import runSaga from "./runSaga";

export default function createSagaMiddleware() {
  function sagaMiddleware(store) {
    const env = {
      store,
    };
    sagaMiddleware.run = runSaga.bind(null, env);
    return function (next) {
      return function (action) {
        return next(action);
      };
    };
  }
  return sagaMiddleware;
}
