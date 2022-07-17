import Mock from 'mockjs';

const result = Mock.mock({
  msg: '查询成功',
  status: 'success',
  'data|10': [
    {
      name: '@cname',
      arrdress: '@city',
      appkey: /demo\d{2}_\d{10}/,
      'birth|1980-2000': 0,
      'ctime|1554049417-1564049417': 0,
      email: '@email',
      'id|+1': 1,
      phone: /1\d{10}/,
      sNo: /\d{5}/,
      'sex|1': [0, 1],
      'utime|1554049417-1564049417': 0,
    },
  ],
});
export default {
  'GET /api/student/findAll': result,
};
