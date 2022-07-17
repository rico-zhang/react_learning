import React, { Component } from 'react';
import Modal from "./Modal"

export default class Test extends Component {
    state = {
        showModal: true
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        console.log(this);
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div>
                <img src="https://img2.baidu.com/it/u=1920163262,3868509202&fm=26&fmt=auto&gp=0.jpg" alt="哈士奇" />
                <Modal bg="rgba(1,1,1,.7)" show={this.state.showModal} onClose={this.hideModal}>
                    <h1>jkshfg</h1>
                    <button onClick={this.hideModal}>关闭蒙层</button>
                </Modal>
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
