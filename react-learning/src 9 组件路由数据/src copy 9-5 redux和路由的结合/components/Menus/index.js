import React from 'react'
import { Link } from 'react-router-dom'

export default function Menus() {
    return (
        <ul>
            <li><Link to="/student/list">学生列表</Link></li>
            <li><Link to="/student/add">学生新增</Link></li>
            <li><Link to="/course/list">课程列表</Link></li>
            <li><Link to="/course/add">课程新增</Link></li>
        </ul>
    )
}
