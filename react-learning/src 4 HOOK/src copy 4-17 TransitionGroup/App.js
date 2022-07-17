import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import * as uuid from "uuid";
import "./App.css"
import "animate.css"

console.log(uuid.v4());

const duration = 2000;

export default function App() {

    const [taskList, setTaskList] = useState([{
        id: uuid.v4(),
        name: '任务1'
    },
    {
        id: uuid.v4(),
        name: '任务2'
    }]);
    function deleteItem(deleteItem) {
        const newTaskList = taskList.filter(item => item.id !== deleteItem.id);
        setTaskList(newTaskList);
    }

    function addItem() {
        const name = window.prompt('任务名称', '默认任务');
        const newTaskList = [...taskList, { id: uuid.v4(), name }];
        setTaskList(newTaskList);
    }

    return (
        <div className="app">
            <TransitionGroup  component="ul">
                {taskList.map(item => (
                    <CSSTransition timeout={duration} key={item.id}>
                        <li>
                            {item.name}
                            <button onClick={() => deleteItem(item)}> 删除</button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={addItem}>添加</button>
        </div>
    )
}
