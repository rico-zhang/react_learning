import React, { Component } from 'react'

export default class DeaultPropsClass extends Component {

    static defaultProps = {
        a: 5,
        b: 6,
        c: 7
    }
    render() {
        return (
            <div>
                a:{this.props.a},
           b:{this.props.b},
           c:{this.props.c}
            </div>
        )
    }
}

//class组件可以使用这样方式 也可以使用静态字段
//如果两种都设置 这种的优先级高
// DeaultPropsClass.defaultProps = {
//     a: 1,
//     b: 2,
//     c: 3
// }
