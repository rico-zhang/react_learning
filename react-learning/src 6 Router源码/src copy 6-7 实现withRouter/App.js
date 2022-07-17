import React, { useRef } from "react";
// import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, withRouter } from "./react-router-dom";

function Test(props) {
  return <div>Test</div>;
}

const NewTest = withRouter(Test);
function PageA() {
  return (
    <div>
      PageA
      <NewTest />
    </div>
  );
}
function Home() {
  return <div> Home</div>;
}
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact key={"a01"} component={Home}></Route>
        <Route path="/a" key={"a02"} component={PageA}></Route>
      </Switch>
    </BrowserRouter>
  );
}
