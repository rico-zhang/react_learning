import React from 'react';
import { connect } from 'umi';
import StudentSearchBar from './StudentSearchBar';
import StudentTable from './StudentTable';
import Pager from './Pager/Pager';
import Modal from './Modal';

function studentSearchBarMap() {
  function mapStateToProps(state) {
    const searchCondition = state.students.condition;
    return {
      search: searchCondition.key,
      sex: searchCondition.sex,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      onSearch: (key, sex) => {
        dispatch({
          type: 'students/setCondition',
          payload: {
            key,
            sex,
            page: 1,
          },
        });
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
      stus: state.students.result.datas,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {};
  }
  return [mapStateToProps, mapDispatchToProps];
}

const StuentTableConnect = connect(...studentTableMap())(StudentTable);

function paperMap() {
  function mapStateToProps(state) {
    const searchCondition = state.students.condition;
    const searchResult = state.students.result;
    return {
      current: searchCondition.page,
      total: searchResult.total,
      limit: searchCondition.limit,
      panelNumber: 5,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      onPageChange: function (page) {
        dispatch({
          type: 'students/setCondition',
          payload: {
            page,
          },
        });
      },
    };
  }
  return [mapStateToProps, mapDispatchToProps];
}

const PagerConnect = connect(...paperMap())(Pager);

const StudentModal = (props) => {
  return <Modal show={props.show}>加载中...</Modal>;
};
function studentModalMap() {
  function mapStateToProps(state) {
    return {
      show: state.loading.models.students,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {};
  }
  return [mapStateToProps, mapDispatchToProps];
}

const StudentModalConnect = connect(...studentModalMap())(StudentModal);

export default function Student() {
  return (
    <>
      <StudentSearchBarConnect />
      <StuentTableConnect />
      <PagerConnect />
      <StudentModalConnect />
    </>
  );
}
