import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import TransRoute from "./TransRoute";

function Home() {
  return <div className="page page-home">首页</div>;
}

function News() {
  return <div className="page page-news">新闻页</div>;
}

function Personal() {
  return <div className="page page-personal">个人中心</div>;
}

export default function App() {
  return (
    <div className="main">
      <Router>
        <nav>
          <NavLink to="/" exact>
            首页
          </NavLink>
          <NavLink to="/news">新闻页</NavLink>
          <NavLink to="/personal">个人中心</NavLink>
        </nav>
        <div className="page-container">
          <TransRoute path="/" exact component={Home} />
          <TransRoute path="/news" exact component={News} />
          <TransRoute path="/personal" exact component={Personal} />
        </div>
      </Router>
    </div>
  );
}
