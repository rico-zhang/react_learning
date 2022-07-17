import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./react-router";

function Page() {
  return <div>主要内容查看matchPath文件</div>;
}

export default function App() {
  return (
    <Router>
      <Route path="/user/:id/:name" component={Page} />
    </Router>
  );
}
