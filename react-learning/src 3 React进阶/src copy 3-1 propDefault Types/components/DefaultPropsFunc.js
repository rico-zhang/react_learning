import React from 'react'

export default function DefaultProps(props) {

    console.log(props);//已经混合过的props
    return (
        <div>
            a:{props.a},
           b:{props.b},
           c:{props.c}
        </div>
    )
}

DefaultProps.defaultProps = {
    a: 1,
    b: 2,
    c: 3
}



