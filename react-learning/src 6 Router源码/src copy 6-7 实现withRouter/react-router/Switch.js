import React, { Component } from "react";
import ctx from "./RouterContext";
import matchPath from "./matchPath";
import Route from "./Route";

export default class Switch extends Component {
  renderChild = ({ location }) => {
    for (const children of React.Children.toArray(this.props.children)) {
      if (children.type !== Route) {
        throw new TypeError(
          "the children of Switch component must be type of Route"
        );
      }
      const {
        path = "/",
        exact = false,
        sensitive = false,
        strict = false,
      } = children.props;
      const options = {
        exact,
        sensitive,
        strict,
      };
      const match = matchPath(location.pathname, path, options);
      if (match) {
        return children;
      }
    }
  };
  render() {
    return <ctx.Consumer>{this.renderChild}</ctx.Consumer>;
  }
}
