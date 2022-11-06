import { createRouter, createWebHashHistory } from "vue-router";
import getPageTitle from "@/utils/get-page-title";
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {constantRoutes} from './constantRoutes'
import {asyncRoutes} from './asyncRoutes'
import {useUserStore} from '@/stores/modules/user'
import { storeToRefs } from 'pinia'

nProgress.configure({
  showSpinner: false
})

const allRoutes = constantRoutes.concat(asyncRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes:allRoutes
});

router.beforeEach((to,from,next)=>{
  const user = useUserStore()
  
  const token:string|null = user.token
  if(token && to.path !== '/login'){
    nProgress.start()
    next('/login')
  }else{
    document.title = getPageTitle(to.meta.title)
    nProgress.start()
    next()
  }
})

router.afterEach(()=>{
  nProgress.done(true)
})


export default router;