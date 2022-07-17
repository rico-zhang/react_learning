import React from 'react'

export default function Student(props) {
    console.log(props);
    return (
        <div>
            <li>
                {/* 显示一个学生的所有数据 */}
                【姓名:】{props.name},
                【邮箱:】{props.email},
                【性别:】{props.sex === 1 ? "男" : "女"},
                【出生年份:】{props.birth},
            </li>
        </div>
    )
}
