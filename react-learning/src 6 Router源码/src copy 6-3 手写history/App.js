import React from "react";
import { createBrowserHistory } from "./react-router/history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function PageA() {
  return <div> PageA</div>;
}
export default function App() {
  return (
    <Router>
      {/* <Switch>
        <Route path="/a" component={PageA}>
          {" "}
        </Route>
      </Switch> */}
    </Router>
  );
}
