function compose(...funs) {
  if (funs.length === 0) {
    return (args) => args;
  } else if (funs.length === 1) {
    return funs[0];
  } else {
    return funs.reduce(
      (a, b) =>
        (...args) =>
          a(b(...args))
    );

    // return function (...args) {
    //   let prevReturn = funs[funs.length - 1](...args);
    //   for (let i = funs.length - 2; i >= 0; i--) {
    //     const fun = funs[i];
    //     prevReturn = fun(prevReturn);
    //   }
    //   return prevReturn;
    // };
  }
}

export default compose;
