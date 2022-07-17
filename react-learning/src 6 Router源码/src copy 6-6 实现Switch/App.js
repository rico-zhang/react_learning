import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "./react-router-dom";
function PageA() {
  return <div> PageA</div>;
}
function Home() {
  return <div> Home</div>;
}
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" key={"a01"} component={Home}></Route>
        <Route path="/a" key={"a02"}>
          {(values) => {
            return <PageA {...values} />;
          }}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
