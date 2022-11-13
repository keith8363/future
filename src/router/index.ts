import { createRouter, createWebHashHistory } from "vue-router";
import getPageTitle from "@/utils/get-page-title";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { constantRoutes } from "./constantRoutes";
import asyncRoutes from "./asyncRoutes";
import { useUserStore } from "@/stores/modules/user";
import { ElNotification } from "element-plus";
// import { storeToRefs } from "pinia";

nProgress.configure({
  showSpinner: false,
});

const allRoutes = constantRoutes.concat(asyncRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
});

router.beforeEach((to, from, next) => {
  nProgress.start();

  const user = useUserStore();

  const token: string | null = user.token;
  if (token) {
    if (to.path === "/login") {
      next("/");
    } else {
      document.title = getPageTitle(to.meta.title);
      next();
    }
  } else {
    if (to.path !== "/login") {
      next("/login");
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  nProgress.done(true);
});

router.onError((error) => {
  nProgress.done();
  ElNotification.error({
    title: "路由错误",
    message: error.message,
  });
});

export default router;
