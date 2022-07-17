export default function (initialState) {
  console.log(initialState);
  return {
    canReadPageA: true,
    canReadPageB: false,
    canReadPageC: (route) => {
      console.log(route);
      return route.path === '/plugin-access' || route.a === initialState.a;
    },
  };
}
