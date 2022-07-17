import React, { Component } from 'react'
import Form from "./index"

export default class Test extends Component {
    render() {
        return (
            <Form onSubmit={datas => console.log(datas)}>
                <div>
                    账户:  <Form.Input name="loginId"></Form.Input>
                </div>
                <div>
                    密码:  <Form.Input name="loginPwd" type="password"></Form.Input>
                </div>
                <div>
                    <Form.Button>提交</Form.Button>
                </div>
            </Form>
        )
    }
}
