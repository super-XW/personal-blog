//引入axios
import axios from 'axios'

let cancel: any, promiseArr = {}


//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    console.log(response,"请求返回信息");
    return response
}, error => {
    if (error) {

    } else {

    }

})
axios.defaults.baseURL = 'http://www.iamnotsalted.com'
//设置默认请求头
axios.defaults.headers = {
}
// 请求超时时间
axios.defaults.timeout = 10000

export default {
    //get请求
    get(url: string, param: object) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post(url: string, param: object) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,

            }).then(res => {
                resolve(res)
            })
        })
    }
}