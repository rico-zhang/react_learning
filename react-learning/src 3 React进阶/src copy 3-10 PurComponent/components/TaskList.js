import React, { Component, PureComponent } from 'react'

import PropTypes from "prop-types"
import Task from './Task'

export default class TaskList extends PureComponent {

    static propTypes = {
        taskList: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            isFinish: PropTypes.bool.isRequired
        })).isRequired
    }

    getTasks = () => {
        return this.props.taskList.map((it, i) => (<Task key={i} {...it} />))
    }
    render() {
        console.log("TaskList render");
        return (
            <ul>
                {this.getTasks()}
            </ul>
        )
    }
}
