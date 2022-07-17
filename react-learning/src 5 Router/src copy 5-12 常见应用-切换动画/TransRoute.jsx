import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export default function TransRoute(props) {
  const { component: Comp, children, ...rest } = props;
  return (
    <Route {...rest}>
      {(values) => {
        return (
          <CSSTransition
            in={values.match ? true : false}
            timeout={500}
            classNames={{
              enter: "animate__animated animate__faster animate__zoomIn",
              exit: "animate__animated animate__faster animate__zoomOut",
            }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Comp {...values} />
          </CSSTransition>
        );
      }}
    </Route>
  );
}
