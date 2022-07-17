import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";

function Promt(props) {
  const unBlockRef = useRef(null);

  const handleBlock = (when) => {
    if (!when) {
      unBlockRef.current?.();
    } else {
      unBlockRef.current = props.history.block(props.msg);
    }
  };
  useEffect(() => {
    handleBlock(props.when);
    return () => {
      unBlockRef.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.when]);

  return null;
}

Promt.defaultProps = {
  when: false,
  msg: "",
};
export default withRouter(Promt);
