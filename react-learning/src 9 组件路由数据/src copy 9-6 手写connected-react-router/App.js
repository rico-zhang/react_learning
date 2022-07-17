import React from "react";
import "./store/test";
import { Provider } from "react-redux";
// import { Provider } from './react-redux'
import store from "./store";
// import Student from './components/Student'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";
import { ConnectedRouter } from "./connected-react-router";
import history from "./store/history";

// export default function App() {
//     return (
//         <Provider store={store} >
//             <Student />
//         </Provider>
//     )
// }

import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </ConnectedRouter>

      {/* </BrowserRouter> */}
    </Provider>
  );
}
