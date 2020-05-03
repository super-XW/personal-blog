import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexHome from '../views/IndexHome.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/bodyMain',
    name: 'IndexHome',
    component: IndexHome,
    children:[
      {
        path:'/bodyMain',
        name:'BodyMain',
        component: () => import('../components/main/index.vue')
      },{
        path:'/guanyu',
        name:'GuanYu',
        component: () => import('../views/guanyu.vue')
      },
      {
        path:'/articleDetail',
        name:'ArticleDetail',
        component:() => import ('../views/ArticleDetail.vue')
      },
      {
        path:'/growup',
        name:'GrowUp',
        component:() => import ('../views/GrowUp.vue')
      },
      {
        path:'/learn',
        name:'Learn',
        component:() => import ('../views/Learn.vue')
      },
      {
        path:'/recreation',
        name:'Recreation',
        component:() => import ('../views/Recreation.vue')
      },
      {
        path:'/not',
        name:'Not',
        component:() => import ('../views/Not.vue')
      }
    ]
  },
  
  {
    path:'/editor',
    name:'Editor',
    component:() => import ('../views/Editor.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
