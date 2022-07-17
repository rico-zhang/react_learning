import React from 'react';
import { withRouter } from 'umi';
function A(props) {
  return <div>{props.location.pathname}</div>;
}
export default withRouter(A);
