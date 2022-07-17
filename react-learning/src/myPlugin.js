const myPlugin = {
  onAction: (store) => (next) => (action) => {
    console.log("旧状态", store.getState());
    const result = next(action);
    console.log("新状态", store.getState());
    return result;
  },
};
export default myPlugin;
