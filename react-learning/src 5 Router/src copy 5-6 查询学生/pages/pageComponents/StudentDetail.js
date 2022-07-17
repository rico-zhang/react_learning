import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            学生详情 
            <h2>sNo:{props.match.params.sNo}</h2>
        </div>
    )
}
