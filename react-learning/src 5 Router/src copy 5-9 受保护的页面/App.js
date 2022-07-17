import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Login from './Login'
import Home from './Home'
import Personal from './Personal'
import ProtectedRoute from './ProtectdRoute'

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">登录</Link>
                    </li>
                    <li>
                        <Link to="/personal">个人中心</Link>
                    </li>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    {/* <Route path='/personal' component={Personal}></Route> */}
                    <ProtectedRoute path='/personal' component={Personal}></ProtectedRoute>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </div>
        </Router>
    )
}
