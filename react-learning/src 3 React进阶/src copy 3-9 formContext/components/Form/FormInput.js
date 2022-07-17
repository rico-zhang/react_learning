import React, { Component } from 'react'
import formContext from "./formContext"
import PropTypes from "prop-types"

export default class FormInput extends Component {

    static defaultProps = {
        type: "text",
    }
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }

    static contextType = formContext
    render() {
        return (
            <input type={this.props.type} name={this.props.name}
                value={this.context.formDatas[this.props.name] || ''}
                onChange={(e) => { this.context.changeFormData(this.props.name, e.target.value) }} />
        )
    }
}
