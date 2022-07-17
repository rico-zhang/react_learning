import React from 'react';
import { connect } from 'umi';

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <p>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  number: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onDecrease() {
    dispatch({ type: 'counter/decrease' });
  },
  onIncrease() {
    dispatch({ type: 'counter/increase' });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
