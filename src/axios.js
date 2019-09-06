import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    config.params = {
        ...config.params,
        appkey: '13502458561_1554472579275'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
 
 export default axios;