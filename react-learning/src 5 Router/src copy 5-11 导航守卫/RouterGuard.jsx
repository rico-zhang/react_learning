import React, { Component } from "react";
import { withRouter, BrowserRouter as Router } from "react-router-dom";

let prevLocation, location, action, unBlock;

class _GuardHelper extends Component {
  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      this.props.onChange?.(
        this.props.location,
        location,
        action,
        this.unListen
      );
    });

    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });
  }
  componentWillUnmount() {
    this.unListen && this.unListen();
    unBlock && unBlock();
  }
  render() {
    return null;
  }
}

const GuardHelper = withRouter(_GuardHelper);
class RouterGuard extends Component {
  componentDidMount() {}

  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };
  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}

export default RouterGuard;
