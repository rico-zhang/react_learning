import { parsePath } from "history/cjs/history";
import React from "react";
import matchPath from "../react-router/matchPath";
import ctx from "../react-router/RouterContext";
import Link from "./Link";

export default function NavLink(props) {
  const {
    activeClass = "active",
    exact = false,
    strict = false,
    sensitive = false,
    ...rest
  } = props;

  return (
    <ctx.Consumer>
      {({ location }) => {
        let loc;
        if (typeof props.to === "object") {
          loc = props.to;
        } else {
          loc = parsePath(props.to);
        }
        const result = matchPath(location.pathname, loc.pathname, {
          exact,
          sensitive,
          strict,
        });
        if (result) {
          return <Link {...rest} className={activeClass} />;
        } else {
          return <Link {...rest} />;
        }
      }}
    </ctx.Consumer>
  );
}
