import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router
        getUserConfirmation={(msg, commit) => {
          commit(window.confirm(msg));
        }}
      >
        <nav>
          <NavLink to="/page1">页面1</NavLink>
          <NavLink to="/page2">页面2</NavLink>
        </nav>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Router>
    </div>
  );
}
