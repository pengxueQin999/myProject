import axios from 'axios'
axios.defaults.baseURL="http://localhost:2888";

//=================请求拦截================
axios.interceptors.request.use(
//把token添加到header中
    config=>{
        return config
    },
    error=>{
        return Promise.reject((error));
    }

);


// ================相应拦截==========
axios.interceptors.response.use((config)=>{
// 将服务器返回的token值储存
    return config;
});
export default axios