import React from "react";
import { connect, connectAdvanced } from "react-redux";
// import { connect } from '../react-redux'
import StudentSearchBar from "./StudentSearchBar";
import StudentTable from "./StudentTable";
import Pager from "./Pager/Pager";
import Modal from "./Modal";
import { change as changeSearch } from "../store/action/student/searchCondition";
import { fetchStudents } from "../store/action/student/searchResult";
import store from "../store";

function studentSearchBarMap() {
  function mapStateToProps(state) {
    const searchCondition = state.student.searchCondition;
    return {
      search: searchCondition.key,
      sex: searchCondition.sex,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      onSearch: (key, sex) => {
        dispatch(changeSearch({ key, sex, page: 1 }));
        dispatch(fetchStudents());
      },
    };
  }
  return [mapStateToProps, mapDispatchToProps];
}

const StudentSearchBarConnect = connect(...studentSearchBarMap())(
  StudentSearchBar
);

function studentTableMap() {
  function mapStateToProps(state) {
    return {
      stus: state.student.searchResult.datas,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {};
  }
  return [mapStateToProps, mapDispatchToProps];
}

const StuentTableConnect = connect(...studentTableMap())(StudentTable);

//连接 Pager
function selectorFactory(dispatch) {
  return function (state, ownProps) {
    return {
      current: state.students.condition.page,
      total: state.students.result.total,
      limit: state.students.condition.limit,
      panelNumber: 5,
      onPageChange: (newPage) => {
        dispatch(changeSearch({ page: newPage }));
        dispatch(fetchStudents());
      },
    };
  };
}
const PagerConnect = connectAdvanced(selectorFactory)(Pager);

const StudentModal = (props) => {
  return <Modal show={props.show}>加载中...</Modal>;
};
function studentModalMap() {
  function mapStateToProps(state) {
    return {
      show: state.student.searchResult.isLoading,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {};
  }
  return [mapStateToProps, mapDispatchToProps];
}

const StudentModalConnect = connect(...studentModalMap())(StudentModal);

export default function Student() {
  React.useEffect(() => {
    store.dispatch(fetchStudents());
  }, []);
  return (
    <>
      <StudentSearchBarConnect />
      <StuentTableConnect />
      <PagerConnect />
      <StudentModalConnect />
    </>
  );
}
