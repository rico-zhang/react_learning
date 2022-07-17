import React from "react";
import ctx from "./RouterContext";

export default function withRouter(Comp) {
  function RouterWrapper(props) {
    return (
      <ctx.Consumer>
        {(value) => <Comp {...value} {...props} ref={props.forwardRef}></Comp>}
      </ctx.Consumer>
    );
  }
  RouterWrapper.displayName = `withRouter(${Comp.displayName || Comp.name})`;
  return RouterWrapper;
}
