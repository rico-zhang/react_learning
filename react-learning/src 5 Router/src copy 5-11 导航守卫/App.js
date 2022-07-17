import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterGuard from "./RouterGuard";
import Home from "./Home";
import Form from "./Form";

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

export default function App() {
  return (
    <RouterGuard
      onBeforeChange={(prev, cur, action, commit, unBlock) => {
        console.log(
          `页面想要从${prev.pathname}跳转到${cur.pathname}，跳转方式是${action}，允许跳转`
        );
        commit(true);
        // unBlock(); //取消阻塞，仅阻塞了一次
      }}
      onChange={(prevLocation, location, action, unListen) => {
        console.log(
          `日志：从${prevLocation.pathname}进入页面${location.pathname}，进入方式${action}`
        );
        //   unListen(); //取消监听，仅监听了一次
      }}
    >
      <nav>
        <Link to="/page1" style={{ marginRight: 10 }}>
          Page1
        </Link>
        <Link to="/page2">Page2 </Link>
      </nav>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </RouterGuard>
  );
}
