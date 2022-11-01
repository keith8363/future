import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router";
import getPageTitle from "@/utils/get-page-title";

const Layout = () => import('@/layout/index.vue')



const constantRoutes:RouteRecordRaw[]=[
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

const asyncRoutes:RouteRecordRaw[]=[]

const allRoutes = constantRoutes.concat(asyncRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes:allRoutes
});

router.beforeEach((to,from,next)=>{
  const token:string|null = localStorage.getItem('token')
  if(!token && to.path !== '/login'){
    next('/login')
  }else{
    document.title = getPageTitle(to.meta.title)
    next()
  }
})


export default router;