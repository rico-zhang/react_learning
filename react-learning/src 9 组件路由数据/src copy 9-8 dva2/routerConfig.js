import React from "react";
import { routerRedux, Switch, Link, Route } from "dva/router";
import Counter from "./Counter";

function Home() {
  return <div>首页</div>;
}

export default function routerConfig({ history }) {
  return (
    <div>
      <routerRedux.ConnectedRouter history={history}>
        <div>
          <Link to="/">首页</Link>
          <Link to="/counter">计数器</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter" component={Counter} />
          </Switch>
        </div>
      </routerRedux.ConnectedRouter>
    </div>
  );
}
