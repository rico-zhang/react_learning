import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
    render() {
        // props.stus 传递的是学生的数组
        const sutdents = this.props.stus.map(item => <Student {...item} key={item.id} />)
        return (
            <ul>
                {sutdents}
            </ul>
        )
    }
}

