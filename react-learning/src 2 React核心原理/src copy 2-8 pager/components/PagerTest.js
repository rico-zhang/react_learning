import React, { Component } from 'react'
import Pager from "./Pager"
import StudentList from "./StudentList";
import Modal from "./Modal";
export default class PagerTest extends Component {
    state = {
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        studentList: [],
        loading: false
    };
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.getStudentList();
    }
    


    async getStudentList() {
        this.setState({
            loading: true
        })
        const url = `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`;
        const data = await fetch(url)
            .then(resp => resp.json())
            .then(resp => resp.data);
        this.setState({
            studentList: data.findByPage,
            total: data.cont,
            loading: false
        })
    }
    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        }, () => {
            this.getStudentList();
        });
    }
    render() {
        return (
            <div className="container">
                <StudentList stus={this.state.studentList} />
                <Pager  {...this.state} onPageChange={this.handlePageChange} />
                <Modal show={this.state.loading}></Modal>
            </div>

        )
    }
}
