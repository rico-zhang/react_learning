import React, { useState, useEffect } from 'react'
import StudentSearchBar from '../../components/StudentSearchBar';
import StudentTable from '../../components/StudentTable/index';
import Pager from '../../components/Pager/Pager';
import { getAllStudents, getStudents, searchStudents } from '../../services/student';
import queryString from 'query-string';

function getQueryParams(urlSearch) {
    const queryDefault = {
        page: 1,
        limit: 10,
        key: '',
        sex: -1
    }
    let params = queryString.parse(urlSearch);
    params = { ...queryDefault, ...params };
    params.sex = parseInt(params.sex);
    params.page = parseInt(params.page);
    params.limit = parseInt(params.limit);
    return params;

}

function setQueryParams(urlParams, history) {
    console.log(urlParams);
    history.push('?' + queryString.stringify(urlParams));
}

function useStudents(params) {
    const [resp, setResp] = useState({ cont: 0, datas: [] });
    // useEffect(() => {
    //     (async () => {
    //         const stus = await getAllStudents();
    //         setResp(stus);
    //     })()
    // })
    useEffect(() => {
        searchStudents({ ...params }).then((resp => {
            setResp(resp);
        }))
    }, [params.page, params.limit, params.key, params.sex]);
    return resp;
}

export default function StudentList(props) {
    const urlParams = getQueryParams(props.location.search);
    const resp = useStudents(urlParams);
    console.log(resp);
    const onSearch = (search, sex) => {
        setQueryParams({
            ...urlParams,
            key: search,
            sex: sex,
            page: 1
        }, props.history);
    }
    return (
        <div>
            学生列表
            <StudentSearchBar sex={0} search={"123"} onSearch={onSearch}></StudentSearchBar>
            <StudentTable stus={resp.datas}></StudentTable>
            <Pager current={urlParams.page} total={resp.cont} limit={urlParams.limit} panelNumber={5}
                onPageChange={
                    (page) => {
                        setQueryParams({
                            ...urlParams,
                            page:page,
                        }, props.history);
                    }
                } />
        </div>
    )
}
