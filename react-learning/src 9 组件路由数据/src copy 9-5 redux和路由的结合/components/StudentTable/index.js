import React from 'react'
import './index.css'

export default function StudentTable(props) {
    const trs = props.stus.map(item => (<tr key={item.sNO}>
        <td>{item.sNo}</td>
        <td>{item.name}</td>
        <td>{item.sex == 1 ? '女' : '男'}</td>
        <td>{item.email}</td>
        <td><a href={`/student/${item.sNo}`} >详情</a> </td>
    </tr>))
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>邮箱</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
