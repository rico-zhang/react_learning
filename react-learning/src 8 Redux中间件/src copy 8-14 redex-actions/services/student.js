const appkey = "demo13_1545210570249";
const  BASE_URL="http://api.duyiedu.com"

export async function getAllStudents() {
    return await fetch(BASE_URL+'/api/student/findAll?appkey=' + appkey)
        .then(resp => resp.json())
        .then(res => res.data)
}

export async function getStudents(page = 1, limit = 10) {
    return await fetch(BASE_URL+`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json())
        .then(res => res.data)
}

export async function searchStudents({ page = 1, limit = 10, key = '', sex = -1 } = {}) {
    if(key){
        //搜索
        const resp= await fetch(BASE_URL+`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
        .then(resp => resp.json())
        .then(res => res.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    }else{
        //忽略性别 查询全部
        const resp= await getStudents(page,limit);
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
  
}