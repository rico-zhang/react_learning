import React from "react";
import { connect } from "dva";

function Counter(props) {
  return (
    <div>
      <button onClick={props.asyncDecrease}>-</button>
      <button onClick={props.decrease}>-</button>
      {props.number}
      <button onClick={props.increase}>+</button>
      <button onClick={props.asyncIncrease}>+</button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decrease: () => {
      dispatch({
        type: "counter/decrease",
      });
    },
    increase: () => {
      dispatch({
        type: "counter/increase",
      });
    },
    asyncDecrease: () => {
      dispatch({
        type: "counter/asyncDecrease",
      });
    },
    asyncIncrease: () => {
      dispatch({ type: "counter/asyncIncrease" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
