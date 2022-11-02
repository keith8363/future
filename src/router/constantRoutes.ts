import {RouteRecordRaw}from 'vue-router'

const Layout = () => import('@/layout/index.vue')

export const constantRoutes:RouteRecordRaw[]=[
  //基础路由规则
  {
    path: "/",
    component:Layout,
    children:[
      {
        path:'/',
        name:'home',
        meta: { title: '首页'},
        component:()=>import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: "/404",
    component:Layout,
    children:[
      {
        path:'',
        name:'404',
        component:()=>import('@/views/404/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录',hidden:true},
    component: () => import('@/views/login/index.vue')
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
]