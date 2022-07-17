import { searchStudents } from '../../../services/student'


export const actionTypes = {
    setStudentsAndTotal: "setStudentsAndTotal",//Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

export function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

export function setLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

//使用 redux-thunk
// export function fetchStudent() {
//     return async function (dispatch, getState) {
//         dispatch(setLoading(true));
//         const { student: { searchCondition: condition } } = getState();
//         const res = await searchStudents(condition);
//         dispatch(setStudentsAndTotal( res.datas, res.cont ));
//         dispatch(setLoading(false));
//     }
// }

//使用redux-promise 返回一个promise resove的值是一个action
export function fetchStudent() {
    return new Promise((resolve => {
        setTimeout(() => {
            const arr = [{ id: '0001', name: 'rico' }];
            const action = setStudentsAndTotal(arr, arr.length);
            resolve(action);
        }, 3000);
    }))
}


//使用redux-promise 使用es7语法  返回的值是一个action 其实与promise一样 只是写法不同
// export async function fetchStudent(condition) {
//     const res = await searchStudents(condition);
//     return setStudentsAndTotal( res.datas, res.cont );
// }


//使用redux-promise 返回一个标准的action,但是payload 是一个promise【此时type必须是字符串，因为它遵循了flux标准(type类型为string)】
// export  function fetchStudent(condition) {
//     // const res = await searchStudents(condition);
//     // return setStudentsAndTotal( res.datas, res.cont );
//     return {
//         type: actionTypes.setStudentsAndTotal,
//         payload: new Promise((resolve) => {
//             setTimeout(() => {
//                 const arr = [{ id: '0001', name: 'rico' }];
//                 resolve({ datas: arr, total: arr.length });
//             }, 3000)
//         })
//     }
// }

//使用redux-promise 返回一个标准的action,但是payload 是一个promise 使用es7语法
// export function fetchStudent(condition) {
//     return {
//         type: actionTypes.setStudentsAndTotal,
//         payload: searchStudents(condition).then(res => { return { datas: res.datas, total: res.cont } })
//     }
// }

//使用redux-promise 返回一个标准的action,但是payload 是一个promise
// export function fetchStudent(condition) {
//     return {
//         type: actionTypes.setStudentsAndTotal,
//         payload:( async () => {
//             const res = await searchStudents(condition);
//             return { datas: res.datas, total: res.cont } ;
//           } )()
//     }
// }

