import React, { Component } from 'react'
import TaskList from './TaskList'
import TaskAdd from "./TaskAdd"

export default class TaskListContainer extends Component {

    state = {
        taskList: []
    }

    getTaskList = () => {
        const ts = [];
        for (let i = 0; i < 10; i++) {
            ts.push({
                name: "任务" + i,
                isFinish: Math.random() > 0.5
            })
        }
        this.setState({
            taskList: ts
        })
    }

    addTask = (task) => {
        this.setState({
            taskList: [...this.state.taskList, task]
        })
    }

    componentDidMount() {
        this.getTaskList();
    }


    render() {
        console.log("TaskListContainer render");
        return (
            <div>
                <TaskAdd onAddTask={this.addTask} />
                <TaskList taskList={this.state.taskList} />
            </div>
        )
    }
}

