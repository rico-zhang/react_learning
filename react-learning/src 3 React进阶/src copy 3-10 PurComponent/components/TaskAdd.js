import React, { Component, PureComponent } from 'react'
import PropTypes from "prop-types"

export default class TaskAdd extends PureComponent {

    static propTypes = {
        onAddTask: PropTypes.func.isRequired
    }

    state = {
        task: ""
    }
    taskChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    addTask = () => {
        this.props.onAddTask({ name: this.state.task, isFinish: false });
    }
    render() {
        console.log("TaskAdd render");
        return (
            <div>
                <input type="text" value={this.state.task} onChange={this.taskChange} />
                <button onClick={this.addTask}>添加任务</button>
            </div>
        )
    }
}
