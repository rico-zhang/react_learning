import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import userInfo from './userInfo'

export default function ProtectdRoute({ component: Component, render, children, ...rest }) {
    return (
        <Route {...rest} render={values => {
            if (userInfo.isLogin)
                return <Component/>
            else
                return (
                    // <Redirect to={{
                    //     pathname:'/login',
                    //     search:'?returnurl='+values.location.pathname
                    // }}/>

                     <Redirect to={{
                        pathname:'/login',
                        state:{returnurl:values.location.pathname}
                    }}/>
                )
                
        }}></Route>
    )
}
