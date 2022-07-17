import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route } from "./react-router-dom";
function PageA() {
  return <div> PageA</div>;
}
function Home() {
  return <div> Home</div>;
}
export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/a">
        {(values) => {
          return <PageA {...values} />;
        }}
      </Route>
    </BrowserRouter>
  );
}
