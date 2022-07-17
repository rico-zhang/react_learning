// import { push } from 'connected-react-router';
import { push } from "../../connected-react-router";
import React from "react";
import { connect } from "react-redux";

function StudentAdd({ onClick, history }) {
  return (
    <div>
      学生新增
      {/* //通过dispatch一个action 来触发路由跳转  */}
      <button
        onClick={() => {
          console.log();
          onClick && onClick();
        }}
      >
        跳转到课程列表1
      </button>
      {/* //通过路由跳转  更新store */}
      <button
        onClick={() => {
          history.push("/courses/list");
        }}
      >
        跳转到课程列表2
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    console.log(123);
    dispatch(push("/courses/list"));
  },
});

export default connect(null, mapDispatchToProps)(StudentAdd);
