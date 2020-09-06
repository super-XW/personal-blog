
import { createRouter, createWebHistory } from 'vue-router'


// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHistory(),
    // 路由地址
    routes: [
        {
            path:"/",
            component:() => import("../view/layout/index.vue")
        }
    ]
})