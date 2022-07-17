const NAMESCPECE = "loading"; //默认命名空间名是loading
const SHOW = "@@DVA_LOADING/SHOW";
const HIDE = "@@DVA_LOADING/HIDE";

export default function createLoading(ops = {}) {
  const namespace = ops.namespace || NAMESCPECE;
  const initState = {
    global: false,
    models: {},
    effects: {},
  };
  function reducer(state = initState, action) {
    const { namespace, actionType } = action.payload || {};
    switch (action.type) {
      case SHOW:
        return {
          global: true,
          models: {
            ...state.models,
            [namespace]: true,
          },
          effects: {
            ...state.effects,
            [actionType]: true,
          },
        };
      case HIDE:
        const models = {
          ...state.models,
          [namespace]: false,
        };
        const effects = {
          ...state.effects,
          [actionType]: false,
        };
        const global = Object.keys(models).some((key) => models[key]);
        return {
          global,
          models,
          effects,
        };
      default:
        return state;
    }
  }
  function onEffect(oldEffect, { put }, model, actionType) {
    return function* (action) {
      yield put({
        type: SHOW,
        payload: {
          namespace: model.namespace,
          actionType,
        },
      });
      yield oldEffect(action);
      yield put({
        type: HIDE,
        payload: {
          namespace: model.namespace,
          actionType,
        },
      });
    };
  }
  return {
    extraReducers: {
      [namespace]: reducer,
    },
    onEffect,
  };
}
