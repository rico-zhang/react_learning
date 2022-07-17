import React, { useState } from 'react'

export default function StudentSearchBar(props) {
    const [search, setSearch] = useState(props.search);
    const [sex, setSex] = useState(props.sex);
    const onSexChange = (e) => {
        setSex(e.target.value);
    }
    return (
        <div>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <label><input type="radio" name="sex" value={0} checked={sex == 0} onChange={onSexChange} />女</label>
            <label><input type="radio" name="sex" value={1} checked={sex == 1} onChange={onSexChange} />男</label>
            <button onClick={()=>{props.onSearch && props.onSearch(search, sex)}}>查询</button>
        </div>
    )
}
