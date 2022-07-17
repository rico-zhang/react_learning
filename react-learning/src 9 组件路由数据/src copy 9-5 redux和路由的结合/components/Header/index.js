import React from 'react'
import './index.css'

export default function Header() {
    return (
        <div className="title">
           <a href="/login"><h1 className="logo">学生管理系统</h1></a> 
            <div className="navs">
                <div></div>
                <div>昵称</div>
                <div>退出</div>
            </div>
        </div>
    )
}
