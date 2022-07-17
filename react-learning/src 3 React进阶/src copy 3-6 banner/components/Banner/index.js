import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"
import ImgContainer from "./ImgContainer"
import Arrow from "./Arrow"
import Dots from "./Dots"

export default class Banner extends Component {

    imgContainerRef = null;
    state = {
        currentIndex: 0
    }
    static defaultProps = {
        width: 300,
        height: 200,
        autoDuration: 1000,
        duration: 500
    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcList: PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }

    setImgContainerRef = (e) => {
        this.imgContainerRef = e;
    }
    switch = (index) => {
        console.log(index);
        this.setState({
            currentIndex: index
        });
        this.imgContainerRef.switchImg(index);
    }
    arrowChange = (type) => {
        const total = this.props.imgSrcList.length;
        let index = this.state.currentIndex + type;
        index = (index + total) % total;
        this.switch(index)
    }
    dotChange = (index) => {
        this.switch(index)
    }
    render() {
        return (
            <>
                <div className="banner"
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}>
                    <ImgContainer
                        imgSrcList={this.props.imgSrcList}
                        width={this.props.width}
                        height={this.props.height}
                        ref={this.setImgContainerRef}>
                    </ImgContainer>
                    <Arrow onChange={this.arrowChange}></Arrow>
                    <Dots
                        total={this.props.imgSrcList.length}
                        currentIndex={this.state.currentIndex}
                        onChange={this.dotChange}
                    ></Dots>
                </div>
                <button onClick={() => { this.switch(2) }}>switch 3</button>
                <button onClick={() => { this.switch(3) }}>switch 4</button>
            </>
        )
    }
}
