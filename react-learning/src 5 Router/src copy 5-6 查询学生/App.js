import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Admin from './pages/Admin'
import Error from './pages/Error'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    )
}




