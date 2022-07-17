import React from 'react'
import "./Pager.css"
/**
 * 分页组件
 * 
 * 属性：
 * 1. current 初始页码
 * 2. total 总数据量
 * 3. limit 每页显示的数据量
 * 4. panelNumber 最多显示多少个页码
 * 5. onPageChange 页码改变事件
 */

export default function Pager(props) {
    const pagetNumber = getPageNumber(props);
    if (pagetNumber === 0)
        return null;
    const pagerArr = [];
    const { min, max } = getMinMax(props);
    console.log(min, max);
    for (let i = min; i <= max; i++) {
        pagerArr.push(<span onClick={() => { toPage(i, props) }} className={`item ${i === props.current && "active"}`} key={i}>{i}</span>);
    }
    return (
        <React.Fragment>
            <span onClick={() => { toPage(1, props) }} className={`item ${props.current === 1 && "disabled"}`} >首页</span>
            <span onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }} className={`item ${props.current === 1 && "disabled"}`} >上一页</span>
            {pagerArr}
            <span onClick={() => { toPage(props.current + 1 > pagetNumber ? pagetNumber : props.current + 1, props) }} className={`item ${props.current === pagetNumber && "disabled"}`} >下一页</span>
            <span onClick={() => { toPage(pagetNumber, props) }} className={`item ${props.current === pagetNumber && "disabled"}`} >尾页</span>
            <span>{props.current}</span>
            /
            <span>{pagetNumber}</span>
        </React.Fragment>
    )
}

function getMinMax(props) {
    let total = getPageNumber(props);
    let min = getMinumber(props);
    const max = getMaxNumber(props, total);
    if (max === total) {
        min = total - props.panelNumber + 1;
        if (min < 1) {
            min = 1
        }
    }
    return {
        min, max
    }
}
/**
 * 计算出最小数字
 * @param {*} props 
 */
function getMinumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1)
        min = 1;
    return min;
}

function getMaxNumber(props, total) {
    let min = getMinumber(props);
    let max = min + props.panelNumber - 1;
    if (max > total)
        max = total;
    return max;
}
/**
 * 跳转页面
 * @param {*} target 
 * @param {*} props 
 */

function toPage(target, props) {
    if (props.current === target)
        return;
    props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 * @param {*} props 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}

