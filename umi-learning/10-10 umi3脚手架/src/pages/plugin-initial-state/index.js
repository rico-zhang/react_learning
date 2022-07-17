import React from 'react';
import { useModel } from 'umi';
export default function index() {
  const { initialState, loading, error, refresh, setInitialState } =
    useModel('@@initialState');
  const handleRefresh = () => {
    refresh();
  };
  const handleSetInitialState = () => {
    // setInitialState( (state) => {
    //   console.log(state);
    //   return {
    //     c: 3,
    //   };
    // });
    setInitialState({
      c: 4,
    });
  };
  return (
    <div>
      <p> {JSON.stringify(initialState)}</p>
      <p> {String(loading)}</p>
      <button onClick={handleRefresh}>refresh</button>
      <button onClick={handleSetInitialState}>setInitialState</button>
    </div>
  );
}
