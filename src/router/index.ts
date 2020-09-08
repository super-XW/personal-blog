
import { createRouter, createWebHistory } from 'vue-router'

import Layout from "../view/layout/index.vue"

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由的模式
    history: createWebHistory(),
    // 路由地址
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: () => import('../view/home/index.vue'),
                    name: 'Home',
                },
                {
                    path: "/jottings",  // <-- notice the colon
                    name: "Jottings",
                    component: () => import("../view/jottings/index.vue"),
                },
                {
                    path: "/me",  // <-- notice the colon
                    name: "Me",
                    component: () => import("../view/me/index.vue"),
                },
                {
                    path: "/message",  // <-- notice the colon
                    name: "Message",
                    component: () => import("../view/message/index.vue"),
                },
                {
                    path: "/record",  // <-- notice the colon
                    name: "Record",
                    component: () => import("../view/record/index.vue"),
                },
                {
                    path: "/technology",  // <-- notice the colon
                    name: "Technology",
                    component: () => import("../view/technology/index.vue"),
                },
                {
                    path: "/edit",  // <-- notice the colon
                    name: "Edit",
                    component: () => import("../view/edit/index.vue"),
                },
            ]
        }
    ]
})