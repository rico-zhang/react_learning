import React, { Component } from "react";
import ctx from "./RouterContext";
import matchPath from "./matchPath";

export default class Route extends Component {
  /**
   * path
   * children
   * render
   * component
   * exact
   * sensitive
   * strict
   */

  renderRoute = (ctxValue) => {
    const { children, render, component: Comp } = this.props;
    if (children) {
      if (typeof children === "function") {
        return children(ctxValue);
      } else {
        return children;
      }
    }
    if (!ctxValue.match) return null;
    if (typeof render === "function") {
      return render(ctxValue);
    }
    if (Comp) {
      return <Comp {...ctxValue} />;
    }
  };

  render() {
    return (
      <ctx.Consumer>
        {(values) => {
          const options = {
            exact: this.props.exact || false,
            sensitive: this.props.sensitive || false,
            strict: this.props.strict || false,
          };
          const ctxValue = {
            history: values.history,
            location: values.location,
            match: matchPath(
              values.location.pathname,
              this.props.path || "/",
              options
            ),
          };
          return (
            <ctx.Provider value={ctxValue}>
              {this.renderRoute(ctxValue)}
            </ctx.Provider>
          );
        }}
      </ctx.Consumer>
    );
  }
}
