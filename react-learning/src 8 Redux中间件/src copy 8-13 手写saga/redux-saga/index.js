import Chanle from "./Chanel";
import runSaga from "./runSaga";

export default function createSagaMiddleware() {
  return function sagaMiddleware(store) {
    const env = {
      store,
      chanel: new Chanle(),
    };
    sagaMiddleware.run = runSaga.bind(null, env);
    return function (next) {
      return function (action) {
        next(action);
        env.chanel.put(action);
      };
    };
  };
}
