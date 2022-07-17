import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class ValidationComp extends Component {

    //1. 先混合默认属性
    static defaultProps = {
        b: false
    }

    //2. 再检查类型
    static propTypes = {
        a: PropTypes.number.isRequired, // 数字 && 必填
        b: PropTypes.bool.isRequired, // bool && 必填
        c: PropTypes.node
    }


    render() {
        console.log(this.props);
        return (
            <div>
                a:{this.props.a},
                b:{this.props.b},
            </div>
        )
    }
}
