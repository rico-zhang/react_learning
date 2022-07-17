const students = {
  namespace: "students",
  state: {
    total: 1,
    datas: [
      { id: "0001", name: "rico" },
      { id: "0002", name: "zlq" },
    ],
  },
  reducers: {
    add(state, action) {
      return {
        total: state.total + 1,
        datas: [...state.datas, action.payload],
      };
    },
    remove(state, action) {
      const datas = state.datas.filter((item) => item.id !== action.payload);
      return {
        total: datas.length,
        datas,
      };
    },
  },
};
export default students;
