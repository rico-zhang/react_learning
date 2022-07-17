import React from "react";
import { Router } from "react-router-dom";
import { ReactReduxContext } from "react-redux";
import { createLocationChangeAction } from "./action-creator";
export default class ConnectedRouter extends React.Component {
  static contextType = ReactReduxContext;
  componentDidMount() {
    const history = this.props.history;
    this.unListen = history.listen((location, action) => {
      const dispatch = this.context.store.dispatch;
      dispatch(createLocationChangeAction(action, location));
    });
  }

  componentWillUnmount() {
    this.unListen && this.unListen();
  }

  render() {
    return <Router history={this.props.history}>{this.props.children}</Router>;
  }
}
