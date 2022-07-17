import React, { useRef } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   withRouter,
//   Link,
//   NavLink,
// } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Link,
  NavLink,
} from "./react-router-dom";

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
    <BrowserRouter basename="/news">
      <NavLink to={{ pathname: "/" }} exact>
        首页
      </NavLink>
      <NavLink to={{ pathname: "/a" }}> 页面A</NavLink>
      <Switch>
        <Route path="/" exact key={"a01"} component={Home}></Route>
        <Route path="/a" key={"a02"} component={PageA}></Route>
      </Switch>
    </BrowserRouter>
  );
}
