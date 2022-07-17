export default {
  title: false,
  proxy: {
    '/api': {
      target: 'http://api.duyiedu.com',
      changeOrigin: true,
    },
  },
  // exportStatic: { htmlSuffix: true },
  // base: '/umi',
};
