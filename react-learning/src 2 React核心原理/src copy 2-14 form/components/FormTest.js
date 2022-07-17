import React, { Component } from 'react'

export default class FormTest extends Component {

    state = {
        loginId: "",
        password: "",
        sex: "male",
        chooseLoves: ["football", "basketball"],
        chooseCity: "beijing",
    }
    constValue = {
        loves: [
            { value: "football", text: "足球" },
            { value: "basketball", text: "篮球" },
            { value: "music", text: "音乐" },
            { value: "reading", text: "读书" },
        ],
        citys: [
            { value: "shanghai", text: "上海" },
            { value: "beijing", text: "北京" },
            { value: "guangzhou", text: "广州" }
        ]
    }
    handleChange = (e) => {
        const name = e.target.name;
        let val = e.target.value;
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                val = [...this.state.chooseLoves, val]
            } else {
                val = this.state.chooseLoves.filter(it => it !== val)
            }
        }
        // const newPartState = {};
        // newPartState[name] = val
        // this.state(newPartState)
        this.setState({
            [name]: val
        })
    }

    getCityOptions() {
        return this.constValue.citys.map(item => <option key={item.value} value={item.value}>{item.text}</option>)
    }

    getLovesCheckBoxs() {
        return this.constValue.loves.map(item => (
            <label key={item.value}>
                <input name="chooseLoves" type="checkbox" value={item.value}
                    checked={this.state.chooseLoves.includes(item.value)}
                    onChange={this.handleChange} />
                {item.text}
            </label>))
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} />
                </p>
                <p>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </p>
                <p>
                    <label> <input type="radio" name="sex" value="male" checked={this.state.sex === "male"} onChange={this.handleChange} />男</label>
                    <label> <input type="radio" name="sex" value="famale" checked={this.state.sex === "famale"} onChange={this.handleChange} />女</label>
                </p>
                <p>
                    <select name="chooseCity" value={this.state.chooseCity} onChange={this.handleChange}>
                        {this.getCityOptions()}
                    </select>
                </p>
                <p>
                    {this.getLovesCheckBoxs()}
                </p>
                <button onClick={e => {
                    console.log(this.state);
                }}>获取state</button>
            </div>
        )
    }
}
