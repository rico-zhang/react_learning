import React from 'react'
import Layout from '../components/layout/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menus from '../components/Menus';
import {Route} from 'react-router-dom';
import CourseAdd from './pageComponents/CourseAdd';
import CourseList from './pageComponents/CourseList';
import StudentAdd from './pageComponents/StudentAdd';
import StudentList from './pageComponents/StudentList';
import Welcome from './pageComponents/Welcome';

export default function Admin() {
    return (
        <Layout header={<Header />} footer={<Footer />} menus={<Menus />}>
            <Route path='/' exact component={Welcome}></Route>
            <Route path='/course/add' component={CourseAdd}></Route>
            <Route path='/course/list' component={CourseList}></Route>
            <Route path='/student/add' component={StudentAdd}></Route>
            <Route path='/student/list' component={StudentList}></Route>
        </Layout>
    )
}
