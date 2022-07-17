import React, { Component } from 'react'
import FormButton from './FormButton.js';
import { Provider } from "./formContext.js"
import FormInput from './FormInput.js';

export default class Form extends Component {
    state = {
        formDatas: {},
        changeFormData: (name, val) => {
            this.setState({
                formDatas: {
                    ...this.state.formDatas,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formDatas);
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

Form.Input = FormInput;
Form.Button = FormButton;

