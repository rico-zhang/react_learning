import React, { Component } from "react";

export default function withScroll(Comp) {
  class ScrollWraper extends Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;
    }

    render() {
      const { forwardRef, ...reset } = this.props;
      return <Comp {...reset} ref={forwardRef} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <ScrollWraper {...props} forwardRef={ref} />
  ));
}
