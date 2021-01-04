import axios from 'axios'
import Vue from 'vue';

//1.创建axios实例
const service = axios.create({//axios.create()返回的是Promise
    //baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://127.0.0.1:8001',
    timeout: 5000
})
//2.axios的拦截器
//全局拦截axios.interceptors

//实例请求拦截器
service.interceptors.request.use(
    config => {//请求成功后回调，参数就是我们请求的参数
        //console.log(config);
        return config;//此是将config拦截 然后加工 最终一定要返回出去 要不然此次请求就真的被拦截了!
    }, err => {
        //console.log(err);
    })


//实例响应拦截
service.interceptors.response.use(res => {
    //console.log(res);
    //return res.data;
}, err => {
    //console.log(err);
    //return err;//此处 返回err之后仍然会到then 里面

    alert("服务异常!!!")

})

export default service