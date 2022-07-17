import React, { Component } from 'react'
import "./index.css";
import {limitNumber } from "../../../utils/index"

export default class ImgContainer extends Component {

    imgContainerRef = null;
    tick = 16;//每16毫秒执行一次动画
    timer = null;//动画timer
    getImgArr = () => {
        return this.props.imgSrcList.map((item, i) =>
        (<img
            src={item}
            alt=""
            key={i}
            style={{
                width: this.props.width,
                height: this.props.height
            }}></img>)
        )
    }
    setImgContainerRef = (e) => {
        this.imgContainerRef = e;
    }

    switchImg = (index) => {
        clearInterval(this.timer);
        index = limitNumber(index, 0, this.props.imgSrcList.length - 1);
        const targetMarginLeft = -index * this.props.width;//目标marginLeft
        const beginLeft = parseFloat(window.getComputedStyle(this.imgContainerRef).marginLeft);//初始marginLeft
        const moveTotalDis = targetMarginLeft - beginLeft;//需要动画的距离
        if (moveTotalDis === 0)//不需要移动
            return;
        let moveTotal = Math.ceil(Math.abs(moveTotalDis) / this.tick);//要动画的次数
        const moveDis = moveTotalDis / moveTotal;//每次动画移动的距离
        let currentLeft = beginLeft;

        this.timer = setInterval(() => {
            moveTotal--;
            currentLeft += moveDis;
            if (moveTotal === 0) {
                clearInterval(this.timer);
                currentLeft = targetMarginLeft;
            }
            this.imgContainerRef.style.marginLeft = currentLeft + "px";
        }, this.timer);
    }

    render() {
        return (
            <div className="img-container" ref={this.setImgContainerRef} style={{
                width: this.props.width * this.props.imgSrcList.length,
                height: this.props.hieght
            }}>
                {this.getImgArr()}
            </div>
        )
    }
}
