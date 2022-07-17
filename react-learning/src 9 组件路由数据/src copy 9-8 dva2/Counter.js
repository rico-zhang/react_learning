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
      const result = dispatch({
        type: "counter/decrease",
      });
      console.log(result);
    },
    increase: () => {
      dispatch({
        type: "counter/increase",
      });
    },
    asyncDecrease: async () => {
      const result = await dispatch({
        type: "counter/asyncDecrease",
      });
      console.log(result);
    },
    asyncIncrease: () => {
      dispatch({ type: "counter/asyncIncrease" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
