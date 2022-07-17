import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "./react-router-dom";
function PageA() {
  return <div> PageA</div>;
}
export default function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/a" component={PageA}></Route> */}
    </BrowserRouter>
  );
}
