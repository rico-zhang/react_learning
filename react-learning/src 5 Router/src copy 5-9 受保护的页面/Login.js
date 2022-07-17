import React from 'react'
import userInfo from './userInfo'
import QueryString from 'query-string'
export default function Login(props) {
    return (
        <div>
            <h1>授权页面</h1>
            <button onClick={() => {
                userInfo.login();
                // const urlParams = QueryString.parse(props.location.search);
                // if (urlParams.returnurl) {
                //     props.history.push(urlParams.returnurl);
                // } else {
                //     props.history.push('/');
                // }

                const state = props.match.params;
                if (state.returnurl) {
                    props.history.push(state.returnurl);
                } else {
                    props.history.push('/');
                }

            }}>登录</button>
        </div>
    )
}
