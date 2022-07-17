import React from 'react'

export default function LoginHOC(Comp) {
    return class LoginWrapper extends React.Component {
        render() {
            if (this.props.login) {
                return <Comp {...this.props}></Comp>
            }
            return <p>未登录</p>
        }
    }
}
