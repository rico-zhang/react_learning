import React from "react";
import { connect } from "dva";
import Modal from "./components/Modal";

function Counter(props) {
  return (
    <div>
      <button onClick={props.asyncDecrease}>-</button>
      <button onClick={props.decrease}>-</button>
      {props.number}
      <button onClick={props.increase}>+</button>
      <button onClick={props.asyncIncrease}>+</button>
      {props.loading && <Modal />}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    number: state.counter,
    loading: state.loading.models.counter,
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
