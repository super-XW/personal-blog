//引入axios
import axios from 'axios'

let cancel:any, promiseArr = {}
const CancelToken = axios.CancelToken;


//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error ) {
        
    } else {
        
    }
    
})

axios.defaults.baseURL = '/api'
//设置默认请求头
axios.defaults.headers = {
}
axios.defaults.timeout = 10000

export default {
    //get请求
    get(url:string, param:object) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post(url:string, param:object) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    }
}